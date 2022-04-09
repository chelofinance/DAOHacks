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

export interface AppStorageInterface extends utils.Interface {
  functions: {
    "appId()": FunctionFragment;
    "kernel()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "appId" | "kernel"): FunctionFragment;

  encodeFunctionData(functionFragment: "appId", values?: undefined): string;
  encodeFunctionData(functionFragment: "kernel", values?: undefined): string;

  decodeFunctionResult(functionFragment: "appId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;

  events: {};
}

export interface AppStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AppStorageInterface;

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
    appId(overrides?: CallOverrides): Promise<[string]>;

    kernel(overrides?: CallOverrides): Promise<[string]>;
  };

  appId(overrides?: CallOverrides): Promise<string>;

  kernel(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    appId(overrides?: CallOverrides): Promise<string>;

    kernel(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    appId(overrides?: CallOverrides): Promise<BigNumber>;

    kernel(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    appId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    kernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
