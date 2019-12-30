- Account trong Ethereum:

  - Có 2 loại accounts  **external account** được quản lí bởi cặp khóa public và private key, **contract account** được quản lí bởi code của account bên trên.
  - **Lưu ý:** mỗi một account có một nơi lưu trữ trên blockchain, sẽ mất phí nếu chúng ta chỉnh sửa hoặc đọc nơi lưu trữ đó. Chúng ta không thể nào liệt kê được số lượng lưu trữ đó.

- Phiên bản: 

  - Bất cứ một file solidity nào đều có một dòng đầu tiên gọi là Version Pragma. Nó dùng để bảo về đoạn code từ trình viên dịch không bị lỗi phiên bản. Nó có dạng như thế này: ``pragma solidity ^0.4.20;``.  

- Contracts:

  - Contract trong solidity thì giống như là ``class`` trong lập trình hướng đối tượng. Chúng chứa biến và hàm.

  - Một contract được định nghĩa bởi từ khóa ``contract``, đến tên của contract và hai dấu ``{ }``. Như bên dưới:

    - > ```solidity
      > contract HopDongNhaDat{
      > 	
      > }
      > ```



- Comments:

  - Vì solidity được hổ trợ bởi C và C++ nên ghi chú trong solidity cũng tương tự ngôn ngữ C và C++
  - ``//`` đề ghi chú trên 1 dòng
  - ``/* something */`` để ghi chú một đoạn
  - Ngoài ra chúng ta có thể comment theo **NatSpec** :
    - ``///`` để ghi chú trên 1 dòng
    
    - ``/** something   /*``  để ghi chú 1 đoạn.
    
    - Một ví dụ về cách sử dụng natspec:
    
      > ```solidity
      > /// @title A contract for basic math operations
      > /// @author H4XF13LD MORRIS 💯💯😎💯💯
      > /// @notice For now, this contract just adds a multiply function
      > contract Math {
      >   /// @notice Multiplies 2 numbers together
      >   /// @param x the first uint.
      >   /// @param y the second uint.
      >   /// @return z the product of (x * y)
      >   /// @dev This function does not currently check for overflows
      >   function multiply(uint x, uint y) returns (uint z) {
      >     // This is just a normal comment, and won't get picked up by natspec
      >     z = x * y;
      >   }
      > }
      > ```
  
- Biến:

  - Biến được dùng để chứa thông tin trong Blockchain.
  - Biến trong Solidity phải được khai báo loại cụ thể.
  - Chúng gồm những loại sau đây:
    - Booleans: ``true`` hoặc ``false``.
    - Integers: ``int8`` đến ``int256``, tức là chúng ta có thể điều chỉnh số bit trong khoản 8 đến 256 cho một biến kiểu ``int``, và đương nhiên con số đó phải là bội của 8, vì  `` 1 byte = 8 bit``.
      - ``uint`` là ``int`` loại bỏ khoản số âm.
      - Trong solidity khi khai báo ``uint`` thì mặc định nó sẽ hiểu là ``uint256``.
    - Float: có hỗ trợ số thực nhưng chưa đầy đủ. ``fixed`` cho số thực, ``ufixed`` không dấu.
    - Address: đây là kiểu thường được sử dụng trong smart contract, nó lưu trữ một địa chỉ trong Ethereum. 
      - Có hai loại address: ``address`` và ``address payable`` 
      - ``address``: lưu trữ 20 byte giá trị( kích thước của địa chỉ trong Ethereum).
      - ``address payable``: giống như ``address`` nhưng có ``tranfer`` và ``send`` 
      - **Lưu ý**: chỉ có ``address payable`` mới có thể nhận được **Ether**.
      - ``address payable`` có thể tự động chuyển đổi qua ``address`` một cách ngầm định nhưng ngược lại thì **không thể**.(ngoại trừ ta sử dụng biến ``uint160`` làm trung gian.
      
      - **Withdraw**: sau khi ETH được gửi qua hàm thông qua modifier ``payable`` thì chúng ta cần rút nó ra với  hàm như mô tả bên dưới:
      
        >  ``` solidity
        > contract GetPaid is Ownable {
        >   function withdraw() external onlyOwner {
        >     address payable _owner = address(uint160(owner()));
        >     _owner.transfer(address(this).balance);
        >   }
        > }
        >  ```
      
        - Xét ví dụ trên:
          - _owner là một address mà đang giữ đồng ETH muốn trả cho contract của chúng ta. Nó sẽ dùng hàm ``transfer`` để chuyển đồng ETH đó vào balance của  chúng ta.
      
      - ***Các thuộc tính của ``address``:***
      
        - ``balance``: dùng để truy vấn balance của address.
        - ``transfer``: là hàm để truy vấn balance của một address bằng cách truyền vào một ``balance`` và gửi Ether tới một payable address, đơn vị Ether chuyển là ``wei``.
          - Hàm transfer sẽ thất bại nếu contract hiện tại không đủ balance hoặc người nhận từ chối nhận.
        - **Lưu ý:** Hàm **send** không an toàn bằng hàm **transfer**.
        - Hàm ``send`` thất bại nếu gọi stack đến 1024 hoặc người nhận không còn đủ ``gas``.
        - 
    - String: kiểu ``string`` lưu trữ văn bản, kí tự.
    - Kiểu tự định nghĩa: Chúng ta sẽ nói đến kiểu này sau, ``contract`` cũng là một kiểu tự định nghĩa.
    

- Bytes trong solidity:

  - Bytes làm việc dễ dàng trong Solidity, vì chúng được xem như là mảng.
  - Có 2 loại biến kiểu byte: **fixed-sized** và **Dynamiclly-sized** byte arrays.
    - **Fixed-size byte arrays**: ``bytes1``, ``bytes2``, ..., ``bytes32``. Có thể áp dụng các toán tử, dịch bit, truy cập phần tử như màng với [ ]. Có thuộc tính **.length** để trả về chiều dài của bytes.
    - **Dynamiclly-sized byte arrays:** ``bytes`` và ``string`` là loại mảng động trong solidity.
      - ``bytes`` tương đương với ``byte[]``.
      - ``string`` có thể lưu giá trị UTF-8.

- Toán tử:

  - **Lưu ý:** ``contract`` không làm việc với toán tử.

  - Ngoài các kiểu toán tử thông thường `` +, -, *, /`` , trong solidity còn có toàn tử lũy thừa ``x**y`` có nghĩa là x lũy thừa y. Ví dụ:

    - > ``` solidity
      > uint x = 2;
      > uint y = 3;
      > uint result = x ** y;// kết quả trả về  result = 8.
      > ```

- Structs:

  - ``struct`` là một kiểu dữ liệu đặc biệt, cho phép chúng ta có thể nhóm một danh sách các biến cơ bản thành một cụm.

  - Một ``struct`` được định nghĩa như sau:

  - > ```solidity 
    > struct Car{
    > 	string make;
    > 	string model;
    > 	uint16 year;
    > 	uint16 horsePower;
    > }
    > ```

- Mappings:

  - ``mapping`` cho phép chúng ta tạo ra một cặp key-value và tự động lưu trữ chúng như một danh sách. Nó thì giống như một hash table.

  - Một ``mapping`` được định nghĩa như sau:

  - > ```solidity 
    > // mapping(kiểu-khóa => kiểu-giá-trị) tên-mapping;
    > // Ví dụ:
    > mapping (address => uint256) balance;
    > ```

    - Trong ví dụ trên:
      - ``kiểu-khóa => kiểu-giá-trị`` thường được sử dụng nhất là ``address`` và ``uint``. **Lưu ý: ** không phải tấc cả kiểu dữ liệu đều được đặc ở vị trí của ``kiểu-khóa`` như ``struct`` và ``mapping`` ***không thể*** được đặt làm khóa trong ``mapping``.
      - Ngược lại với kiểu khóa, bên phái ``kiểu-giá-trị`` **có thể** chấp nhận tấc cả các kiểu dữ liệu.

- Little-endian và Big-endian: là 2 cách nhiều byte dữ liệu trong máy tính.

  - Ta xét một số nguyên 32 bit sau: **0x00112233**
    - ***little-endian***: là 0x33, tức là tại địa chỉ thấp nhất
    - ***big-endian***: là 0x00, tương tự tại địa chỉ lớn nhất.
  - Trong cả hai trường hợp trên, khi ta viết chúng xuống code, bạn thêm zero vào bên trái, tuy nhiên khi biên dịch thì nó lại được thông dịch giá trị chính xác là 0x112233.
  - 

- Contract ABI Specification:

  - Contract application Binary Interface(**ABI**): là một cách chuẩn để tương tác với contract trong hệ sinh thái Ethereum từ bên ngoài cũng như giữa các contract với nhau.
  - Dữ liệu được mã hóa theo kiểu của chúng.
  - Sự mã hóa này không tự mô tả chúng, nên cần một schema để giải mã chúng.
  - Chúng ta giả sử rằng hàm interface của contract là một kiểu dữ liệu rộng nhất,  tất cả các contract đều có khai báo interface này, chúng được gọi lúc biên dịch.
  - **Function Selector**: 
    - 4 byte đầu tiên của lời gọi hàm thì xác định hàm được gọi. Nó là 4 byte đầu tiên của chuỗi mã hóa Keccak-256 của signature của hàm đó.
    - **Lưu ý**: giá trị trả về nằm ngoài phạm vì signature của hàm.

- **Array**:

  - Khai báo một mảng kiểu *memory*:

  - Lưu ý: khai báo mảng kiểu memory ta phải khai báo kích thước trước, và không thể thay để như kiểu *storage*.

    > ```java
    > function getArray() external pure returns(uint[] memory) {
    > // Instantiate a new array in memory with a length of 3
    > uint[] memory values = new uint[](3);
    > 
    > // Put some values to it
    > values[0] = 1;
    > values[1] = 2;
    > ```
  >   values[2] = 3;
  >
  >   return values;
  >   }
  >
  >   ```
  >   
  >   ```
  
- **Hàm:**

  - Mặc định hàm được khai báo **public**, điều này có nghĩa là bất cứ ai đều có thể tương tác với hàm đó.

  - Nếu hàm của chúng ta chỉ trả về giá trị mà không làm thay đổi giá trị gì thì ta có thể sử dụng từ khóa **view** như bên dưới:

    	>```solidity 
  	>function sayHello() public view returns (string memory) {
     > 	>	return "Xin chao";
     > 	>}
    >  	>```
    >```
    
  - Với hàm được khai báo là chế độ **view** thì chúng ta sẽ tiết kiệm được **Gas**.

    - Lưu ý: nếu 2 hàm cùng trong 1 contract, 1 trong 2 là view function thì khi chúng gọi lẫn nhau vẫn tốn Gas như bình thường. Hàm view chỉ **không tốn Gas** khi được gọi **external** từ bên ngoài.
    
  - Để ngăn **không cho truy cập bất cứ dữ liệu nào** ta dùng từ khóa **pure** khi khai báo hàm, như bên dưới:

    > ```solidity
    > function _multiply(uint a, uint b) private pure returns (uint) {
    >   return a * b;
    > }
    > ```

    - Hàm ``_multiply`` không thể thao tác gì dữ liệu trong contract, nó chỉ dùng được những tham số truyền vào nó, như là ``a`` và ``b``.

  - Các thuộc tính của hàm được khai báo là **public** hay **external**:

    - ``.selector``: gọi hàm ABI selector
    - ``.gas(uint)``: gửi một lượng gas đến target function.

    - ``value(uint)``: gửi một lượng wei đến target function.

  - Cũng như nhiều ngôn ngữ khác, hàm trong solidity dùng để thực hiện tác vụ nào đó, có input và output.

  - Hàm trong solidity có thể trả về **nhiều giá trị**.

  - Một hàm được định nghĩa như sau:

  - > ```solidity 
    > function add(uint a, uint b) returns(uint) {
    > 	return a + b;
    > }
    > ```

    - Bên trên là hàm ``add`` nhận vào hai tham số ``a`` và ``b`` và trả về giá trị kiểu ``uint`` là tổng của a và b.
    - **Lưu ý:** ``returns`` có ``s`` . Nhưng `` return`` bên trong hàm thì **không** có ``s``.

  - **Event**: 

    - Event là cách để contract tương tác giữa hệ thống và blockchain và front-end. 

  - **Các loại hàm:** 

    - Function Modifiers:

      - Là một loại hàm, nhưng sử dụng từ khóa **modifier** thay vì sử dụng **function**.
    
  - Không thể gọi trực tiếp như một function.
      - Chúng ta sẽ gọi một modifier bên trong một function, để thay đổi cách xử lý của hàm hiện tại.
    - 
      
    - Payable function: Cung cấp một cơ chế *tổng hợp* hay *nhận* ether trong contract của chúng ta.
    
    - Một hàm có chức năng như trên sẽ phải khai báo từ khóa ``payable``.
    
      > ```solidity 
      > 
      > ```
    > contract Sample{
    > 	uint amount = 0;
    > 	function payme() payable{
    > 		amount+= msg.value;
    > 	}
    > }
    >
    > ```
    > 
    > ```
    
    - Fallback function: Là hàm không có tên trong một contract. **Lưu ý**: trong 1 contract chỉ có duy nhất 1 fallback.

- **Internal and External**:

  - Ngoài **public** và **private**, hàm trong solidity còn có phạm vi **internal** và **external**.
  
- ``internal`` thì tương tự như ``private``. Ngoài ra ``internal`` còn thế thể truy cập vào contract mà kế thừa từ contract này.
  
- ``External`` thì tương tự như ``public``. Nhưng hàm có từ khóa này thì chỉ được gọi bên ngoài của contract. Chúng không được gọi bởi những hàm khác bên trong contract mà chúng đang tồn tại.
  
- **Không gian lưu trữ biến**:

  - Solidity có 2 nơi để lưu trữ biến đó là **storage** và **memory**. 

  - **Memory** là nơi lưu trữ tạm thời, giá trị trong đó sẽ bị xóa đi khi không còn được sử dụng. Lưu trữ ở đây thì không tốn phí

    - **calldata** tương tự như memory nhưng được dùng trong hàm với khai báo là *external* .

  - **Storage** là nơi lưu trữ của hệ thống blockchain. Lưu trữ tại đây sẽ có phí.

  - Mặc định, ``struct`` và ``array`` sẽ được ưu tiên lưu trữ trong storage.

  - Tấc cả các biến khác đều được lưu trữ trong memory.

  - Nếu chúng ta muốn ``struct`` lưu trữ tạm thời trong memory thì ta phải sử dụng từ khóa ``memory`` như bên đoạn code bên dưới:

  - > ```solidity 
    > struct Car{
    > 	string name,
    > 	uint year
    > }
    > Car memory myCar = Car({
    > 	name: "Toyota",
    > 	year: 2020
    > });
    > ```

- Địa chỉ của người gửi hoặc của smart contract(Sender address):

  - Trong solidity có một biến đặc biệt mà mỗi khi được gọi sẽ trả về địa chỉ  của người gọi đó là ``msg.sender``. Kết quả nó trả về có dạng tương tự: ``0x1961b3331969ed52770751fc718ef530838b6dee``. 

- Hashes và Typecasting:

  - Trong solidity, chúng ta có thể sử dụng thuật toán ***KECCAK-256*** để phát sinh ra một hash.

  - Để ép kiểu trong solidity, ta làm như sau:

  - > solidity
    >
    > uint8 x = 12;
    >
    > uint256 y = 345;
    >
    > uint256 result = y * uint256(x);

  - **Lưu ý:** không thể sử dụng: ``address payable(x)``.

- **Kế thừa:** ta muốn ``contract Cat{}`` kế thừa ``contract Animal{}`` ta dùng từ khóa **is**, như bên dưới:

  ``` java 
  contract Cat is Animal{
      
  }
  ```

- **Tính bất biến(Immutability) của Contract:**

  - Sau khi deploy contract lên Ethereum, chúng ta không thể nào thay đổi, chỉnh sửa gì contract của chúng ta nữa.
  - Đây là một mối lo ngại rất lớn về vấn đề bảo mật của Ethereum. Chẳng may, code của chúng ta bị một lỗi gì đó, sau khi deploy, thì không có cách nào để chúng ta vá lỗi đó. Chúng ta chỉ còn cách là nói với tất cả người dùng là contract của chúng ta đã chuyển sang một address mới.
  - Tuy nhiên, đó cũng là một tính năng của smart contract. **Code là luật**. Điều này có nghĩa là contract của chúng ta luôn chạy đúng như những gì chúng ta đã code, không ai có thể thay đổi được nó, và luôn trả về một kết quả cho mọi tình huống.
  - **External dependencies**:
    - Trong trường hợp, chúng ta thêm vào contract của chúng ta một contract khác, và chẳng may contract đó bị lỗi thì liệu rằng có cách nào chúng ta xử lí được trường hợp này???.
    - Chúng ta sẽ cài đặt hàm setAddress của contract bên ngoài vào, không  hard code cho address của contract.

- **Import**: để import một file solidity khác vào file hiện tại ta dùng từ khóa **import**, như bên dưới:

  > `` import "simply.sol";
  
- **Ownable contract**:

  - Đây là một contract lấy từ thư viện ***OpenZeppelin\*** Solidity. Chức năng cơ bản của ``Ownable``: 
    1. Khi một contract được tạo, hàm constructor của nó sẽ gán **owner** đến **msg.sender**.
    2. Sau đó thêm một modifier ``onlyOwner``, để hạn chế quyền truy cập và đảm bảo rằng chỉ có chủ sở hữu mới được quyền truy cập hàm đó.
    3. Nó cho phép chúng ta transfer contract đến một người sở hữu mới.
  
- **Gas**:

  - Trong solidity, người dùng phải trả 1 khoản phí mỗi khi gọi 1 hàm trong contract. Phí đó thông qua một loại tiền tệ được gọi là ``Gas``.
  
  - Người dùng mua Gas bằng Ether(một loại tiền tệ trong Ethereum).
  
  - Tốn bao nhiêu ga để chạy một hàm trong contract phụ thuộc vào độ phức tạp về mặt logic của hàm đó.
  
  - Mỗi một phép tính có một **gas cost** riêng.( Ví dụ, ghi một biến vào storage và blockchain thì có phí cao hơn việc thực hiện cộng 2 số nguyên).
  
  - **Total gas cost** của một function là tổng lượng gas của các phép tính để thực hiện hàm đó.
  
  - Bởi vì, việc chạy một hàm làm tốn tiền thực của người dùng nên việc tối ưu hóa code là việc cần thiết của một contract.
  
  - Nếu code của bạn dài dòng, rắc rối thì người dùng của bạn sẽ phải trả 1 khoản phí cao.
  
  - **Tại sao cần Gas**:
  
    - Ethereum thì rất lớn, chậm, nhưng cực kì bảo mật. Khi bạn thực thi một hàm, mỗi một node trong hệ thống blockchain cùng nhau chạy để xác nhận dữ liệu đầu ra. Hàng ngàn, hàng triệu node cùng nhau chạy với hàm triệu hàm.
    - Những người tạo ra Ethereum muốn làm chắc chắn rằng không ai có thể làm nghẽn mạng, với một vòng lặp vô tận. Chính vì thế họ đã lấy phí cho mỗi giao dịch. 
  
  - **Struct packing để tiết kiệm Gas**:
  
    - Nếu chúng ta khai báo một biến ``uint x`` và ``uint8 x`` thì khi chạy Ethereum cũng lấy phí như nhau.
  
    - Tuy nhiên, nếu những biến đó được khai báo bên trong một ``Struct`` thì sẽ có sự khác nhau.
  
      > ```java	
      > struct NormalStruct {
      >   uint a;
      >   uint b;
      >   uint c;
      > }
      > 
      > struct MiniMe {
      >   uint32 a;
      >   uint32 b;
      >   uint c;
      > }
      > ```
  
      ​	Như ta thấy, struct MiniMe sẽ có phí gas rẽ hơn struct NormalStruct.
  
    - Ngoài ra, Ethereum còn tính phí, phụ thuộc vào thứ tự loại biến.
  
  - **Time Unit**:
  
    - Solidity cung cấp một số kiểu dữ liệu để làm việc với thời gian. Hệ thống Unix time trong solidity sử dụng 32-bit integer. Vì thế nó chỉ lưu được đến năm 2038. Nếu chúng ta muốn hệ thống tồn tại lâu hơn thì có thể sử dụng kiểu 64 bit, và khi đó chúng ta phải tốn thêm phí Gas.
      - ``now``  trả về số giấy tính từ móc 1/1/1970 cho đến thời điểm block mới nhất trong hệ thống.
      - ``minutes, hours, day`` trả về số giây tương ứng: 60, 3600, 86400 giây.
  
  - 
  
  ​	
  
  ---
  
  ### Web3.js
  
  
  
  - Như chúng ta đã biết, Ethereum được tạo thành từ các nodes, với mỗi node chứa một bản copy của hệ thống blockchain. Khi ta gọi một hàm từ smart contract, chúng ta phải truy cập vào một trong những nodes đó và cung cấp:
  
    - Địa chỉ của smart contract. 
    - Hàm cần gọi.
    - Giá trị biến cần truyền vào hàm.
  
  - Các nodes trong Ethereum sử dụng một ngôn ngữ gọi là **JSON-RPC**, chúng ta không thể đọc hiểu được ngôn ngữ đó. Bên dưới là đoạn code mẫu thể hiện một câu truy vấn đến node để gọi một hàm trong smart contract:
  
    > ```solidity
    > // Yeah... Good luck writing all your function calls this way!
    > // Scroll right ==>
    > {"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{"from":"0xb60e8dd61c5d32be8058bb8eb970870f07233155","to":"0xd46e8dd67c5d32be8058bb8eb970870f07244567","gas":"0x76c0","gasPrice":"0x9184e72a000","value":"0x9184e72a","data":"0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}],"id":1}
    > ```
  
  - Với Web3.js sẽ giúp chúng ta không phải làm việc với ngôn ngữ phức tạp trên.  Bên dưới là một câu truy vấn đến smart contract khi sử dụng Web3.js:
  
    > ```solidity
    > CryptoZombies.methods.createRandomZombie("Vitalik Nakamoto 🤔")
    >   .send({ from: "0xb60e8dd61c5d32be8058bb8eb970870f07233155", gas: "3000000" })
    > ```
  
  **Cách sử dụng Web3js**
  
  
  
  - Cài đặt: Sử dụng NPM:  `` npm install web3`` , hoặc có thể tải trực tiếp file ``.js `` từ repo [github](https://github.com/ethereum/web3.js) của ethereum. Nếu sử dụng cách tải file js từ github thì ta sẽ nhúng file js vừa tải vào project HTML như một file javascript thông thường bằng cách: ``<script language="javascript" type="text/javascript" src="web3.min.js"></script>``.
  
  - Điều đầu tiên chúng ta cần là **Web3 Provider**. Nó cung cấp các chức năng để chúng ta có thể thao tác đọc, ghi dữ liệu vào smart contract. Web3 Provider thì giống như việc chúng ta cài đặt route API của một web app thông thường.
  
  - Chúng ta có thể lưu trữ node như một nhà cung cấp. Tuy nhiên, có một dịch vụ của bên thứ 3 đảm nhận việc này rất tốt, dịch vụ này giúp bạn bảo trì node của bạn trong Ethereum. Đó là **Infura**.
  
  - **Infura**:
  
    - Là một dịch vụ mà có nhiệm vụ duy trì các nodes với một bộ nhớ đệm để truy cập nhanh hơn.
  
    - Được sử dụng như một Web3 Provider. Chúng ta có thể gửi/nhận tin nhắn đến/từ Ethereum blockchain. Để cài đặt infura ta có thể làm như bên dưới.
  
      > ```solidity
      > var web3 = new Web3(new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws"));
      > ```
  
  
  
  - Tuy nhiên, vì Dapp của chúng ta được sử dụng bởi nhiều người, và những người dùng này sẽ WRITE lên blockchain bên cạnh việc READ - chúng ta cần một cách để ngườ dùng SIGN transaction với private key của họ. 
  - Để quản lí cặp khóa public và private key đơn giản thì ta dùng dịch vụ của bên thứ ba đó là **Metamask**.
  
  
  
  **Metamask**:
  
  - Là một extension cho trình duyệt web. 
  
  - Giúp người dùng dễ dàng quản lí tài khoản trên Ethereum blockchain. Và dùng tài khoản này để tương tác với website mà đang sử dụng web3.js. 
  
    > ​	Lưu ý: Metamask sử dụng server của Infura. Ngoài ra, metamask còn cung cấp một một web3 provider tương tự như Infura. 
  
  
  
  - Bên dưới là đoạn code javascript dùng để kiểm tra xem Metamask đã được cài vào trình duyệt web hay chưa.
  
    > ```javasript
    > window.addEventListener('load', function() {
    > 
    >   // Kiểm tra xem web3 đã được cài đặt vào trình duyệt chưa (Mist/MetaMask)
    >   if (typeof web3 !== 'undefined') {
    >     // Use Mist/MetaMask's provider
    >     web3js = new Web3(web3.currentProvider);
    >   } else {
    >     // Handle the case where the user doesn't have web3. Probably
    >     // show them a message telling them to install Metamask in
    >     // order to use our app.
    >   }
    > 
    >   // Now you can start your app & access web3js freely:
    >   startApp()
    > 	
    > })
    > ```
  
  
  
  
  
  
  
  
  
  Sau khi build xong smart contract ta cần xây dựng một javascript để tương tác với smart contract.  
  
  Web3.js là một thư viện javascript của Ethereum.
  
  Bên dưới là một đoạn code mô tả một cách dùng Web3 trong javascript:
  
  ```javacript
  var abi = /*phat sinh abi bởi trình biên dịch*/
  var MyContractABI = web3.eth.contract(abi); /* dùng web3 để lấy contract bằng abi*/
  var myContractAddress = /*địa chỉ của contract mà chúng ta đã deploy lên mạng lưới Ethereum blockchain*/
  var MyContract = MyContractABI.at(myContractAddress);
  ```
  
  - **Address và ABI**:
  
    - Web3.js sẽ cần hai tham số để có thể giao tiếp được với smart contract đó là  ``address`` và ``ABI``.
    - Khi ta deploy smart contract lên hệ thống Ethereum blockchain thì nó sẽ có một địa chỉ riêng và tồn tại mãi mãi trên đó.
    - ABI được viết tắt từ Application Binary Interface. Về cơ bản, nó đại diện cho các hàm, chức năng của smar contract dưới định dạng chuỗi JSON khi nó tương tác với Web3.js.
    - Khi ta biên dịch và deploy mã smart contract lên Ethereum blockchain, trình biên dịch Solidity sẽ trả về cho bạn ABI và address của smart contract.
  
  - Khi chúng ta đã có được ``address`` và ``ABI`` ta có thể khởi tạo Web3.js trong HTML như đoạn code bên dưới:
  
    > ```javascript
    > // Instantiate myContract
    > var myContract = new web3js.eth.Contract(myABI, myContractAddress);
    > ```
  
  - **Hàm gọi Contract**:
    - Trong Web3.js có 2 phương thức để gọi hàm từ smart contract là ``call`` và ``send``.
    - **Call**:
      - ``call`` được sử dụng cho hàm ``view`` và ``pure``. Hàm này chỉ chạy trên local node, và sẽ không tạo transaction trên blockchain.
      - ``send`` sẽ tạo một transaction và làm thay đổi dữ liệu trên blockchain. Chúng ta sẽ sử dụng hàm ``send`` cho những hàm không phải là ``pure`` và ``view``.
      - Khi sử dụng hàm ``send`` thì người dùng sẽ phải trả phí ``gas``, đồng thời metamask sẽ hiện pop up cảnh báo khi thực hiện sign transaction. 
  
  
  
  
  
  ---
  
  - **Tokens on Ethereum**:
    - Một token trong Ethereum cơ bản chỉ là một smart contract mà cho phép một số qui tắc cơ bản. Cụ thể thể là nó thực hiện một bộ tiêu chuẩn của những function mà tấc cả các token contracts khác chia sẽ như là: ``transferFrom(address _from, address _to, uint256 _tokenId)`` và ``balanceOf(address _owner)``.
    - Internal smart contract thường có một mapping, ``mapping(address => uint256) balances``, mà nó ghi lại tấc cả số dư tài khoản tính tới thời điểm hiện tại của mỗi address.
    - Vậy, đơn giản thì một token chỉ là một smart contract mà có nhiệm vụ theo dõi, ghi lại ai là người sỡ hữu số lượng mã thông báo đó và theo dõi những hàm chuyển token của họ cho người khác.
  - **Tại sao Token quan trọng:**
    - Vì tấc cả token **ERC20** chia sẽ các bộ functions với những tên giống nhau, những hàm này có thể được tương tác theo cùng một cách.
    - Điều này có nghĩa là nếu chúng ta xây dụng một ứng dụng mà có khả năng tương tác với một token ERC20 thì nó cũng có thể tương tác với bất kì một token ERC20 nào khác. Bằng cách đó thì nhiều token có thể dễ dàng được thêm vào ứng dụng của chúng ta trong tương lai mà **không cần chỉnh sữa code**. Chúng ta có thể dễ dàng gắn thêm vào một address contract mới
  - **ERC721**:
    - 