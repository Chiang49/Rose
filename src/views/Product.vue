<template>
  <Header :photoUrl="headerPhoto.url"></Header>
  <div class="productPage">
    <div class="container">
      <section class="row">
        <div class="col-md-6">
          <div class="productPage-frame">
            <img
              class="productPage-photo"
              :src="productDetail.imageUrl"
              :alt="productDetail.title"
            >
          </div>
        </div>
        <div class="col-md-6">
          <div class="productPage-content">
            <p class="category">{{ productDetail.category }}</p>
            <h2 class="title">{{ productDetail.title }}</h2>
            <p class="price">NT {{ productDetail.price }}</p>
            <p class="notice"
              v-if="productDetail.category === '客製'"
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
              <span class="input-group-text">{{ productDetail.unit }}</span>
            </div>
            <button
                type="button"
                class="btn btn-secondary productPage-btn"
                @click="addCart"
            >加入購物車</button>
          </div>
        </div>
      </section>
      <Divider></Divider>
      <section class="noteItem">
        <div class="row align-items-center">
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
      </section>
      <Divider></Divider>
      <section class="mb-9">
        <swiper class="mySwiper"
                :slides-per-view="swiper.slidesPerView"
                :space-between="swiper.spaceBetween"
                :loop="true"
                :navigation="true"
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
      productId: '',
      productDetail: {},
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
      },
    };
  },
  methods: {
    // 取得商品細節
    getProductDetail(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.productDetail = res.data.product;
          this.headerPhoto.url = this.productDetail.imageUrl;
          this.getAllProduct();
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
    // 加到購物車
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
          this.renderCartNum();
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
    // 即時更新 Nav 的 cart 上數量
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
            title: '相似商品讀取失敗',
          });
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    // 用所有商品篩選相似商品
    filterProduct() {
      this.likeProducts = this.allProducts.filter(
        (item) => item.category === this.productDetail.category
                  && item.id !== this.productDetail.id,
      );
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
  mounted() {
    this.setSwiperSize();
  },
};
</script>
