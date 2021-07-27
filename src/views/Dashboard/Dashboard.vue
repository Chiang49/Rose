<template>
  <DNavbar></DNavbar>
  <router-view></router-view>
</template>

<script>
import DNavbar from '@/components/Dashboard/D_Navbar.vue';

export default {
  components: {
    DNavbar,
  },
  data() {
    return {
    };
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)roseToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api).then((res) => {
      // console.log(res);
      if (!res.data.success) {
        console.log(res.data.success);
        this.$router.push('/login');
        this.$swal.fire({
          icon: 'error',
          title: res.data.message,
        });
      }
    }).catch((err) => {
      console.log(err);
    });
  },
};
</script>
