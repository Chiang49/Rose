<template>
  <div class="container mb-3">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <h1 class="logo-lg me-5">Rose</h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="products" class="nav-link" aria-current="page"
              >產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="orders" class="nav-link">訂單列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="" class="nav-link">優惠券</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="signOut">登出</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    signOut() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api).then((res) => {
        // console.log(res);
        if (res.data.success) {
          this.$router.push('/login');
          document.cookie = 'roseToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          this.$swal(res.data.message);
        }
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/stylesheet/components/Dashboard/_d_Navbar.scss';
</style>
