<template>
  <div class="bl__boundary" v-for="item in  filt ">
    <RouterLink :to="`/giftdetails/${item.id}`">
      <div class="bl__tilte">
        <img class="el--img" src="../ChildImg/smartphone.png" alt="#">
        <h5>{{item.title}}</h5>
      </div>
      <h3 class="el--h3">Giảm {{item.discount}}</h3>
      <h5 class="el--h5">Đơn Từ {{item.price}}</h5>
      <div class="bl__trim">
        <div class="bl__trim-1"></div>
        <div class="bl__trim-2"></div>
      </div>
      <div class="bl__coin">
        <div class="bl__point">
          <img class="el--img" src="../ChildImg/dollar.png" alt="#">
          <h4>{{item.coin}}</h4>
        </div>
        <div class="el--exchange">
          <a>Đổi Ngay</a>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gifts: [],
      // search: '',
    }
  },
  props: {
    search: String,
  },
  computed: {
    filt() {
      return this.gifts.filter(item => {
        return item.title.toUpperCase().includes(this.search.toUpperCase().trim())
      })
    },
  },
  created() {
    this.getGift()
  },
  methods: {
    getGift() {
      this.$myHttp.get("https://632129befd698dfa29f36c5c.mockapi.io/api/gifts")
        .then(res => {
          this.gifts = res.data
        })
    },
  },

}
</script>
<style scoped>
.bl__boundary {
  width: calc(90%/2);
  box-sizing: border-box;
  height: 160px;
  border-radius: 10px;
  background-color: white;
}

.el--h3 {
  font-size: 12px;
  margin: auto;
  text-align: center;
  font-weight: bolder;
}

.el--h5 {
  margin: auto;
  text-align: center;
}

.bl__tilte {
  margin-top: 10px;
  text-align: center;
  margin-bottom: 10px;

}

.el--img {
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
}

.bl__coin {
  display: flex;
  justify-content: space-between;
  border-top: 2px dashed rgba(128, 128, 128, 0.3);
  margin-top: 10px;
}

.bl__point {
  display: flex;
  justify-content: space-between;
  width: 70px;
  margin-top: 13px;
  margin-left: 5px;
}

.el--exchange {
  font-size: 12px;
  margin-top: 15px;
  margin-right: 5px;
}

.bl__footer {
  height: 300px;
}

.bl__trim-1 {
  position: absolute;
  width: 20px;
  height: 20px;
  /* border: 1px solid red; */
  margin-left: -12px;
  border-radius: 50%;
  background-color: rgb(226, 238, 250)
}

.bl__trim-2 {
  position: absolute;
  width: 20px;
  height: 20px;
  /* border: 1px solid blue; */
  margin-left: calc(90%/2 - 8px);
  border-radius: 50%;
  background-color: rgb(226, 238, 250)
}
</style>