const { assert } = require("chai")

const Profile = artifacts.require("Profile")

require("chai")
    .use(require("chai-as-promised"))
    .should()

function tokens(n) {
    return web3.utils.toWei(n, "ether")
}

contract("Profile", ([deployer, investor]) => {
    let profile;

    before(async () => {
        profile = await Profile.new()
        await profile.setName("Daniel Hochwart");
        console.log("BEFORE EXECUTED...")
    })

    describe("Profile deployment", async () => {
        it("Should show Daniel Hochwart as name", async () => {
            const name = await profile.name();
            assert.equal("Daniel Hochwart", name);
        })
    })
});