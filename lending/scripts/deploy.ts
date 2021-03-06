import {ethers, network} from "hardhat";
import {writeJsonFile} from "../utils";
import CONFIG from "../utils/constants";

async function main(): Promise<void> {
  const config = CONFIG[network.name as keyof typeof CONFIG];
  const membershipTemplate = await (
    await ethers.getContractFactory("MembershipTemplate")
  ).deploy(config.daoFactory, config.ens, config.miniMeFactory, config.IFIFSResolvingRegistrar);
  const tandaDaoFactory = await (
    await ethers.getContractFactory("CreateTandaDAO")
  ).deploy(membershipTemplate.address);

  writeJsonFile({
    path: `/addresses.${network.name}.json`,
    data: {
      membershipTemplate: membershipTemplate.address,
      tandaDaoFactory: tandaDaoFactory.address,
    },
  });
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
