<template>
  <Header></Header>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <ul class="productNav">
          <li><a class="productNav-item" href="">花束</a></li>
          <li><a class="productNav-item" href="">花盒</a></li>
          <li><a class="productNav-item" href="">擺設</a></li>
          <li><a class="productNav-item" href="">客制</a></li>
        </ul>
      </div>
      <div class="col-md-9">
        <ul class="row">
          <ProductCard :products="products"></ProductCard>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import ProductCard from '../components/ProductCard.vue';

export default {
  components: {
    Header,
    ProductCard,
  },
  data() {
    return {
      products: [],
      pagination: {},
    };
  },
  methods: {
    getProductsData(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.$http.get(api).then((res) => {
        // console.log(res);
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        } else {
          this.$swal.fire({
            icon: 'error',
            title: '商品載入失敗，請重新近來',
          });
        }
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  mounted() {
    this.getProductsData();
  },
};
</script>

<style lang="scss">
@import '../assets/stylesheet/pages/_userProducts.scss';
</style>
