import {task} from "hardhat/config";
import {createWrapper, encodeActCall, exec} from "../utils/aragon";
import {getNetworkConfig} from "../utils/network";

task("addtanda", "Add member to tanda")
  .addParam("agent", "agent address")
  .addParam("dao", "dao name")
  .addParam("member", "new member")
  .addParam("tanda", "tanda address")
  .setAction(async (taskArgs, hardhat) => {
    const {agent, member, tanda, dao} = taskArgs;
    const {web3, network} = hardhat;

    const curNetwork = getNetworkConfig(network.name as any); //network config
    const wrapper = await createWrapper(`${dao}.aragonid.eth`, curNetwork.addresses.ensRegistry, {
      ipfsConf: (curNetwork as any).apm.ipfs,
      provider: web3.currentProvider,
      accounts: await web3.eth.getAccounts(),
    } as any);

    const callData = encodeActCall("toggleMember(address,bool)", [member, true]);

    const {transactionPath} = await exec({
      app: agent,
      method: "execute",
      params: [tanda, 0, callData],
      wrapper,
    } as any);

    await web3.eth.sendTransaction(transactionPath);
    console.log("SUCCESS");
  });
