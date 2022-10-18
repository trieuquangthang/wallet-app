<template>
  <!-- Trang Chủ-->
  <div class="bl__header">
    <div class="bl__header--infor">
      <div class="bl--avatar">
        <img class="bl--img" src="./img/user.png" alt="#" style="width:25px">
        <h5 class="el__user">Xin Chào,Triệu Thắng</h5>
      </div>
      <div>
        <svg class="svg__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
        </svg>
      </div>
    </div>
  </div>
  <!-- Ví -->
  <div class="bl__wallet">
    <div class="bl__wallet--coin">
      <div class="bl__coin">
        <div class="bl__coin--infor">
          <svg class="svg__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
          </svg>
          <h5 style="font-weight:bolder">2.000.000.000đ</h5>
        </div>
        <div class="bl__coin--infor">
          <svg class="svg__icon " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z" />
          </svg>
          <h5 style="font-weight:bolder">100.000.000đ</h5>
        </div>
      </div>
      <!-- Tính năng -->
      <div class="bl__function">
        <div class="bl__nav--menu">
          <svg class="svg__icon--func" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
            <path
              d="M14.494.998a.5.5 0 0 0-.348.86L15.35 3.06C8.48 3.402 3 9.073 3 16.027a12.914 12.914 0 0 0 2.22 7.27 13.05 13.05 0 0 0 3.51 3.51c.692.467 1.432.87 2.21 1.199a.5.5 0 1 0 .39-.92 11.983 11.983 0 0 1-3.814-2.572A11.958 11.958 0 0 1 4 16.028C4 9.652 8.96 4.46 15.232 4.063L14.146 5.15a.5.5 0 1 0 .708.707l2-2a.5.5 0 0 0 0-.709l-2-1.998a.5.5 0 0 0-.36-.152zm6.322 3.01a.5.5 0 0 0-.146.963 11.98 11.98 0 0 1 3.814 2.572A11.973 11.973 0 0 1 28 16.027c0 6.392-4.987 11.592-11.285 11.963l1.139-1.138a.5.5 0 0 0-.364-.858.5.5 0 0 0-.344.15l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 1 0 .708-.707L16.7 28.992C23.548 28.625 29 22.964 29 16.027a12.914 12.914 0 0 0-2.22-7.268 13.05 13.05 0 0 0-5.72-4.71.5.5 0 0 0-.193-.041.5.5 0 0 0-.05 0zM16 8.028c-4.412 0-8 3.587-8 8 0 4.412 3.588 8 8 8s8-3.588 8-8c0-4.413-3.588-8-8-8zm0 1c3.872 0 7 3.127 7 7 0 3.871-3.128 7-7 7s-7-3.129-7-7c0-3.873 3.128-7 7-7zM15.646 11v1.158c-.314.039-.599.114-.853.227-.254.112-.47.256-.65.431a1.858 1.858 0 0 0-.41.621 2.166 2.166 0 0 0-.14.79c0 .312.055.587.16.826.112.238.268.448.472.63.208.183.458.342.75.48.295.132.628.25.998.353.277.09.513.187.707.285.198.098.358.204.478.32.125.116.214.24.27.373.055.133.084.28.084.438 0 .19-.034.36-.104.515-.07.151-.172.28-.306.389-.13.105-.29.188-.485.248a2.295 2.295 0 0 1-1.18.016 1.255 1.255 0 0 1-.478-.243 1.237 1.237 0 0 1-.346-.468c-.088-.197-.13-.444-.13-.743h-1.221c0 .397.062.738.187 1.022.125.28.29.515.498.701.213.186.456.328.729.426.273.098.554.164.845.195V21h.965v-1.01c.347-.035.659-.105.936-.21.277-.106.513-.247.707-.423.194-.175.345-.382.451-.62.106-.243.158-.513.158-.815 0-.309-.05-.581-.152-.817a1.782 1.782 0 0 0-.451-.62 2.878 2.878 0 0 0-.735-.47 6.755 6.755 0 0 0-1.005-.369 5.831 5.831 0 0 1-.749-.289 2.283 2.283 0 0 1-.486-.32 1.03 1.03 0 0 1-.27-.369 1.558 1.558 0 0 1 0-.957c.056-.15.136-.28.243-.385a1.14 1.14 0 0 1 .41-.252c.162-.06.352-.09.574-.09.213 0 .402.04.569.121.166.081.305.193.416.336.11.144.194.316.25.512.06.197.09.411.09.647h1.214c0-.713-.179-1.273-.535-1.684-.351-.414-.849-.664-1.496-.752V11h-.979z"
              color="#000" font-family="sans-serif" font-weight="400" overflow="visible"
              style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" />
          </svg>
          <h5>Chuyển Tiền</h5>
        </div>
        <div class="bl__nav--menu">
          <svg class="svg__icon--func" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 29 29">
            <path
              d="M13.196 6H6.804a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 .75.75h6.392a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75Zm-.75 6.5H7.554v-5h4.892ZM11 9H9v2h2Zm-8 3a1 1 0 0 0 1-1V5a1.001 1.001 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3.003 3.003 0 0 0-3 3v6a1 1 0 0 0 1 1Zm10.196 3H6.804a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 .75.75h6.392a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75Zm-.75 6.5H7.554v-5h4.892ZM11 18H9v2h2Zm0 7H5a1.001 1.001 0 0 1-1-1v-6a1 1 0 0 0-2 0v6a3.003 3.003 0 0 0 3 3h6a1 1 0 0 0 0-2Zm15-8a1 1 0 0 0-1 1v6a1.001 1.001 0 0 1-1 1h-6a1 1 0 0 0 0 2h6a3.003 3.003 0 0 0 3-3v-6a1 1 0 0 0-1-1Zm-8.5 3.5h-2v2h2Zm-2-3.006h2v-2h-2ZM24 2h-6a1 1 0 0 0 0 2h6a1.001 1.001 0 0 1 1 1v6a1 1 0 0 0 2 0V5a3.003 3.003 0 0 0-3-3Zm-6 9h2V9h-2Zm2 9v-2h-2v2Zm2.196-6a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75h-6.392a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 .75.75Zm-5.642-6.5h4.892v5h-4.892Zm5.946 7.994h-2v2h2Zm-2 7.006h2v-2h-2Z" />
          </svg>
          <h5>Mã Thanh Toán</h5>
        </div>
        <div class="bl__nav--menu">
          <svg class="svg__icon--func" xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0"
            enable-background="new 0 0 64 64" version="1.1" viewBox="0 0 64 64" xml:space="preserve">
            <path
              d="M12.036,45c0,0.527,0.411,0.947,0.928,0.985V46.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V46h2v0.5   c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V46h2c2.206,0,4-1.794,4-4c0-1.744-1.128-3.214-2.688-3.761   c0.434-0.639,0.688-1.41,0.688-2.239c0-2.206-1.794-4-4-4v-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5V32h-2v-0.5   c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v0.515c-0.517,0.039-0.928,0.459-0.928,0.985c0,0.503,0.372,0.92,0.856,0.99V44.01   C12.408,44.08,12.036,44.497,12.036,45z M20.964,42c0,1.103-0.897,2-2,2h-4v-4h2h2C20.066,40,20.964,40.897,20.964,42z M18.964,36   c0,1.103-0.897,2-2,2h-2v-4h2C18.066,34,18.964,34.897,18.964,36z" />
            <path
              d="M52,20h-3v-5c0-2.757-2.243-5-5-5H12c-3.309,0-6,2.691-6,6v33c0,2.757,2.243,5,5,5h42c2.757,0,5-2.243,5-5v-4v-9V26   C58,22.691,55.309,20,52,20z M56,26v9h-1.988v-7.494c0-1.93-1.57-3.5-3.5-3.5h-39.5c-1.288,0-2.404-0.708-3.012-1.748V20.46   C9.063,21.414,10.462,22,12,22h30h6h4C54.206,22,56,23.794,56,26z M56,44h-7.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5H56V44z    M8,23.826c0.799,0.726,1.85,1.18,3.012,1.18h39.5c1.379,0,2.5,1.122,2.5,2.5V35H48.5c-3.032,0-5.5,2.467-5.5,5.5   s2.468,5.5,5.5,5.5h4.458l-0.008,1.537c0,0.827-0.673,1.5-1.499,1.5L11,49c-1.28,0-2.39-0.698-3-1.726V23.826z M44,20h-2H12   c-0.347,0-0.678-0.058-1-0.142V16.5c0-0.827,0.673-1.5,1.5-1.5h30c0.827,0,1.5,0.673,1.5,1.5V20z M12,12h32c1.654,0,3,1.346,3,3v5   h-2v-3.5c0-1.378-1.121-2.5-2.5-2.5h-30c-1.379,0-2.5,1.122-2.5,2.5v2.944C8.81,18.75,8,17.474,8,16C8,13.794,9.794,12,12,12z    M53,52H11c-1.654,0-3-1.346-3-3v-0.17C8.798,49.549,9.843,50,11,50l40.449,0.037c1.379,0,2.5-1.122,2.5-2.497L53.958,46H56v3   C56,50.654,54.654,52,53,52z" />
            <path
              d="M47,40.5c0,0.827,0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5S49.327,39,48.5,39S47,39.673,47,40.5z M49,40.5   c0,0.276-0.225,0.5-0.5,0.5S48,40.776,48,40.5s0.225-0.5,0.5-0.5S49,40.224,49,40.5z" />
          </svg>
          <h5>Nạp Rút</h5>
        </div>
        <div class="bl__nav--menu">
          <svg class="svg__icon--func" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" />
          </svg>
          <h5>Ưu Đãi</h5>
        </div>
      </div>
    </div>
  </div>
  <!-- Nôi dung -->
  <div class="bl__content">
    <div class="bl__content--nav">
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/smartphone.png" alt="#">
          <h5>Nạp Tiền ĐT</h5>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/contract.png" alt="#">
          <h5>Thanh Toán Hợp Đồng</h5>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/cash-on-delivery.png" alt="#">
          <h5>Nhận Tiền</h5>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/safebox.png" alt="#">
          <h5>Tài Khoản Tích Luỹ</h5>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/4g.png" alt="#">
          <h5>Nạp 3G/4G</h5>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/safebox.png" alt="#">
          <h5>VETC</h5>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/movies.png" alt="#">
          <h5>Đặt Vé Phim</h5>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/item">
          <img class="bl--img" src="./img/select.png" alt="#">
          <h5>Tất Cả</h5>
        </RouterLink>
      </div>
    </div>
  </div>
  <!-- Đề Xuất -->
  <div class="bl__nav">
    <div class="bl__nav--title">
      <h4 style="font-weight:bolder">ZaloPay Đề Xuất Cho Bạn</h4>
    </div>
  </div>
  <div class="bl__suggest--item">
    <div class="bl__suggest--nav">
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/debit-card.png" alt="#">
          <h6>Mua Thẻ Điện Thoại</h6>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/customer-service.png" alt="#">
          <h6>Giới Thiệu Khách Hàng</h6>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/first-prize.png" alt="#">
          <h6>1K Kỳ Diệu</h6>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/shopping-online.png" alt="#">
          <h6>Mua Sắm </h6>
        </RouterLink>
      </div>
      <div class="bl__nav--menu">
        <RouterLink to="/update">
          <img class="bl--img" src="./img/store.png" alt="#">
          <h6>Big C</h6>
        </RouterLink>
      </div>
    </div>
  </div>
  <!-- Chương Trình Ưu Đãi -->
  <div class="bl__service">
    <RouterLink to="/update">
      <div class="bl__service--item">
        <div class="el__item">
          <img src="./img/pic1.jpg" alt="#">
        </div>
        <div class="el__item--infor">
          <div>
            <h4 style="font-weight:bolder">Nhận 8.888.888đ</h4>
            <h4>Khi Chuyển 1.111đ</h4>
          </div>
          <div><a href="#">Nhận ngay</a></div>
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/update">
      <div class="bl__service--item">
        <div class="el__item">
          <img src="./img/pic1.jpg" alt="#">
        </div>
        <div class="el__item--infor">
          <div>
            <h4 style="font-weight:bolder">Nhận 8.888.888đ</h4>
            <h4>Khi Chuyển 1.111đ</h4>
          </div>
          <div><a href="#">Nhận ngay</a></div>
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/update">
      <div class="bl__service--item">
        <div class="el__item">
          <img src="./img/pic1.jpg" alt="#">
        </div>
        <div class="el__item--infor">
          <div>
            <h4 style="font-weight:bolder">Nhận 8.888.888đ </h4>
            <h4>Khi Chuyển 1.111đ</h4>
          </div>
          <div><a href="#">Nhận ngay</a></div>
        </div>
      </div>
    </RouterLink>
  </div>
  <!-- Dịch Vụ Đối Tác -->
  <div class="bl__nav">
    <div class="bl__nav--title">
      <h4 style="font-weight:bolder">Dịch Vụ Đối Tác</h4>
    </div>
  </div>
  <div class="bl__nav">
    <div class="bl__nav--service">
      <div class="bl__nav--menu">
        <img class="bl--img" src="./img/coffee.png" alt="#">
        <h5>Lazada</h5>
      </div>
      <div class="bl__nav--menu">
        <img class="bl--img" src="./img/coffee-shop.png" alt="#">
        <h5>Baemin</h5>
      </div>
      <div class="bl__nav--menu">
        <img class="bl--img" src="./img/automotive.png" alt="#">
        <h5>Be</h5>
      </div>
      <div class="bl__nav--menu">
        <img class="bl--img" src="./img/automotive.png" alt="#">
        <h5>Tiki</h5>
      </div>
    </div>
  </div>
  <div class="bl__footer"></div>
</template>
<script>
</script>
<style scoped>
.svg__icon--func {
  width: 32px;
  fill: rgb(0, 140, 255)
}

.svg__icon {
  width: 15px;
  fill: rgb(0, 140, 255)
}

.bl--img {
  width: 32px;
  margin-bottom: 10px;
}

.svg__icon--menu {
  width: 32px;
  fill: rgb(0, 140, 255);
  margin-bottom: 5px;
  transition: all linear 0.2s;
}

.svg__icon--menu:hover {
  transform: scale(1.1);
}

.bl__nav--menu {
  width: 80px;
  margin-top: 10px;
  text-align: center;
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
  margin-top: 10px;
  margin-left: 10px;
}

.bl--avatar h5 {
  font-weight: bolder;
  color: black;
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
  border: 0.5px solid whitesmoke;
  border-radius: 5px;
  background-color: white;
}

.bl__coin {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 25%;
  border-bottom: 0.5px solid whitesmoke;
}

.bl__coin--infor {
  display: flex;
}

.bl__coin--infor h5 {
  margin-top: 7px;
  margin-left: 7px;
}

.bl__function {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75%;
}

.bl__content {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 25px;
}

.bl__content--nav {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  width: 90%;
}

.bl__nav {
  display: flex;
  width: 100%;
  justify-content: center;
}

.bl__nav--title {
  width: 90%;
  margin-top: 25px;
}

.bl__suggest--item {
  display: flex;
  width: 100%;
  justify-content: center;
}

.bl__suggest--nav {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  width: 90%;
  justify-content: space-between;
}

.bl__nav--service {
  width: 90%;
  display: flex;
  justify-content: space-between;
}

.bl__service {
  display: flex;
  overflow-x: scroll;
}

.bl__service--item {
  width: 90%;
  margin-top: 20px;
}

.el__item {
  display: block;
  width: 250px;
  height: 140px;
  border: 0.5px solid whitesmoke;
  border-bottom: none;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  margin-right: 25px;
}

.el__item img {
  width: 100%;
  height: 100%;
}

.el__item--infor {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 50px;
  border: 0.5px solid whitesmoke;
  border-top: none;
  border-radius: 0px 0px 10px 10px;
}

.el__item--infor h4 {
  margin: 0px;
  margin-left: 10px;
  font-size: 12px;
}

.el__item--infor a {
  padding: 7px 10px;
  background-color: rgb(2, 91, 255);
  margin-right: 10px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 5px;
  color: white;
}

.bl__footer {
  width: 100%;
  height: 100px;
}
</style>
