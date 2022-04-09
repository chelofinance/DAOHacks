import {getWeb3} from "@helpers/index";
import Mock20 from "./Mock20.json";

export const Contracts = {
  Mock20,
};

export const getContract = (constructor, address) => {
  const web3 = getWeb3();
  return new web3.eth.Contract(Contracts[constructor].abi, address);
};
