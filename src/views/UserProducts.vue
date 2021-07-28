<template>
  <Header></Header>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <ul class="productNav">
          <li v-for="(categoryItem, key) in productNav" :key="key">
            <a class="productNav-item" href="#"
               @click.prevent="filterProduct(categoryItem)"
            >
              {{ categoryItem }}
            </a>
          </li>
          <li>
            <a class="productNav-item" href="#"
               @click.prevent="filterProduct('all')"
            >
              全部
            </a>
          </li>
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
      allProducts: [],
      products: [],
      productNav: [],
      pagination: {},
    };
  },
  methods: {
    // 取得所有商品
    getProductsData(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.$http.get(api).then((res) => {
        // console.log(res);
        if (res.data.success) {
          this.allProducts = res.data.products;
          this.products = this.allProducts;
          this.pagination = res.data.pagination;
          this.categoryNav();
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
    // 取得商品種類選單
    categoryNav() {
      const tempNav = [];
      this.allProducts.forEach((item) => {
        tempNav.push(item.category);
      });
      this.productNav = tempNav.filter(
        (item, index) => tempNav.indexOf(item) === index,
      );
    },
    // 篩選商品種類
    filterProduct(navItem) {
      const tempProduct = [];
      if (navItem === 'all') {
        this.products = this.allProducts;
      } else {
        this.allProducts.forEach((item) => {
          if (item.category === navItem) {
            tempProduct.push({ ...item });
          }
        });
        this.products = tempProduct;
      }
    },
  },
  created() {
    this.getProductsData();
  },
};
</script>

<style lang="scss">
@import '../assets/stylesheet/pages/_userProducts.scss';
</style>
