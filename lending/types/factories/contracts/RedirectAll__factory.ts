/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  RedirectAll,
  RedirectAllInterface,
} from "../../contracts/RedirectAll";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "contract IConstantFlowAgreementV1",
        name: "cfa",
        type: "address",
      },
      {
        internalType: "contract ISuperToken",
        name: "acceptedToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ReceiverChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "_superToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_agreementClass",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_ctx",
        type: "bytes",
      },
    ],
    name: "afterAgreementCreated",
    outputs: [
      {
        internalType: "bytes",
        name: "newCtx",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "_superToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_agreementClass",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_ctx",
        type: "bytes",
      },
    ],
    name: "afterAgreementTerminated",
    outputs: [
      {
        internalType: "bytes",
        name: "newCtx",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "_superToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_agreementClass",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_ctx",
        type: "bytes",
      },
    ],
    name: "afterAgreementUpdated",
    outputs: [
      {
        internalType: "bytes",
        name: "newCtx",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "beforeAgreementCreated",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "beforeAgreementTerminated",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "beforeAgreementUpdated",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentReceiver",
    outputs: [
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "int96",
        name: "flowRate",
        type: "int96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200127c3803806200127c83398101604081905262000034916200030e565b6001600160a01b038416620000905760405162461bcd60e51b815260206004820152601460248201527f686f7374206973207a65726f206164647265737300000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b038316620000e85760405162461bcd60e51b815260206004820152601360248201527f636661206973207a65726f206164647265737300000000000000000000000000604482015260640162000087565b6001600160a01b038216620001405760405162461bcd60e51b815260206004820152601d60248201527f6163636570746564546f6b656e206973207a65726f2061646472657373000000604482015260640162000087565b6001600160a01b038116620001985760405162461bcd60e51b815260206004820152601860248201527f7265636569766572206973207a65726f20616464726573730000000000000000604482015260640162000087565b604051631e51d6a760e11b81526001600160a01b038281166004830152851690633ca3ad4e90602401602060405180830381865afa158015620001df573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000205919062000376565b15620002495760405162461bcd60e51b81526020600482015260126024820152710726563656976657220697320616e206170760741b604482015260640162000087565b600080546001600160a01b038681166001600160a01b03199283168117909355600180548783169084161790556002805486831690841617905560038054918516919092161790556040516315a722b960e31b815264150000000160048201819052919063ad3915c890602401600060405180830381600087803b158015620002d157600080fd5b505af1158015620002e6573d6000803e3d6000fd5b505050505050505050620003a1565b6001600160a01b03811681146200030b57600080fd5b50565b600080600080608085870312156200032557600080fd5b84516200033281620002f5565b60208601519094506200034581620002f5565b60408601519093506200035881620002f5565b60608601519092506200036b81620002f5565b939692955090935050565b6000602082840312156200038957600080fd5b815180151581146200039a57600080fd5b9392505050565b610ecb80620003b16000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806353c11f991161005b57806353c11f99146100ec5780635f9e7d77146100ff578063884d1f4014610112578063d86ed3e51461008257600080fd5b8063230dbd291461008257806328d2bf94146100ab57806330d9c915146100d9575b600080fd5b610095610090366004610a2c565b610125565b6040516100a29190610b53565b60405180910390f35b6100b3610270565b604080519384526001600160a01b039092166020840152600b0b908201526060016100a2565b6100956100e7366004610b6d565b610326565b6100956100fa366004610a2c565b610397565b61009561010d366004610b6d565b610480565b610095610120366004610b6d565b6104f1565b60608989610141826002546001600160a01b0391821691161490565b6101925760405162461bcd60e51b815260206004820152601f60248201527f5265646972656374416c6c3a206e6f7420616363657074656420746f6b656e0060448201526064015b60405180910390fd5b61019b81610562565b6101f15760405162461bcd60e51b815260206004820152602160248201527f5265646972656374416c6c3a206f6e6c7920434641763120737570706f7274656044820152601960fa1b6064820152608401610189565b6000546001600160a01b031633146102565760405162461bcd60e51b815260206004820152602260248201527f5265646972656374416c6c3a20737570706f7274206f6e6c79206f6e6520686f6044820152611cdd60f21b6064820152608401610189565b61026085856105ee565b9c9b505050505050505050505050565b600354600090819081906001600160a01b03161561032157600154600254600354604051631cd43d1160e31b81526001600160a01b039283166004820152306024820152908216604482015291169063e6a1e88890606401608060405180830381865afa1580156102e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103099190610c23565b50506003549194506001600160a01b03909116925090505b909192565b60405162461bcd60e51b815260206004820152602f60248201527f556e737570706f727465642063616c6c6261636b202d204265666f726520416760448201527f7265656d656e74204372656174656400000000000000000000000000000000006064820152606090608401610189565b6000546060906001600160a01b031633146103ff5760405162461bcd60e51b815260206004820152602260248201527f5265646972656374416c6c3a20737570706f7274206f6e6c79206f6e6520686f6044820152611cdd60f21b6064820152608401610189565b6002546001600160a01b038b81169116141580610422575061042089610562565b155b156104665782828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061047392505050565b61047083836105ee565b90505b9998505050505050505050565b60405162461bcd60e51b815260206004820152603360248201527f556e737570706f727465642063616c6c6261636b202d20204265666f7265204160448201527f677265656d656e74205465726d696e61746564000000000000000000000000006064820152606090608401610189565b60405162461bcd60e51b815260206004820152602f60248201527f556e737570706f727465642063616c6c6261636b202d204265666f726520416760448201527f7265656d656e74207570646174656400000000000000000000000000000000006064820152606090608401610189565b60007fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd3826001600160a01b0316637730599e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e79190610c5f565b1492915050565b606082828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525060015460025460405163e8e7e2d160e01b81526001600160a01b03918216600482015230602482015296975091959116935063e8e7e2d192506044019050602060405180830381865afa15801561067d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a19190610c78565b600154600254600354604051631cd43d1160e31b81526001600160a01b039283166004820152306024820152908216604482015292935060009291169063e6a1e88890606401608060405180830381865afa158015610704573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107289190610c23565b50509150506000818361073b9190610ca9565b9050600b81900b61085a5760008054600154600254600354604080519586526020860190526001600160a01b0393841694634329d2939493841693635a5999e360e11b93610796939082169230929091169060448101610d18565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009485161790525160e085901b909216825261080b92918990600401610d56565b6000604051808303816000875af115801561082a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108529190810190610e25565b5093506109c2565b600b82900b156108b35760008054600154600254600354604080519586526020860190526001600160a01b0393841694634329d29394938416936328104d3160e11b936107969390821692911690889060448101610e89565b60008054600154600254600354604080519586526020860190526001600160a01b0393841694634329d293949384169363317e182f60e11b936109029390821692911690889060448101610e89565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009485161790525160e085901b909216825261097792918990600401610d56565b6000604051808303816000875af1158015610996573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109be9190810190610e25565b5093505b50505092915050565b6001600160a01b03811681146109e057600080fd5b50565b60008083601f8401126109f557600080fd5b50813567ffffffffffffffff811115610a0d57600080fd5b602083019150836020828501011115610a2557600080fd5b9250929050565b600080600080600080600080600060c08a8c031215610a4a57600080fd5b8935610a55816109cb565b985060208a0135610a65816109cb565b975060408a0135965060608a013567ffffffffffffffff80821115610a8957600080fd5b610a958d838e016109e3565b909850965060808c0135915080821115610aae57600080fd5b610aba8d838e016109e3565b909650945060a08c0135915080821115610ad357600080fd5b50610ae08c828d016109e3565b915080935050809150509295985092959850929598565b60005b83811015610b12578181015183820152602001610afa565b83811115610b21576000848401525b50505050565b60008151808452610b3f816020860160208601610af7565b601f01601f19169290920160200192915050565b602081526000610b666020830184610b27565b9392505050565b600080600080600080600060a0888a031215610b8857600080fd5b8735610b93816109cb565b96506020880135610ba3816109cb565b955060408801359450606088013567ffffffffffffffff80821115610bc757600080fd5b610bd38b838c016109e3565b909650945060808a0135915080821115610bec57600080fd5b50610bf98a828b016109e3565b989b979a50959850939692959293505050565b8051600b81900b8114610c1e57600080fd5b919050565b60008060008060808587031215610c3957600080fd5b84519350610c4960208601610c0c565b6040860151606090960151949790965092505050565b600060208284031215610c7157600080fd5b5051919050565b600060208284031215610c8a57600080fd5b610b6682610c0c565b634e487b7160e01b600052601160045260246000fd5b600081600b0b83600b0b60008212826b7fffffffffffffffffffffff03821381151615610cd857610cd8610c93565b826b7fffffffffffffffffffffff19038212811615610cf957610cf9610c93565b50019392505050565b634e487b7160e01b600052604160045260246000fd5b60006001600160a01b038087168352808616602084015280851660408401525060806060830152610d4c6080830184610b27565b9695505050505050565b6001600160a01b0384168152608060208201526000610d786080830185610b27565b8281038060408501526002825261060f60f31b602083015260408101606085015250610d4c6040820185610b27565b600082601f830112610db857600080fd5b815167ffffffffffffffff80821115610dd357610dd3610d02565b604051601f8301601f19908116603f01168101908282118183101715610dfb57610dfb610d02565b81604052838152866020858801011115610e1457600080fd5b610d4c846020830160208901610af7565b60008060408385031215610e3857600080fd5b825167ffffffffffffffff80821115610e5057600080fd5b610e5c86838701610da7565b93506020850151915080821115610e7257600080fd5b50610e7f85828601610da7565b9150509250929050565b60006001600160a01b03808716835280861660208401525083600b0b604083015260806060830152610d4c6080830184610b2756fea164736f6c634300080d000a";

type RedirectAllConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RedirectAllConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RedirectAll__factory extends ContractFactory {
  constructor(...args: RedirectAllConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    host: string,
    cfa: string,
    acceptedToken: string,
    receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RedirectAll> {
    return super.deploy(
      host,
      cfa,
      acceptedToken,
      receiver,
      overrides || {}
    ) as Promise<RedirectAll>;
  }
  override getDeployTransaction(
    host: string,
    cfa: string,
    acceptedToken: string,
    receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      host,
      cfa,
      acceptedToken,
      receiver,
      overrides || {}
    );
  }
  override attach(address: string): RedirectAll {
    return super.attach(address) as RedirectAll;
  }
  override connect(signer: Signer): RedirectAll__factory {
    return super.connect(signer) as RedirectAll__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RedirectAllInterface {
    return new utils.Interface(_abi) as RedirectAllInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RedirectAll {
    return new Contract(address, _abi, signerOrProvider) as RedirectAll;
  }
}
