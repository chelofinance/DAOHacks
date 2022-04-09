/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IEVMScriptRegistry,
  IEVMScriptRegistryInterface,
} from "../../../../../@aragon/os/contracts/evmscript/IEVMScriptRegistry";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "script",
        type: "bytes",
      },
    ],
    name: "getScriptExecutor",
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
    constant: false,
    inputs: [
      {
        name: "executorId",
        type: "uint256",
      },
    ],
    name: "disableScriptExecutor",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "executor",
        type: "address",
      },
    ],
    name: "addScriptExecutor",
    outputs: [
      {
        name: "id",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IEVMScriptRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IEVMScriptRegistryInterface {
    return new utils.Interface(_abi) as IEVMScriptRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IEVMScriptRegistry {
    return new Contract(address, _abi, signerOrProvider) as IEVMScriptRegistry;
  }
}
