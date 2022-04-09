/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ENS,
  ENSInterface,
} from "../../../../../../@aragon/os/contracts/lib/ens/ENS";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "node",
        type: "bytes32",
      },
    ],
    name: "resolver",
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
        name: "node",
        type: "bytes32",
      },
    ],
    name: "owner",
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
        name: "node",
        type: "bytes32",
      },
      {
        name: "label",
        type: "bytes32",
      },
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "setSubnodeOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "node",
        type: "bytes32",
      },
      {
        name: "ttl",
        type: "uint64",
      },
    ],
    name: "setTTL",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "node",
        type: "bytes32",
      },
    ],
    name: "ttl",
    outputs: [
      {
        name: "",
        type: "uint64",
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
        name: "node",
        type: "bytes32",
      },
      {
        name: "resolver",
        type: "address",
      },
    ],
    name: "setResolver",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "node",
        type: "bytes32",
      },
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_node",
        type: "bytes32",
      },
      {
        indexed: true,
        name: "_label",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "_owner",
        type: "address",
      },
    ],
    name: "NewOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_node",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "_owner",
        type: "address",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_node",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "_resolver",
        type: "address",
      },
    ],
    name: "NewResolver",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_node",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "_ttl",
        type: "uint64",
      },
    ],
    name: "NewTTL",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000808060010260001916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061090b8061007b6000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630178b8bf1461008857806302571be3146100f957806306ab59231461016a57806314ab9038146101c957806316a25cbd1461020e5780631896f70a146102675780635b0fc9c3146102b8575b600080fd5b34801561009457600080fd5b506100b76004803603810190808035600019169060200190929190505050610309565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561010557600080fd5b506101286004803603810190808035600019169060200190929190505050610350565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561017657600080fd5b506101c760048036038101908080356000191690602001909291908035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610397565b005b3480156101d557600080fd5b5061020c6004803603810190808035600019169060200190929190803567ffffffffffffffff169060200190929190505050610511565b005b34801561021a57600080fd5b5061023d6004803603810190808035600019169060200190929190505050610622565b604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390f35b34801561027357600080fd5b506102b66004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061065d565b005b3480156102c457600080fd5b506103076004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061079e565b005b6000806000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000806000836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000833373ffffffffffffffffffffffffffffffffffffffff16600080836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561041157600080fd5b848460405180836000191660001916815260200182600019166000191681526020019250505060405180910390209150836000191685600019167fce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e8285604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a382600080846000191660001916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050565b813373ffffffffffffffffffffffffffffffffffffffff16600080836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561058957600080fd5b82600019167f1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa6883604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390a281600080856000191660001916815260200190815260200160002060010160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550505050565b6000806000836000191660001916815260200190815260200160002060010160149054906101000a900467ffffffffffffffff169050919050565b813373ffffffffffffffffffffffffffffffffffffffff16600080836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156106d557600080fd5b82600019167f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a083604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a281600080856000191660001916815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b813373ffffffffffffffffffffffffffffffffffffffff16600080836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561081657600080fd5b82600019167fd4735d920b0f87494915f556dd9b54c8f309026070caea5c737245152564d26683604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a281600080856000191660001916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505600a165627a7a72305820b1c2263053f6c73e34b5281a4b60747849cc80af78a52f4cef49b7aeec4437140029";

type ENSConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ENSConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ENS__factory extends ContractFactory {
  constructor(...args: ENSConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ENS> {
    return super.deploy(overrides || {}) as Promise<ENS>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ENS {
    return super.attach(address) as ENS;
  }
  override connect(signer: Signer): ENS__factory {
    return super.connect(signer) as ENS__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ENSInterface {
    return new utils.Interface(_abi) as ENSInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ENS {
    return new Contract(address, _abi, signerOrProvider) as ENS;
  }
}
