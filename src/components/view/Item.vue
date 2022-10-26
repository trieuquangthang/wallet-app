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
  <main>
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
  </main>
  <footer></footer>
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
main {
  background-color: rgb(226, 238, 250);
}

footer {
  height: 100px;
  background-color: rgb(226, 238, 250);

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
  justify-content: space-between;
  align-items: end;
}

.bl__header--title h3 {
  color: white;
  margin-left: -15px;
}



.bl--img {
  width: 25px;
  margin-bottom: 10px;
}
</style>