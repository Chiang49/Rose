<template>
  <div class="container text-center mb-9">
    <ProductModal
        ref = "productModal"
        :isNew = "isNew"
        :editProduct = "tempProduct"
        @renderProduct = "getProducts"
    ></ProductModal>
    <DeleteModal
        ref="deleteModal"
        :status = "deleteModalStatus"
        :data = "tempProduct"
        @renderProducts = "getProducts"
    ></DeleteModal>
    <h2 class="subtitle text-white border-0">商品管理</h2>
    <div class="dashboardTable">
      <div class="d-flex justify-content-between">
        <button
          type="button"
          class="btn btn-secondary"
          @click="openProductModal(true)"
        >
          建立新的產品
        </button>
        <button type="button" class="btn btn-danger" disabled>
          刪除全部
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th style="width: 10%;">分類</th>
            <th style="width: 25%;">產品名稱</th>
            <th style="width: 15%;">原價</th>
            <th style="width: 15%;">售價</th>
            <th style="width: 20%;">是否啟用</th>
            <th style="width: 15%;">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="products.length === 0" class="noData">
            <td colspan="6">未有產品</td>
          </tr>
          <template v-else>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.category }}</td>
              <td>{{ product.title }}</td>
              <td>{{ product.origin_price }}</td>
              <td>{{ product.price }}</td>
              <td>
                <div class="switch-group">
                  <div class="switch" :class="{ 'open': product.is_enabled }">
                    <div class="switch-circle"></div>
                  </div>
                </div>
              </td>
              <td class="d-flex">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="openProductModal(false, product)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="openDeleteModal('product', product)"
                >
                  刪除
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="pagination">
      <Pagination
        :pages="pages"
        @goPage = "getProducts"
      ></Pagination>
    </div>
  </div>
</template>

<script>
import ProductModal from '../../components/Dashboard/ProductModal.vue';
import DeleteModal from '../../components/Dashboard/DeleteModal.vue';
import Pagination from '../../components/Pagination.vue';

export default {
  components: {
    ProductModal,
    DeleteModal,
    Pagination,
  },
  data() {
    return {
      products: [],
      tempProduct: {},
      pages: {},
      isNew: true,
      deleteModalStatus: '',
    };
  },
  methods: {
    // 取得商品列表
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(api).then((res) => {
        // console.log(res);
        if (res.data.success) {
          this.products = res.data.products;
          this.pages = res.data.pagination;
        } else {
          this.$swal('資料讀取失敗，請重新登入');
          this.$router.push('/login');
          document.cookie = 'roseToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    // 開啟 ProductModal
    openProductModal(boolean, product) {
      this.isNew = boolean;
      if (this.isNew) {
        this.$refs.productModal.openModal();
      } else {
        this.tempProduct = { ...product };
        this.$refs.productModal.openModal();
      }
    },
    // 開啟 DeleteModal
    openDeleteModal(status, data) {
      this.deleteModalStatus = status;
      this.tempProduct = { ...data };
      this.$refs.deleteModal.openModal();
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
