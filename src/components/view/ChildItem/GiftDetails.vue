<template>
  <div v-for="item in filt">
    <div class="bl__boundary">
      <h3>Thông Tin Khuyến Mãi</h3>
      <h4>Thể Lệ Chương Trình</h4>
      <p>Từ ngày .... đến ngày ... khi mua sắm tại ... bạn sẽ được giảm ... </p>
      <h1>{{item.id}}</h1>
      <h1>{{item.description}}</h1>
    </div>

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
<style scoped>
.bl__boundary {
  width: 100%;
  text-align: center;
  border: 1px solid red;
}
</style>