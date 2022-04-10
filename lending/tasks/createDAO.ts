import {task} from "hardhat/config";
import {loadJsonFile} from "../utils";
import CONFIG from "../utils/constants";

task("dao", "Create bullet loan")
  .addParam("daoname", "dao ens name")
  .addParam("members", "members of the dao")
  .addParam("voting", "voting settings [supportRequired, minAcceptanceQuorum, voteDuration]")
  .setAction(async (taskArgs, hardhat) => {
    const {daoname, members, voting} = taskArgs;
    const {ethers, network} = hardhat;
    const {host, cfa} = CONFIG[network.name as keyof typeof CONFIG];
    const addresses = loadJsonFile(`/addresses.${network.name}.json`);

    const tandaDaoFactory = (await ethers.getContractFactory("CreateTandaDAO")).attach(
      addresses.tandaDaoFactory
    );
    const [support, quorum, duration] = voting.split(",");

    const tx = await tandaDaoFactory.createTandaDAO(
      daoname,
      members.split(","),
      [`${quorum}0000000000000000`, `${support}0000000000000000`, Number(duration) * 3600],
      host,
      cfa,
      addresses.token
    );
    const result = await tx.wait();
    console.log(result);
    console.log("SUCCESS");
  });
