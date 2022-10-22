<template>
  <div class="bl__header">
    <div class="bl__header--title">
      <h3>Dùng xu đổi quà </h3>
    </div>
  </div>
  <div class="bl__game">
    <div class="bl--button">
      <img class="el--img" src="../ChildImg/money-bag.png" alt="#">
      <h5>30000000</h5>
    </div>
    <div class="bl--button">
      <img class="el--img" src="../ChildImg/banknote.png" alt="#">
      <h5>Quà của tôi</h5>
    </div>
    <div class="bl--button">
      <img class="el--img" src="../ChildImg/british-shorthair.png" alt="#">
      <h5>Trang chủ</h5>
    </div>
  </div>
  <div class="bl__flash-sale">
    <RouterLink to="/">
      <div class="bl--content">
        <img class="bl--img" src="../ChildImg/pic2.jpg" alt="#">
      </div>
    </RouterLink>
    <RouterLink to="/">
      <div class="bl--content">
        <img class="bl--img" src="../ChildImg/pic2.jpg" alt="#">
      </div>
    </RouterLink>
    <RouterLink to="/">
      <div class="bl--content">
        <img class="bl--img" src="../ChildImg/pic2.jpg" alt="#">
      </div>
    </RouterLink>
    <RouterLink to="/">
      <div class="bl--content">
        <img class="bl--img" src="../ChildImg/pic2.jpg" alt="#">
      </div>
    </RouterLink>
  </div>
</template>
<style scoped>
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

.bl__game {
  display: flex;
  width: 95%;
  justify-content: space-between;
  margin: auto;
}

.bl--button:first-child {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 205, 42);
  width: 90px;
  height: 25px;
  border-radius: 25px;

}

.bl--button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(173, 239, 255);
  width: 90px;
  height: 25px;
  border-radius: 25px;
  margin-left: 10px;
}

.el--img {
  width: 25px;
  margin-left: -10px;
}

h5 {
  margin: auto;
  font-size: 11px;
  font-weight: bolder;
}

.bl__flash-sale {
  display: flex;
  width: 95%;
  gap: 10px;
  overflow-x: scroll;
  margin: 10px auto;
}

.bl--content {
  display: block;
  width: 300px;
  height: 150px;
  background-color: aqua;
  border-radius: 10px;
  overflow: hidden;

}

.bl--img {
  width: 300px;
  height: 150px;
}
</style>