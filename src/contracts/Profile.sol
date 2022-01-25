//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "openzeppelin-solidity/contracts/access/Ownable.sol";

contract Profile is Ownable {
    string public name;

    function setName(string memory _name) onlyOwner public {
        name = _name;
    }
}