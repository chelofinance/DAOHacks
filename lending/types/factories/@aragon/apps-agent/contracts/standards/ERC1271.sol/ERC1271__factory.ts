/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ERC1271,
  ERC1271Interface,
} from "../../../../../../@aragon/apps-agent/contracts/standards/ERC1271.sol/ERC1271";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "ERC1271_INTERFACE_ID",
    outputs: [
      {
        name: "",
        type: "bytes4",
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
        name: "_hash",
        type: "bytes32",
      },
      {
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        name: "",
        type: "bytes4",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "ERC1271_RETURN_INVALID_SIGNATURE",
    outputs: [
      {
        name: "",
        type: "bytes4",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "ERC1271_RETURN_VALID_SIGNATURE",
    outputs: [
      {
        name: "",
        type: "bytes4",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export class ERC1271__factory {
  static readonly abi = _abi;
  static createInterface(): ERC1271Interface {
    return new utils.Interface(_abi) as ERC1271Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1271 {
    return new Contract(address, _abi, signerOrProvider) as ERC1271;
  }
}
