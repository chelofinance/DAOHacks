import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import {config as dotenvConfig} from "dotenv";
import "hardhat-gas-reporter";
import {HardhatUserConfig} from "hardhat/config";
import {NetworkUserConfig} from "hardhat/types";
import {resolve} from "path";
import "solidity-coverage";

dotenvConfig({path: resolve(__dirname, "./.env")});

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  etherscan: {
    //apiKey: {
    //arbitrumOne: process.env.ARBISCAN_API_KEY,
    //avalanche: process.env.SNOWTRACE_API_KEY,
    //bsc: process.env.BSCSCAN_API_KEY,
    //mainnet: process.env.ETHERSCAN_API_KEY,
    //optimisticEthereum: process.env.OPTIMISM_API_KEY,
    //polygon: process.env.POLYGONSCAN_API_KEY,
    //polygonMumbai: process.env.POLYGONSCAN_API_KEY,
    //rinkeby: process.env.ETHERSCAN_API_KEY,
    //},
  },
  gasReporter: {
    currency: "USD",
    enabled: process.env.REPORT_GAS ? true : false,
    excludeContracts: [],
    src: "./contracts",
  },
  networks: {
    hardhat: {},
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.13",
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
    outDir: "src/types",
    target: "ethers-v5",
  },
};

export default config;