<template>
  <Header></Header>
  <div class="container">
    <ul class="row">
      <li>
        <div class="cartCard">
          <div class="cartCard-inf">
            <img class="cartCard-image"
                 src="https://images.unsplash.com/photo-1627626775846-122b778965ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                 alt="" />
            <div class="cartCard-text">
              <p class="cartCard-title">玫瑰花束</p>
              <div class="input-group mb-2">
                <input
                  type="number"
                  class="form-control"
                />
                <span class="input-group-text">束</span>
              </div>
              <p class="notice">
                此款為客制，下單後 2 個工作天會與您聯絡!
              </p>
              <p>總價：NT 1000</p>
            </div>
          </div>
          <div class="cartCard-close">
            <button type="button" class="btn-close" aria-label="Close"></button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      cartDatas: [],
    };
  },
  methods: {
    getCartsData() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.cartDatas = res.data.data.carts;
          }
        })
        .catch((err) => {
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
@import "../assets/stylesheet/pages/_cart.scss";
</style>
