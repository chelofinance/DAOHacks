/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IKernelEvents,
  IKernelEventsInterface,
} from "../../../../../../@aragon/os/contracts/kernel/IKernel.sol/IKernelEvents";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
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

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603580601d6000396000f3006080604052600080fd00a165627a7a723058200f9c5221e11fb5a593b90980fc5cc2a1e6feff7041cd2930d7d31f0cf54e302d0029";

type IKernelEventsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IKernelEventsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IKernelEvents__factory extends ContractFactory {
  constructor(...args: IKernelEventsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IKernelEvents> {
    return super.deploy(overrides || {}) as Promise<IKernelEvents>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): IKernelEvents {
    return super.attach(address) as IKernelEvents;
  }
  override connect(signer: Signer): IKernelEvents__factory {
    return super.connect(signer) as IKernelEvents__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IKernelEventsInterface {
    return new utils.Interface(_abi) as IKernelEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKernelEvents {
    return new Contract(address, _abi, signerOrProvider) as IKernelEvents;
  }
}