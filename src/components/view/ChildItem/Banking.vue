<template>
  <div class="bl__container">
    <div class="bl__nav">
      <div class="bl__nav--title">
        <h4 style="font-weight:bolder">Chuyển Tiền - Nhận Tiền</h4>
      </div>
    </div>
    <!-- Service -->
    <div class="bl__suggest--item">
      <div class="bl__suggest--nav">
        <div class="bl__nav--menu">
          <RouterLink to="/updateitems">
            <img class="bl--img" src="../ChildImg/debit-card.png" alt="#">
            <h5>Chuyển Tiền</h5>
          </RouterLink>
        </div>
        <div class="bl__nav--menu">
          <RouterLink to="/updateitems">
            <img class="bl--img" src="../ChildImg/customer-service.png" alt="#">
            <h5>Nhận Tiền</h5>
          </RouterLink>
        </div>
        <div class="bl__nav--menu">
          <RouterLink to="/updateitems">
            <img class="bl--img" src="../ChildImg/first-prize.png" alt="#">
            <h5>Nhắc Nợ</h5>
          </RouterLink>
        </div>
        <div class="bl__nav--menu">
          <RouterLink to="/updateitems">
            <img class="bl--img" src="../ChildImg/shopping-online.png" alt="#">
            <h5>Lì Xì</h5>
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
  margin-top: 5px;
  background-color: white;
}

.bl--img {
  width: 32px;
  margin-bottom: 10px;
}

.bl__nav--menu {
  width: 80px;
  margin-top: 10px;
  text-align: center;
}

.bl__nav {
  display: flex;
  width: 100%;
  justify-content: center;
}

.bl__nav--title {
  width: 90%;
  margin-top: 10px;
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