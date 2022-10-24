<template>
  <main>
    <!-- Tiêu đề -->
    <div class="bl__header">
      <div class="bl__header--title">
        <h3>Cá Nhân</h3>
      </div>
    </div>
    <!-- row 1 -->
    <div class="bl__row">
      <div class="bl__nav">
        <div class="bl__nav--infor">
          <div class="bl--avatar">
            <img class="bl--img" src="../img/user.png" alt="#">
            <div class="el__user">
              <a>Triệu Thắng</a>
              <h5>0330000000</h5>
            </div>
          </div>
          <div class="bl__icon">
            <img class="bl--icon" src="../img/next.png" alt="#">
          </div>
        </div>
      </div>
    </div>
    <!-- row 2 -->
    <div class="bl__row">
      <RouterLink to="/qr">
        <!-- item -->
        <div class="bl__nav">
          <div class="bl__nav--option">
            <div class="bl--menu">
              <img class="bl--logo" src="../img/qr.png" alt="#">
              <h5 class="bl--option">Mã QR Nhận Tiền</h5>
            </div>
            <div class="bl__coin">
              <img class="bl--icon" src="../img/next.png" alt="#">
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
    <!-- row 3 -->
    <div class="bl__row">
      <!-- item -->
      <div class="bl__nav">
        <div class="bl__nav--option">
          <div class="bl--menu">
            <img class="bl--logo" src="../img/wallet.png" alt="#">
            <h5 class="bl--option">Số dư</h5>
          </div>
          <div class="bl__coin">
            <img class="bl--icon" src="../img/next.png" alt="#">
          </div>
        </div>
      </div>
      <!-- item -->
      <div class="bl__nav">
        <div class="bl__nav--option">
          <div class="bl--menu">
            <img class="bl--logo" src="../img/dollar.png" alt="#">
            <h5 class="bl--option">Xu tích luỹ</h5>
          </div>
          <div class="bl__coin">
            <img class="bl--icon" src="../img/next.png" alt="#">
          </div>
        </div>
      </div>
      <!-- item -->
      <div class="bl__nav">
        <div class="bl__nav--option">
          <div class="bl--menu">
            <img class="bl--logo" src="../img/giftbox.png" alt="#">
            <h5 class="bl--option">Quà của tôi</h5>
          </div>
          <div class="bl__coin">
            <img class="bl--icon" src="../img/next.png" alt="#">
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
            <img class="bl--logo" src="../img/bank.png" alt="#">
            <h5 class="bl--option">Ngân Hàng</h5>
          </div>
          <div class="bl__coin">
            <img class="bl--icon" src="../img/next.png" alt="#">
          </div>
        </div>
      </div>
      <!-- item -->
      <div class="bl__nav">
        <div class="bl__nav--option">
          <div class="bl--menu">
            <img class="bl--logo" src="../img/bill.png" alt="#">
            <h5 class="bl--option">Quản lý hoá đơn</h5>
          </div>
          <div class="bl__coin">
            <img class="bl--icon" src="../img/next.png" alt="#">
          </div>
        </div>
      </div>
      <!-- item -->
      <div class="bl__nav">
        <div class="bl__nav--option">
          <div class="bl--menu">
            <img class="bl--logo" src="../img/link-1.png" alt="#">
            <h5 class="bl--option">Liên kết thanh toán</h5>
          </div>
          <div class="bl__coin">
            <img class="bl--icon" src="../img/next.png" alt="#">
          </div>
        </div>
      </div>
      <!-- item -->
      <div class="bl__nav">
        <div class="bl__nav--option">
          <div class="bl--menu">
            <img class="bl--logo" src="../img/link.png" alt="#">
            <h5 class="bl--option">Dịch vụ liên kết</h5>
          </div>
          <div class="bl__coin">
            <img class="bl--icon" src="../img/next.png" alt="#">
          </div>
        </div>
      </div>
    </div>
    <!-- row 5 -->
    <div class="bl__row">
      <!-- item -->
      <div class="bl__nav">
        <div class="bl__nav--option">
          <div class="bl--menu">
            <img class="bl--logo" src="../img/cogwheel.png" alt="#">
            <h5 class="bl--option">Thiết lập tài khoản</h5>
          </div>
          <div class="bl__coin">
            <img class="bl--icon" src="../img/next.png" alt="#">
          </div>
        </div>
      </div>
      <!-- item -->
      <div class="bl__nav">
        <div class="bl__nav--option">
          <div class="bl--menu">
            <img class="bl--logo" src="../img/customer-service.png" alt="#">
            <h5 class="bl--option">Trung Tâm Hỗ Trợ</h5>
          </div>
          <div class="bl__coin">
            <img class="bl--icon" src="../img/next.png" alt="#">
          </div>
        </div>
      </div>
      <!-- item -->
      <div class="bl__nav">
        <div class="bl__nav--option">
          <div class="bl--menu">
            <img class="bl--logo" src="../img/letter-i.png" alt="#">
            <h5 class="bl--option">Thông Tin Ứng Dụng</h5>
          </div>
          <div class="bl__coin">
            <img class="bl--icon" src="../img/next.png" alt="#">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  background-color: rgb(226, 238, 250);
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
  background-color: rgb(25, 117, 255);
  justify-content: center;
  align-items: end;
}

.bl__header--title h3 {
  color: white;
}

.bl__row {
  margin-bottom: 10px;
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
  width: 30px
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
  width: 15px
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