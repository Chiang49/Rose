<template>
  <Header></Header>
  <div class="container productPage">
    <div class="row">
      <div class="col-md-6">
        <div class="productPage-frame">
          <img
            class="productPage-ph"
            :src="productDetail.imageUrl"
            :alt="productDetail.title"
          >
        </div>
      </div>
      <div class="col-md-6 productPage-content">
        <p class="category">{{ productDetail.category }}</p>
        <h2 class="title">{{ productDetail.title }}</h2>
        <p class="price">NT {{ productDetail.price }}</p>
        <p class="notice"
           v-if="productDetail.category === '客制'"
        >此款為客制，下單後 2 個工作天會與您聯絡!</p>
        <div class="input-group mb-3">
          <input
              type="number"
              class="form-control"
              min="1"
              v-model.number="productQty"
          >
          <span class="input-group-text">{{ productDetail.unit }}</span>
        </div>
        <button
            type="button"
            class="btn btn-secondary productPage-btn"
            @click="addCart"
        >加入購物車</button>
      </div>
    </div>
    <Divider></Divider>
    <div class="row noteItem">
      <div class="col-md-6">
        <h3>注意事項：</h3>
        <ul>
          <li>圖片僅供參考：實際商品會因花的種類、顏色、生長狀態、搭配略有不同。</li>
          <li>為了增長花的壽命與最好狀態，請購買者詳讀"照顧守則"。</li>
          <li>若想將花做成乾燥花或永生花請參考"乾燥花製作"與"永生花製作"</li>
        </ul>
      </div>
      <div class="col-md-6">
        <img src="https://images.unsplash.com/photo-1612335120827-84755d23437d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="">
      </div>
    </div>
    <Divider></Divider>
    <div class="productPage-otherProduct">
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Divider from '../components/Divider.vue';

export default {
  components: {
    Header,
    Divider,
  },
  data() {
    return {
      productId: '',
      productDetail: {},
      productQty: 1,
    };
  },
  methods: {
    addCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cartData = {
        product_id: this.productId,
        qty: this.productQty,
      };
      this.$http.post(api, { data: cartData }).then((res) => {
        // console.log(res);
        if (res.data.success) {
          this.$swal.fire({
            icon: 'success',
            title: res.data.message,
          });
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
  created() {
    this.productId = this.$route.params.id;
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.productId}`;
    this.$http.get(api).then((res) => {
      // console.log(res);
      if (res.data.success) {
        this.productDetail = res.data.product;
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
};
</script>

<style lang="scss">
@import '../assets/stylesheet/pages/_userProduct.scss';
</style>
