/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ApproveAndCallFallBack,
  ApproveAndCallFallBackInterface,
} from "../../../../../@aragon/apps-shared-minime/contracts/MiniMeToken.sol/ApproveAndCallFallBack";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
      {
        name: "_token",
        type: "address",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "receiveApproval",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ApproveAndCallFallBack__factory {
  static readonly abi = _abi;
  static createInterface(): ApproveAndCallFallBackInterface {
    return new utils.Interface(_abi) as ApproveAndCallFallBackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ApproveAndCallFallBack {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ApproveAndCallFallBack;
  }
}
