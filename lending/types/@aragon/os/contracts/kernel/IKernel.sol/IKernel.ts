/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../../common";
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

export interface IKernelInterface extends utils.Interface {
  functions: {
    "getRecoveryVault()": FunctionFragment;
    "allowRecoverability(address)": FunctionFragment;
    "transferToVault(address)": FunctionFragment;
    "setApp(bytes32,bytes32,address)": FunctionFragment;
    "getApp(bytes32,bytes32)": FunctionFragment;
    "acl()": FunctionFragment;
    "hasPermission(address,address,bytes32,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getRecoveryVault"
      | "allowRecoverability"
      | "transferToVault"
      | "setApp"
      | "getApp"
      | "acl"
      | "hasPermission"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getRecoveryVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowRecoverability",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferToVault",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setApp",
    values: [BytesLike, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getApp",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "acl", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hasPermission",
    values: [string, string, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getRecoveryVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowRecoverability",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferToVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setApp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getApp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "acl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasPermission",
    data: BytesLike
  ): Result;

  events: {
    "RecoverToVault(address,address,uint256)": EventFragment;
    "SetApp(bytes32,bytes32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RecoverToVault"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetApp"): EventFragment;
}

export interface RecoverToVaultEventObject {
  vault: string;
  token: string;
  amount: BigNumber;
}
export type RecoverToVaultEvent = TypedEvent<
  [string, string, BigNumber],
  RecoverToVaultEventObject
>;

export type RecoverToVaultEventFilter = TypedEventFilter<RecoverToVaultEvent>;

export interface SetAppEventObject {
  namespace: string;
  appId: string;
  app: string;
}
export type SetAppEvent = TypedEvent<
  [string, string, string],
  SetAppEventObject
>;

export type SetAppEventFilter = TypedEventFilter<SetAppEvent>;

export interface IKernel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IKernelInterface;

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
    getRecoveryVault(overrides?: CallOverrides): Promise<[string]>;

    allowRecoverability(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferToVault(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApp(
      namespace: BytesLike,
      appId: BytesLike,
      app: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getApp(
      namespace: BytesLike,
      appId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    acl(overrides?: CallOverrides): Promise<[string]>;

    hasPermission(
      who: string,
      where: string,
      what: BytesLike,
      how: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  getRecoveryVault(overrides?: CallOverrides): Promise<string>;

  allowRecoverability(
    token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferToVault(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApp(
    namespace: BytesLike,
    appId: BytesLike,
    app: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getApp(
    namespace: BytesLike,
    appId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  acl(overrides?: CallOverrides): Promise<string>;

  hasPermission(
    who: string,
    where: string,
    what: BytesLike,
    how: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    getRecoveryVault(overrides?: CallOverrides): Promise<string>;

    allowRecoverability(
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferToVault(token: string, overrides?: CallOverrides): Promise<void>;

    setApp(
      namespace: BytesLike,
      appId: BytesLike,
      app: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getApp(
      namespace: BytesLike,
      appId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    acl(overrides?: CallOverrides): Promise<string>;

    hasPermission(
      who: string,
      where: string,
      what: BytesLike,
      how: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "RecoverToVault(address,address,uint256)"(
      vault?: string | null,
      token?: string | null,
      amount?: null
    ): RecoverToVaultEventFilter;
    RecoverToVault(
      vault?: string | null,
      token?: string | null,
      amount?: null
    ): RecoverToVaultEventFilter;

    "SetApp(bytes32,bytes32,address)"(
      namespace?: BytesLike | null,
      appId?: BytesLike | null,
      app?: null
    ): SetAppEventFilter;
    SetApp(
      namespace?: BytesLike | null,
      appId?: BytesLike | null,
      app?: null
    ): SetAppEventFilter;
  };

  estimateGas: {
    getRecoveryVault(overrides?: CallOverrides): Promise<BigNumber>;

    allowRecoverability(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferToVault(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApp(
      namespace: BytesLike,
      appId: BytesLike,
      app: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getApp(
      namespace: BytesLike,
      appId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    acl(overrides?: CallOverrides): Promise<BigNumber>;

    hasPermission(
      who: string,
      where: string,
      what: BytesLike,
      how: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRecoveryVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowRecoverability(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferToVault(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApp(
      namespace: BytesLike,
      appId: BytesLike,
      app: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getApp(
      namespace: BytesLike,
      appId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    acl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasPermission(
      who: string,
      where: string,
      what: BytesLike,
      how: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
