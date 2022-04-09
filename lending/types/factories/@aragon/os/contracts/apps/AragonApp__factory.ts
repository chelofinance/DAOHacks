/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  AragonApp,
  AragonAppInterface,
} from "../../../../../@aragon/os/contracts/apps/AragonApp";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "hasInitialized",
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
    inputs: [
      {
        name: "_script",
        type: "bytes",
      },
    ],
    name: "getEVMScriptExecutor",
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
    constant: true,
    inputs: [],
    name: "appId",
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
    constant: true,
    inputs: [],
    name: "getInitializationBlock",
    outputs: [
      {
        name: "",
        type: "uint256",
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
        name: "_token",
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
    constant: true,
    inputs: [
      {
        name: "_sender",
        type: "address",
      },
      {
        name: "_role",
        type: "bytes32",
      },
      {
        name: "_params",
        type: "uint256[]",
      },
    ],
    name: "canPerform",
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
    name: "getEVMScriptRegistry",
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
    name: "kernel",
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
    name: "isPetrified",
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
        name: "executor",
        type: "address",
      },
      {
        indexed: false,
        name: "script",
        type: "bytes",
      },
      {
        indexed: false,
        name: "input",
        type: "bytes",
      },
      {
        indexed: false,
        name: "returnData",
        type: "bytes",
      },
    ],
    name: "ScriptResult",
    type: "event",
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
];

const _bytecode =
  "0x60806040526200001d62000023640100000000026401000000009004565b62000309565b60006200003e6200015e640100000000026401000000009004565b146040805190810160405280601881526020017f494e49545f414c52454144595f494e495449414c495a4544000000000000000081525090151562000121576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620000e5578082015181840152602081019050620000c8565b50505050905090810190601f168015620001135780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506200015c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff620001ab640100000000026401000000009004565b565b6000620001a67febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e60010260001916620002f76401000000000262000e88176401000000009004565b905090565b6000620001c66200015e640100000000026401000000009004565b146040805190810160405280601881526020017f494e49545f414c52454144595f494e495449414c495a45440000000000000000815250901515620002a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156200026d57808201518184015260208101905062000250565b50505050905090810190601f1680156200029b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50620002f4817febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e60010260001916620003026401000000000262001248179091906401000000009004565b50565b600081549050919050565b8082555050565b61127b80620003196000396000f3006080604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630803fac0146100b45780632914b9bd146100e357806332f0a3b51461018c5780637e7db6e1146101e357806380afdea81461023e5780638b3dd749146102715780639d4941d81461029c578063a1658fad146102df578063a479e5081461038b578063d4aae0c4146103e2578063de4796ed14610439575b600080fd5b3480156100c057600080fd5b506100c9610468565b604051808215151515815260200191505060405180910390f35b3480156100ef57600080fd5b5061014a600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610493565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019857600080fd5b506101a16105b2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101ef57600080fd5b50610224600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061065f565b604051808215151515815260200191505060405180910390f35b34801561024a57600080fd5b5061025361066a565b60405180826000191660001916815260200191505060405180910390f35b34801561027d57600080fd5b506102866106a1565b6040518082815260200191505060405180910390f35b3480156102a857600080fd5b506102dd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106d8565b005b3480156102eb57600080fd5b50610371600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560001916906020019092919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509192919290505050610af6565b604051808215151515815260200191505060405180910390f35b34801561039757600080fd5b506103a0610cf2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103ee57600080fd5b506103f7610e0d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561044557600080fd5b5061044e610e44565b604051808215151515815260200191505060405180910390f35b6000806104736106a1565b90506000811415801561048d57508061048a610e75565b10155b91505090565b600061049d610cf2565b73ffffffffffffffffffffffffffffffffffffffff166304bf2a7f836040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610524578082015181840152602081019050610509565b50505050905090810190601f1680156105515780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b15801561057057600080fd5b505af1158015610584573d6000803e3d6000fd5b505050506040513d602081101561059a57600080fd5b81019080805190602001909291905050509050919050565b60006105bc610e0d565b73ffffffffffffffffffffffffffffffffffffffff166332f0a3b56040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561061f57600080fd5b505af1158015610633573d6000803e3d6000fd5b505050506040513d602081101561064957600080fd5b8101908080519060200190929190505050905090565b600060019050919050565b600061069c7fd625496217aa6a3453eecb9c3489dc5a53e6c67b444329ea2b2cbc9ff547639b60010260001916610e7d565b905090565b60006106d37febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e60010260001916610e88565b905090565b60008060006106e68461065f565b6040805190810160405280601281526020017f5245434f5645525f444953414c4c4f57454400000000000000000000000000008152509015156107c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561078957808201518184015260208101905061076e565b50505050905090810190601f1680156107b65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506107cd6105b2565b92506107d883610e93565b6040805190810160405280601a81526020017f5245434f5645525f5641554c545f4e4f545f434f4e54524143540000000000008152509015156108b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561087b578082015181840152602081019050610860565b50505050905090810190601f1680156108a85780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610952573073ffffffffffffffffffffffffffffffffffffffff163191508273ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561094c573d6000803e3d6000fd5b50610a8b565b83905061097e308273ffffffffffffffffffffffffffffffffffffffff16610ee590919063ffffffff16565b91506109ab83838373ffffffffffffffffffffffffffffffffffffffff166110bf9092919063ffffffff16565b6040805190810160405280601d81526020017f5245434f5645525f544f4b454e5f5452414e534645525f4641494c4544000000815250901515610a89576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610a4e578082015181840152602081019050610a33565b50505050905090810190601f168015610a7b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505b8373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f596caf56044b55fb8c4ca640089bbc2b63cae3e978b851f5745cbb7c5b288e02846040518082815260200191505060405180910390a350505050565b600080610b01610468565b1515610b105760009150610cea565b610b18610e0d565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b585760009150610cea565b8073ffffffffffffffffffffffffffffffffffffffff1663fdef9106863087610b808861119f565b6040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c5d578082015181840152602081019050610c42565b50505050905090810190601f168015610c8a5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610cac57600080fd5b505af1158015610cc0573d6000803e3d6000fd5b505050506040513d6020811015610cd657600080fd5b810190808051906020019092919050505091505b509392505050565b600080610cfd610e0d565b73ffffffffffffffffffffffffffffffffffffffff1663be00bbd87fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb6001027fddbcfd564f642ab5627cf68b9b7d374fb4f8a36e941a75d89c87998cef03bd616001026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808360001916600019168152602001826000191660001916815260200192505050602060405180830381600087803b158015610dc957600080fd5b505af1158015610ddd573d6000803e3d6000fd5b505050506040513d6020811015610df357600080fd5b810190808051906020019092919050505090508091505090565b6000610e3f7f4172f0f7d2289153072b0a6ca36959e0cbe2efc3afe50fc81636caa96338137b600102600019166111b6565b905090565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e6f6106a1565b14905090565b600043905090565b600081549050919050565b600081549050919050565b600080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ed45760009150610edf565b823b90506000811191505b50919050565b600060606000808573ffffffffffffffffffffffffffffffffffffffff166370a0823190507c01000000000000000000000000000000000000000000000000000000000285604051602401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509250610fcf86846111c1565b91509150816040805190810160405280601c81526020017f534146455f4552435f32305f42414c414e43455f5245564552544544000000008152509015156110b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561107757808201518184015260208101905061105c565b50505050905090810190601f1680156110a45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5080935050505092915050565b6000606063a9059cbb7c0100000000000000000000000000000000000000000000000000000000028484604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905061119585826111f6565b9150509392505050565b606060006020835102905082915080825250919050565b600081549050919050565b6000806000806040516020818751602089018a5afa925060008311156111e657805191505b5081819350935050509250929050565b6000806040516020818551602087016000895af1600081111561123c573d6000811461122957602081146112325761123a565b6001935061123a565b600183511493505b505b50508091505092915050565b80825550505600a165627a7a72305820fcbab0002d4326aa2823ad4ffb86fa69c667559a915692ec569424b0ee1b711e0029";

type AragonAppConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AragonAppConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AragonApp__factory extends ContractFactory {
  constructor(...args: AragonAppConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AragonApp> {
    return super.deploy(overrides || {}) as Promise<AragonApp>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AragonApp {
    return super.attach(address) as AragonApp;
  }
  override connect(signer: Signer): AragonApp__factory {
    return super.connect(signer) as AragonApp__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AragonAppInterface {
    return new utils.Interface(_abi) as AragonAppInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AragonApp {
    return new Contract(address, _abi, signerOrProvider) as AragonApp;
  }
}
