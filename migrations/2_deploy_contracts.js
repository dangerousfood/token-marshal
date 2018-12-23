var Marshal = artifacts.require("./Marshal.sol");
var ERC721 = artifacts.require("../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol");

module.exports = async function(deployer) {
  await deployer.deploy(ERC721);
  //console.log('ADDRESS:'+ERC721.address);
  await deployer.deploy(Marshal, ERC721.address);
};
