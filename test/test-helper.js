const sinon = require("sinon");
const chai = require("chai");
const sinonChai = require("sinon-chai");
const { ethers: hardhatEthers, waffle } = require("hardhat");

chai.use(sinonChai);

afterEach(() => {
  sinon.restore();
});

const getTestWallet = () => waffle.provider.getWallets()[0];

exports.deployTestContract = (name) => {
  return hardhatEthers
    .getContractFactory(name, getTestWallet())
    .then((contractFactory) => contractFactory.deploy());
}

exports.getTestWallet = getTestWallet;