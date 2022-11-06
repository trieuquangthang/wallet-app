<template>
  <div class="bl__header">
    <div class="bl__header--title">
      <h3>Thông Tin Cá Nhân</h3>
    </div>
  </div>
  <div class="bl__row">
    <div class="bl__nav">
      <div class="bl__nav--infor">
        <div class="bl--avatar">
          <img class="bl--img" src="../ChildImg/man.png" alt="#">
          <div class="el__user">
            <a>Triệu Thắng</a>
            <h5>0330000000</h5>
          </div>
        </div>
        <div class="bl__icon">
          <h5 class="bl--option" style="color:rgb(30, 135, 255)">Thay đổi số điện thoại</h5>
          <div><img class="bl--icon" src="../ChildImg/next.png" alt="#"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- row 3 -->
  <div class="bl__row">
    <!-- item -->
    <div class="bl__nav">
      <div class="bl__nav--option">
        <div class="bl--menu">
          <!-- <img class="bl--logo" src="../ChildImg/cash-on-delivery.png" alt="#"> -->
          <h5 class="bl--option">Loại tài khoản</h5>
        </div>
        <div class="bl__icon">
          <h5 class="bl--option" style="color:rgb(250, 47, 47)">Chưa định danh</h5>
          <div><img class="bl--icon" src="../ChildImg/next.png" alt="#"></div>
        </div>
      </div>
    </div>
    <!-- item -->
    <div class="bl__nav">
      <div class="bl__nav--option">
        <div class="bl--menu">
          <!-- <img class="bl--logo" src="../ChildImg/cash-on-delivery.png" alt="#"> -->
          <h5 class="bl--option">Địa chỉ</h5>
        </div>
        <div class="bl__icon">
          <h5 class="bl--option">Cập nhật thông tin</h5>
          <div><img class="bl--icon" src="../ChildImg/next.png" alt="#"></div>
        </div>
      </div>
    </div>
    <!-- item -->
    <div class="bl__nav">
      <div class="bl__nav--option">
        <div class="bl--menu">
          <!-- <img class="bl--logo" src="../ChildImg/cash-on-delivery.png" alt="#"> -->
          <h5 class="bl--option">Mã định danh</h5>
        </div>
        <div class="bl__icon">
          <h5 class="bl--option">200909000000000</h5>
        </div>
      </div>
    </div>

  </div>
  <!-- row 4 -->
  <div class="bl__row">
    <!-- item -->
    <div class="bl__nav">
      <div class="bl__nav--option">
        <div class="bl--menu">
          <!-- <img class="bl--logo" src="../ChildImg/cash-on-delivery.png" alt="#"> -->
          <h5 class="bl--option">Đóng tài khoản</h5>
        </div>
        <div class="bl__icon">
          <img class="bl--icon" src="../ChildImg/next.png" alt="#">
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bl__header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgb(30, 135, 255);
}

.bl__header--title {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: end;
}

.bl__header--title h3 {
  color: white;
}

.bl__boundary {
  padding-left: 8px;
  padding-right: 8px;
}

.bl__tilte {
  margin-top: 10px;
  text-align: center;
  margin-bottom: 10px;
}

.el--img {
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
}

.el--h3 {
  font-weight: bold;
}

main {
  background-color: rgb(226, 239, 255);
  height: calc(100vh + 100px);
}

.bl__header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
}

.bl__header--title {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: rgb(30, 135, 255);
  justify-content: center;
  align-items: end;
}

.bl__header--title h3 {
  color: white;
}

.bl__row {
  margin-bottom: 5px;
}

.bl__nav {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: white;
  border-bottom: 0.5px solid rgb(241, 241, 241);
}

.bl__nav--infor {
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
}

.bl--avatar {
  display: flex;
  align-items: center;
}

.bl--img {
  width: 35px
}

.bl--logo {
  width: 15px;
}

.el__user {
  margin-top: 10px;
  margin-left: 10px;
}

.bl--avatar a {
  font-size: 13px;
  font-weight: bolder;
  color: black;
}

h5 {
  font-size: 12px;
}

.bl__nav--option {
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
}

.bl--icon {
  width: 15px;
  margin-top: 3px;
}

.bl--menu {
  display: flex;
  align-items: center;
}

.bl--option {
  margin-top: 10px;
  margin-left: 10px;
}

.bl__icon {
  display: flex;
  align-items: center;
}
</style>