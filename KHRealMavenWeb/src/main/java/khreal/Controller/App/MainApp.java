package khreal.Controller.App;

import khreal.Contracts.ManageRealEsate;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.protocol.http.HttpService;
import org.web3j.tuples.generated.Tuple5;
import org.web3j.utils.Convert;

import java.math.BigInteger;

public class MainApp {
    public static void main(String[] args) {
        //Get ethereum client
        Web3j web3 = Web3j.build(new HttpService("HTTP://127.0.0.1:7545"));
        try {
//            String pk = "a002c01c9035612ad332f48e9c1GV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGib81";
            String pk = "9abb4f7a8cd0cbb953beb8869fbb19c7d63e0c7383fbff331561968200901348";

            Credentials credentials = Credentials.create(pk);
            BigInteger gasLimit = BigInteger.valueOf(6721975);
            BigInteger gasPrice = Convert.toWei("10", Convert.Unit.GWEI).toBigInteger();
//            ManageRealEsate manageRealEsate  = ManageRealEsate.deploy(web3, credentials,gasPrice,gasLimit).send();
//            DocumentRegistry documentRegistry = DocumentRegistry.deploy(web3, credentials, gasPrice, gasLimit).send();

//            System.out.println(manageRealEsate.getContractAddress());
            String addressContract = "0x82bA13C4f909c04c31B90920f0a79e1abfFD1d43";
            ManageRealEsate manageRealEsate = ManageRealEsate.load(addressContract, web3, credentials, gasPrice, gasLimit);
//            for(int i = 0; i < 4; i++){
//                TransactionReceipt transactionReceipt = manageRealEsate.addLand("Quan "+i,"Street" +
//                        " "+i,BigInteger.valueOf(3000000000l)).send();
//            }
            String addOwner = "0xf139fc75A7c58aB15B7e49B60Be9576101fFf2f6";
            String addBuyer = "0xE0B545535b66246d477Dee1C0B3bA1a8b245B90f";

//            TransactionReceipt transactionReceipt =
//                    manageRealEsate.transferLand(addBuyer,BigInteger.valueOf(3)).send();
//            System.out.println(transactionReceipt.isStatusOK());

//            BigInteger noOfLand = manageRealEsate.getNoOfLand(addOwner).send();
//            System.out.println(noOfLand);

            BigInteger noOfLand = manageRealEsate.getNoOfLand(addBuyer).send();
            System.out.println(noOfLand);

//            for(int i =0;i<10;i++){
//                try{
//                    Tuple5<String, String, String, BigInteger, BigInteger> singleLand =
//                            manageRealEsate.getLand(addBuyer,BigInteger.valueOf(i)).send();
//                    System.out.println(singleLand.toString());
//                }catch (Exception e){
//                    System.out.println("null");
//                }
//            }


//            System.out.println("singleLand: "+singleLand.toString());
//            System.out.println(BigInteger.valueOf(50000));
//            Web3ClientVersion clientVersion = web3.web3ClientVersion().send();
//            EthBlockNumber blockNumber = web3.ethBlockNumber().send();
//            EthGasPrice gasPrice = web3.ethGasPrice().send();
//            EthGetBalance getBalanceWei = web3.ethGetBalance("0xF21FBB0B188184dD75be672C0dbD02A303556d82", DefaultBlockParameterName.LATEST).send();
////            EthGetBalance getBalanceWei = web3.ethGetBalance("0xF21FBB0B188184dD75be672C0dbD02A303556d82",new DefaultBlockParameterNumber(3000000)).send();
//            System.out.println("balance in wei: "+getBalanceWei);
//            BigDecimal getBalanceEther = Convert.fromWei(getBalanceWei.getBalance().toString(), Convert.Unit.ETHER);
//            System.out.println("balance in ether: "+getBalanceEther);
//            EthGetTransactionCount getTransactionCount = web3.ethGetTransactionCount("0x89E8416eA5b69863CCb34D3A5C74A86bf5549147", DefaultBlockParameterName.LATEST).send();
//            System.out.println("Transaction count: "+ getTransactionCount.getTransactionCount());
//            System.out.println("Client version: "+clientVersion.getWeb3ClientVersion());
//            System.out.println("Gas price: "+gasPrice.getGasPrice());
//            System.out.println("Block number: "+blockNumber.getBlockNumber());

            //Load a wal
//            //Send funds from one account to another
//            //1. Get none:
//            EthGetTransactionCount getTransactionCount = web3.ethGetTransactionCount(credentials.getAddress(), DefaultBlockParameterName.LATEST).send();
//           BigInteger nonce = getTransactionCount.getTransactionCount();
//            System.out.println("nonce: "+nonce);
//            //2.Configure recipient account and amount to send
//            String recipientAddress = "0x210D136305C7ca6fcb0F4716B0a0b225D68e24c5";
//            BigInteger valueToTranfer = Convert.toWei("1", Convert.Unit.ETHER).toBigInteger();
//            System.out.println(valueToTranfer);
//            //3.Configure gas parameters
//            BigInteger gasLimit = BigInteger.valueOf(6721975);
//            BigInteger gasPrice = Convert.toWei("1", Convert.Unit.GWEI).toBigInteger();
//            System.out.println("gasPrice: " + gasPrice);
//            System.out.println("gasLimit: " + gasLimit);

//            Deploy contract to network
//            DocumentRegistry documentRegistry = DocumentRegistry.deploy(web3, credentials,gasPrice,gasLimit).send();
//            String contractAddress = documentRegistry.getContractAddress();
//            System.out.println("Contract address: " + contractAddress);
//            String addressContract = "0xdbbf51628d8d623ef098722bd813c701f8a8aaf1";
//            DocumentRegistry documentRegistry = DocumentRegistry.load(addressContract, web3, credentials, gasPrice, gasLimit);
////            TransactionReceipt transactionReceipt = documentRegistry.notarizeDocument("hauphvn").send();
////            String txHash = transactionReceipt.getTransactionHash();
////            System.out.println("tx Hash: "+ txHash);
//            boolean isHash = documentRegistry.isNotarized("hauphvn").send();
//            System.out.println("Is hash: "+ isHash);
// Prepare a rew transaction
//            RawTransaction rawTransaction = RawTransaction.createEtherTransaction(
//                    nonce,
//                    gasPrice,
//                    gasLimit,
//                    recipientAddress,
//                    valueToTranfer
//            );
//            //Sign the transaction
//            byte[] signedMessage = TransactionEncoder.signMessage(rawTransaction, credentials);
//            System.out.println("byte[] signedMessage: " + signedMessage.toString());
//            //Convert it to Hexadecimal String to be send to the node
//            String hexValue  = Numeric.toHexString(signedMessage);
//            System.out.println("hexValue: "+ hexValue);
//
//            //Send to the node via JSON RPC.
//            EthSendTransaction ethSendTransaction= web3.ethSendRawTransaction(hexValue).send();
//            //Get the transaction hash
//            String transactionHash = ethSendTransaction.getTransactionHash();
//            System.out.println("Transaction hash: " + transactionHash);
//// Wait for transaction to be mined
//            Optional<TransactionReceipt> transactionReceipt = null;
//            do {
//                EthGetTransactionReceipt ethGetTransactionReceiptResp = web3.ethGetTransactionReceipt(transactionHash).send();
//                transactionReceipt = ethGetTransactionReceiptResp.getTransactionReceipt();
//
//                Thread.sleep(3000); // Retry after 3 sec
//            } while(!transactionReceipt.isPresent());
//            System.out.println("balbal");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
