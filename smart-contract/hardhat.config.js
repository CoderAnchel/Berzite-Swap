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
        'e16336ce359cabf969decdf25ac362bdc0fd58573a133fb192ab60f7efad0bef'
      ]
    }
  },
};
