Các bước 
---
1. Xây dựng smart contract với solidity.  
2. Biên dịch code smart contract ra file nhi phân.  
3. Deploy contract lên Ethereum Blockchain sử dụng Ethereum client(Geth, PyEthApp).  
4. Build front end để tương tác với smart contract.   
 

Giải thích thuật ngữ:
---
 - Phần back end ta tương tác thông qua Web3.   
 - ***Web3*** được sử dụng để truy cập các chức năng và các biến trong code solidity từ trang front end và thực hiện các giao dịch.  

 - Smart contract là một chương trình nằm trong block của Ethereum Virtual Machine (***EVM***).  
 - Distributed App (***DApp***) là sự kết hợp giữa front end và back end để tương tác với smart contract và người dùng.  

 - Sử dụng ***Geth*** Console để tạo ra một vài tài khoản (cặp public và private key) và bắt đầu đào bằng cách tạo ra các Blockchain cục bộ. Chúng ta có thể dùng Ganache, Nó là bộ giả lập một mạng blockchain trên máy tính local. Khi chạy chương trình Ganache nó sẽ tạo ra một mạng blockchain giả lập có đầy đủ các tính năng như một mạng blockchain thật sự (mạng Ethereum). Đồng thời nó cũng tạo sẵn cho chúng ta 10 địa chỉ ví (wallet) trong đó mỗi wallet có sẵn 100 Eth để cho chúng ta có thể sử dụng trong quá trình viết Dapp.  

- ***ABI***: ABI là từ viết tắt của Application Binary Interface. API dùng để xác định hàm nào trong hợp đồng thông minh được gọi và trả về dữ liệu theo định dạng mong đợi.   

- ***Bytecode***: sẽ được dùng để triển khai lên mạng lưới của Ethreum.  

- Để triển khai hợp đồng thông minh ta cần làm 2 việc: triển khai bytecode lên test network và kết nối ABI với test network.  


1.Xây dựng smart contract với solidity:
---
##Phân tích:
- Hợp đồng nhà đất gồm 1 bên chủ bất động sản và người mua.  
- Mục đích chính của hợp đồng là đảm bảo hợp đồng được kí kết, số tiền cho thuê được thanh toán đúng hạn, cũng như việc chấm dứt hợp đồng đúng hạn trong trường hợp thuê.  
- Các bước chính của hợp đồng:
    - Chủ bất động sản thiết lập điều khoản.  
    - Trạng thái của hợp đồng được set là: Create.(Hàm Create).   
    - Người thuê kí hợp đồng, trạng thái của hợp đồng là: Started(Hàm Started).  
    - Người thuê chấp dứt hợp đồng, trạng thái hợp đồng lúc này là Terminated.(Hàm Terminated).  

- Các hàm dành cho bên bán:  
    - Transaction: Create Contract
        - Biến trạng thái:
            - address public của người bán.  
            - mapping(address => unit) public contract của người bán.  
            - mapping(address => unit) public người mua
            - unit id; // id mua thuê.  
            - unit value; // giá tiền bán, thuê.  
    - Transaction: 
        - Các hàm:
            - rentalAgreement()// thỏa thuận hợp đồng.  
            - getHouse()// chọn nhà cần bán.  
            - getTenant()// get người mua.  
            - getContractOwner()// get người bán.  
            - getContractCreated()// tạo hợp đồng  
            - payRent()// trả tiền.
            - terminateContract()// kết thúc hợp đồng.
            - kill()// destructor.  



2.Demo: Sử dụng [Ganache](https://www.trufflesuite.com/ganache), sử dụng ví miễn phí ***Etherwallet*** trên [github](https://github.com/kvhnuke/etherwallet/releases/tag/v3.40.0), code smart contract bằng Solidity trên [Remix](https://remix.ethereum.org/), nó là một ide trên trình duyệt.  

- 1.Tạo hợp đồng thuê nhà trên remix. [Tham khao code thue nha bang solidity](https://medium.com/@naqvi.jafar91/converting-a-property-rental-paper-contract-into-a-smart-contract-daa054fdf8a7).  
- Tao node trên ***Etherwallet*** và trở tới http là Ganache.  
- Ganache đã có sẵn 10 private/public key, với mỗi key có 100 ETH nên chúng ta có thể thực hiện deploy smart contract.  
- Chúng ta sử dụng bytecode và ABI để  tạo contract trên ***Etherwallet*** cũng như sử dụng các hàm trong contract.  



KẾT LUẬN:
---

- Trong báo cáo chưa sử dụng Web3js, chúng ta sẽ sử dụng Webs thực hiện chức năng tương tự ***Etherwallet***.  
- Ganache là hệ thống Blockchain Ethereum ngoài thực tế.  


Việc cần làm:
---

- Compile code solidity bằng cái gì đây?
    - Tự build chương trình: nodejs.  
    - Dùng Remix.  
- Sử dụng API nào để kết nối hệ thống Ethereum: Infura...  
- 

Ref:
---
- [blockchain-và-web-development](https://medium.com/coinmonks/blockchain-with-web-development-dfb474508fb4).  
- [Series Ethereum](http://notcuder.com/series-ethereum-danh-cho-lap-trinh-vien-developer-co-the-lam-nhung-thu-hay-ho-gi-tren-mang-luoi-blockchain-cua-ethereum/).  
- [Build smart contract](https://remix.ethereum.org/#optimize=false&evmVersion=null&version=soljson-v0.4.11+commit.68ef5810.js).  
- [Ethereum tiếng việc](https://vn.zastrin.com/courses/vn-ethereum-primer/lessons/3-1).  
