/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IFeed,
  IFeedInterface,
} from "../../../../@aragon/ppf-contracts/contracts/IFeed";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "base",
        type: "address",
      },
      {
        name: "quote",
        type: "address",
      },
    ],
    name: "get",
    outputs: [
      {
        name: "xrt",
        type: "uint128",
      },
      {
        name: "when",
        type: "uint64",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "ratePrecision",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
];

export class IFeed__factory {
  static readonly abi = _abi;
  static createInterface(): IFeedInterface {
    return new utils.Interface(_abi) as IFeedInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IFeed {
    return new Contract(address, _abi, signerOrProvider) as IFeed;
  }
}
