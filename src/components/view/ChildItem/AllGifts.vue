<template>
  <div class="bl__header">
    <h3>Dùng xu đổi quà </h3>
  </div>
  <header>
    <div class="bl__search">
      <input class="el--input" type="text" v-model="search">
      <img class="el--img" src="../ChildImg/search-interface-symbol.png" alt="#">
    </div>
  </header>
  <main>
    <Gift v-bind:search="search" />
  </main>
  <footer>
  </footer>
</template>
<script>
import Gift from './Gift.vue'
export default {
  data() {
    return {
      search: "",
    }
  },
  components: {
    Gift,
  },
}
</script>
<style scoped>
header {
  background-color: rgb(226, 238, 250);
}

.bl__header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: end;
  background-color: rgb(30, 135, 255)
}

.bl__header h3 {
  color: white;
}

.bl__search {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
}

.el--input {
  position: relative;
  width: calc(90% + 15px);
  height: 25px;
  border: 1px solid rgb(71, 157, 255);
  padding-left: 25px;
  margin: auto;
  border-radius: 25px;
  outline: none;
}

.el--img {
  position: absolute;
  width: 15px;
  margin-left: 5%;
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  background-color: rgb(226, 238, 250);
}

footer {
  height: 100px;
  background-color: rgb(226, 238, 250);
}
</style>