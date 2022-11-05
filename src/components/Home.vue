<template>
  <!-- Trang Chủ-->
  <div class="bl__header">
    <div class="bl__header--sub">
      <div class="bl__header--infor">
        <div class="bl--avatar">
          <img class="bl--img" src="./img/man.png" alt="#" style="width:25px">
          <h5 class="el__user">Xin Chào,Triệu Thắng</h5>
        </div>
        <div>
          <svg class="svg__icon svg__notice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <!-- Ví -->
  <div class="bl__wallet">
    <div class="bl__wallet--coin">
      <div class="bl__coin">
        <div class="bl__coin--infor">
          <svg class="svg__icon " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
          </svg>
          <h5 style="font-weight:bolder">2.000.000.000đ</h5>
        </div>
        <div class="bl__coin--infor">
          <svg class="svg__icon " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z" />
          </svg>
          <h5 style="font-weight:bolder">100.000.000đ</h5>
        </div>
      </div>
      <!-- Tính năng -->
      <div class="bl__function">
        <RouterLink to="/update">
          <div class="bl__nav--menu">
            <img class="bl--img" src="./img/bank.png" alt="#">
            <h5>Chuyển Tiền</h5>
          </div>
        </RouterLink>
        <RouterLink to="/update">
          <div class="bl__nav--menu">
            <img class="bl--img" src="./img/qr-icon.png" alt="#">
            <h5>Thanh Toán Hợp Đồng</h5>
          </div>
        </RouterLink>
        <RouterLink to="/update">
          <div class="bl__nav--menu">
            <img class="bl--img" src="./img/wallet.png" alt="#">
            <h5>Nạp Rút</h5>
          </div>
        </RouterLink>
        <RouterLink to="/update">
          <div class="bl__nav--menu">
            <img class="bl--img" src="./img/gift-box.png" alt="#">
            <h5>Ưu Đãi</h5>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
  <!-- Nôi dung -->
  <div class="bl__content">
    <div class="bl__content--nav">
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/mobile-payment.png" alt="#">
          <h5>Nạp Tiền ĐT</h5>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/contract.png" alt="#">
          <h5>Thanh Toán Hợp Đồng</h5>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/cash-on-delivery.png" alt="#">
          <h5>Nhận Tiền</h5>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/safebox.png" alt="#">
          <h5>Tài Khoản Tích Luỹ</h5>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/4g.png" alt="#">
          <h5>Nạp 3G/4G</h5>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/safebox.png" alt="#">
          <h5>VETC</h5>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/movies.png" alt="#">
          <h5>Đặt Vé Phim</h5>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/item">
          <img class="bl--img" src="./img/select.png" alt="#">
          <h5>Tất Cả</h5>
        </RouterLink>
      </div>
    </div>
  </div>
  <!-- Đề Xuất -->
  <div class="bl__nav">
    <div class="bl__nav--title">
      <h4 style="font-weight:bolder">ZaloPay Đề Xuất Cho Bạn</h4>
    </div>
  </div>
  <div class="bl__suggest--item">
    <div class="bl__suggest--nav">
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/debit-card.png" alt="#">
          <h6>Mua Thẻ Điện Thoại</h6>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/customer-service.png" alt="#">
          <h6>Giới Thiệu Khách Hàng</h6>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/first-prize.png" alt="#">
          <h6>1K Kỳ Diệu</h6>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/shopping-online.png" alt="#">
          <h6>Mua Sắm </h6>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/store.png" alt="#">
          <h6>Big C</h6>
        </RouterLink>
      </div>
    </div>
  </div>
  <!-- Chương Trình Ưu Đãi -->
  <div class="bl__container--service">
    <div class="bl__service">
      <RouterLink to="/update">
        <div class="bl__service--item">
          <div class="el__item">
            <img src="./img/pic1.jpg" alt="#">
          </div>
          <div class="el__item--infor">
            <div>
              <h4 style="font-weight:bolder">Nhận 8.888.888đ</h4>
              <h4>Khi Chuyển 1.111đ</h4>
            </div>
            <div><a href="#">Nhận ngay</a></div>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/update">
        <div class="bl__service--item">
          <div class="el__item">
            <img src="./img/pic2.jpg" alt="#">
          </div>
          <div class="el__item--infor">
            <div>
              <h4 style="font-weight:bolder">Phần Quà Hấp Dẫn</h4>
              <h4>Khi Thanh Toán Tại ZaloPay</h4>
            </div>
            <div><a href="#">Nhận ngay</a></div>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/update">
        <div class="bl__service--item">
          <div class="el__item">
            <img src="./img/pic3.jpg" alt="#">
          </div>
          <div class="el__item--infor">
            <div>
              <h4 style="font-weight:bolder">Giới Thiệu Bạn Bè </h4>
              <h4>Để Nhận Phần Quà</h4>
            </div>
            <div><a href="#">Nhận ngay</a></div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
  <!-- Dịch Vụ Đối Tác -->
  <div class="bl__nav">
    <div class="bl__nav--title">
      <h4 style="font-weight:bolder">Dịch Vụ Đối Tác</h4>
    </div>
  </div>
  <div class="bl__nav">
    <div class="bl__nav--service">
      <div class="bl__nav--menu">
        <img class="bl--img" src="./img/facebook.png" alt="#">
        <h5>Facebook</h5>
      </div>
      <div class="bl__nav--menu">
        <img class="bl--img" src="./img/twitter.png" alt="#">
        <h5>Twitter</h5>
      </div>
      <div class="bl__nav--menu">
        <img class="bl--img" src="./img/photoshop.png" alt="#">
        <h5>Adobe Ps</h5>
      </div>
      <div class="bl__nav--menu">
        <img class="bl--img" src="./img/tiktok.png" alt="#">
        <h5>Tiktok</h5>
      </div>
    </div>
  </div>
  <div class="bl__footer"></div>
</template>
<script>
</script>
<style scoped>
.svg__icon {
  width: 15px;
  fill: rgb(0, 140, 255)
}

.svg__notice {
  fill: rgb(3, 32, 56)
}

.bl--img {
  width: 32px;
  margin-bottom: 10px;
}

.bl__nav--menu {
  width: 70px;
  margin-top: 10px;
  text-align: center;
}

.bl__header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: rgb(2, 42, 65);
}

.bl__header--sub {
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: rgb(30, 135, 255)
}

.bl__header--infor {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}

.bl--avatar {
  display: flex;
  align-items: flex-end;
}

.el__user {
  margin-left: 5px;
}

.bl--avatar h5 {
  font-weight: 500;
  color: white;
}

.bl__wallet {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -35px;
  /* position: relative;
  top: -35px; */
}

.bl__wallet--coin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 135px;
  padding: 5px;
  border: 1px solid whitesmoke;
  box-shadow: 0px 2px 1px -1px rgba(183, 183, 183, 0.5);
  border-radius: 5px;
  background-color: white;
}

.bl__coin {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 25%;
  border-bottom: 1px solid whitesmoke;
}

.bl__coin--infor {
  display: flex;
}

.bl__coin--infor h5 {
  margin-top: 7px;
  margin-left: 7px;
}

.bl__function {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 75%;
}

.bl__content {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 25px;
}

.bl__content--nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 15px;
  width: 90%;
}

.bl__nav {
  display: flex;
  width: 100%;
  justify-content: center;
}

.bl__nav--title {
  width: 90%;
  margin-top: 25px;
}

.bl__suggest--item {
  display: flex;
  width: 100%;
  justify-content: center;
}

.bl__suggest--nav {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  width: 90%;
  justify-content: space-between;
}

.bl__nav--service {
  width: 90%;
  display: flex;
  justify-content: space-between;
}

.bl__container--service {
  margin-top: 20px;
  margin-left: 5%;
  margin-right: 5%;
}

.bl__service {
  display: flex;
  overflow-x: scroll;
  gap: 20px;
}

.bl__service--item {
  width: 100%;
}

.el__item {
  display: block;
  width: 250px;
  height: 140px;
  border: 0.5px solid whitesmoke;
  border-bottom: none;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
}

.el__item img {
  width: 100%;
  height: 100%;
}

.el__item--infor {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 50px;
  border: 0.5px solid whitesmoke;
  border-top: none;
  border-radius: 0px 0px 10px 10px;
}

.el__item--infor h4 {
  margin: 0px;
  margin-left: 10px;
  font-size: 12px;
}

.el__item--infor a {
  padding: 7px 10px;
  background-color: rgb(2, 91, 255);
  margin-right: 10px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 5px;
  color: white;
}

.bl__footer {
  width: 100%;
  height: 100px;
}
</style>
