/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface TandaInterface extends utils.Interface {
  functions: {
    "afterAgreementCreated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
    "afterAgreementTerminated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
    "afterAgreementUpdated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
    "beforeAgreementCreated(address,address,bytes32,bytes,bytes)": FunctionFragment;
    "beforeAgreementTerminated(address,address,bytes32,bytes,bytes)": FunctionFragment;
    "beforeAgreementUpdated(address,address,bytes32,bytes,bytes)": FunctionFragment;
    "currentWinner()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "toggleMember(address,bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "afterAgreementCreated"
      | "afterAgreementTerminated"
      | "afterAgreementUpdated"
      | "beforeAgreementCreated"
      | "beforeAgreementTerminated"
      | "beforeAgreementUpdated"
      | "currentWinner"
      | "owner"
      | "renounceOwnership"
      | "toggleMember"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "afterAgreementCreated",
    values: [string, string, BytesLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "afterAgreementTerminated",
    values: [string, string, BytesLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "afterAgreementUpdated",
    values: [string, string, BytesLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeAgreementCreated",
    values: [string, string, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeAgreementTerminated",
    values: [string, string, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeAgreementUpdated",
    values: [string, string, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "currentWinner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "toggleMember",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "afterAgreementCreated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterAgreementTerminated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterAgreementUpdated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeAgreementCreated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeAgreementTerminated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeAgreementUpdated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentWinner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "BorrowerChanged(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BorrowerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface BorrowerChangedEventObject {
  winner: string;
}
export type BorrowerChangedEvent = TypedEvent<
  [string],
  BorrowerChangedEventObject
>;

export type BorrowerChangedEventFilter = TypedEventFilter<BorrowerChangedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Tanda extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TandaInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    afterAgreementCreated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    afterAgreementTerminated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    afterAgreementUpdated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    beforeAgreementCreated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { cbdata: string }>;

    beforeAgreementTerminated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { cbdata: string }>;

    beforeAgreementUpdated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { cbdata: string }>;

    currentWinner(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber] & {
        drawingTime: BigNumber;
        player: string;
        flowRate: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    toggleMember(
      _member: string,
      added: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  afterAgreementCreated(
    superToken: string,
    agreementClass: string,
    agreementId: BytesLike,
    agreementData: BytesLike,
    cbdata: BytesLike,
    ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  afterAgreementTerminated(
    superToken: string,
    agreementClass: string,
    agreementId: BytesLike,
    agreementData: BytesLike,
    cbdata: BytesLike,
    ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  afterAgreementUpdated(
    superToken: string,
    agreementClass: string,
    agreementId: BytesLike,
    agreementData: BytesLike,
    cbdata: BytesLike,
    ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  beforeAgreementCreated(
    superToken: string,
    agreementClass: string,
    agreementId: BytesLike,
    agreementData: BytesLike,
    ctx: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  beforeAgreementTerminated(
    superToken: string,
    agreementClass: string,
    agreementId: BytesLike,
    agreementData: BytesLike,
    ctx: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  beforeAgreementUpdated(
    superToken: string,
    agreementClass: string,
    agreementId: BytesLike,
    agreementData: BytesLike,
    ctx: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  currentWinner(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber] & {
      drawingTime: BigNumber;
      player: string;
      flowRate: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  toggleMember(
    _member: string,
    added: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    afterAgreementCreated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    afterAgreementTerminated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    afterAgreementUpdated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    beforeAgreementCreated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    beforeAgreementTerminated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    beforeAgreementUpdated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    currentWinner(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber] & {
        drawingTime: BigNumber;
        player: string;
        flowRate: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    toggleMember(
      _member: string,
      added: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BorrowerChanged(address)"(winner?: null): BorrowerChangedEventFilter;
    BorrowerChanged(winner?: null): BorrowerChangedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    afterAgreementCreated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    afterAgreementTerminated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    afterAgreementUpdated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    beforeAgreementCreated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    beforeAgreementTerminated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    beforeAgreementUpdated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentWinner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    toggleMember(
      _member: string,
      added: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    afterAgreementCreated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    afterAgreementTerminated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    afterAgreementUpdated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    beforeAgreementCreated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    beforeAgreementTerminated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    beforeAgreementUpdated(
      superToken: string,
      agreementClass: string,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentWinner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    toggleMember(
      _member: string,
      added: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}