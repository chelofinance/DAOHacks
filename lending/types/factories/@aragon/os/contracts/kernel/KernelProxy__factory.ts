/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  KernelProxy,
  KernelProxyInterface,
} from "../../../../../@aragon/os/contracts/kernel/KernelProxy";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

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
    inputs: [
      {
        name: "",
        type: "bytes32",
      },
      {
        name: "",
        type: "bytes32",
      },
    ],
    name: "apps",
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
    name: "isDepositable",
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
    constant: true,
    inputs: [],
    name: "implementation",
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
    name: "recoveryVaultAppId",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_kernelImpl",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "ProxyDeposit",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516020806106e58339810180604052810190808051906020019092919050505061004b816101c7640100000000026401000000009004565b151561005657600080fd5b806000807fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f86001026000191660001916815260200190815260200160002060007f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c6001026000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c600102600019167fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f8600102600019167f2ec1ae0a449b7ae354b9dacfb3ade6b6332ba26b7fcbb935835fa39dd7263b2383604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a350610219565b600080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156102085760009150610213565b823b90506000811191505b50919050565b6104bd806102286000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634555d5c9146101655780634558850c1461019057806348a0c8dd1461020f5780635c60da1b1461023e57806386070cfe14610295575b60006127105a101561011a5760003411801561008c5750600080369050145b151561009757600080fd5b61009f6102c8565b15156100aa57600080fd5b7f15eeaa57c7bd188c1388020bcadc2c436ec60d647d36ef5b9eb3c742217ddee13334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1610162565b6101226102ff565b9050610161816000368080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050506103a0565b5b50005b34801561017157600080fd5b5061017a6103e3565b6040518082815260200191505060405180910390f35b34801561019c57600080fd5b506101cd600480360381019080803560001916906020019092919080356000191690602001909291905050506103ec565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561021b57600080fd5b506102246102c8565b604051808215151515815260200191505060405180910390f35b34801561024a57600080fd5b506102536102ff565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102a157600080fd5b506102aa61042e565b60405180826000191660001916815260200191505060405180910390f35b60006102fa7f665fd576fbbe6f247aff98f5c94a561e3f71ec2d3c988d56f12d342396c50cea60010260001916610434565b905090565b60008060007fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f86001026000191660001916815260200190815260200160002060007f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c6001026000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006103ab8361043f565b15156103b657600080fd5b612710905060008083516020850186855a03f43d604051816000823e82600081146103df578282f35b8282fd5b60006002905090565b60006020528160005260406000206020528060005260406000206000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b600081549050919050565b600080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610480576000915061048b565b823b90506000811191505b509190505600a165627a7a7230582006fba77216fe41ee422fd6cf2cb3bda1ab83e5a3116298fc0873a76cca81546f0029";

type KernelProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KernelProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KernelProxy__factory extends ContractFactory {
  constructor(...args: KernelProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _kernelImpl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KernelProxy> {
    return super.deploy(_kernelImpl, overrides || {}) as Promise<KernelProxy>;
  }
  override getDeployTransaction(
    _kernelImpl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_kernelImpl, overrides || {});
  }
  override attach(address: string): KernelProxy {
    return super.attach(address) as KernelProxy;
  }
  override connect(signer: Signer): KernelProxy__factory {
    return super.connect(signer) as KernelProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KernelProxyInterface {
    return new utils.Interface(_abi) as KernelProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KernelProxy {
    return new Contract(address, _abi, signerOrProvider) as KernelProxy;
  }
}
