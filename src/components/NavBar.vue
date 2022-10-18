<template>
  <div class="bl__cont">
    <div class="bl__cont--nav">
      <div class="bl__nav--menu">
        <router-link to="/">
          <svg class="svg__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
          <h6>Trang Chủ</h6>
        </router-link>
      </div>
      <div class="bl__nav--menu">
        <router-link to="/hitories">
          <svg class="svg__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
          </svg>
          <h6>Lịch Sử</h6>
        </router-link>
      </div>
      <div class="bl__nav--menu">
        <svg class="svg__icon svg__qr" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 29 29">
          <path
            d="M13.196 6H6.804a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 .75.75h6.392a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75Zm-.75 6.5H7.554v-5h4.892ZM11 9H9v2h2Zm-8 3a1 1 0 0 0 1-1V5a1.001 1.001 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3.003 3.003 0 0 0-3 3v6a1 1 0 0 0 1 1Zm10.196 3H6.804a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 .75.75h6.392a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75Zm-.75 6.5H7.554v-5h4.892ZM11 18H9v2h2Zm0 7H5a1.001 1.001 0 0 1-1-1v-6a1 1 0 0 0-2 0v6a3.003 3.003 0 0 0 3 3h6a1 1 0 0 0 0-2Zm15-8a1 1 0 0 0-1 1v6a1.001 1.001 0 0 1-1 1h-6a1 1 0 0 0 0 2h6a3.003 3.003 0 0 0 3-3v-6a1 1 0 0 0-1-1Zm-8.5 3.5h-2v2h2Zm-2-3.006h2v-2h-2ZM24 2h-6a1 1 0 0 0 0 2h6a1.001 1.001 0 0 1 1 1v6a1 1 0 0 0 2 0V5a3.003 3.003 0 0 0-3-3Zm-6 9h2V9h-2Zm2 9v-2h-2v2Zm2.196-6a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75h-6.392a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 .75.75Zm-5.642-6.5h4.892v5h-4.892Zm5.946 7.994h-2v2h2Zm-2 7.006h2v-2h-2Z" />
        </svg>
      </div>
      <div class="bl__nav--menu">
        <router-link to="/usecoin">
          <svg class="svg__icon " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z" />
          </svg>
          <h6>Dùng Xu</h6>
        </router-link>
      </div>
      <div class="bl__nav--menu">
        <router-link to="/personaly">
          <svg class="svg__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
          <h6>Cá Nhân</h6>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
h1,
h2,
h3,
h4,
h5,
h6,
a {
  font-family: roboto;
}

.bl__cont {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  box-shadow: 1px 1px 1px 1px;
  /* z-index: 999; */
  background-color: white;
}

.bl__cont--nav {
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.svg__icon {
  width: 15px;
  fill: grey;
  transition: all linear 0.2s;
}

.svg__icon:hover {
  transform: scale(1.2);
  fill: rgb(0, 174, 255);
}


.svg__qr {
  width: 30px;
  margin-top: -10px;
  fill: grey;
}

.bl__nav--menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  text-align: center;
  /* border: 1px solid red; */
}

.bl__header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-image: url(./img/pic1.jpg);
}

.bl__header--infor {
  width: 90%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bl--avatar {
  display: flex;
}

.el__user {
  margin-top: 5px;
  margin-left: 5px;
}

.bl__wallet {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -40px;
}

.bl__wallet--coin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 150px;
  padding: 5px;
  border: 0.5px solid grey;
  border-radius: 5px;
  background-color: white;
}

.bl__coin {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 25%;
  border-bottom: 0.5px solid grey;
}
</style>