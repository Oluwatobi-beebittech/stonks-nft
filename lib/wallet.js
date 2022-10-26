const { ethers } = require("ethers");
const { getProvider } = require("./provider");
const { getPrivateKey } = require("../Environment");

exports.getWallet = () => {
  return new ethers.Wallet(getPrivateKey(), getProvider());
}