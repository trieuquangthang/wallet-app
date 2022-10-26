<template>
  <header>
    <div class="bl__header">
      <h3>Dùng xu đổi quà </h3>
    </div>
  </header>
  <main>
    <Game />
    <div class="bl__gift">
      <Gift v-bind:search="search" />
    </div>
  </main>
  <footer>
    <RouterLink to="/allgifts">
      <div class="bl__button">
        <h5>Xem tất cả ưu đãi</h5>
      </div>
    </RouterLink>
  </footer>
</template>
<script>
import Gift from './ChildItem/Gift.vue';
import Game from './ChildItem/Game.vue';
export default {
  data() {
    return {
      search: "",
    }
  },
  components: {
    Gift,
    Game,
  }
}
</script>
<style scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgb(30, 135, 255);
}

.bl__header {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: end;
}

.bl__header h3 {
  color: white;
}

main {
  background-color: rgb(226, 238, 250);
}

.bl__gift {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

footer {
  display: flex;
  justify-content: center;
  height: 100px;
  background-color: rgb(226, 238, 250);
}

.bl__button {
  display: flex;
  width: calc(90%);
  min-width: calc(90vw + 15px);
  height: 30px;
  border: 1px solid rgb(91, 165, 235);
  background-color: white;
  border-radius: 5px;
  margin-top: 15px;
}

h5 {
  margin: auto;
  color: rgb(0, 89, 255);
}
</style>