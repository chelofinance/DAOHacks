/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ERCProxy,
  ERCProxyInterface,
} from "../../../../../../@aragon/os/contracts/lib/misc/ERCProxy";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "proxyType",
    outputs: [
      {
        name: "proxyTypeId",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "implementation",
    outputs: [
      {
        name: "codeAddr",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export class ERCProxy__factory {
  static readonly abi = _abi;
  static createInterface(): ERCProxyInterface {
    return new utils.Interface(_abi) as ERCProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERCProxy {
    return new Contract(address, _abi, signerOrProvider) as ERCProxy;
  }
}