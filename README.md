### Set up enviroment:

- Cài đặt nodejs, npm. Phiên bản trong bảng demo này: 
  - node: 12.6
  - npm: 6.14.4
- Cài đặt Truffle:
  - Link [Truffle](https://www.trufflesuite.com/truffle) , cài đặt bằng npm: ``npm install truffle -g``
- Cài đặt Ganache:
  - Link [Ganache](https://www.trufflesuite.com/ganache)
- Cài đặt Metamask:
  - Link [Metamask](https://metamask.io/)

### Các bước thực hiện:

- Khởi chạy ganache
- Tạo `` truffle unbox pet-shop`` để lấy khung project truffle
- Code smart contract trong thư mục contract của folder truffle
- Chạy lệnh ``truffle compile``
- Thêm file js: 2_deploy_contracts.js vào thư mục migrations
  - Và thêm đoạn code:  ....
- Chạy lệnh: truffle migrate
- Cài đặt metamask, thay đổi mạng lưới ganache, import account bất kì trong mạng ganache.
- 