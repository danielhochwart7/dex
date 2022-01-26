const { assert } = require("chai")

const Profile = artifacts.require("Profile")

require("chai")
    .use(require("chai-as-promised"))
    .should()

contract("Profile", ([owner, notOwner]) => {
    let profile;

    before(async () => {
        profile = await Profile.new()
    })

    describe("Profile deployment", async () => {
        it("Should set name", async () => {
            await profile.setName("Daniel Hochwart");
            const name = await profile.name();
            assert.equal(name, "Daniel Hochwart");
        })
        it("Should not allow notOwner to set name", async () => {
            await profile.setName("notOwner", {from: notOwner}).should.be.rejected;
        })
        it("Should set DOB", async () => {
            const expectedDob = "11-02-1989";
            await profile.setDob(expectedDob);
            const dob = await profile.dob();
            assert.equal(dob, expectedDob);
        })
        it("Should not allow notOwner to set DOB", async () => {
            await profile.setDob("12-02-1988", {from: notOwner}).should.be.rejected;
        })
        it("Should add two professional experiences and retrieve them properly", async () => {
            const startDateOne = "11-02-2008";
            const endDateOne = "04-07-2016";
            const companyNameOne = "BairesDev";
            const descriptionOne = "Python and APIs";

            const startDateTwo = "11-02-2008";
            const endDateTwo = "04-07-2016";
            const companyNameTwo = "BairesDev";
            const descriptionTwo = "Python and APIs";

            await profile.addExperience(startDateOne, endDateOne, companyNameOne, descriptionOne);
            await profile.addExperience(startDateTwo, endDateTwo, companyNameTwo, descriptionTwo);

            const expOne = await profile.experiences(0);
            assert.equal(expOne[0], startDateOne);
            assert.equal(expOne[1], endDateOne);
            assert.equal(expOne[2], companyNameOne);
            assert.equal(expOne[3], descriptionOne);

            const expTwo = await profile.experiences(1);
            assert.equal(expTwo[0], startDateTwo);
            assert.equal(expTwo[1], endDateTwo);
            assert.equal(expTwo[2], companyNameTwo);
            assert.equal(expTwo[3], descriptionTwo);
        })
        it("Should not allow notOwner to add professional experience", async () => {
            await profile.addExperience("startDate", "endDate", "companyName", "description", {from: notOwner})
                .should.be.rejected;
        })      
    })
});