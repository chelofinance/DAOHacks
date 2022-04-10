import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

import {getContract} from "@helpers/contracts";

export type BN = ReturnType<typeof Web3.utils.toBN>;

export type ContractArguments = {
  symbol: string;
  name: string;
  decimals: string;
  initialSupply: string;
  maxSupply: string;
  burnable: boolean;
  mintable: boolean;
  pausable: boolean;
  cappable: boolean;
};

export const toBN = Web3.utils.toBN;

export const getWeb3 = (url?: string) => {
  return new Web3(url || (window.ethereum as any));
};

export const connectMetamask = async () => {
  await (window.ethereum as any).request({method: "eth_requestAccounts"});
};

export const isWeb3Enabled = async () => {
  const provider = await detectEthereumProvider();
  if (provider) return provider;
  return null;
};


export const approveERC1155 = async (args: {
  contract: string;
  amount: string;
  id: string;
  target: string;
}) => {
  const contract = getContract("Mock1155", args.contract);

  await contract.methods
    .setApprovalForAll(args.target, true)
    .send({from: (window as any).ethereum.selectedAddress});
};

export const approveERC20 = async (args: {
  amount: string;
  target: string;
  contract: string;
}) => {
  const token = getContract("Mock20", args.contract);

  await token.methods
    .approve(args.target, args.amount)
    .send({from: (window as any).ethereum.selectedAddress});
};

export const approveERC721 = async (args: {
  id: string;
  target: string;
  contract: string;
}) => {
  const assetWrapper = getContract("AssetWrapper", args.contract);

  await assetWrapper.methods
    .approve(args.target, args.id)
    .send({from: (window as any).ethereum.selectedAddress});
};


