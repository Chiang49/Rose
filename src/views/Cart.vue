<template>
  <Header
        :photoUrl="headerPhoto.url"
  ></Header>
  <section class="cart">
    <div class="container">
      <h2 class="subtitle">購物車</h2>
      <ul class="cart-table">
        <CartCard
          :cart = "cartDatas"
          @updataCart = "getCartsData"
        ></CartCard>
      </ul>
      <div class="row align-content-center mb-11">
        <div class="col-md-6">
          <div class="cart-btnGroup">
            <button
              type="button"
              class="btn btn-secondary me-2"
              @click="checkout"
            >
              我要結帳囉
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteCartAll"
            >
              清空購物車
            </button>
          </div>
        </div>
        <div class="col-md-6">
          <p class="cart-price">總金額：NT {{ cartTotal.final_total }} 元</p>
        </div>
      </div>
      <OrderForm
        ref="orderForm"
        class="collapse"
        @renderCart="getCartsData"
      ></OrderForm>
    </div>
  </section>
  <Subscription></Subscription>
</template>

<script>
import Header from '../components/Header.vue';
import CartCard from '../components/CartCard.vue';
import OrderForm from '../components/OrderForm.vue';
import Subscription from '../components/Subscription.vue';

export default {
  components: {
    Header,
    CartCard,
    OrderForm,
    Subscription,
  },
  data() {
    return {
      headerPhoto: {
        url: 'https://images.unsplash.com/photo-1591148782739-5bc858f02748?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1582&q=80',
      },
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
          this.$refs.orderForm.closeForm();
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
    // 結帳
    checkout() {
      if (this.cartDatas.length === 0) {
        this.$swal('購物車是空的喔，快去選購吧');
      } else {
        this.$refs.orderForm.openForm();
      }
    },
  },
  watch: {
    cartDatas() {
      if (this.cartDatas.length === 0) {
        this.$refs.orderForm.closeForm();
      }
    },
  },
  mounted() {
    this.getCartsData();
  },
};
</script>
