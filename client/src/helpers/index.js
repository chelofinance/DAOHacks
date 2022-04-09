import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

import {getContract} from "./contracts";

export const toBN = Web3.utils.toBN;

export const getWeb3 = (url) => {
  return new Web3(url || window.ethereum);
};

export const connectMetamask = async () => {
  await window.ethereum.request({method: "eth_requestAccounts"});
};

export const isWeb3Enabled = async () => {
  const provider = await detectEthereumProvider();
  if (provider) return provider;
  return null;
};

export const approveERC20 = async (args) => {
  const token = getContract("Mock20", args.contract);

  await token.methods
    .approve(args.target, args.amount)
    .send({from: window.ethereum.selectedAddress});
};
