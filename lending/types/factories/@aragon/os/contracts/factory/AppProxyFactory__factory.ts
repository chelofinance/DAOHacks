/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  AppProxyFactory,
  AppProxyFactoryInterface,
} from "../../../../../@aragon/os/contracts/factory/AppProxyFactory";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_kernel",
        type: "address",
      },
      {
        name: "_appId",
        type: "bytes32",
      },
      {
        name: "_initializePayload",
        type: "bytes",
      },
    ],
    name: "newAppProxyPinned",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_kernel",
        type: "address",
      },
      {
        name: "_appId",
        type: "bytes32",
      },
    ],
    name: "newAppProxy",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_kernel",
        type: "address",
      },
      {
        name: "_appId",
        type: "bytes32",
      },
      {
        name: "_initializePayload",
        type: "bytes",
      },
    ],
    name: "newAppProxy",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_kernel",
        type: "address",
      },
      {
        name: "_appId",
        type: "bytes32",
      },
    ],
    name: "newAppProxyPinned",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "proxy",
        type: "address",
      },
      {
        indexed: false,
        name: "isUpgradeable",
        type: "bool",
      },
      {
        indexed: false,
        name: "appId",
        type: "bytes32",
      },
    ],
    name: "NewAppProxy",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611929806100206000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063d162f8b014610067578063e156a8f31461013e578063ede658b0146101cf578063ff289fc5146102a6575b600080fd5b34801561007357600080fd5b506100fc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600019169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610337565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561014a57600080fd5b5061018d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356000191690602001909291905050506104a0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101db57600080fd5b50610264600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600019169060200190929190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506104e9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102b257600080fd5b506102f5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600019169060200190929190505050610652565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008084848461034561069b565b808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200180602001828103825283818151815260200191508051906020019080838360005b838110156103c25780820151818401526020810190506103a7565b50505050905090810190601f1680156103ef5780820380516001836020036101000a031916815260200191505b50945050505050604051809103906000f080158015610412573d6000803e3d6000fd5b5090507fd880e726dced8808d727f02dd0e6fdd3a945b24bfee77e13367bcbe61ddbaf4781600086604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001831515151581526020018260001916600019168152602001935050505060405180910390a1809150509392505050565b60006104e1838360006040519080825280601f01601f1916602001820160405280156104db5781602001602082028038833980820191505090505b506104e9565b905092915050565b6000808484846104f76106ab565b808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610574578082015181840152602081019050610559565b50505050905090810190601f1680156105a15780820380516001836020036101000a031916815260200191505b50945050505050604051809103906000f0801580156105c4573d6000803e3d6000fd5b5090507fd880e726dced8808d727f02dd0e6fdd3a945b24bfee77e13367bcbe61ddbaf4781600186604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001831515151581526020018260001916600019168152602001935050505060405180910390a1809150509392505050565b6000610693838360006040519080825280601f01601f19166020018201604052801561068d5781602001602082028038833980820191505090505b50610337565b905092915050565b60405161093c806106bc83390190565b60405161090680610ff8833901905600608060405234801561001057600080fd5b5060405161093c38038061093c8339810180604052810190808051906020019092919080519060200190929190805182019291905050508282826000610064846101c8640100000000026401000000009004565b61007c83610212640100000000026401000000009004565b6100948361025c640100000000026401000000009004565b9050600082511115610154576100b881610360640100000000026401000000009004565b15156100c357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff168260405180828051906020019080838360005b838110156101085780820151818401526020810190506100ed565b50505050905090810190601f1680156101355780820380516001836020036101000a031916815260200191505b50915050600060405180830381855af4915050151561015357600080fd5b5b505050506101876101738361025c640100000000026401000000009004565b6103b2640100000000026401000000009004565b6101b56101a16103fc640100000000026401000000009004565b610360640100000000026401000000009004565b15156101c057600080fd5b5050506104a9565b61020f817f4172f0f7d2289153072b0a6ca36959e0cbe2efc3afe50fc81636caa96338137b600102600019166104466401000000000261044a179091906401000000009004565b50565b610259817fd625496217aa6a3453eecb9c3489dc5a53e6c67b444329ea2b2cbc9ff547639b6001026000191661044d64010000000002610451179091906401000000009004565b50565b6000610275610454640100000000026401000000009004565b73ffffffffffffffffffffffffffffffffffffffff1663be00bbd87ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f600102846040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808360001916600019168152602001826000191660001916815260200192505050602060405180830381600087803b15801561031e57600080fd5b505af1158015610332573d6000803e3d6000fd5b505050506040513d602081101561034857600080fd5b81019080805190602001909291905050509050919050565b600080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156103a157600091506103ac565b823b90506000811191505b50919050565b6103f9817fdee64df20d65e53d7f51cb6ab6d921a0a6a638a91e942e1d8d02df28e31c038e600102600019166104466401000000000261044a179091906401000000009004565b50565b60006104417fdee64df20d65e53d7f51cb6ab6d921a0a6a638a91e942e1d8d02df28e31c038e6001026000191661049e6401000000000261043f176401000000009004565b905090565b8082555050565b8082555050565b60006104997f4172f0f7d2289153072b0a6ca36959e0cbe2efc3afe50fc81636caa96338137b6001026000191661049e6401000000000261043f176401000000009004565b905090565b600081549050919050565b610484806104b86000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634555d5c91461016557806348a0c8dd146101905780635c60da1b146101bf57806380afdea814610216578063d4aae0c414610249575b60006127105a101561011a5760003411801561008c5750600080369050145b151561009757600080fd5b61009f6102a0565b15156100aa57600080fd5b7f15eeaa57c7bd188c1388020bcadc2c436ec60d647d36ef5b9eb3c742217ddee13334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1610162565b6101226102d7565b9050610161816000368080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050506102e6565b5b50005b34801561017157600080fd5b5061017a610329565b6040518082815260200191505060405180910390f35b34801561019c57600080fd5b506101a56102a0565b604051808215151515815260200191505060405180910390f35b3480156101cb57600080fd5b506101d46102d7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561022257600080fd5b5061022b610332565b60405180826000191660001916815260200191505060405180910390f35b34801561025557600080fd5b5061025e610369565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60006102d27f665fd576fbbe6f247aff98f5c94a561e3f71ec2d3c988d56f12d342396c50cea600102600019166103a0565b905090565b60006102e16103ab565b905090565b60006102f1836103e2565b15156102fc57600080fd5b612710905060008083516020850186855a03f43d604051816000823e8260008114610325578282f35b8282fd5b60006001905090565b60006103647fd625496217aa6a3453eecb9c3489dc5a53e6c67b444329ea2b2cbc9ff547639b60010260001916610434565b905090565b600061039b7f4172f0f7d2289153072b0a6ca36959e0cbe2efc3afe50fc81636caa96338137b6001026000191661043f565b905090565b600081549050919050565b60006103dd7fdee64df20d65e53d7f51cb6ab6d921a0a6a638a91e942e1d8d02df28e31c038e6001026000191661043f565b905090565b600080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610423576000915061042e565b823b90506000811191505b50919050565b600081549050919050565b600081549050919050565b8082555050565b80825550505600a165627a7a72305820f1b3b7acd16a234ffa2fed899b6d3718086e0e20012dc34d8ea387361115f7310029608060405234801561001057600080fd5b50604051610906380380610906833981018060405281019080805190602001909291908051906020019092919080518201929190505050828282600061006484610160640100000000026401000000009004565b61007c836101aa640100000000026401000000009004565b610094836101f4640100000000026401000000009004565b9050600082511115610154576100b8816102f8640100000000026401000000009004565b15156100c357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff168260405180828051906020019080838360005b838110156101085780820151818401526020810190506100ed565b50505050905090810190601f1680156101355780820380516001836020036101000a031916815260200191505b50915050600060405180830381855af4915050151561015357600080fd5b5b505050505050506103ad565b6101a7817f4172f0f7d2289153072b0a6ca36959e0cbe2efc3afe50fc81636caa96338137b6001026000191661034a64010000000002610510179091906401000000009004565b50565b6101f1817fd625496217aa6a3453eecb9c3489dc5a53e6c67b444329ea2b2cbc9ff547639b6001026000191661035164010000000002610517179091906401000000009004565b50565b600061020d610358640100000000026401000000009004565b73ffffffffffffffffffffffffffffffffffffffff1663be00bbd87ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f600102846040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808360001916600019168152602001826000191660001916815260200192505050602060405180830381600087803b1580156102b657600080fd5b505af11580156102ca573d6000803e3d6000fd5b505050506040513d60208110156102e057600080fd5b81019080805190602001909291905050509050919050565b600080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156103395760009150610344565b823b90506000811191505b50919050565b8082555050565b8082555050565b600061039d7f4172f0f7d2289153072b0a6ca36959e0cbe2efc3afe50fc81636caa96338137b600102600019166103a264010000000002610505176401000000009004565b905090565b600081549050919050565b61054a806103bc6000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634555d5c91461016557806348a0c8dd146101905780635c60da1b146101bf57806380afdea814610216578063d4aae0c414610249575b60006127105a101561011a5760003411801561008c5750600080369050145b151561009757600080fd5b61009f6102a0565b15156100aa57600080fd5b7f15eeaa57c7bd188c1388020bcadc2c436ec60d647d36ef5b9eb3c742217ddee13334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1610162565b6101226102d7565b9050610161816000368080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050506102ee565b5b50005b34801561017157600080fd5b5061017a610331565b6040518082815260200191505060405180910390f35b34801561019c57600080fd5b506101a56102a0565b604051808215151515815260200191505060405180910390f35b3480156101cb57600080fd5b506101d46102d7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561022257600080fd5b5061022b61033a565b60405180826000191660001916815260200191505060405180910390f35b34801561025557600080fd5b5061025e610371565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60006102d27f665fd576fbbe6f247aff98f5c94a561e3f71ec2d3c988d56f12d342396c50cea600102600019166103a8565b905090565b60006102e96102e461033a565b6103b3565b905090565b60006102f9836104a8565b151561030457600080fd5b612710905060008083516020850186855a03f43d604051816000823e826000811461032d578282f35b8282fd5b60006002905090565b600061036c7fd625496217aa6a3453eecb9c3489dc5a53e6c67b444329ea2b2cbc9ff547639b600102600019166104fa565b905090565b60006103a37f4172f0f7d2289153072b0a6ca36959e0cbe2efc3afe50fc81636caa96338137b60010260001916610505565b905090565b600081549050919050565b60006103bd610371565b73ffffffffffffffffffffffffffffffffffffffff1663be00bbd87ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f600102846040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808360001916600019168152602001826000191660001916815260200192505050602060405180830381600087803b15801561046657600080fd5b505af115801561047a573d6000803e3d6000fd5b505050506040513d602081101561049057600080fd5b81019080805190602001909291905050509050919050565b600080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156104e957600091506104f4565b823b90506000811191505b50919050565b600081549050919050565b600081549050919050565b8082555050565b80825550505600a165627a7a72305820434464dba6eb004f73c804d3120d1068d626e951192e7d0526b9937bb5737f190029a165627a7a72305820c6dcb5cbfa9877212cb0c4b24e767628b60f9f951141b8d981d0d7383c8fceb80029";

type AppProxyFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AppProxyFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AppProxyFactory__factory extends ContractFactory {
  constructor(...args: AppProxyFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AppProxyFactory> {
    return super.deploy(overrides || {}) as Promise<AppProxyFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AppProxyFactory {
    return super.attach(address) as AppProxyFactory;
  }
  override connect(signer: Signer): AppProxyFactory__factory {
    return super.connect(signer) as AppProxyFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AppProxyFactoryInterface {
    return new utils.Interface(_abi) as AppProxyFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AppProxyFactory {
    return new Contract(address, _abi, signerOrProvider) as AppProxyFactory;
  }
}
