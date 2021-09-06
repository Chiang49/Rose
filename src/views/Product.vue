<template>
  <Loading :loading="is_Loading" />
  <Header :photoUrl="headerPhoto.url"></Header>
  <div class="productPage">
    <div class="container">
      <section class="row">
        <div class="col-md-6">
          <div class="productPage-frame">
            <img
              class="productPage-photo"
              :src="product.imageUrl"
              :alt="product.title"
            >
          </div>
        </div>
        <div class="col-md-6">
          <div class="productPage-content">
            <p class="category">{{ product.category }}</p>
            <h2 class="title">{{ product.title }}</h2>
            <p class="price">NT {{ product.price }}</p>
            <p class="notice"
              v-if="product.category === '客製'"
            >
              此款為客制，下單後 2 個工作天會與您聯絡!
            </p>
            <div class="input-group mb-3">
              <input
                  type="number"
                  class="form-control"
                  min="1"
                  v-model.number="productQty"
              >
              <span class="input-group-text">{{ product.unit }}</span>
            </div>
            <button
                type="button"
                class="btn btn-secondary productPage-btn"
                @click="addCart"
            >加入購物車</button>
          </div>
        </div>
      </section>
      <Divider :title="dividerTitle.section1"></Divider>
      <section class="noteItem">
        <div class="row align-items-center">
          <div class="col-md-6">
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
      </section>
      <Divider :title="dividerTitle.section2"></Divider>
      <section class="mb-9">
        <swiper class="mySwiper"
                :slides-per-view="swiper.slidesPerView"
                :space-between="swiper.spaceBetween"
                :navigation="swiper.navigation"
        >
          <swiper-slide v-for="item in likeProducts" :key="item.id">
            <ProductCard :product="item"></ProductCard>
          </swiper-slide>
        </swiper>
      </section>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Divider from '../components/Divider.vue';
import ProductCard from '../components/ProductCard.vue';
import bus from '../mitt';

export default {
  components: {
    Header,
    Divider,
    ProductCard,
  },
  data() {
    return {
      is_Loading: false,
      productId: '',
      product: {},
      headerPhoto: {
        url: '',
        position: '',
      },
      productQty: 1,
      allProducts: [],
      likeProducts: [],
      swiper: {
        slidesPerView: 0,
        spaceBetween: 0,
        navigation: true,
      },
      dividerTitle: {
        section1: 'Notice',
        section2: 'Similar',
      },
    };
  },
  methods: {
    // 取得商品細節
    getProductDetail(id) {
      this.is_Loading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.product = res.data.product;
          this.headerPhoto.url = this.product.imageUrl;
          this.getAllProduct();
        } else {
          this.$swal.fire({
            icon: 'error',
            title: res.data.message,
          });
        }
        this.is_Loading = false;
      }).catch((err) => {
        console.log(err);
      });
    },
    // 加到購物車
    addCart() {
      this.is_Loading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cartData = {
        product_id: this.productId,
        qty: this.productQty,
      };
      this.$http.post(api, { data: cartData }).then((res) => {
        if (res.data.success) {
          this.$swal.fire({
            icon: 'success',
            title: res.data.message,
          });
          this.productQty = 1;
          this.renderCartNum();
        } else {
          this.$swal.fire({
            icon: 'error',
            title: res.data.message,
          });
        }
        this.is_Loading = false;
      }).catch((err) => {
        console.log(err);
      });
    },
    // 即時更新小購物車上數量
    renderCartNum() {
      bus.emit('renderNavCartNum');
    },
    // 取得所有商品
    getAllProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.allProducts = res.data.products;
          this.filterProduct();
        } else {
          this.$swal.fire({
            icon: 'error',
            title: '相似商品讀取失敗，請重新載入',
          });
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    // 用所有商品篩選相似商品
    filterProduct() {
      this.likeProducts = this.allProducts.filter(
        (item) => item.category === this.product.category
                  && item.id !== this.product.id,
      );
      this.setSwiperSize();
    },
    // swiper 顯示數量隨著視窗寬度作調整
    setSwiperSize() {
      this.swiper.slidesPerView = 1;
      this.swiper.spaceBetween = 10;
      if (window.innerWidth >= 768 && window.innerWidth <= 991) {
        this.swiper.slidesPerView = 3;
        this.swiper.spaceBetween = 20;
      } else if (window.innerWidth >= 992) {
        this.swiper.slidesPerView = 4;
        this.swiper.spaceBetween = 30;
      }
      if (this.likeProducts.length <= this.swiper.slidesPerView) {
        this.swiper.navigation = false;
      }
    },
  },
  // 監控路徑 id 值的變化
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  // 用已變化的 id 去撈新的資料
  watch: {
    id(newId) {
      this.productId = newId;
      if (this.$route.name === 'product') {
        this.getProductDetail(this.productId);
      }
    },
  },
  created() {
    this.productId = this.$route.params.id;
    this.getProductDetail(this.productId);
  },
};
</script>
