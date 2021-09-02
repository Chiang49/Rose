<template>
  <Loading :loading="is_loading"/>
  <Header
        :photoUrl="headerPhoto.url"
  ></Header>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <ul class="shopNav">
          <li>
            <a class="shopNav-item" href="#"
               @click.prevent="changeCategory('all')"
               :class="{ 'action': actionNav === 'all' }"
            >全部</a>
          </li>
          <li v-for="(categoryItem, key) in productNav" :key="key">
            <a class="shopNav-item" href="#"
               @click.prevent="changeCategory(categoryItem)"
               :class="{ 'action': actionNav === categoryItem }"
            >
              {{ categoryItem }}
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md-9">
        <ul class="row mb-4">
          <li class="col-md-6 col-lg-3 mb-5"
              v-for="productItem in products"
              :key="productItem.id"
          >
            <ProductCard
              :product="productItem"
            ></ProductCard>
          </li>
        </ul>
        <div
          class="d-flex justify-content-center"
          v-if="actionNav === 'all'"
        >
          <Pagination
            :pages="pagination"
            @goPage="getPageProducts"
          ></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import ProductCard from '../components/ProductCard.vue';
import Pagination from '../components/Pagination.vue';

export default {
  components: {
    Header,
    ProductCard,
    Pagination,
  },
  data() {
    return {
      is_loading: false,
      headerPhoto: {
        url: 'https://images.unsplash.com/photo-1612335128392-1d77c4aab603?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      },
      allProducts: [],
      products: [],
      productNav: [],
      actionNav: 'all',
      pagination: {},
    };
  },
  methods: {
    // 取得所有商品
    getAllProducts() {
      this.is_loading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.allProducts = res.data.products;
          this.categoryNav();
          this.isFilterCategory();
        } else {
          this.$swal.fire({
            icon: 'error',
            title: '全部商品資料取得失敗，請重新載入',
          });
        }
        this.is_loading = false;
      }).catch((err) => {
        console.log(err);
      });
    },
    // 取得商品種類製作 Nav 選單
    categoryNav() {
      const tempNav = [];
      this.allProducts.forEach((item) => {
        tempNav.push(item.category);
      });
      this.productNav = tempNav.filter(
        (item, index) => tempNav.indexOf(item) === index,
        // 回傳該資料再陣列中第一次被找到之索引
      );
    },
    // 建立篩選類別網址
    changeCategory(category) {
      this.actionNav = category;
      this.$router.push({
        name: 'shop',
        query: { category },
      });
    },
    // 商品類別篩選
    filterCategory() {
      const tempProduct = [];
      if (this.actionNav === 'all') {
        this.getPageProducts();
      } else {
        this.allProducts.forEach((item) => {
          if (item.category === this.actionNav) {
            tempProduct.push(item);
          }
        });
      }
      this.products = { ...tempProduct };
    },
    // 取得商品列表(每 10 個一頁)
    getPageProducts(page = 1) {
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
    // 判斷載入頁面時是否已有篩選項目
    isFilterCategory() {
      const urlCategory = this.$route.query.category;
      if (urlCategory !== undefined) {
        this.actionNav = urlCategory;
        this.filterCategory();
      } else {
        this.getPageProducts();
      }
    },
  },
  watch: {
    $route() {
      this.filterCategory();
    },
  },
  created() {
    this.getAllProducts();
  },
};
</script>
