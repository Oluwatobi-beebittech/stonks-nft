/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const argv = process.env.npm_config_argv;
if (argv?.original !== ["hardhat", "test"]) {
  require('dotenv').config();
}

require("./tasks/nft");

module.exports = {
  solidity: "0.8.17",
};
