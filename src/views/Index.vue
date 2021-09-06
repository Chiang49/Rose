<template>
  <Loading :loading="is_loading" />
  <IndexHeader></IndexHeader>
  <!-- 排行榜 -->
  <div class="container mb-10">
    <Divider :title="dividerTitle.section1"></Divider>
    <section class="hotProduct">
      <div class="row">
        <div class="col-md-4 mb-3 mb-md-0" v-for="(item, key) in rankTop" :key="key">
          <HotProductCard :hotProduct="item" :rank="key"></HotProductCard>
        </div>
      </div>
    </section>
  </div>
  <!-- 活動區 -->
  <Activity></Activity>
  <!-- 設計服務 -->
  <div class="container mb-10">
    <Divider :title="dividerTitle.section2"></Divider>
    <section>
      <ul class="service">
        <ServiceCard></ServiceCard>
      </ul>
    </section>
  </div>
  <!-- 訂閱資訊 -->
  <Subscription></Subscription>
</template>

<script>
import IndexHeader from '../components/IndexHeader.vue';
import Divider from '../components/Divider.vue';
import HotProductCard from '../components/HotProductCard.vue';
import Activity from '../components/Activity.vue';
import ServiceCard from '../components/ServiceCard.vue';
import Subscription from '../components/Subscription.vue';

export default {
  components: {
    IndexHeader,
    Divider,
    HotProductCard,
    Activity,
    ServiceCard,
    Subscription,
  },
  data() {
    return {
      dividerTitle: {
        section1: 'Hot',
        section2: 'Product',
      },
      is_loading: false,
      allProducts: [],
      rankTop: [],
    };
  },
  methods: {
    // 取得所有商品資料
    getAllProducts() {
      this.is_loading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.allProducts = res.data.products;
          this.getRankTop();
          this.is_loading = false;
        } else {
          this.$swal.fire({
            icon: 'error',
            title: '資料讀取失敗，請重新載入',
          });
          this.is_loading = true;
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    // 隨機篩選前 3 名
    getRankTop() {
      for (let i = 0; this.rankTop.length < 3; i += 1) {
        const obj = {
          product: {},
          sales: 0,
        };
        const rnd = Math.floor(Math.random() * this.allProducts.length);
        this.rankTop.forEach((item, key) => {
          if (item.product.id === this.allProducts[rnd].id) {
            this.rankTop.splice(key, 1);
            i -= 1;
          }
        });
        obj.product = this.allProducts[rnd];
        obj.sales = Math.floor(Math.random() * 1000) + 500;
        this.rankTop.push(obj);
      }
      // 陣列照銷售量由小 -> 大排序後再反轉排序
      this.rankTop.sort(
        (a, b) => a.sales - b.sales,
      ).reverse();
    },
  },
  created() {
    this.getAllProducts();
  },
};
</script>
