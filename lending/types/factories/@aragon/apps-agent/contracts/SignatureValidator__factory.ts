/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  SignatureValidator,
  SignatureValidatorInterface,
} from "../../../../@aragon/apps-agent/contracts/SignatureValidator";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
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

const _bytecode =
  "0x610108610030600b82828239805160001a6073146000811461002057610022565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600436106056576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680639890cdca14605b575b600080fd5b606160b5565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6320c13b0b7c010000000000000000000000000000000000000000000000000000000002815600a165627a7a723058209178ec708e2817a2be488a46dacb27d5a0b6f7ece8f4d344ceb01df096beb55f0029";

type SignatureValidatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SignatureValidatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SignatureValidator__factory extends ContractFactory {
  constructor(...args: SignatureValidatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SignatureValidator> {
    return super.deploy(overrides || {}) as Promise<SignatureValidator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SignatureValidator {
    return super.attach(address) as SignatureValidator;
  }
  override connect(signer: Signer): SignatureValidator__factory {
    return super.connect(signer) as SignatureValidator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignatureValidatorInterface {
    return new utils.Interface(_abi) as SignatureValidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignatureValidator {
    return new Contract(address, _abi, signerOrProvider) as SignatureValidator;
  }
}
