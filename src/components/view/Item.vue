<template>
  <!-- Header -->
  <div class="bl__header">
    <div class="bl__header--title">
      <RouterLink to="/">
        <div>
          <img class="bl--img" src="./ChildImg/back.png" alt="#">
        </div>
      </RouterLink>
      <h3>ZaloPay</h3>
      <div>
      </div>
    </div>
  </div>
  <!-- Row 1 -->
  <Favorite />
  <!-- Row 2 -->
  <MyWallet />
  <!-- Row 3 -->
  <Banking />
  <!-- Row 4 -->
  <MyWallet />
  <!-- Row 5 -->
  <MyWallet />
  <!-- Row 6 -->
  <MyWallet />
  <!-- Row 7 -->
  <MyWallet />
  <!-- Row 8 -->
  <MyWallet />
  <!-- Row 9 -->
  <MyWallet />
  <!-- Row 10 -->
  <MyWallet />
  <!-- Row 11 -->
  <div class="bl__footer"></div>
</template>
<script>
import Favorite from './ChildItem/Favorite.vue'
import MyWallet from './ChildItem/MyWallet.vue'
import Banking from './ChildItem/Banking.vue';
export default {
  components: {
    Favorite,
    MyWallet,
    Banking
  }
}
</script>
<style scoped>
.bl__header {
  width: 100%;
}

.bl__header--title {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: rgb(25, 117, 255);
  justify-content: space-between;
  align-items: end;
}

.bl__header--title h3 {
  color: white;
}

.bl__footer {
  width: 100%;
  height: 50px;
}

.bl--img {
  width: 32px;
  margin-bottom: 5px;
}
</style>