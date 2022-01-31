require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: "auto",
      chainId: 43113,
      accounts: ["50a70dd07254a31c06a8e765f6c4b8bb2072a86a5ab9ec0028c65b917efcfee9"],
    },
  },
};
