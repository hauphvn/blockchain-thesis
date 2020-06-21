pragma solidity ^0.5.6;

contract DocumentRegistry {

    struct Document{
        address signer;
        uint date;
        string hash;
    }

    mapping(bytes32 => Document) registry;
    event Notarized(address indexed _signer, string _documentHash);

    function notarizeDocument(string  calldata  _documentHash) external returns (bool){
        bytes32 id = keccak256(abi.encodePacked(_documentHash));

        registry[id].signer = msg.sender;
        registry[id].date = now;
        registry[id].hash = _documentHash;

        emit Notarized(msg.sender, _documentHash);
        return true;
    }
     function isNotarized(string calldata _documentHash) external view returns (bool) {
         return registry[keccak256(abi.encodePacked(_documentHash))].signer != address(0);
     }
}
