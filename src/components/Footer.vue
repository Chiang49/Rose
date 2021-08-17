<template>
  <footer class="footer">
    <div class="container">
      <div class="row mb-4">
        <div class="col-md-6">
          <ul class="footer-nav">
            <li class="me-3">
              <router-link to="/about">關於我們</router-link>
            </li>
            <li>
              <router-link to="/problem">常見問題</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <ul class="footer-contact">
            <li class="me-3">
              <a href="">
                <img class="icon-style" src="../assets/facebook.png" alt="Facebook">
              </a>
            </li>
            <li class="me-3">
              <a href="">
                <img class="icon-style" src="../assets/instagram.png" alt="Instagram">
              </a>
            </li>
            <li>
              <a href="">
                <img class="icon-style" src="../assets/line.png" alt="Line">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row align-items-end">
        <div class="col-md-6 footer-shopInf">
          <h3>店面資訊</h3>
          <ul class="mb-0">
            <li>地址：台北市中山區敬業三路 123 號</li>
            <li>電話：02-2699-9999</li>
            <li>營業時間：11:00 ~ 22:00</li>
            <li>E-mail：rose999@xxxx.com</li>
          </ul>
        </div>
        <div class="col-md-6 copyRight">
          <div class="logo-group">
            <img class="logo-img" src="../assets/logo.png" alt="Logo">
            <h1 class="logo"><a href="#">Rose</a></h1>
          </div>
          <p>Copyright2021 © Rose design by Chiang</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import '../assets/stylesheet/components/_footer.scss';
</style>
