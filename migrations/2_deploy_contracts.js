var Marshal = artifacts.require("./Marshal.sol");
var ERC721 = artifacts.require("../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC721).then(instance => {
    deployer.deploy(Marshal, instance.address);
  });
};
