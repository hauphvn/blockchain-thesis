pragma solidity ^0.5.0;
contract ManageRealEsate {
    struct Land
    {
        address ownerAddress;
        string district;
        string street;
        uint cost;
        uint landID;
    }
    address public owner;   // government who creates the contract
    uint public totalLandsCounter; //total no of lands via this contract at any time
    string public forTest;
    constructor() public {
        owner = msg.sender;
        forTest = "Thanh cong";
    }
    event Add(address _owner, uint _landID);
    modifier isOwner
    {
        require(msg.sender == owner);
        _;
    }
    mapping(address => Land[]) public __ownedLands;
    //1. FIRST OPERATION
    //owner shall add lands via this function
    function addLand(string memory _district, string memory _street, uint _cost) public isOwner
    {
        totalLandsCounter = totalLandsCounter + 1;
        Land memory myLand = Land(
            {
            ownerAddress : msg.sender,
            district : _district,
            street: _street,
            cost : _cost,
            landID : totalLandsCounter
            });
        __ownedLands[msg.sender].push(myLand);
        emit Add(msg.sender, totalLandsCounter);
    }
    //3. GET A LAND OF AN ACCOUNT
    function getLand(address _landHolder, uint _index) public view returns(address, string memory, string memory, uint, uint){
        return(__ownedLands[_landHolder][_index].ownerAddress,
        __ownedLands[_landHolder][_index].district,
        __ownedLands[_landHolder][_index].street,
        __ownedLands[_landHolder][_index].cost,
        __ownedLands[_landHolder][_index].landID);
    }
}