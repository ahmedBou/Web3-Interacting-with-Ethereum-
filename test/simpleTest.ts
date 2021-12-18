import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import exp = require("constants");

describe("hello world", function() {
    it("should say hi", async function () {
        // 1. setup
        // 2. Deploy our contract
        // 3. call our function to test

        const HelloWorld = await ethers.getContractFactory("HelloWorld");

        const hello = await HelloWorld.deploy();
        await hello.deployed();

        expect(await hello.hello()).to.equal("Hello world");
    })
});

