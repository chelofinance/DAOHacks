
// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {
    ISuperToken,
    ISuperfluid
} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {
    IConstantFlowAgreementV1
} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol";

import "./interfaces/IMembershipTemplate.sol";
import "./Tanda.sol";

contract CreateTandaDAO { 
    IMembershipTemplate public template;
    Tanda tanda;

    constructor(
        IMembershipTemplate _template,
        ISuperfluid host,
        IConstantFlowAgreementV1 cfa,
        ISuperToken acceptedToken
    ){
        template = _template;
        tanda = new Tanda(host,cfa,acceptedToken);
    }

    function createTandaDAO(
        string memory _id,
        address[] memory  _members,
        uint64[3] memory _votingSettings
    ) public {
        (address agent) = template.newTokenAndInstance(
            "TANDA TOKEN DAO",
            "TTD",
            _id,
            _members,
            _votingSettings,
            0,
            true
        );
        for (uint i = 0; i < _members.length; i++)
            tanda.toggleMember(_members[i],true);
        tanda.transferOwnership(agent);
    }
} 
