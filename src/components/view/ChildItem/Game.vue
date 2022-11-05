<template>
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
        <img class="bl--img" src="../ChildImg/pic1.jpg" alt="#">
      </div>
    </RouterLink>
    <RouterLink to="/">
      <div class="bl--content">
        <img class="bl--img" src="../ChildImg/pic2.jpg" alt="#">
      </div>
    </RouterLink>
    <RouterLink to="/">
      <div class="bl--content">
        <img class="bl--img" src="../ChildImg/pic3.jpg" alt="#">
      </div>
    </RouterLink>
    <RouterLink to="/">
      <div class="bl--content">
        <img class="bl--img" src="../ChildImg/pic4.jpg" alt="#">
      </div>
    </RouterLink>
  </div>
</template>
<style scoped>
.bl__game {
  display: flex;
  width: calc(90% + 15px);
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
  margin-left: 10px;
  margin-top: 10px;

}

.bl--button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(173, 239, 255);
  width: 90px;
  height: 25px;
  border-radius: 25px;
  margin-top: 10px;
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
  width: calc(90% + 15px);
  overflow-x: scroll;
  margin: 10px auto;
  box-sizing: border-box;
  gap: 15px;
}

.bl--content {
  width: calc(100%);
  min-width: calc(90vw + 15px);
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
}

.bl--img {
  width: calc(100%);
  min-width: calc(90vw + 15px);
  box-sizing: border-box;
  height: 200px;
  border-radius: 10px;
}
</style>