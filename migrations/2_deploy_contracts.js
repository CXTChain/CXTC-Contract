var CXTCContract = artifacts.require("./CXTCContract.sol");
var DPOS = artifacts.require("./DPOS.sol");
var CoinToken = artifacts.require("./CoinToken.sol");

module.exports = function (deployer) {
    deployer.deploy(CXTCContract);
    deployer.deploy(DPOS);
    deployer.deploy(CoinToken, "CoinToken", "CT", 18, 10000, "0x307D7AC6c51C678EE3F95B7Ed0816930758e27cA");
};
