<template>
  <Header
        :photoUrl="headerPhoto.url"
        :photoPosition="headerPhoto.position"
  ></Header>
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
          <li class="col-md-6 col-lg-3 mb-5"
              v-for="productItem in products"
              :key="productItem.id"
          >
            <ProductCard
              :product="productItem"
            ></ProductCard>
          </li>
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
      headerPhoto: {
        url: 'https://images.unsplash.com/photo-1612335128392-1d77c4aab603?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        position: 'object-position: center -218px;',
      },
      allProducts: [],
      products: [],
      productNav: [],
      actionNav: 'all',
      pagination: {},
    };
  },
  methods: {
    // 取得所有商品列表
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
