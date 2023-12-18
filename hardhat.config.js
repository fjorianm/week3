require('dotenv').config({ path: __dirname + "/.env" });
require("@nomiclabs/hardhat-waffle");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/arq3YzSXPyGYv0G1LuAznOro22IQMQEW`,
      accounts: [
        '6903786360795fc04974d809ce6b8b183d58f15ccc1de5aec05808a68f10f448', // Add more accounts if needed
        // '0xAnotherAddress', // Add more accounts in the same format
      ]
    }
  },
  solidity: {
    version: "0.8.7",
  }
};
