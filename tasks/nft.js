const { task, types } = require("hardhat/config");
const { getContract } = require("../lib/contract");
const { getWallet } = require("../lib/wallet");
const { getPublicKey } = require("../Environment");

task("deploy-contract", "Deploy NFT contract").setAction(async (_, hre) => {
  return hre.ethers
    .getContractFactory("StonksNFT", getWallet())
    .then((contractFactory) => contractFactory.deploy())
    .then((result) => {
      process.stdout.write(`Contract address: ${result.address}`);
    });
});

task("mint-nft", "Mint an NFT")
  .addParam("tokenUri", "Your ERC721 Token URI", undefined, types.string)
  .setAction(async (tokenUri, hre) => {
    return getContract("StonksNFT", hre)
      .then((contract) => {
        return contract.mintNFT(getPublicKey(), tokenUri, {
          gasLimit: 500_000,
        });
      })
      .then((transaction) => {
        process.stdout.write(`TX hash: ${transaction.hash}`);
      });
  });