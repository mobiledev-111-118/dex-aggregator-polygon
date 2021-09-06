const { assert } = require("chai");
const { ethers } = require("ethers");


describe('PolysafemoonERC20', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async () => {
        const PSMoonToken = ethers.getContractFactory('PolysafemoonERC20');
        this.psmoon = await PSMoonToken.new({ from: minter });
    });

    it('mint', async () => {
        await this.psmoon.mint(alice, 1000, { from: minter });
        assert.equal((await this.psmoon.balanceOf(alice)).toString(), '1000');
    })
});