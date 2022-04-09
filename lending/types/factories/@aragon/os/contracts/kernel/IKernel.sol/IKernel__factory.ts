/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IKernel,
  IKernelInterface,
} from "../../../../../../@aragon/os/contracts/kernel/IKernel.sol/IKernel";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "getRecoveryVault",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "token",
        type: "address",
      },
    ],
    name: "allowRecoverability",
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
  {
    constant: false,
    inputs: [
      {
        name: "token",
        type: "address",
      },
    ],
    name: "transferToVault",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "namespace",
        type: "bytes32",
      },
      {
        name: "appId",
        type: "bytes32",
      },
      {
        name: "app",
        type: "address",
      },
    ],
    name: "setApp",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "namespace",
        type: "bytes32",
      },
      {
        name: "appId",
        type: "bytes32",
      },
    ],
    name: "getApp",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "acl",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
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
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "vault",
        type: "address",
      },
      {
        indexed: true,
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RecoverToVault",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "namespace",
        type: "bytes32",
      },
      {
        indexed: true,
        name: "appId",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "app",
        type: "address",
      },
    ],
    name: "SetApp",
    type: "event",
  },
];

export class IKernel__factory {
  static readonly abi = _abi;
  static createInterface(): IKernelInterface {
    return new utils.Interface(_abi) as IKernelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKernel {
    return new Contract(address, _abi, signerOrProvider) as IKernel;
  }
}
