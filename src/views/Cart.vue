<template>
  <Header></Header>
  <div class="container text-center">
    <h2 class="subtitle">購物車</h2>
    <ul class="cartTable">
      <CartCard
        :cart = "cartDatas"
        @renderCart = "getCartsData"
      ></CartCard>
    </ul>
    <div class="row cartTotal">
      <div class="col-md-6 cartTotal-btns">
        <button
          type="button"
          class="btn btn-secondary me-2"
        >我要結帳囉</button>
        <button
          type="button"
          class="btn btn-danger"
          @click="deleteCartAll"
        >清空購物車</button>
      </div>
      <p class="col-md-6 cartTotal-price">總金額：NT {{ cartTotal.final_total }} 元</p>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import CartCard from '../components/CartCard.vue';

export default {
  components: {
    Header,
    CartCard,
  },
  data() {
    return {
      cartTotal: {},
      cartDatas: [],
    };
  },
  methods: {
    // 取得購物車資料
    getCartsData() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(api)
        .then((res) => {
          // console.log(res);
          if (res.data.success) {
            this.cartTotal = res.data.data;
            this.cartDatas = res.data.data.carts;
            console.log(this.cartTotal);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 清空購物車
    deleteCartAll() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(api).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.$swal.fire({
            icon: 'success',
            title: res.data.message,
          });
          this.getCartsData();
        } else {
          this.$swal.fire({
            icon: 'error',
            title: res.data.message,
          });
        }
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  mounted() {
    this.getCartsData();
  },
};
</script>

<style lang="scss">
@import '../assets/stylesheet/pages/_cart.scss';
</style>
