<template>
  <!-- Header -->
  <div class="bl__container">
    <div class="bl__header">
      <div class="bl__header--title">
        <RouterLink to="/personaly">
          <div>
            <img class="bl--img" src="./ChildImg/back-1.png" alt="#">
          </div>
        </RouterLink>
        <h3>Nhận tiền bằng mã QR</h3>
      </div>
    </div>
    <p>Sử dụng ZaloPay hoặc Zalo quét mã QR để chuyển tiền mà không cần kết bạn</p>
    <div class="bl--menu">
      <img class="bl--logo" src="../img/user.png" alt="#">
      <h5 class="bl--title">Triệu Thắng</h5>
    </div>
    <div class="bl__qr">
      <img class="el__img--qr" src="../img/qr-code1.png" alt="#"><br>
      <button class="el--button">Nhập số tiền</button>
    </div>
    <div class="bl__option">
      <div class="bl--menu">
        <img class="bl--icon" src="../img/download.png" alt="#">
        <h5 class="bl--title">Lưu QR</h5>
      </div>
      <div class="bl--menu">
        <img class="bl--icon" src="../img/share.png" alt="#">
        <h5 class="bl--title">Chia sẻ QR</h5>
      </div>
      <div class="bl--menu">
        <img class="bl--icon" src="../img/info.png" alt="#">
        <h5 class="bl--title">Hướng Dẫn</h5>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  background-color: rgb(55, 135, 255);
}

.bl__container {
  width: 100%;
  text-align: center;
}

.bl__header {
  display: flex;
  justify-content: center;
  width: 100%;
}

.bl__header--title {
  display: flex;
  width: 90%;
  height: 50px;
  margin-top: 20px;

}

.bl__header--title h3 {
  color: white;
  margin-left: 50px;
  float: left;
}

p {
  width: 60%;
  font-size: 12px;
  color: white;
  margin: 10px auto;
}

.bl--menu {
  margin-top: 20px;
  margin-bottom: 10px;
}

.bl--logo {
  width: 40px;
  margin-bottom: 10px;
}

.bl--icon {
  width: 20px;
  margin-bottom: 10px;
}

.bl--title {
  color: white;
}

.bl--img {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15px;
  margin-top: 4px;
}

.bl__qr {
  width: 250px;
  height: 290px;
  box-sizing: border-box;
  margin: auto;
  border-radius: 15px;
  background-color: white;

}

.el__img--qr {
  width: 100%;
  padding: 10px;
  background-color: white;
  border-radius: 15px;

}

.el--button {
  font-size: 12px;
  width: 210px;
  height: 25px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: rgb(0, 94, 235);
}

.bl__option {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: auto;
}
</style>