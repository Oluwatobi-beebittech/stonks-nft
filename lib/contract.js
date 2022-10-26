const { ethers } = require("ethers");
const { getContractAt } = require("@nomiclabs/hardhat-ethers/internal/helpers");
const {getNFTContractAddress, getPrivateKey} = require("../Environment");

exports.getContract = (
  name,
  hre
) => {
  const WALLET = new ethers.Wallet(getPrivateKey(), getProvider());
  return getContractAt(hre, name, getNFTContractAddress(), WALLET);
}