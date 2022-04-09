/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface InitializableInterface extends utils.Interface {
  functions: {
    "hasInitialized()": FunctionFragment;
    "getInitializationBlock()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "hasInitialized" | "getInitializationBlock"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "hasInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInitializationBlock",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "hasInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInitializationBlock",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Initializable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InitializableInterface;

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
    hasInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    getInitializationBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  hasInitialized(overrides?: CallOverrides): Promise<boolean>;

  getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    hasInitialized(overrides?: CallOverrides): Promise<boolean>;

    getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    hasInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    getInitializationBlock(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    hasInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getInitializationBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}