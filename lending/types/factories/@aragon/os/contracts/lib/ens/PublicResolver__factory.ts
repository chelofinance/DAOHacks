/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  PublicResolver,
  PublicResolverInterface,
} from "../../../../../../@aragon/os/contracts/lib/ens/PublicResolver";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "pure",
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
        name: "key",
        type: "string",
      },
      {
        name: "value",
        type: "string",
      },
    ],
    name: "setText",
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
      {
        name: "contentTypes",
        type: "uint256",
      },
    ],
    name: "ABI",
    outputs: [
      {
        name: "contentType",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
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
        name: "x",
        type: "bytes32",
      },
      {
        name: "y",
        type: "bytes32",
      },
    ],
    name: "setPubkey",
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
    name: "content",
    outputs: [
      {
        name: "ret",
        type: "bytes32",
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
    name: "addr",
    outputs: [
      {
        name: "ret",
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
      {
        name: "key",
        type: "string",
      },
    ],
    name: "text",
    outputs: [
      {
        name: "ret",
        type: "string",
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
        name: "contentType",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "setABI",
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
    name: "name",
    outputs: [
      {
        name: "ret",
        type: "string",
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
        name: "name",
        type: "string",
      },
    ],
    name: "setName",
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
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "setContent",
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
    name: "pubkey",
    outputs: [
      {
        name: "x",
        type: "bytes32",
      },
      {
        name: "y",
        type: "bytes32",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "setAddr",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "ensAddr",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "a",
        type: "address",
      },
    ],
    name: "AddrChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "ContentChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "name",
        type: "string",
      },
    ],
    name: "NameChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "node",
        type: "bytes32",
      },
      {
        indexed: true,
        name: "contentType",
        type: "uint256",
      },
    ],
    name: "ABIChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "x",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "y",
        type: "bytes32",
      },
    ],
    name: "PubkeyChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "node",
        type: "bytes32",
      },
      {
        indexed: true,
        name: "indexedKey",
        type: "string",
      },
      {
        indexed: false,
        name: "key",
        type: "string",
      },
    ],
    name: "TextChanged",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051602080611b2e83398101806040528101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050611aab806100836000396000f3006080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a7146100ca57806310f13a8c1461012e5780632203ab56146101eb57806329cd62ea146102a65780632dff6941146102f35780633b3b57de1461034057806359d1d43c146103b1578063623195b0146104a1578063691f34311461052257806377372213146105cc578063c3d014d614610643578063c869023314610682578063d5fa2b00146106de575b600080fd5b3480156100d657600080fd5b5061011460048036038101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061072f565b604051808215151515815260200191505060405180910390f35b34801561013a57600080fd5b506101e96004803603810190808035600019169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610a1e565b005b3480156101f757600080fd5b50610224600480360381019080803560001916906020019092919080359060200190929190505050610cd1565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561026a57808201518184015260208101905061024f565b50505050905090810190601f1680156102975780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b3480156102b257600080fd5b506102f1600480360381019080803560001916906020019092919080356000191690602001909291908035600019169060200190929190505050610e14565b005b3480156102ff57600080fd5b506103226004803603810190808035600019169060200190929190505050610fd9565b60405180826000191660001916815260200191505060405180910390f35b34801561034c57600080fd5b5061036f6004803603810190808035600019169060200190929190505050611001565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103bd57600080fd5b506104266004803603810190808035600019169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611049565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561046657808201518184015260208101905061044b565b50505050905090810190601f1680156104935780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156104ad57600080fd5b50610520600480360381019080803560001916906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611173565b005b34801561052e57600080fd5b506105516004803603810190808035600019169060200190929190505050611310565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610591578082015181840152602081019050610576565b50505050905090810190601f1680156105be5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156105d857600080fd5b506106416004803603810190808035600019169060200190929190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506113d0565b005b34801561064f57600080fd5b50610680600480360381019080803560001916906020019092919080356000191690602001909291905050506115b6565b005b34801561068e57600080fd5b506106b16004803603810190808035600019169060200190929190505050611733565b60405180836000191660001916815260200182600019166000191681526020019250505060405180910390f35b3480156106ea57600080fd5b5061072d6004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611783565b005b6000633b3b57de7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610800575063d8389dc57c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061086b575063691f34317c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806108d65750632203ab567c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610941575063c86902337c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806109ac57506359d1d43c7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610a1757506301ffc9a77c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b823373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610ace57600080fd5b505af1158015610ae2573d6000803e3d6000fd5b505050506040513d6020811015610af857600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16141515610b2b57600080fd5b81600160008660001916600019168152602001908152602001600020600501846040518082805190602001908083835b602083101515610b805780518252602082019150602081019050602083039250610b5b565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390209080519060200190610bc692919061195a565b50826040518082805190602001908083835b602083101515610bfd5780518252602082019150602081019050602083039250610bd8565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902084600019167fd8c9334b1a9c2f9da342a0a2b32629c1a229b6445dad78947f674b44444a7550856040518080602001828103825283818151815260200191508051906020019080838360005b83811015610c91578082015181840152602081019050610c76565b50505050905090810190601f168015610cbe5780820380516001836020036101000a031916815260200191505b509250505060405180910390a350505050565b6000606060006001600086600019166000191681526020019081526020016000209050600192505b8383111515610e0757600084841614158015610d3e57506000816006016000858152602001908152602001600020805460018160011615610100020316600290049050115b15610df8578060060160008481526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610dec5780601f10610dc157610100808354040283529160200191610dec565b820191906000526020600020905b815481529060010190602001808311610dcf57829003601f168201915b50505050509150610e0c565b6001839060020a029250610cf9565b600092505b509250929050565b823373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610ec457600080fd5b505af1158015610ed8573d6000803e3d6000fd5b505050506040513d6020811015610eee57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16141515610f2157600080fd5b6040805190810160405280846000191681526020018360001916815250600160008660001916600019168152602001908152602001600020600301600082015181600001906000191690556020820151816001019060001916905590505083600019167f1d6f5e03d3f63eb58751986629a5439baee5079ff04f345becb66e23eb154e46848460405180836000191660001916815260200182600019166000191681526020019250505060405180910390a250505050565b6000600160008360001916600019168152602001908152602001600020600101549050919050565b600060016000836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6060600160008460001916600019168152602001908152602001600020600501826040518082805190602001908083835b60208310151561109f578051825260208201915060208101905060208303925061107a565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111665780601f1061113b57610100808354040283529160200191611166565b820191906000526020600020905b81548152906001019060200180831161114957829003601f168201915b5050505050905092915050565b823373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561122357600080fd5b505af1158015611237573d6000803e3d6000fd5b505050506040513d602081101561124d57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614151561128057600080fd5b600083600185031614151561129457600080fd5b81600160008660001916600019168152602001908152602001600020600601600085815260200190815260200160002090805190602001906112d79291906119da565b508284600019167faa121bbeef5f32f5961a2a28966e769023910fc9479059ee3495d4c1a696efe360405160405180910390a350505050565b60606001600083600019166000191681526020019081526020016000206002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113c45780601f10611399576101008083540402835291602001916113c4565b820191906000526020600020905b8154815290600101906020018083116113a757829003601f168201915b50505050509050919050565b813373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561148057600080fd5b505af1158015611494573d6000803e3d6000fd5b505050506040513d60208110156114aa57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff161415156114dd57600080fd5b81600160008560001916600019168152602001908152602001600020600201908051906020019061150f92919061195a565b5082600019167fb7d29e911041e8d9b843369e890bcb72c9388692ba48b65ac54e7214c4c348f7836040518080602001828103825283818151815260200191508051906020019080838360005b8381101561157757808201518184015260208101905061155c565b50505050905090810190601f1680156115a45780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b813373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561166657600080fd5b505af115801561167a573d6000803e3d6000fd5b505050506040513d602081101561169057600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff161415156116c357600080fd5b81600160008560001916600019168152602001908152602001600020600101816000191690555082600019167f0424b6fe0d9c3bdbece0e7879dc241bb0c22e900be8b6c168b4ee08bd9bf83bc8360405180826000191660001916815260200191505060405180910390a2505050565b600080600160008460001916600019168152602001908152602001600020600301600001546001600085600019166000191681526020019081526020016000206003016001015491509150915091565b813373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561183357600080fd5b505af1158015611847573d6000803e3d6000fd5b505050506040513d602081101561185d57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614151561189057600080fd5b8160016000856000191660001916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600019167f52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd283604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a2505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061199b57805160ff19168380011785556119c9565b828001600101855582156119c9579182015b828111156119c85782518255916020019190600101906119ad565b5b5090506119d69190611a5a565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611a1b57805160ff1916838001178555611a49565b82800160010185558215611a49579182015b82811115611a48578251825591602001919060010190611a2d565b5b509050611a569190611a5a565b5090565b611a7c91905b80821115611a78576000816000905550600101611a60565b5090565b905600a165627a7a723058204d762d012e73c9fed0de70e5abac02ad098e70a4c9ca0a641cf0f1765dae7d7b0029";

type PublicResolverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PublicResolverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PublicResolver__factory extends ContractFactory {
  constructor(...args: PublicResolverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    ensAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PublicResolver> {
    return super.deploy(ensAddr, overrides || {}) as Promise<PublicResolver>;
  }
  override getDeployTransaction(
    ensAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(ensAddr, overrides || {});
  }
  override attach(address: string): PublicResolver {
    return super.attach(address) as PublicResolver;
  }
  override connect(signer: Signer): PublicResolver__factory {
    return super.connect(signer) as PublicResolver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PublicResolverInterface {
    return new utils.Interface(_abi) as PublicResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PublicResolver {
    return new Contract(address, _abi, signerOrProvider) as PublicResolver;
  }
}