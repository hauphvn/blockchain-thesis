var DocumentRegistry = artifacts.require("./DocumentRegistry.sol");

module.exports = function(deployer) {
    deployer.deploy(DocumentRegistry,{from:"0xF21FBB0B188184dD75be672C0dbD02A303556d82"});
};