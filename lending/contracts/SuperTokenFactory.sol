// SPDX-License-Identifier: AGPLv3
pragma solidity 0.8.13;

contract SimpleTokenFactory {
    
    function createERC20Wrapper(
        address underlyingToken,
        uint upgradability,
        string calldata name,
        string calldata symbol
    )
        external 
        returns (address)
    {
    }
}
