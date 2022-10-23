<template>
  <main>
    <Game />
  </main>
  <main>
    <Gift v-bind:search="search" />
  </main>
  <footer>
    <div class="bl__footer">
      <RouterLink to="/allgifts">
        <div class="bl__button">
          <h5>Xem tất cả ưu đãi</h5>
        </div>
      </RouterLink>
    </div>
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
* {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  background-color: rgb(226, 238, 250);
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

footer {
  height: 120px;
}

.bl__footer {
  margin-top: 20px;
}

.bl__button {
  display: flex;
  width: calc(100%);
  min-width: calc(90vw + 15px);
  height: 30px;
  border: 1px solid rgb(91, 165, 235);
  background-color: white;
  border-radius: 5px;
}

h5 {
  margin: auto;
  color: rgb(0, 89, 255);
  background-color: white;
}
</style>