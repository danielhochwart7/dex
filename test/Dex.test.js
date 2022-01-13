const Dex = artifacts.require("Dex")

require("chai")
    .use(require("chai-as-promised"))
    .should()

contract("Dex", (accounts) => {

    describe("Dex deployment", async () => {
        it("Should print name", async() => {
            let dex = await Dex.new()
            const name = await dex.name()
            assert.equal(name, "My Dex")
        })
    })

})