require("@nomiclabs/hardhat-waffle");



// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/7m2nVK0xbq-lZPCMiX3tW2RngLPuBFif',
      accounts: [
        '839bc8e60b36639750d5edb940a9dff76bbc1d92a7074e459b8c317ec4ac2cab'
      ]
    }
  },
};
