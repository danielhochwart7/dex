const { assert } = require("chai")

const Dex = artifacts.require("Dex")
const Dho = artifacts.require("Dho")

require("chai")
    .use(require("chai-as-promised"))
    .should()

const dexContractName = "My Dex"
const dhoTokenSymbol = "DHO"

function tokens(n) {
    return web3.utils.toWei(n, "ether")
}

contract("Dex", ([deployer, investor]) => {
    let dho, dex

    before(async () => {
        dho = await Dho.new()
        dex = await Dex.new(dho.address)

        dho.transfer(dex.address, tokens("1000000"))
    })

    describe("Dex deployment", async () => {
        it("Should have a name", async () => {
            const name = await dex.name()
            assert.equal(name, dexContractName)
        })
        it("Should have Dho tokens", async() => {
            const dexTokenBalance = await dho.balanceOf(dex.address)
            assert.equal(dexTokenBalance, tokens("1000000"))
        })
    })

    describe("Dho Token deployment", async () => {
        it("Should have symbol DHO", async() => {
            const symbol = await dho.symbol()
            assert.equal(symbol, dhoTokenSymbol)
        })
        it("Should have name Dho Token", async() => {
            const name = await dho.name()
            assert.equal(name, "Dho Token")
        })
    })

    describe("buyTokens()", async = () => {
        it("Sould transfer tokens to investor based on a token fixed price of 1ETH:100DHO", async () => {
            const result = await dex.buyTokens({from: investor, value: tokens("1")}) // 1 ETH
            const investorTokenBalance = await dho.balanceOf(investor)
            assert.equal(investorTokenBalance, tokens("100")) // 100 DHO
            console.log(result)
        })
    })




})