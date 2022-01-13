const Dex = artifacts.require("Dex")
const Dho = artifacts.require("Dho")

require("chai")
    .use(require("chai-as-promised"))
    .should()

const dexContractName = "My Dex"
const dhoTokenSymbol = "DHO"

contract("Dex", (accounts) => {
    let dho, dex

    before(async () => {
        dho = await Dho.new()
        dex = await Dex.new(dho.address)
    })

    describe("Dex deployment", async () => {
        it("Should have a name", async() => {
            const name = await dex.name()
            assert.equal(name, dexContractName)
        })
    })

    describe("DHO deployment", async () => {
        it("Should have symbol DHO", async() => {
            const symbol = await dho.symbol()
            assert.equal(symbol, dhoTokenSymbol)
        })
        it("Should have name Token Dho", async() => {
            const name = await dho.name()
            assert.equal(name, "Dho Token")
        })
    })
})