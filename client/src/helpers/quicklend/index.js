import {getWeb3} from "../index";
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
