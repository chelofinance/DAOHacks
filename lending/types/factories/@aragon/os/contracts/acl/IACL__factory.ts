/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IACL,
  IACLInterface,
} from "../../../../../@aragon/os/contracts/acl/IACL";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "permissionsCreator",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "who",
        type: "address",
      },
      {
        name: "where",
        type: "address",
      },
      {
        name: "what",
        type: "bytes32",
      },
      {
        name: "how",
        type: "bytes",
      },
    ],
    name: "hasPermission",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export class IACL__factory {
  static readonly abi = _abi;
  static createInterface(): IACLInterface {
    return new utils.Interface(_abi) as IACLInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IACL {
    return new Contract(address, _abi, signerOrProvider) as IACL;
  }
}
