<template>
  <div v-for="item in filt">
    <h1>{{item.id}}</h1>
    <h1>{{item.description}}</h1>
  </div>

</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      gifts: [],
    }
  },
  created() {
    this.$route.params.id;
    this.getGift()
  },
  computed: {
    filt() {
      return this.gifts.filter(item => {
        return item.id === this.id
      })
    }
  },
  methods: {
    getGift() {
      this.$myHttp.get("https://632129befd698dfa29f36c5c.mockapi.io/api/gifts")
        .then(res => {
          this.gifts = res.data
        })
    }
  }
}

</script>