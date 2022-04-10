import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import {config as dotenvConfig} from "dotenv";
import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-web3";
import {HardhatUserConfig} from "hardhat/config";
import {NetworkUserConfig} from "hardhat/types";
import {resolve} from "path";
import "solidity-coverage";
import "./tasks";

dotenvConfig({path: resolve(__dirname, "./.env")});

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  gasReporter: {
    currency: "USD",
    enabled: process.env.REPORT_GAS ? true : false,
    excludeContracts: [],
    src: "./contracts",
  },
  networks: {
    hardhat: {},
    rinkeby: {
      url: process.env.RINKEBY_PROVIDER,
      accounts: [process.env.PRIVATE_KEY || ""],
      timeout: 10000000,
      //gasPrice: 65000000000
    },
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.13",
      },
      {
        version: "0.8.12",
      },
      {
        version: "0.4.24",
      },
    ],
    settings: {
      metadata: {
        // Not including the metadata hash
        // https://github.com/paulrberg/solidity-template/issues/31
        bytecodeHash: "none",
      },
      // Disable the optimizer when debugging
      // https://hardhat.org/hardhat-network/#solidity-optimizer-support
      optimizer: {
        enabled: true,
        runs: 800,
      },
    },
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },
};

export default config;
