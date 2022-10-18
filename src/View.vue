<template>
    <router-view>
    </router-view>
    <NavBar />
</template>
<script>
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
export default {
    components: {
        Home,
        NavBar,
    },
}
</script>