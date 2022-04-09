import {ethers, network} from "hardhat";
import {writeJsonFile} from "../utils";

const CONFIG = {
  rinkeby: {
    daoFactory: "0x89d87269527495ac29648376d4154ba55c4872fc",
    ens: "0x98df287b6c145399aaa709692c8d308357bc085d",
    miniMeFactory: "0x6ffeb4038f7f077c4d20eaf1706980caec31e2bf",
    IFIFSResolvingRegistrar: "0x3665e7bfd4d3254ae7796779800f5b603c43c60d",
  },
};

async function main(): Promise<void> {
  const config = CONFIG[network.name];
  const membershipTemplate = await (
    await ethers.getContractFactory("MembershipTemplate")
  ).deploy(config.daoFactory, config.ens, config.miniMeFactory, config.IFIFSResolvingRegistrar);
  const tandaDaoFactory = await (
    await ethers.getContractFactory("CreateTandaDAO")
  ).deploy(membershipTemplate.address);

  writeJsonFile({
    path: `addresses.${network.name}.json`,
    data: {
      membershipTemplate: membershipTemplate.addresses,
      tandaDaoFactory: tandaDaoFactory.addresses,
    },
  });
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
