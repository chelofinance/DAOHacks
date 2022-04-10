import {ethers} from "hardhat";
import {asyncScheduler} from "rxjs";
import {takeWhile, filter, first, throttleTime} from "rxjs/operators";
import Web3 from "web3";

import {getNetworkConfig} from "../network";

const Aragon = require("@aragon/wrapper").default;
const {ensResolve} = require("@aragon/wrapper");
const abi = require("web3-eth-abi");

const toBN = Web3.utils.toBN;

const addressesEqual = (first: string, second: string) => {
  first = first && first.toLowerCase();
  second = second && second.toLowerCase();
  return first === second;
};

const subscribe = (
  wrapper: InstanceType<typeof Aragon>,
  {
    onApps,
    onForwarders,
    onTransaction,
    onPermissions,
  }: Partial<Record<"onApps" | "onForwarders" | "onTransaction" | "onPermissions", Function>>
) => {
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

export async function resolveEnsDomain(domain: string, opts: any) {
  try {
    return await ensResolve(domain, opts);
  } catch (err: any) {
    if (err.message === "ENS name not defined.") {
      return "";
    }
    throw err;
  }
}

type ExecParams = {
  app: string;
  method: string;
  wrapper: InstanceType<typeof Aragon>;
  params: unknown[];
};

export const exec = async ({app, method, params, wrapper}: ExecParams) => {
  const transactionPath = (await getTransactionPath(app, method, params, wrapper))[0];

  if (!transactionPath) throw new Error("Cannot find transaction path for executing action");

  return {
    transactionPath,
  };
};

type GetWrapperOptions = {
  provider: InstanceType<typeof Web3>;
  gasPrice: string;
  accounts: string;
  ipfsConf: Object;
  onApps?: Function;
  onForwarders?: Function;
  onTransaction?: Function;
  onDaoAddress?: Function;
  onPermissions?: Function;
};

let wrapper: InstanceType<typeof Aragon>;

export async function createWrapper(
  dao: string,
  ensRegistryAddress: string,
  options?: GetWrapperOptions
) {
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
  const isDomain = (dao: string) => /[a-z0-9]+\.eth/.test(dao);

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
  } catch (err: any) {
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

export const setWrapper = (_wrapper: InstanceType<typeof Aragon>) => {
  wrapper = _wrapper;
};

export const getWrapper = () => wrapper;

export async function getApps(wrapper: InstanceType<typeof Aragon>) {
  return (
    wrapper.apps
      // If the app list contains a single app, wait for more
      .pipe(takeWhile((apps: unknown[]) => apps.length <= 1, true))
      .toPromise()
  );
}

export async function getTransactionPath(
  appAddress: string,
  method: string,
  params: unknown[],
  wrapper: InstanceType<typeof Aragon>
) {
  // Wait for app info to load
  const apps: any[] = await wrapper.apps
    .pipe(
      // If the app list contains a single app, wait for more
      filter((apps: unknown[]) => apps.length > 1),
      throttleTime(10000, asyncScheduler, {trailing: true}),
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

export const encodeActCall = (signature: string, params: unknown[]) => {
  const sigBytes = abi.encodeFunctionSignature(signature);

  const types = signature.replace(")", "").split("(")[1];

  // No params, return signature directly
  if (types === "") {
    return sigBytes;
  }

  const paramBytes = abi.encodeParameters(types.split(","), params);

  return `${sigBytes}${paramBytes.slice(2)}`;
};
