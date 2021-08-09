<template>
  <Header></Header>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <ul class="productNav">
          <li>
            <a class="productNav-item" href="#"
               @click.prevent="filterProduct('all')"
               :class="{ 'action': actionNav === 'all' }"
            >全部</a>
          </li>
          <li v-for="(categoryItem, key) in productNav" :key="key">
            <a class="productNav-item" href="#"
               @click.prevent="filterProduct(categoryItem)"
               :class="{ 'action': actionNav === categoryItem }"
            >
              {{ categoryItem }}
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
      actionNav: '',
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
        this.actionNav = 'all';
      } else {
        this.allProducts.forEach((item) => {
          if (item.category === navItem) {
            tempProduct.push({ ...item });
            this.actionNav = navItem;
          }
        });
        this.products = tempProduct;
      }
      console.log(this.actionNav);
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
