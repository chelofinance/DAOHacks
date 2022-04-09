// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import {
    ISuperfluid,
    ISuperToken,
    ISuperAgreement,
    ISuperApp,
    SuperAppDefinitions
} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {
    IConstantFlowAgreementV1
} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Tanda is Ownable, ISuperApp { 

    /// @dev Entrance fee for the game (hardcoded to $1)
    /// @dev Minimum flow rate to participate (hardcoded to $10 / mo)
    int96 constant private _MINIMUM_FLOW_RATE = int96(10e18 / 3600 * 24 * 30);

    string constant private _ERR_STR_NO_TICKET = "LotterySuperApp: need ticket to play";
    string constant private _ERR_STR_LOW_FLOW_RATE = "LotterySuperApp: flow rate too low";

    ISuperfluid private _host; // host
    IConstantFlowAgreementV1 private _cfa; // the stored constant flow agreement class address
    ISuperToken private _acceptedToken; // accepted token

    mapping(address=>bool) private _members;
    address private _borrower;

    modifier onlyHost() {
        require(msg.sender == address(_host), "LotterySuperApp: support only one host");
        _;
    }

    modifier onlyExpected(ISuperToken superToken, address agreementClass) {
        require(_isSameToken(superToken), "LotterySuperApp: not accepted token");
        require(_isCFAv1(agreementClass), "LotterySuperApp: only CFAv1 supported");
        _;
    }

    event BorrowerChanged(address winner);

    constructor(
        ISuperfluid host,
        IConstantFlowAgreementV1 cfa,
        ISuperToken acceptedToken
    ) {
        assert(address(host) != address(0));
        assert(address(cfa) != address(0));
        assert(address(acceptedToken) != address(0));

        _host = host;
        _cfa = cfa;
        _acceptedToken = acceptedToken;

        uint256 configWord =
            SuperAppDefinitions.APP_LEVEL_FINAL;

        _host.registerApp(configWord);
    }

    function toggleMember(address _member,bool added) public onlyOwner{
        _members[_member] = added;
    }
    /**************************************************************************
     * Game Logic
     *************************************************************************/

    function currentWinner()
        external view
        returns (
            uint256 drawingTime,
            address player,
            int96 flowRate
        )
    {
        if (_borrower != address(0)) {
            (drawingTime, flowRate,,) = _cfa.getFlow(_acceptedToken, address(this), _borrower);
            player = _borrower;
        }
    }


    /// @dev Check requirements before letting the user playing the game
    function _beforePlay(
        bytes calldata ctx
    )
        private view
        returns (bytes memory cbdata)
    {
        ISuperfluid.Context memory callContext = _host.decodeCtx(ctx);
        cbdata = abi.encode(callContext.msgSender);
    }

    /// @dev Play the game
    function _participate(
        bytes calldata ctx,
        address agreementClass,
        bytes32 agreementId,
        bytes calldata cbdata
    )
        private
        returns (bytes memory newCtx)
    {
        (address player) = abi.decode(cbdata, (address));

        (,int96 flowRate,,) = IConstantFlowAgreementV1(agreementClass).getFlowByID(_acceptedToken, agreementId);
        require(flowRate >= _MINIMUM_FLOW_RATE, _ERR_STR_LOW_FLOW_RATE);
        require(_members[ player ],"NOT_WHITELISTED");

        return _draw(player, ctx);
    }

    /// @dev Play the game
    function _quit(
        bytes calldata ctx
    )
        private
        returns (bytes memory newCtx)
    {
        ISuperfluid.Context memory callContext = _host.decodeCtx(ctx);

        _members[ callContext.msgSender ] = false;

        return _draw(callContext.msgSender, ctx);
    }

    // @dev Make a new draw
    function _draw(
       address newBorrower,
        bytes calldata ctx
    )
        private
        returns (bytes memory newCtx)
    {
        require(_members[newBorrower],'BORROWER not in Tanda');

        address oldBorrower = _borrower;
        _borrower = newBorrower;
        newCtx = ctx;

        // delete flow to old winner 
        if (oldBorrower != address(0)) {
            (newCtx, ) = _host.callAgreementWithContext(
                _cfa,
                abi.encodeWithSelector(
                    _cfa.deleteFlow.selector,
                    _acceptedToken,
                    address(this),
                    oldBorrower,
                    new bytes(0)
                ),
                "0x",
                newCtx
            );
        }

        // create flow to new winner
        if (_borrower != address(0)) {
            (newCtx, ) = _host.callAgreementWithContext(
                _cfa,
                abi.encodeWithSelector(
                    _cfa.createFlow.selector,
                    _acceptedToken,
                    _borrower,
                    _cfa.getNetFlow(_acceptedToken, address(this)),
                    new bytes(0)
                ),
                "0x",
                newCtx
            );
        }

        emit BorrowerChanged(_borrower);
    }

    /**************************************************************************
     * SuperApp callbacks
     *************************************************************************/

    function beforeAgreementCreated(
        ISuperToken superToken,
        address agreementClass,
        bytes32 agreementId,
        bytes calldata agreementData,
        bytes calldata ctx
    )
        external view override
        onlyHost
        onlyExpected(superToken, agreementClass)
        returns (bytes memory cbdata)
    {
        cbdata = _beforePlay(ctx);
    }

    function afterAgreementCreated(
        ISuperToken superToken,
        address agreementClass,
        bytes32 agreementId,
        bytes calldata agreementData,
        bytes calldata cbdata,
        bytes calldata ctx
    )
        external override
        onlyHost
        returns (bytes memory newCtx)
    {
        return _participate(ctx, agreementClass, agreementId, cbdata);
    }

    function beforeAgreementUpdated(
        ISuperToken superToken,
        address agreementClass,
        bytes32 agreementId,
        bytes calldata agreementData,
        bytes calldata ctx
    )
        external view override
        onlyHost
        onlyExpected(superToken, agreementClass)
        returns (bytes memory cbdata)
    {
        cbdata = _beforePlay(ctx);
    }

    function afterAgreementUpdated(
        ISuperToken superToken,
        address agreementClass,
        bytes32 agreementId,
        bytes calldata agreementData,
        bytes calldata cbdata,
        bytes calldata ctx
    )
        external override
        onlyHost
        returns (bytes memory newCtx)
    {
        return _participate(ctx, agreementClass, agreementId, cbdata);
    }

    function beforeAgreementTerminated(
        ISuperToken superToken,
        address agreementClass,
        bytes32 agreementId,
        bytes calldata agreementData,
        bytes calldata ctx
    )
        external view override
        onlyHost
        returns (bytes memory cbdata)
    {
        // According to the app basic law, we should never revert in a termination callback
        if (!_isSameToken(superToken) || !_isCFAv1(agreementClass)) return abi.encode(true);
        return abi.encode(false);
    }

    ///
    function afterAgreementTerminated(
        ISuperToken superToken,
        address agreementClass,
        bytes32 agreementId,
        bytes calldata agreementData,
        bytes calldata cbdata,
        bytes calldata ctx
    )
        external override
        onlyHost
        returns (bytes memory newCtx)
    {
        // According to the app basic law, we should never revert in a termination callback
        (bool shouldIgnore) = abi.decode(cbdata, (bool));
        if (shouldIgnore) return ctx;
        return _quit(ctx);
    }

    function _isSameToken(ISuperToken superToken) private view returns (bool) {
        return address(superToken) == address(_acceptedToken);
    }

    function _isCFAv1(address agreementClass) private view returns (bool) {
        return ISuperAgreement(agreementClass).agreementType()
            == keccak256("org.superfluid-finance.agreements.ConstantFlowAgreement.v1");
    }

}
 
