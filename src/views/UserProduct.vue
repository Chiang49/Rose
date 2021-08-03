<template>
  <Header></Header>
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <img
            :src="productDetail.imageUrl"
            :alt="productDetail.title"
        >
      </div>
      <div class="col-md-5">
        <p class="category">{{ productDetail.category }}</p>
        <h2 class="title">{{ productDetail.title }}</h2>
        <p class="price">NT {{ productDetail.price }}</p>
        <p class="notice"
           v-if="productDetail.category === '客制'"
        >此款為客制，下單後 2 個工作天會與您聯絡!</p>
        <div class="input-group mb-3">
          <input type="number" class="form-control" value="1">
          <span class="input-group-text">{{ productDetail.unit }}</span>
        </div>
        <button class="btn btn-secondary">加入購物車</button>
      </div>
    </div>
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
      productId: '',
      productDetail: {},
    };
  },
  created() {
    this.productId = this.$route.params.id;
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.productId}`;
    this.$http.get(api).then((res) => {
      console.log(res);
      if (res.data.success) {
        this.productDetail = res.data.product;
        console.log(this.productDetail);
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
