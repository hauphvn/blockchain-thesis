var ManageRealEsate = artifacts.require("./ManageRealEsate.sol");

module.exports = function(deployer) {
    deployer.deploy(ManageRealEsate,{from:"0x25e79E10B18320d3f67E93031cA7a03243F6079f"});
};