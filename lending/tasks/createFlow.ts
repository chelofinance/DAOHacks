import {Framework} from "@superfluid-finance/sdk-core";
import {task} from "hardhat/config";

task("flow", "Add member to tanda")
  .addParam("supertoken", "supertoken address")
  .addParam("token", "token address")
  .addParam("flowrate", "flowrate")
  .addParam("recipient", "recipient")
  .addParam("amount", "recipient")
  .setAction(async (taskArgs, hardhat) => {
    const {supertoken, flowrate, recipient, token, amount} = taskArgs;
    const {ethers, network} = hardhat;
    const tokenContract = (await ethers.getContractFactory("MockToken")).attach(token);

    console.log("APPROVE", amount);
    await tokenContract.approve(supertoken, amount);

    console.log("CREATE");
    const sf = await Framework.create({
      networkName: network.name,
      provider: hardhat.ethers,
      dataMode: "WEB3_ONLY",
    });
    console.log("SIGNER", {amount});
    const signer = sf.createSigner({
      privateKey: process.env.PRIVATE_KEY,
      provider: ethers.provider,
    });
    const SuperToken = await sf.loadSuperToken(supertoken);
    const upgradeOperation = SuperToken.upgrade({
      amount: amount.toString(),
    });
    console.log("UPGRADETX");
    const upgradeTxn = await upgradeOperation.exec(signer);
    await upgradeTxn.wait();

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
