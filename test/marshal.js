//import {util as util} from "./util.js"
const util = require("./util.js");
const Marshal = artifacts.require("./Marshal.sol");
const ERC721 = artifacts.require("../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol");

contract('Marshal', function(accounts){
    let marshal;
    let erc721;

    it("deploys erc721 contract", (done) => {
        //console.log(ERC721);
        ERC721.deployed().then(function(instance) {
            //console.log(instance);
            erc721 = instance;
            done();
        });
    });

    it("deploys marshal contract", (done) => {
        Marshal.deployed().then(function(instance) {
            //console.log(instance);
            marshal = instance;

            done();
        });
    });

    it("tests marshal retrieveToken method", async (done) => {
        Marshal.deployed().then(async (instance) => {
            let sig = await util.getSignature(accounts[0], 123);
            marshal.retrieveToken('123', sig.v, sig.r, sig.s, {from:accounts[0], });

        });
    });

})