import {getWeb3} from "../index";
import {getWrapper, encodeActCall, exec} from "../aragon";
import {getNetworkConfig} from "../network";
import {getContract} from "../contracts";

export const createTandaDAO = async (args) => {
  const {network, dao, members, support, quorum, duration} = args;
  const {addresses} = getNetworkConfig(network);
  const tandaDaoFactory = getContract("CreateTandaDAO", addresses.tandaDaoFactory);

  const tx = await tandaDaoFactory.methods
    .createTandaDAO(
      dao,
      members,
      [`${quorum}0000000000000000`, `${support}0000000000000000`, Number(duration) * 3600],
      addresses.host,
      addresses.cfa,
      addresses.token
    )
    .send({from: window.ethereum.selectedAddress});

  console.log("SUCCESS");
};

export const whitelistMember = async (args) => {
  const {agent, member, tanda, wrapper} = args;
  const web3 = getWeb3();
  const callData = encodeActCall("toggleMember(address,bool)", [member, true]);

  const {transactionPath} = await exec({
    app: agent,
    method: "execute",
    params: [tanda, 0, callData],
    wrapper,
  });

  console.log("whitelist");
  await web3.eth.sendTransaction(transactionPath);
  console.log("SUCCESS");
};
