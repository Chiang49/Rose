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
            <router-link class="nav-link" @click="clickToggle" to="/login">登入</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" @click="clickToggle" to="/cart">購物車</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navStatus: '',
      navIsOpen: false,
    };
  },
  methods: {
    clickToggle() {
      if (window.innerWidth < 992) {
        this.navIsOpen = !this.navIsOpen;
      }
    },
  },
  mounted() {
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
