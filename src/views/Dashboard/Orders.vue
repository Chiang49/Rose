<template>
  <OrderModal
    ref="orderModal"
    :order="tempOrder"
    @renderProducts="getOrders"
  ></OrderModal>
  <DeleteModal
    ref="deleteModal"
    :status="deleteModalStatus"
    :data="tempOrder"
    @renderProducts="getOrders"
  ></DeleteModal>
  <div class="container text-center mb-9">
    <h2 class="subtitle text-white border-0">訂單頁面</h2>
    <table class="dashboardTable">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr class="noData" v-if="orders.length === 0">
          <td colspan="6">未有訂單</td>
        </tr>
        <template v-else>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.create_at }}</td>
            <td>
              <span>{{ order.user.email }}</span>
            </td>
            <td>
              <ul class="list-unstyled">
                <li v-for="product in order.products" :key="product.id">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ order.total }}</td>
            <td>
              <div class="switch-group">
                <div class="switch" :class="{ 'open': order.is_paid }">
                  <div class="switch-circle"></div>
                </div>
              </div>
              <label>
                <span v-if="order.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-secondary btn-sm"
                        @click="openOrderModal(order)"
                >
                  檢視
                </button>
                <button class="btn btn-outline-danger btn-sm"
                        @click="openDeleteModal('order', order)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <Pagination
      :pages = "pagination"
      @goPage = "getOrders"
    ></Pagination>
  </div>
</template>

<script>
import OrderModal from '../../components/Dashboard/OrderModal.vue';
import DeleteModal from '../../components/Dashboard/DeleteModal.vue';
import Pagination from '../../components/Pagination.vue';

export default {
  components: {
    OrderModal,
    DeleteModal,
    Pagination,
  },
  data() {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
      deleteModalStatus: '',
    };
  },
  methods: {
    // 取得訂單
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http.get(api).then((res) => {
        // console.log(res);
        if (res.data.success) {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
        } else {
          this.$swal('資料讀取失敗，請重新登入');
          this.$router.push('/login');
          document.cookie = 'roseToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    // 開啟 OrderModal
    openOrderModal(order) {
      this.tempOrder = { ...order };
      this.$refs.orderModal.openModal();
    },
    // 開啟 DeleteModal
    openDeleteModal(status, data) {
      this.deleteModalStatus = status;
      this.tempOrder = { ...data };
      this.$refs.deleteModal.openModal();
    },
    // 時間格式轉換
    timeISO(time) {
      return new Date(time * 1000).toISOString().substr(0, 10);
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
