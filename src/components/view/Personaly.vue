<template>
  <!-- Tiêu đề -->
  <div class="bl__header">
    <div class="bl__header--title">
      <h3>Cá Nhân</h3>
    </div>
  </div>
  <!-- row 1 -->
  <div class="bl__nav">
    <div class="bl__nav--infor">
      <div class="bl--avatar">
        <img class="bl--img" src="../img/user.png" alt="#">
        <div class="el__user">
          <a>Triệu Thắng</a>
          <h6>0336655XXX</h6>
        </div>
      </div>
      <div class="">
        <img class="bl--icon" src="../img/next.png" alt="#">
      </div>
    </div>
  </div>
  <!-- row 2 -->
  <RouterLink to="/qr">
    <div class="bl__nav">
      <div class="bl__nav--option">
        <div class="bl--menu">
          <img class="bl--logo" src="../img/user.png" alt="#">
          <h5 class="bl--option">Mã QR Nhận Tiền</h5>
        </div>
        <div class="bl__coin">
          <img class="bl--icon" src="../img/next.png" alt="#">
        </div>
      </div>
    </div>
  </RouterLink>
</template>
<style scoped>
body {
  background-color: whitesmoke;
}

.bl__header {
  width: 100%;
}

.bl__header--title {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: rgb(25, 117, 255);
  justify-content: center;
  align-items: end;
}

.bl__header--title h3 {
  color: white;
}

.bl__nav {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  background-color: whitesmoke;
}

.bl__nav--infor {
  display: flex;
  width: 99%;
  justify-content: space-between;
  align-items: center;
}

.bl--avatar {
  display: flex;
  align-items: center;
}

.bl--img {
  width: 50px
}

.bl--logo {
  width: 30px;
}

.el__user {
  margin-top: 10px;
  margin-left: 10px;
}

.bl--avatar a,
h6 {
  font-weight: bolder;
  color: black;
}

.bl__nav--option {
  display: flex;
  width: 99%;
  justify-content: space-between;
  align-items: center;
}

.bl--icon {
  width: 20px
}

.bl--menu {
  display: flex;
  align-items: center;
}

.bl--option {
  margin-top: 5px;
  margin-left: 10px;
}
</style>