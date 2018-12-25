pragma solidity >=0.4.21 <0.6.0;

import {ERC721 as ERC721} from "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";

contract Marshal {
    address public owner;
    address public token;

    constructor(address _token) public {
        owner = msg.sender;
        token = _token;
    }

    function retrieveToken(uint256 tokenId, uint8 v, bytes32 r, bytes32 s) public returns (bool) {
        validateSignature(tokenId, v, r, s);
        ERC721(token).transferFrom(owner, msg.sender, tokenId);
    }

    function validateSignature(uint256 tokenId, uint8 v, bytes32 r, bytes32 s) private view {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 prefixedHash = keccak256(abi.encodePacked(prefix, tokenId));
        require(ecrecover(prefixedHash, v, r, s) == owner, "ecrecover error: either tokenId, signature, or owner are mismatched");
    }
}