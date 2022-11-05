<template>
  <main>
    <!-- Tiêu đề -->
    <div class="bl__header">
      <div class="bl__header--title">
        <h3>Lịch Sử Giao Dịch</h3>
      </div>
      <div class="bl__container">
        <img class="bl--img" src="./ChildImg/search-interface-symbol.png" alt="#">
        <input class="bl__input" type="text" placeholder="Tìm giao dịch">
      </div>
    </div>
    <!-- row 2 -->
    <div class="bl__row">
      <!-- item -->
      <div class="bl__nav-tab">
        <div class="bl__nav--option">
          <div class="el--list" v-for="item in list">
            <label :for="`${item.for}`">
              <input type="radio" name="a" :id="`${item.id}`" class="el--tabs" hidden :value="`${item.name}`"
                v-model="tab_value">
              <div class="bl__tabs">
                <h5 class="el--h5">{{item.name}}</h5>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <!-- row 3 -->
    <div class="bl__row">

    </div>
    <!-- row 4 -->
    <div class="bl__row">

    </div>
    <!-- row 5 -->
    <div class="bl__row">

    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      tab_value: '',
      list: [
        {
          'for': 'a',
          'id': 'a',
          'name': 'Tất cả'
        },
        {
          'for': 'b',
          'id': 'b',
          'name': 'Điện Thoại'
        },
        {
          'for': 'c',
          'id': 'c',
          'name': 'Nạp Tiền'
        },
        {
          'for': 'd',
          'id': 'd',
          'name': 'Nhận Tiền'
        },
        {
          'for': 'e',
          'id': 'e',
          'name': 'Hoàn Tiền'
        },
        {
          'for': 'f',
          'id': 'f',
          'name': 'Rút Tiền'
        },
        {
          'for': 'g',
          'id': 'g',
          'name': 'Chuyển Tiền'
        },
        {
          'for': 'h',
          'id': 'h',
          'name': 'Thanh Toán'
        },
        {
          'for': 'i',
          'id': 'i',
          'name': 'Tài Chính'
        },
      ]
    }
  },
}
</script>
<style scoped>
main {
  background-color: rgb(226, 239, 255);
  height: calc(100vh + 100px);
}

.bl__header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgb(30, 135, 255);
}

.bl__header--title {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: rgb(30, 135, 255);
  justify-content: center;
  align-items: end;
}

.bl__header--title h3 {
  color: white;
}

.bl__container {
  display: flex;
  align-items: center;
  height: 50px;
}

.bl--img {
  width: 18px;
  position: absolute;
  z-index: 999;
  margin-left: 4%;

}

.bl__input {
  position: relative;
  width: 95%;
  outline: none;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 5px;
  padding-left: 30px;
  margin: auto;
  height: 30px;
}

.bl__nav-tab {
  display: flex;
  background-color: white;
  border-bottom: 0.5px solid rgb(241, 241, 241);
  overflow-x: scroll;
}

.el--list {
  display: flex;
  list-style: none;
}

.bl__tabs {
  display: flex;
  width: 80px;
  height: 50px;
}

.el--h5 {
  font-weight: bold;
  margin: auto;
}

.el--tabs:checked~.bl__tabs {
  border-bottom: 2px solid rgb(61, 129, 255);
}

.el--tabs:checked~.bl__tabs .el--h5 {
  color: rgb(61, 129, 255);
}

.bl__nav {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: white;
  border-bottom: 0.5px solid rgb(241, 241, 241);
}

.bl__nav--infor {
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
}

.bl--avatar {
  display: flex;
  align-items: center;
}

.bl--logo {
  width: 15px;
}

.el__user {
  margin-top: 10px;
  margin-left: 10px;
}

.bl--avatar a {
  font-size: 13px;
  font-weight: bolder;
  color: black;
}

h5 {
  font-size: 12px;
}


.bl__nav--option {
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
}

.bl--icon {
  width: 15px
}

.bl--menu {
  display: flex;
  align-items: center;
}

.bl--option {
  margin-top: 10px;
  margin-left: 10px;
}
</style>