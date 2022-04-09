/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, Signer, utils } from "ethers";

export interface BaseTemplateInterface extends utils.Interface {
  functions: {};

  events: {
    "DeployDao(address)": EventFragment;
    "SetupDao(address)": EventFragment;
    "DeployToken(address)": EventFragment;
    "InstalledApp(address,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeployDao"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetupDao"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DeployToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InstalledApp"): EventFragment;
}

export interface DeployDaoEventObject {
  dao: string;
}
export type DeployDaoEvent = TypedEvent<[string], DeployDaoEventObject>;

export type DeployDaoEventFilter = TypedEventFilter<DeployDaoEvent>;

export interface SetupDaoEventObject {
  dao: string;
}
export type SetupDaoEvent = TypedEvent<[string], SetupDaoEventObject>;

export type SetupDaoEventFilter = TypedEventFilter<SetupDaoEvent>;

export interface DeployTokenEventObject {
  token: string;
}
export type DeployTokenEvent = TypedEvent<[string], DeployTokenEventObject>;

export type DeployTokenEventFilter = TypedEventFilter<DeployTokenEvent>;

export interface InstalledAppEventObject {
  appProxy: string;
  appId: string;
}
export type InstalledAppEvent = TypedEvent<
  [string, string],
  InstalledAppEventObject
>;

export type InstalledAppEventFilter = TypedEventFilter<InstalledAppEvent>;

export interface BaseTemplate extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseTemplateInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "DeployDao(address)"(dao?: null): DeployDaoEventFilter;
    DeployDao(dao?: null): DeployDaoEventFilter;

    "SetupDao(address)"(dao?: null): SetupDaoEventFilter;
    SetupDao(dao?: null): SetupDaoEventFilter;

    "DeployToken(address)"(token?: null): DeployTokenEventFilter;
    DeployToken(token?: null): DeployTokenEventFilter;

    "InstalledApp(address,bytes32)"(
      appProxy?: null,
      appId?: null
    ): InstalledAppEventFilter;
    InstalledApp(appProxy?: null, appId?: null): InstalledAppEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}