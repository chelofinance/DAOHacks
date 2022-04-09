import {ethers, network} from "hardhat";
import {writeJsonFile} from "../utils";
import CONFIG from "../utils/constants";

async function main(): Promise<void> {
  const config = CONFIG[network.name as keyof typeof CONFIG];
  const superTokenFactory = (await ethers.getContractFactory("SuperTokenFactory")).attach(
    config.superTokenFactory
  );

  const superTokenAddress = await superTokenFactory.callStatic.createSuperTokenLogic(config.host);
  await superTokenFactory.createSuperTokenLogic(config.host);

  writeJsonFile({
    path: `/addresses.${network.name}.json`,
    data: {
      token: superTokenAddress,
    },
  });
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
