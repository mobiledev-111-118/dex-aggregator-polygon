/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { mnemonic, api_key } = require("./secrets.json");

task("accounts", "Prints the list of accounts", async () => {
    const accounts = await ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

module.exports = {
    defaultNetwork: "mainnet",
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545",
        },
        hardhat: {},
        testnet: {
            url: "https://rpc-mumbai.maticvigil.com",
            accounts: { mnemonic: mnemonic.testnet },
        },
        mainnet: {
            url: "https://rpc-mainnet.maticvigil.com/",
            accounts: { mnemonic: mnemonic.mainnet },
        },
    },
    etherscan: {
        // Your API key for Etherscan
        apiKey: api_key,
    },
    solidity: {
        version: "0.8.0",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            },
        },
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts",
    },
    mocha: {
        timeout: 2000000,
    },
};
