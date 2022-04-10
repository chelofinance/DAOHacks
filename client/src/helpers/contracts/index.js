import {getWeb3} from "../index";
import Mock20 from "./Mock20.json";
import CreateTandaDAO from "./CreateTandaDAO.json";

export const Contracts = {
  Mock20,
  CreateTandaDAO,
};

export const getContract = (constructor, address) => {
  const web3 = getWeb3();
  return new web3.eth.Contract(Contracts[constructor].abi, address);
};
