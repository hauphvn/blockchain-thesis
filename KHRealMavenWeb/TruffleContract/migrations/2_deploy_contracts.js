var ManageRealEsate = artifacts.require("./ManageRealEsate.sol");

module.exports = function(deployer) {
    deployer.deploy(ManageRealEsate,{from:"0x89E8416eA5b69863CCb34D3A5C74A86bf5549147"});
};