<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark"
       :class="[navStatus, {'navBg-black':navIsOpen}]"
  >
    <div class="container">
      <h1 class="logo-sm">
        <router-link to="/">Rose</router-link>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        @click="clickToggle"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        :class="{ 'show':navIsOpen }"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" @click="clickToggle" to="/about">品牌</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" @click="clickToggle" to="/shop">商品</router-link>
          </li>
        </ul>
        <h1 class="logo-lg">
          <router-link @click="clickToggle" to="/">Rose</router-link>
        </h1>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" @click="clickToggle" to="/login">
              <span class="material-icons">
                account_circle
              </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" @click="clickToggle" to="/cart">
              <p class="material-icons cartIcon">
                shopping_cart
                <span class="cartIcon-num">{{ cartNum }}</span>
              </p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import bus from '../mitt';

export default {
  data() {
    return {
      cartNum: 0,
      navStatus: '',
      navIsOpen: false,
    };
  },
  methods: {
    // navBar toggle 開關
    clickToggle() {
      if (window.innerWidth < 992) {
        this.navIsOpen = !this.navIsOpen;
      }
    },
    // 取得購物車數量
    getCartNum() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.cartNum = res.data.data.carts.length;
        }
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  created() {
    bus.on('renderNavCartNum', this.getCartNum);
  },
  mounted() {
    this.getCartNum();
    // 滾動改變 nav 背景顏色
    window.addEventListener('scroll', () => {
      const windowY = window.scrollY;
      if (windowY >= 450) {
        this.navStatus = 'navBg-black';
      } else {
        this.navStatus = '';
      }
    });
  },
};
</script>
