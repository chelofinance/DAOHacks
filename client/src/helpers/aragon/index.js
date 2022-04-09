import Aragon, {ensResolve} from "@aragon/wrapper";
import {asyncScheduler} from "rxjs";
import {takeWhile, filter, first, throttleTime} from "rxjs/operators";
import Web3 from "web3";

import {getWeb3, toBN} from "../index";
import {getContract} from "../contracts";
import {getNetworkConfig} from "../network";

const abi = require("web3-eth-abi");

const addressesEqual = (first, second) => {
  first = first && first.toLowerCase();
  second = second && second.toLowerCase();
  return first === second;
};

const subscribe = (wrapper, {onApps, onForwarders, onTransaction, onPermissions}) => {
  const {apps, forwarders, transactions, permissions} = wrapper;

  const subscriptions = {
    apps: apps.subscribe(onApps),
    connectedApp: null,
    forwarders: forwarders.subscribe(onForwarders),
    transactions: transactions.subscribe(onTransaction),
    permissions: permissions.subscribe(onPermissions),
  };

  return subscriptions;
};

export async function resolveEnsDomain(domain, opts) {
  try {
    return await ensResolve(domain, opts);
  } catch (err) {
    if (err.message === "ENS name not defined.") {
      return "";
    }
    throw err;
  }
}

export const exec = async ({app, method, params, wrapper}) => {
  const transactionPath = (await getTransactionPath(app, method, params, wrapper))[0];

  if (!transactionPath) throw new Error("Cannot find transaction path for executing action");

  return {
    transactionPath,
  };
};

let wrapper;

export async function createWrapper(dao, ensRegistryAddress, options) {
  const {
    provider,
    accounts,
    ipfsConf,
    onApps,
    onForwarders,
    onTransaction,
    onDaoAddress,
    onPermissions,
  } = options || {};
  const isDomain = (dao) => /[a-z0-9]+\.eth/.test(dao);

  const daoAddress = isDomain(dao)
    ? await resolveEnsDomain(dao, {
      provider,
      registryAddress: ensRegistryAddress,
    })
    : dao;

  if (!daoAddress) {
    throw new Error("The provided DAO address is invalid");
  }

  onDaoAddress && onDaoAddress(daoAddress);

  const nxtWrapper = new Aragon(daoAddress, {
    provider,
    apm: {
      ipfs: ipfsConf,
      ensRegistryAddress,
    },
  });

  try {
    await nxtWrapper.init({accounts: {providedAccounts: accounts}});
  } catch (err) {
    if (err.message === "connection not open") {
      throw new Error("The wrapper cannot be initialized without a connection");
    }
    throw err;
  }

  const subscriptions = subscribe(nxtWrapper, {
    onApps,
    onForwarders,
    onTransaction,
    onPermissions,
  });

  nxtWrapper.cancel = () => {
    Object.values(subscriptions).forEach((subscription) => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  };

  return nxtWrapper;
}

export const setWrapper = (_wrapper) => {
  wrapper = _wrapper;
};

export const getWrapper = () => wrapper;

export async function getApps(wrapper) {
  return (
    wrapper.apps
      // If the app list contains a single app, wait for more
      .pipe(takeWhile((apps) => apps.length <= 1, true))
      .toPromise()
  );
}

export async function getTransactionPath(appAddress, method, params, wrapper) {
  // Wait for app info to load
  const apps = await wrapper.apps
    .pipe(
      // If the app list contains a single app, wait for more
      filter((apps) => apps.length > 1),
      throttleTime(3000, asyncScheduler, {trailing: true}),
      first()
    )
    .toPromise();
  console.log("APPS", {apps});

  if (!apps.some((app) => addressesEqual(appAddress, app.proxyAddress))) {
    throw new Error(`Can't find app ${appAddress}.`);
  }

  // If app is the ACL, call getACLTransactionPath
  return appAddress === wrapper.aclProxy.address
    ? wrapper.getACLTransactionPath(method, params)
    : wrapper.getTransactionPath(appAddress, method, params);
}

export const encodeActCall = (signature, params) => {
  const sigBytes = abi.encodeFunctionSignature(signature);

  const types = signature.replace(")", "").split("(")[1];

  // No params, return signature directly
  if (types === "") {
    return sigBytes;
  }

  const paramBytes = abi.encodeParameters(types.split(","), params);

  return `${sigBytes}${paramBytes.slice(2)}`;
};

export const giveAgentPermissions = async (args) => {
  const web3 = getWeb3();
  const wrapper = getWrapper();
  const kernel = getContract("Kernel", args.dao);

  const events = (
    await kernel.getPastEvents("NewAppProxy", {
      fromBlock: await kernel.methods.getInitializationBlock().call(),
      toBlock: "latest",
    })
  ).map((event) => ({
    proxyAddress: event.returnValues.proxy,
    appId: event.returnValues.appId,
  }));

  const agent = events
    .reverse()
    .find(
      ({appId}) => appId === "0x9ac98dc5f995bf0211ed589ef022719d1487e5cb2bab505676f0d084c07cf89a"
    )?.proxyAddress;

  const {transactionPath} = await exec({
    app: args.acl,
    method: "createPermission",
    params: [args.voting, agent, Web3.utils.keccak256(args.role), args.voting],
    wrapper,
  });

  await web3.eth.sendTransaction(transactionPath);
};

export const getDaoMembers = async (args) => {
  const voting = getContract("Voting", args.voting);
  const miniMe = getContract("MiniMeToken", await voting.methods.token().call());

  const events = (
    await miniMe.getPastEvents("Transfer", {
      fromBlock: await miniMe.methods.creationBlock().call(),
      toBlock: "latest",
    })
  ).map((event) => ({
    from: event.returnValues._from,
    to: event.returnValues._to,
    amount: event.returnValues._amount,
  }));

  const balancesMap = events.reduce((acc, cur) => {
    return {
      ...acc,
      [cur.to]: toBN(acc[cur.to] || 0).add(toBN(cur.amount)),
      [cur.from]:
        toBN(cur.from).toString() === "0" ? "0" : toBN(acc[cur.from] || 0).sub(toBN(cur.amount)),
    };
  }, {});

  const mainHolders = Object.entries(balancesMap)
    .map((entry) => ({
      account: entry[0],
      value: entry[1].toString(),
    }))
    .sort((a, b) => {
      if (toBN(a.value).lt(toBN(b.value))) return 1;
      if (toBN(a.value).gt(toBN(b.value))) return -1;
      return 0;
    })
    .slice(0, 10);

  return mainHolders.filter(({account}) => toBN(account).toString() != "0");
};

export const isEnsDomain = async (args) => {
  const network = getNetworkConfig(args.network);
  const registryAddress = network.addresses.ensRegistry;

  try {
    return (
      (await resolveEnsDomain(args.daoName, {
        provider: getWeb3(network.nodes.defaultEth).currentProvider,
        registryAddress: registryAddress,
      })) || false
    );
  } catch (err) {
    return false;
  }
};
