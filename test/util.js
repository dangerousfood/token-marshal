const ABI = require('ethereumjs-abi');
const util = require("ethereumjs-util");

exports.getSignature = async function (account, tokenId) {
  // Message hash for signing.
  const args = [tokenId];
  const argTypes = ['uint256'];
  const msg = ABI.soliditySHA3(argTypes, args);
  const sig = await web3.eth.sign(util.bufferToHex(msg), account);
  //console.log(sig);
  const { v, r, s } = util.fromRpcSig(sig);
  return {v:v, r:r, s:s}
}