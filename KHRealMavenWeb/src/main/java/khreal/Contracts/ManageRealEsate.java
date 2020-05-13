//package khreal.Contracts;
//
//import java.math.BigInteger;
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.Collections;
//import java.util.HashMap;
//import java.util.List;
//import java.util.concurrent.Callable;
//
//import org.web3j.abi.EventEncoder;
//import org.web3j.abi.TypeReference;
//import org.web3j.abi.datatypes.Address;
//import org.web3j.abi.datatypes.Event;
//import org.web3j.abi.datatypes.Function;
//import org.web3j.abi.datatypes.Type;
//import org.web3j.abi.datatypes.Utf8String;
//import org.web3j.abi.datatypes.generated.Uint256;
//import org.web3j.crypto.Credentials;
//import org.web3j.protocol.Web3j;
//import org.web3j.protocol.core.DefaultBlockParameter;
//import org.web3j.protocol.core.RemoteCall;
//import org.web3j.protocol.core.methods.request.EthFilter;
//import org.web3j.protocol.core.methods.response.Log;
//import org.web3j.protocol.core.methods.response.TransactionReceipt;
//import org.web3j.tuples.generated.Tuple5;
//import org.web3j.tx.Contract;
//import org.web3j.tx.TransactionManager;
//import rx.Observable;
//import rx.functions.Func1;
//
///**
// * <p>Auto generated code.
// * <p><strong>Do not modify!</strong>
// * <p>Please use the <a href="https://docs.web3j.io/command_line.html">web3j command line tools</a>,
// * or the org.web3j.codegen.SolidityFunctionWrapperGenerator in the
// * <a href="https://github.com/web3j/web3j/tree/master/codegen">codegen module</a> to update.
// *
// * <p>Generated with web3j version 3.4.0.
// */
//public class ManageRealEsate extends Contract {
//    private static final String BINARY = "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060400160405280600a81526020017f5468616e6820636f6e67000000000000000000000000000000000000000000008152506002908051906020019061009c9291906100a2565b50610147565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100e357805160ff1916838001178555610111565b82800160010185558215610111579182015b828111156101105782518255916020019190600101906100f5565b5b50905061011e9190610122565b5090565b61014491905b80821115610140576000816000905550600101610128565b5090565b90565b610e7f806101566000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806305efe9c7146100675780630c73f23d146101db578063657425551461033757806382f557ae146104ab5780638da5cb5b146104c9578063de152f8d14610513575b600080fd5b6100b36004803603604081101561007d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610596565b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001858152602001848152602001838103835287818151815260200191508051906020019080838360005b8381101561013557808201518184015260208101905061011a565b50505050905090810190601f1680156101625780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b8381101561019b578082015181840152602081019050610180565b50505050905090810190601f1680156101c85780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b610335600480360360608110156101f157600080fd5b810190808035906020019064010000000081111561020e57600080fd5b82018360208201111561022057600080fd5b8035906020019184600183028401116401000000008311171561024257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156102a557600080fd5b8201836020820111156102b757600080fd5b803590602001918460018302840111640100000000831117156102d957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050610736565b005b6103836004803603604081101561034d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610959565b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001858152602001848152602001838103835287818151815260200191508051906020019080838360005b838110156104055780820151818401526020810190506103ea565b50505050905090810190601f1680156104325780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b8381101561046b578082015181840152602081019050610450565b50505050905090810190601f1680156104985780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b6104b3610c97565b6040518082815260200191505060405180910390f35b6104d1610c9d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61051b610cc2565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561055b578082015181840152602081019050610540565b50505050905090810190601f1680156105885780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600360205281600052604060002081815481106105af57fe5b9060005260206000209060050201600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106825780601f1061065757610100808354040283529160200191610682565b820191906000526020600020905b81548152906001019060200180831161066557829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107205780601f106106f557610100808354040283529160200191610720565b820191906000526020600020905b81548152906001019060200180831161070357829003601f168201915b5050505050908060030154908060040154905085565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461078f57600080fd5b60018054016001819055506107a2610d60565b6040518060a001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020016001548152509050600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050906001820390600052602060002090600502016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906108b1929190610da5565b5060408201518160020190805190602001906108ce929190610da5565b5060608201518160030155608082015181600401555050507f2728c9d3205d667bbc0eefdfeda366261b4d021949630c047f3e5834b30611ab33600154604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150505050565b6000606080600080600360008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002086815481106109ab57fe5b906000526020600020906005020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208781548110610a2757fe5b9060005260206000209060050201600101600360008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208881548110610a8257fe5b9060005260206000209060050201600201600360008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208981548110610add57fe5b906000526020600020906005020160030154600360008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208a81548110610b3957fe5b906000526020600020906005020160040154838054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610be05780601f10610bb557610100808354040283529160200191610be0565b820191906000526020600020905b815481529060010190602001808311610bc357829003601f168201915b50505050509350828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c7c5780601f10610c5157610100808354040283529160200191610c7c565b820191906000526020600020905b815481529060010190602001808311610c5f57829003601f168201915b50505050509250945094509450945094509295509295909350565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d585780601f10610d2d57610100808354040283529160200191610d58565b820191906000526020600020905b815481529060010190602001808311610d3b57829003601f168201915b505050505081565b6040518060a00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016060815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610de657805160ff1916838001178555610e14565b82800160010185558215610e14579182015b82811115610e13578251825591602001919060010190610df8565b5b509050610e219190610e25565b5090565b610e4791905b80821115610e43576000816000905550600101610e2b565b5090565b9056fea265627a7a7231582069c779f5d5dfe2c3a4c907a2173f41c97cdf11707c79dc97e65208bb9de9a61064736f6c63430005100032";
//
//    public static final String FUNC___OWNEDLANDS = "__ownedLands";
//
//    public static final String FUNC_FORTEST = "forTest";
//
//    public static final String FUNC_OWNER = "owner";
//
//    public static final String FUNC_TOTALLANDSCOUNTER = "totalLandsCounter";
//
//    public static final String FUNC_ADDLAND = "addLand";
//
//    public static final String FUNC_GETLAND = "getLand";
//
////    public static final Event ADD_EVENT = new Event("Add", Arrays.<TypeReference<?>>asList(), Arrays.<TypeReference<?>>asList(new TypeReference<Address>() {
////    }, new TypeReference<Uint256>() {
////    }));
////    ;
//
//    protected static final HashMap<String, String> _addresses;
//
//    static {
//        _addresses = new HashMap<String, String>();
//    }
//
//    protected ManageRealEsate(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
//        super(BINARY, contractAddress, web3j, credentials, gasPrice, gasLimit);
//    }
//
//    protected ManageRealEsate(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
//        super(BINARY, contractAddress, web3j, transactionManager, gasPrice, gasLimit);
//    }
//
//    public static RemoteCall<ManageRealEsate> deploy(Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
//        return deployRemoteCall(ManageRealEsate.class, web3j, credentials, gasPrice, gasLimit, BINARY, "");
//    }
//
//    public static RemoteCall<ManageRealEsate> deploy(Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
//        return deployRemoteCall(ManageRealEsate.class, web3j, transactionManager, gasPrice, gasLimit, BINARY, "");
//    }
//
//    public List<AddEventResponse> getAddEvents(TransactionReceipt transactionReceipt) {
//        List<Contract.EventValuesWithLog> valueList = extractEventParametersWithLog(ADD_EVENT, transactionReceipt);
//        ArrayList<AddEventResponse> responses = new ArrayList<AddEventResponse>(valueList.size());
//        for (Contract.EventValuesWithLog eventValues : valueList) {
//            AddEventResponse typedResponse = new AddEventResponse();
//            typedResponse.log = eventValues.getLog();
//            typedResponse._owner = (String) eventValues.getNonIndexedValues().get(0).getValue();
//            typedResponse._landID = (BigInteger) eventValues.getNonIndexedValues().get(1).getValue();
//            responses.add(typedResponse);
//        }
//        return responses;
//    }
//
//    public Observable<AddEventResponse> addEventObservable(EthFilter filter) {
//        return web3j.ethLogObservable(filter).map(new Func1<Log, AddEventResponse>() {
//            @Override
//            public AddEventResponse call(Log log) {
//                Contract.EventValuesWithLog eventValues = extractEventParametersWithLog(ADD_EVENT, log);
//                AddEventResponse typedResponse = new AddEventResponse();
//                typedResponse.log = log;
//                typedResponse._owner = (String) eventValues.getNonIndexedValues().get(0).getValue();
//                typedResponse._landID = (BigInteger) eventValues.getNonIndexedValues().get(1).getValue();
//                return typedResponse;
//            }
//        });
//    }
//
//    public Observable<AddEventResponse> addEventObservable(DefaultBlockParameter startBlock, DefaultBlockParameter endBlock) {
//        EthFilter filter = new EthFilter(startBlock, endBlock, getContractAddress());
//        filter.addSingleTopic(EventEncoder.encode(ADD_EVENT));
//        return addEventObservable(filter);
//    }
//
//    public RemoteCall<Tuple5<String, String, String, BigInteger, BigInteger>> __ownedLands(String param0, BigInteger param1) {
//        final Function function = new Function(FUNC___OWNEDLANDS,
//                Arrays.<Type>asList(new org.web3j.abi.datatypes.Address(param0),
//                        new org.web3j.abi.datatypes.generated.Uint256(param1)),
//                Arrays.<TypeReference<?>>asList(new TypeReference<Address>() {
//                }, new TypeReference<Utf8String>() {
//                }, new TypeReference<Utf8String>() {
//                }, new TypeReference<Uint256>() {
//                }, new TypeReference<Uint256>() {
//                }));
//        return new RemoteCall<Tuple5<String, String, String, BigInteger, BigInteger>>(
//                new Callable<Tuple5<String, String, String, BigInteger, BigInteger>>() {
//                    @Override
//                    public Tuple5<String, String, String, BigInteger, BigInteger> call() throws Exception {
//                        List<Type> results = executeCallMultipleValueReturn(function);
//                        return new Tuple5<String, String, String, BigInteger, BigInteger>(
//                                (String) results.get(0).getValue(),
//                                (String) results.get(1).getValue(),
//                                (String) results.get(2).getValue(),
//                                (BigInteger) results.get(3).getValue(),
//                                (BigInteger) results.get(4).getValue());
//                    }
//                });
//    }
//
//    public RemoteCall<String> forTest() {
//        final Function function = new Function(FUNC_FORTEST,
//                Arrays.<Type>asList(),
//                Arrays.<TypeReference<?>>asList(new TypeReference<Utf8String>() {
//                }));
//        return executeRemoteCallSingleValueReturn(function, String.class);
//    }
//
//    public RemoteCall<String> owner() {
//        final Function function = new Function(FUNC_OWNER,
//                Arrays.<Type>asList(),
//                Arrays.<TypeReference<?>>asList(new TypeReference<Address>() {
//                }));
//        return executeRemoteCallSingleValueReturn(function, String.class);
//    }
//
//    public RemoteCall<BigInteger> totalLandsCounter() {
//        final Function function = new Function(FUNC_TOTALLANDSCOUNTER,
//                Arrays.<Type>asList(),
//                Arrays.<TypeReference<?>>asList(new TypeReference<Uint256>() {
//                }));
//        return executeRemoteCallSingleValueReturn(function, BigInteger.class);
//    }
//
//    public RemoteCall<TransactionReceipt> addLand(String _district, String _street, BigInteger _cost) {
//        final Function function = new Function(
//                FUNC_ADDLAND,
//                Arrays.<Type>asList(new org.web3j.abi.datatypes.Utf8String(_district),
//                        new org.web3j.abi.datatypes.Utf8String(_street),
//                        new org.web3j.abi.datatypes.generated.Uint256(_cost)),
//                Collections.<TypeReference<?>>emptyList());
//        return executeRemoteCallTransaction(function);
//    }
//
//    public RemoteCall<Tuple5<String, String, String, BigInteger, BigInteger>> getLand(String _landHolder, BigInteger _index) {
//        final Function function = new Function(FUNC_GETLAND,
//                Arrays.<Type>asList(new org.web3j.abi.datatypes.Address(_landHolder),
//                        new org.web3j.abi.datatypes.generated.Uint256(_index)),
//                Arrays.<TypeReference<?>>asList(new TypeReference<Address>() {
//                }, new TypeReference<Utf8String>() {
//                }, new TypeReference<Utf8String>() {
//                }, new TypeReference<Uint256>() {
//                }, new TypeReference<Uint256>() {
//                }));
//        return new RemoteCall<Tuple5<String, String, String, BigInteger, BigInteger>>(
//                new Callable<Tuple5<String, String, String, BigInteger, BigInteger>>() {
//                    @Override
//                    public Tuple5<String, String, String, BigInteger, BigInteger> call() throws Exception {
//                        List<Type> results = executeCallMultipleValueReturn(function);
//                        return new Tuple5<String, String, String, BigInteger, BigInteger>(
//                                (String) results.get(0).getValue(),
//                                (String) results.get(1).getValue(),
//                                (String) results.get(2).getValue(),
//                                (BigInteger) results.get(3).getValue(),
//                                (BigInteger) results.get(4).getValue());
//                    }
//                });
//    }
//
//    public static ManageRealEsate load(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
//        return new ManageRealEsate(contractAddress, web3j, credentials, gasPrice, gasLimit);
//    }
//
//    public static ManageRealEsate load(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
//        return new ManageRealEsate(contractAddress, web3j, transactionManager, gasPrice, gasLimit);
//    }
//
//    protected String getStaticDeployedAddress(String networkId) {
//        return _addresses.get(networkId);
//    }
//
//    public static String getPreviouslyDeployedAddress(String networkId) {
//        return _addresses.get(networkId);
//    }
//
//    public static class AddEventResponse {
//        public Log log;
//
//        public String _owner;
//
//        public BigInteger _landID;
//    }
//}
