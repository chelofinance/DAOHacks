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

export interface RedirectAllInterface extends utils.Interface {
  functions: {
    "afterAgreementCreated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
    "afterAgreementTerminated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
    "afterAgreementUpdated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
    "beforeAgreementCreated(address,address,bytes32,bytes,bytes)": FunctionFragment;
    "beforeAgreementTerminated(address,address,bytes32,bytes,bytes)": FunctionFragment;
    "beforeAgreementUpdated(address,address,bytes32,bytes,bytes)": FunctionFragment;
    "currentReceiver()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "afterAgreementCreated"
      | "afterAgreementTerminated"
      | "afterAgreementUpdated"
      | "beforeAgreementCreated"
      | "beforeAgreementTerminated"
      | "beforeAgreementUpdated"
      | "currentReceiver"
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
    functionFragment: "currentReceiver",
    values?: undefined
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
    functionFragment: "currentReceiver",
    data: BytesLike
  ): Result;

  events: {
    "ReceiverChanged(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ReceiverChanged"): EventFragment;
}

export interface ReceiverChangedEventObject {
  receiver: string;
}
export type ReceiverChangedEvent = TypedEvent<
  [string],
  ReceiverChangedEventObject
>;

export type ReceiverChangedEventFilter = TypedEventFilter<ReceiverChangedEvent>;

export interface RedirectAll extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RedirectAllInterface;

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
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    afterAgreementTerminated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    afterAgreementUpdated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    beforeAgreementCreated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    beforeAgreementTerminated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    beforeAgreementUpdated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    currentReceiver(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber] & {
        startTime: BigNumber;
        receiver: string;
        flowRate: BigNumber;
      }
    >;
  };

  afterAgreementCreated(
    _superToken: string,
    _agreementClass: string,
    arg2: BytesLike,
    arg3: BytesLike,
    arg4: BytesLike,
    _ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  afterAgreementTerminated(
    _superToken: string,
    _agreementClass: string,
    arg2: BytesLike,
    arg3: BytesLike,
    arg4: BytesLike,
    _ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  afterAgreementUpdated(
    _superToken: string,
    _agreementClass: string,
    arg2: BytesLike,
    arg3: BytesLike,
    arg4: BytesLike,
    _ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  beforeAgreementCreated(
    arg0: string,
    arg1: string,
    arg2: BytesLike,
    arg3: BytesLike,
    arg4: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  beforeAgreementTerminated(
    arg0: string,
    arg1: string,
    arg2: BytesLike,
    arg3: BytesLike,
    arg4: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  beforeAgreementUpdated(
    arg0: string,
    arg1: string,
    arg2: BytesLike,
    arg3: BytesLike,
    arg4: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  currentReceiver(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber] & {
      startTime: BigNumber;
      receiver: string;
      flowRate: BigNumber;
    }
  >;

  callStatic: {
    afterAgreementCreated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    afterAgreementTerminated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    afterAgreementUpdated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    beforeAgreementCreated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    beforeAgreementTerminated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    beforeAgreementUpdated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    currentReceiver(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber] & {
        startTime: BigNumber;
        receiver: string;
        flowRate: BigNumber;
      }
    >;
  };

  filters: {
    "ReceiverChanged(address)"(receiver?: null): ReceiverChangedEventFilter;
    ReceiverChanged(receiver?: null): ReceiverChangedEventFilter;
  };

  estimateGas: {
    afterAgreementCreated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    afterAgreementTerminated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    afterAgreementUpdated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    beforeAgreementCreated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    beforeAgreementTerminated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    beforeAgreementUpdated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentReceiver(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    afterAgreementCreated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    afterAgreementTerminated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    afterAgreementUpdated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    beforeAgreementCreated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    beforeAgreementTerminated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    beforeAgreementUpdated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
