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
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface PublicResolverInterface extends utils.Interface {
  functions: {
    "supportsInterface(bytes4)": FunctionFragment;
    "setText(bytes32,string,string)": FunctionFragment;
    "ABI(bytes32,uint256)": FunctionFragment;
    "setPubkey(bytes32,bytes32,bytes32)": FunctionFragment;
    "content(bytes32)": FunctionFragment;
    "addr(bytes32)": FunctionFragment;
    "text(bytes32,string)": FunctionFragment;
    "setABI(bytes32,uint256,bytes)": FunctionFragment;
    "name(bytes32)": FunctionFragment;
    "setName(bytes32,string)": FunctionFragment;
    "setContent(bytes32,bytes32)": FunctionFragment;
    "pubkey(bytes32)": FunctionFragment;
    "setAddr(bytes32,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "supportsInterface"
      | "setText"
      | "ABI"
      | "setPubkey"
      | "content"
      | "addr"
      | "text"
      | "setABI"
      | "name"
      | "setName"
      | "setContent"
      | "pubkey"
      | "setAddr"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setText",
    values: [BytesLike, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "ABI",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPubkey",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "content", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "addr", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "text",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setABI",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "name", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "setName",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setContent",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "pubkey", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "setAddr",
    values: [BytesLike, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setText", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ABI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPubkey", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "content", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "text", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setABI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setContent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pubkey", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setAddr", data: BytesLike): Result;

  events: {
    "AddrChanged(bytes32,address)": EventFragment;
    "ContentChanged(bytes32,bytes32)": EventFragment;
    "NameChanged(bytes32,string)": EventFragment;
    "ABIChanged(bytes32,uint256)": EventFragment;
    "PubkeyChanged(bytes32,bytes32,bytes32)": EventFragment;
    "TextChanged(bytes32,string,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddrChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContentChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NameChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ABIChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PubkeyChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TextChanged"): EventFragment;
}

export interface AddrChangedEventObject {
  node: string;
  a: string;
}
export type AddrChangedEvent = TypedEvent<
  [string, string],
  AddrChangedEventObject
>;

export type AddrChangedEventFilter = TypedEventFilter<AddrChangedEvent>;

export interface ContentChangedEventObject {
  node: string;
  hash: string;
}
export type ContentChangedEvent = TypedEvent<
  [string, string],
  ContentChangedEventObject
>;

export type ContentChangedEventFilter = TypedEventFilter<ContentChangedEvent>;

export interface NameChangedEventObject {
  node: string;
  name: string;
}
export type NameChangedEvent = TypedEvent<
  [string, string],
  NameChangedEventObject
>;

export type NameChangedEventFilter = TypedEventFilter<NameChangedEvent>;

export interface ABIChangedEventObject {
  node: string;
  contentType: BigNumber;
}
export type ABIChangedEvent = TypedEvent<
  [string, BigNumber],
  ABIChangedEventObject
>;

export type ABIChangedEventFilter = TypedEventFilter<ABIChangedEvent>;

export interface PubkeyChangedEventObject {
  node: string;
  x: string;
  y: string;
}
export type PubkeyChangedEvent = TypedEvent<
  [string, string, string],
  PubkeyChangedEventObject
>;

export type PubkeyChangedEventFilter = TypedEventFilter<PubkeyChangedEvent>;

export interface TextChangedEventObject {
  node: string;
  indexedKey: string;
  key: string;
}
export type TextChangedEvent = TypedEvent<
  [string, string, string],
  TextChangedEventObject
>;

export type TextChangedEventFilter = TypedEventFilter<TextChangedEvent>;

export interface PublicResolver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PublicResolverInterface;

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
    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setText(
      node: BytesLike,
      key: string,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ABI(
      node: BytesLike,
      contentTypes: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { contentType: BigNumber; data: string }>;

    setPubkey(
      node: BytesLike,
      x: BytesLike,
      y: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    content(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { ret: string }>;

    addr(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { ret: string }>;

    text(
      node: BytesLike,
      key: string,
      overrides?: CallOverrides
    ): Promise<[string] & { ret: string }>;

    setABI(
      node: BytesLike,
      contentType: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { ret: string }>;

    setName(
      node: BytesLike,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setContent(
      node: BytesLike,
      hash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pubkey(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string] & { x: string; y: string }>;

    setAddr(
      node: BytesLike,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  supportsInterface(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setText(
    node: BytesLike,
    key: string,
    value: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ABI(
    node: BytesLike,
    contentTypes: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { contentType: BigNumber; data: string }>;

  setPubkey(
    node: BytesLike,
    x: BytesLike,
    y: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  content(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  addr(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  text(
    node: BytesLike,
    key: string,
    overrides?: CallOverrides
  ): Promise<string>;

  setABI(
    node: BytesLike,
    contentType: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  setName(
    node: BytesLike,
    name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setContent(
    node: BytesLike,
    hash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pubkey(
    node: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string] & { x: string; y: string }>;

  setAddr(
    node: BytesLike,
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setText(
      node: BytesLike,
      key: string,
      value: string,
      overrides?: CallOverrides
    ): Promise<void>;

    ABI(
      node: BytesLike,
      contentTypes: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { contentType: BigNumber; data: string }>;

    setPubkey(
      node: BytesLike,
      x: BytesLike,
      y: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    content(node: BytesLike, overrides?: CallOverrides): Promise<string>;

    addr(node: BytesLike, overrides?: CallOverrides): Promise<string>;

    text(
      node: BytesLike,
      key: string,
      overrides?: CallOverrides
    ): Promise<string>;

    setABI(
      node: BytesLike,
      contentType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    name(node: BytesLike, overrides?: CallOverrides): Promise<string>;

    setName(
      node: BytesLike,
      name: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setContent(
      node: BytesLike,
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    pubkey(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string] & { x: string; y: string }>;

    setAddr(
      node: BytesLike,
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddrChanged(bytes32,address)"(
      node?: BytesLike | null,
      a?: null
    ): AddrChangedEventFilter;
    AddrChanged(node?: BytesLike | null, a?: null): AddrChangedEventFilter;

    "ContentChanged(bytes32,bytes32)"(
      node?: BytesLike | null,
      hash?: null
    ): ContentChangedEventFilter;
    ContentChanged(
      node?: BytesLike | null,
      hash?: null
    ): ContentChangedEventFilter;

    "NameChanged(bytes32,string)"(
      node?: BytesLike | null,
      name?: null
    ): NameChangedEventFilter;
    NameChanged(node?: BytesLike | null, name?: null): NameChangedEventFilter;

    "ABIChanged(bytes32,uint256)"(
      node?: BytesLike | null,
      contentType?: BigNumberish | null
    ): ABIChangedEventFilter;
    ABIChanged(
      node?: BytesLike | null,
      contentType?: BigNumberish | null
    ): ABIChangedEventFilter;

    "PubkeyChanged(bytes32,bytes32,bytes32)"(
      node?: BytesLike | null,
      x?: null,
      y?: null
    ): PubkeyChangedEventFilter;
    PubkeyChanged(
      node?: BytesLike | null,
      x?: null,
      y?: null
    ): PubkeyChangedEventFilter;

    "TextChanged(bytes32,string,string)"(
      node?: BytesLike | null,
      indexedKey?: string | null,
      key?: null
    ): TextChangedEventFilter;
    TextChanged(
      node?: BytesLike | null,
      indexedKey?: string | null,
      key?: null
    ): TextChangedEventFilter;
  };

  estimateGas: {
    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setText(
      node: BytesLike,
      key: string,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ABI(
      node: BytesLike,
      contentTypes: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setPubkey(
      node: BytesLike,
      x: BytesLike,
      y: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    content(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    addr(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    text(
      node: BytesLike,
      key: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setABI(
      node: BytesLike,
      contentType: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    setName(
      node: BytesLike,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setContent(
      node: BytesLike,
      hash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pubkey(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    setAddr(
      node: BytesLike,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setText(
      node: BytesLike,
      key: string,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ABI(
      node: BytesLike,
      contentTypes: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setPubkey(
      node: BytesLike,
      x: BytesLike,
      y: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    content(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addr(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    text(
      node: BytesLike,
      key: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setABI(
      node: BytesLike,
      contentType: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setName(
      node: BytesLike,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setContent(
      node: BytesLike,
      hash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pubkey(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAddr(
      node: BytesLike,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
