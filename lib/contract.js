const { ethers } = require("ethers");
const { getContractAt } = require("@nomiclabs/hardhat-ethers/internal/helpers");
const {getContractAddress, getPrivateKey} = require("../Environment");
const {getProvider} = require("./provider");

exports.getContract = (
  name,
  hre
) => {
  const WALLET = new ethers.Wallet(getPrivateKey(), getProvider());
  return getContractAt(hre, name, getContractAddress(), WALLET);
}