const Dex = artifacts.require("Dex");
const Dho = artifacts.require("Dho");

module.exports = async function(deployer) {
    await deployer.deploy(Dho);
    const dho = await Dho.deployed()

    await deployer.deploy(Dex, dho.address);
    const dex = await Dex.deployed()

    //Transfer 1 million tokens from the deployer to the Dex
    await dho.transfer(dex.address, "1000000000000000000000000")
}