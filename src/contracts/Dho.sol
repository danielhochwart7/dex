//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract Dho is ERC20 {
    
    constructor() ERC20("Dho Token", "DHO") {
        _mint(msg.sender, 1000000000000000000000000);
    }
}