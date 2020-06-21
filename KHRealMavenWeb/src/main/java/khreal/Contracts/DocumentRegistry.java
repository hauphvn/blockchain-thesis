package khreal.Contracts;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import org.web3j.abi.EventEncoder;
import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.Address;
import org.web3j.abi.datatypes.Bool;
import org.web3j.abi.datatypes.Event;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Type;
import org.web3j.abi.datatypes.Utf8String;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.RemoteCall;
import org.web3j.protocol.core.methods.request.EthFilter;
import org.web3j.protocol.core.methods.response.Log;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.tx.Contract;
import org.web3j.tx.TransactionManager;
import rx.Observable;
import rx.functions.Func1;

/**
 * <p>Auto generated code.
 * <p><strong>Do not modify!</strong>
 * <p>Please use the <a href="https://docs.web3j.io/command_line.html">web3j command line tools</a>,
 * or the org.web3j.codegen.SolidityFunctionWrapperGenerator in the 
 * <a href="https://github.com/web3j/web3j/tree/master/codegen">codegen module</a> to update.
 *isNotarized
 * <p>Generated with web3j version 3.4.0.
 */
public class DocumentRegistry extends Contract {
    private static final String BINARY = "0x608060405234801561001057600080fd5b50610422806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80636a33bf871461003b57806373ca4a5b146100cc575b600080fd5b6100b26004803603602081101561005157600080fd5b810190808035906020019064010000000081111561006e57600080fd5b82018360208201111561008057600080fd5b803590602001918460018302840111640100000000831117156100a257600080fd5b909192939192939050505061015d565b604051808215151515815260200191505060405180910390f35b610143600480360360208110156100e257600080fd5b81019080803590602001906401000000008111156100ff57600080fd5b82018360208201111561011157600080fd5b8035906020019184600183028401116401000000008311171561013357600080fd5b90919293919293905050506102aa565b604051808215151515815260200191505060405180910390f35b60008083836040516020018083838082843780830192505050925050506040516020818303038152906040528051906020012090503360008083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550426000808381526020019081526020016000206001018190555083836000808481526020019081526020016000206002019190610224929190610348565b503373ffffffffffffffffffffffffffffffffffffffff167f4208034e4449bb439a4b1ba16ff193bec2c83ec39cd969a629aa475c7f0b8047858560405180806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050935050505060405180910390a2600191505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff16600080858560405160200180838380828437808301925050509250505060405160208183030381529060405280519060200120815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061038957803560ff19168380011785556103b7565b828001600101855582156103b7579182015b828111156103b657823582559160200191906001019061039b565b5b5090506103c491906103c8565b5090565b6103ea91905b808211156103e65760008160009055506001016103ce565b5090565b9056fea265627a7a723158205086efe9ffbcb614f804736c60cb5a55097755b3e1e925efba363ef2bf505e3064736f6c63430005100032";

    public static final String FUNC_NOTARIZEDOCUMENT = "notarizeDocument";

    public static final String FUNC_ISNOTARIZED = "isNotarized";

    public static final Event NOTARIZED_EVENT = new Event("Notarized", 
            Arrays.<TypeReference<?>>asList(new TypeReference<Address>() {}),
            Arrays.<TypeReference<?>>asList(new TypeReference<Utf8String>() {}));
    ;

    protected static final HashMap<String, String> _addresses;

    static {
        _addresses = new HashMap<String, String>();
    }

    protected DocumentRegistry(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    protected DocumentRegistry(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    public List<NotarizedEventResponse> getNotarizedEvents(TransactionReceipt transactionReceipt) {
        List<Contract.EventValuesWithLog> valueList = extractEventParametersWithLog(NOTARIZED_EVENT, transactionReceipt);
        ArrayList<NotarizedEventResponse> responses = new ArrayList<NotarizedEventResponse>(valueList.size());
        for (Contract.EventValuesWithLog eventValues : valueList) {
            NotarizedEventResponse typedResponse = new NotarizedEventResponse();
            typedResponse.log = eventValues.getLog();
            typedResponse._signer = (String) eventValues.getIndexedValues().get(0).getValue();
            typedResponse._documentHash = (String) eventValues.getNonIndexedValues().get(0).getValue();
            responses.add(typedResponse);
        }
        return responses;
    }

    public Observable<NotarizedEventResponse> notarizedEventObservable(EthFilter filter) {
        return web3j.ethLogObservable(filter).map(new Func1<Log, NotarizedEventResponse>() {
            @Override
            public NotarizedEventResponse call(Log log) {
                Contract.EventValuesWithLog eventValues = extractEventParametersWithLog(NOTARIZED_EVENT, log);
                NotarizedEventResponse typedResponse = new NotarizedEventResponse();
                typedResponse.log = log;
                typedResponse._signer = (String) eventValues.getIndexedValues().get(0).getValue();
                typedResponse._documentHash = (String) eventValues.getNonIndexedValues().get(0).getValue();
                return typedResponse;
            }
        });
    }

    public Observable<NotarizedEventResponse> notarizedEventObservable(DefaultBlockParameter startBlock, DefaultBlockParameter endBlock) {
        EthFilter filter = new EthFilter(startBlock, endBlock, getContractAddress());
        filter.addSingleTopic(EventEncoder.encode(NOTARIZED_EVENT));
        return notarizedEventObservable(filter);
    }

    public RemoteCall<TransactionReceipt> notarizeDocument(String _documentHash) {
        final Function function = new Function(
                FUNC_NOTARIZEDOCUMENT, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Utf8String(_documentHash)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteCall<Boolean> isNotarized(String _documentHash) {
        final Function function = new Function(FUNC_ISNOTARIZED, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Utf8String(_documentHash)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Bool>() {}));
        return executeRemoteCallSingleValueReturn(function, Boolean.class);
    }

    public static RemoteCall<DocumentRegistry> deploy(Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(DocumentRegistry.class, web3j, credentials, gasPrice, gasLimit, BINARY, "");
    }

    public static RemoteCall<DocumentRegistry> deploy(Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(DocumentRegistry.class, web3j, transactionManager, gasPrice, gasLimit, BINARY, "");
    }

    public static DocumentRegistry load(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return new DocumentRegistry(contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    public static DocumentRegistry load(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return new DocumentRegistry(contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    protected String getStaticDeployedAddress(String networkId) {
        return _addresses.get(networkId);
    }

    public static String getPreviouslyDeployedAddress(String networkId) {
        return _addresses.get(networkId);
    }

    public static class NotarizedEventResponse {
        public Log log;

        public String _signer;

        public String _documentHash;
    }
}
