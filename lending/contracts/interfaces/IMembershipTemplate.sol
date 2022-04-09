
pragma solidity 0.8.13;

interface IMembershipTemplate {
    /**
    * @dev Create a new MiniMe token and deploy a Membership DAO. This function does not allow Payroll
    *      to be setup due to gas limits.
    * @param _tokenName String with the name for the token used by share holders in the organization
    * @param _tokenSymbol String with the symbol for the token used by share holders in the organization
    * @param _id String with the name for org, will assign `[id].aragonid.eth`
    * @param _members Array of member addresses (1 token will be minted for each member)
    * @param _votingSettings Array of [supportRequired, minAcceptanceQuorum, voteDuration] to set up the voting app of the organization
    * @param _financePeriod Initial duration for accounting periods, it can be set to zero in order to use the default of 30 days.
    * @param _useAgentAsVault Boolean to tell whether to use an Agent app as a more advanced form of Vault app
    */
    function newTokenAndInstance(
        string memory _tokenName,
        string memory _tokenSymbol,
        string memory _id,
        address[] memory _members,
        uint64[3] memory _votingSettings,
        uint64 _financePeriod,
        bool _useAgentAsVault
    ) external returns(address);

    /**
    * @dev Create a new MiniMe token and cache it for the user
    * @param _name String with the name for the token used by share holders in the organization
    * @param _symbol String with the symbol for the token used by share holders in the organization
    */
    function newToken(string memory _name, string memory _symbol) external returns (address);

    /**
    * @dev Deploy a Membership DAO using a previously cached MiniMe token
    * @param _id String with the name for org, will assign `[id].aragonid.eth`
    * @param _members Array of member addresses (1 token will be minted for each member)
    * @param _votingSettings Array of [supportRequired, minAcceptanceQuorum, voteDuration] to set up the voting app of the organization
    * @param _financePeriod Initial duration for accounting periods, it can be set to zero in order to use the default of 30 days.
    * @param _useAgentAsVault Boolean to tell whether to use an Agent app as a more advanced form of Vault app
    */
    function newInstance(
        string memory _id,
        address[] memory _members,
        uint64[3] memory _votingSettings,
        uint64 _financePeriod,
        bool _useAgentAsVault
    ) external;

    /**
    * @dev Deploy a Membership DAO using a previously cached MiniMe token
    * @param _id String with the name for org, will assign `[id].aragonid.eth`
    * @param _members Array of member addresses (1 token will be minted for each member)
    * @param _votingSettings Array of [supportRequired, minAcceptanceQuorum, voteDuration] to set up the voting app of the organization
    * @param _financePeriod Initial duration for accounting periods, it can be set to zero in order to use the default of 30 days.
    * @param _useAgentAsVault Boolean to tell whether to use an Agent app as a more advanced form of Vault app
    * @param _payrollSettings Array of [address denominationToken , IFeed priceFeed, uint64 rateExpiryTime, address employeeManager]
             for the payroll app. The `employeeManager` can be set to `0x0` in order to use the voting app as the employee manager.
    */
    function newInstance(
        string memory _id,
        address[] memory _members,
        uint64[3] memory _votingSettings,
        uint64 _financePeriod,
        bool _useAgentAsVault,
        uint256[4] memory _payrollSettings
    ) external;

}
