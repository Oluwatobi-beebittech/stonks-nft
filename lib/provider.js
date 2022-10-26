const { ethers } = require("ethers");
const { getAPIKey, getNetwork } = require("../Environment");

exports.getProvider = () => {
  return ethers.getDefaultProvider(getNetwork(), {
    alchemy: getAPIKey(),
  });
}