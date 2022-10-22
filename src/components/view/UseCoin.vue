<template>
  <main>
    <Game />
  </main>
  <main>
    <Gift />
  </main>

</template>
<script>
import Gift from './ChildItem/Gift.vue';
import Game from './ChildItem/Game.vue';
export default {
  components: {
    Gift,
    Game,
  }
}
</script>
<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  background-color: rgb(226, 238, 250);
}
</style>