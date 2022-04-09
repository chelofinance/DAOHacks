const CONFIG = require("../utils/constants");
const fs = require("fs");

const loadJsonFile = (file) => {
  const root = require("app-root-path");
  const data = fs.readFileSync(root + file);
  return JSON.parse(data);
};

task("dao", "Create bullet loan")
  .addParam("daoname", "dao ens name")
  .addParam("members", "members of the dao")
  .addParam("voting", "voting settings [supportRequired, minAcceptanceQuorum, voteDuration]")
  .setAction(async (taskArgs, hardhat) => {
    const {daoname, members, voting} = taskArgs;
    const {ethers, network} = hardhat;
    const {host, cfa} = CONFIG[network.name];
    const addresses = loadJsonFile(`/addresses.${network.name}.json`);

    const tandaDaoFactory = (await ethers.getContractFactory("CreateTandaDAO")).attach(
      addresses.tandaDaoFactory
    );

    console.log("ARGS", daoname, members.split(","), voting.split(","), host, cfa, addresses.token);
    const tx = await tandaDaoFactory.createTandaDAO(
      daoname,
      members.split(","),
      voting.split(","),
      host,
      cfa,
      addresses.token
    );
    const result = await tx.wait();
    console.log(result);
    console.log("SUCCESS");
  });
