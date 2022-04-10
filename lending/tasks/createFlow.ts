import {Framework} from "@superfluid-finance/sdk-core";
import {task} from "hardhat/config";

task("flow", "Add member to tanda")
  .addParam("supertoken", "supertoken address")
  .addParam("flowrate", "flowrate")
  .addParam("recipient", "recipient")
  .setAction(async (taskArgs, hardhat) => {
    const {supertoken, flowrate, recipient} = taskArgs;
    const {ethers, network} = hardhat;
    const sf = await Framework.create({
      networkName: network.name,
      provider: hardhat.ethers,
      dataMode: "WEB3_ONLY",
    });
    const signer = sf.createSigner({
      privateKey: process.env.PRIVATE_KEY,
      provider: ethers.provider,
    });

    const createFlowOperation = sf.cfaV1.createFlow({
      flowRate: flowrate,
      receiver: recipient,
      superToken: supertoken,
    });

    console.log("Creating your stream...");

    const result = await createFlowOperation.exec(signer);
    console.log(result);
    console.log("SUCCESS");
  });
