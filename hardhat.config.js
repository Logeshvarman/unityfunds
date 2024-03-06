require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337 // Hardhat's default network chain ID, you can leave it as it is
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/PRRrt-YNzgeCHXmVBPelOrLli1yQFd2c", // Replace with Polygon Mumbai RPC endpoint
      accounts: [`c310f322a478af11ff8ff33b46b86e81cc371195f884829c41bfbaaf13e6cbf2`] // Replace with your account's private key
    }
  }
};
