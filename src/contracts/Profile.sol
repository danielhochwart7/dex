//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "openzeppelin-solidity/contracts/access/Ownable.sol";

contract Profile is Ownable {
    string public name;
    string public dob;

    struct Experience {
        string startDate;
        string endDate;
        string companyName;
        string description;
    }
    
    Experience[] public experiences;

    function setName(string memory _name) onlyOwner public {
        name = _name;
    }

    function setDob(string memory _dob) onlyOwner public {
        dob = _dob;
    }

    function addExperience(string memory startDate, string memory endDate, string memory companyName, string memory description) onlyOwner public {
        experiences.push(Experience(startDate, endDate, companyName, description));
    }
}