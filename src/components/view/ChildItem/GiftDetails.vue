<template>
  <div class="bl__header">
    <div class="bl__header--title">
      <h3>Dùng xu đổi quà </h3>
    </div>
  </div>
  <div v-for="item in filt">
    <div class="bl__boundary">
      <div class="bl__tilte">
        <img class="el--img" src="../ChildImg/safebox.png" alt="#">
        <h4>{{item.title}}</h4>
        <h4>{{item.description}}</h4>
      </div>
      <hr>
      <div>
        <h3 class="el--h3">1.Điều kiện sử dụng</h3>
        <ul>
          <li>Voucher áp dụng cho 1 lượt chơi chương trình "1K kỳ diệu" trên Lazada thanh toán bằng ZaloPay</li>
          <li>Voucher chỉ được sử dụng 1 lần duy nhất</li>
          <li>Hạn sử dụng voucher: 7 ngày kể từ ngày nhận</li>
          <li>Chỉ áp dụng với đơn hàng tại Cửa hàng Lazada trên Zalo thanh toán qua ZaloPay</li>
        </ul>
        <h3 class="el--h3">2.Hướng dẫn sử dụng</h3>
        <ul>
          <li>Bước 1: Truy cập ứng dụng Zalo, chọn mục Khám Phá, chọn Cửa hàng Lazada</li>
          <li>Bước 2: Chọn chương trình "1K kỳ diệu" trên Lazada</li>
          <li>Bước 3: Chọn hình thức thanh toán qua ZaloPay</li>
          <li>Bước 4: Chọn Voucher và xác nhận thanh toán để được 1 lượt tham gia</li>
        </ul>
      </div>
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
.bl__header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgb(30, 135, 255);
}

.bl__header--title {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: end;
}

.bl__header--title h3 {
  color: white;
}

.bl__boundary {
  padding-left: 8px;
  padding-right: 8px;
}

.bl__tilte {
  margin-top: 10px;
  text-align: center;
  margin-bottom: 10px;
}

.el--img {
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
}

.el--h3 {
  font-weight: bold;
}
</style>