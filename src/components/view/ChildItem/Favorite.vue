<template>
  <div class="bl__container">
    <div class="bl__nav">
      <div class="bl__nav--title">
        <h4 style="font-weight:bolder">Dịch Vụ Ưu Thích</h4>
      </div>
    </div>
    <!-- Service -->
    <div class="bl__suggest--item">
      <div class="bl__suggest--nav">
        <div class="bl__nav--menu">
          <RouterLink to="/updateitems">
            <img class="bl--img" src="../ChildImg/debit-card.png" alt="#">
            <h5>Mua Thẻ Điện Thoại</h5>
          </RouterLink>
        </div>
        <div class="bl__nav--menu">
          <RouterLink to="/updateitems">
            <img class="bl--img" src="../ChildImg/customer-service.png" alt="#">
            <h5>Giới Thiệu Khách Hàng</h5>
          </RouterLink>
        </div>
        <div class="bl__nav--menu">
          <RouterLink to="/updateitems">
            <img class="bl--img" src="../ChildImg/first-prize.png" alt="#">
            <h5>1K Kỳ Diệu</h5>
          </RouterLink>
        </div>
        <div class="bl__nav--menu">
          <RouterLink to="/updateitems">
            <img class="bl--img" src="../ChildImg/shopping-online.png" alt="#">
            <h5>Mua Sắm </h5>
          </RouterLink>
        </div>
        <div class="bl__nav--menu">
          <RouterLink to="/updateitems">
            <img class="bl--img" src="../ChildImg/credit-card.png" alt="#">
            <h5>Thanh Toán Hoá Đơn</h5>
          </RouterLink>
        </div>
        <div class="bl__nav--menu">
          <RouterLink to="/updateitems">
            <img class="bl--img" src="../ChildImg/charge.png" alt="#">
            <h5>Nộp Học Phí</h5>
          </RouterLink>
        </div>
        <div class="bl__nav--menu">
          <RouterLink to="/updateitems">
            <img class="bl--img" src="../ChildImg/ticket.png" alt="#">
            <h5>Đặt Xe</h5>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bl__container {
  width: 100%;
  height: 100%;
  margin-top: 10px;
  background-color: white;
}

.bl--img {
  width: 32px;
  margin-bottom: 10px;
}

.bl__nav--menu {
  width: 80px;
  margin-top: 5px;
  text-align: center;
}

.bl__nav {
  display: flex;
  width: 100%;
  justify-content: center;
}

.bl__nav--title {
  width: 90%;
}

.bl__suggest--item {
  display: flex;
  width: 100%;
  justify-content: center;
}

.bl__suggest--nav {
  width: 90%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
</style>