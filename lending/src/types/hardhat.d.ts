/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import * as Contracts from ".";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";
import { ethers } from "ethers";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "IERC777",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC777__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "SuperAppBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SuperAppBase__factory>;
    getContractFactory(
      name: "IConstantFlowAgreementV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IConstantFlowAgreementV1__factory>;
    getContractFactory(
      name: "ISuperAgreement",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISuperAgreement__factory>;
    getContractFactory(
      name: "ISuperApp",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISuperApp__factory>;
    getContractFactory(
      name: "ISuperfluid",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISuperfluid__factory>;
    getContractFactory(
      name: "ISuperfluidGovernance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISuperfluidGovernance__factory>;
    getContractFactory(
      name: "ISuperfluidToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISuperfluidToken__factory>;
    getContractFactory(
      name: "ISuperToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISuperToken__factory>;
    getContractFactory(
      name: "ISuperTokenFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISuperTokenFactory__factory>;
    getContractFactory(
      name: "ERC20WithTokenInfo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20WithTokenInfo__factory>;
    getContractFactory(
      name: "TokenInfo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenInfo__factory>;
    getContractFactory(
      name: "RedirectAll",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RedirectAll__factory>;
    getContractFactory(
      name: "TradeableCashflow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TradeableCashflow__factory>;

    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "IERC777",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC777>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "SuperAppBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SuperAppBase>;
    getContractAt(
      name: "IConstantFlowAgreementV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IConstantFlowAgreementV1>;
    getContractAt(
      name: "ISuperAgreement",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISuperAgreement>;
    getContractAt(
      name: "ISuperApp",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISuperApp>;
    getContractAt(
      name: "ISuperfluid",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISuperfluid>;
    getContractAt(
      name: "ISuperfluidGovernance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISuperfluidGovernance>;
    getContractAt(
      name: "ISuperfluidToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISuperfluidToken>;
    getContractAt(
      name: "ISuperToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISuperToken>;
    getContractAt(
      name: "ISuperTokenFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISuperTokenFactory>;
    getContractAt(
      name: "ERC20WithTokenInfo",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20WithTokenInfo>;
    getContractAt(
      name: "TokenInfo",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenInfo>;
    getContractAt(
      name: "RedirectAll",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RedirectAll>;
    getContractAt(
      name: "TradeableCashflow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TradeableCashflow>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
