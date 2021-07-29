<template>
  <div ref="orderModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 class="modal-title text-white fw-bolder">訂單資料</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
              <div class="col-md-4">
                <h3>用戶資料</h3>
                <table class="table">
                  <tbody>
                    <tr>
                        <th style="width: 100px">姓名</th>
                        <td>{{ orderDetail?.user?.name }}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{{ orderDetail?.user?.email }}</td>
                    </tr>
                    <tr>
                        <th>電話</th>
                        <td>{{ orderDetail?.user?.tel }}</td>
                    </tr>
                    <tr>
                        <th>地址</th>
                        <td>{{ orderDetail?.user?.address }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-md-8">
                <h3>訂單細節</h3>
                <table class="table">
                  <tbody>
                    <tr>
                      <th style="width: 100px">訂單編號</th>
                      <td>{{ orderDetail.id }}</td>
                    </tr>
                    <tr>
                      <th>下單時間</th>
                      <td>{{ orderDetail.create_at }}</td>
                    </tr>
                    <tr>
                      <th>付款時間</th>
                      <td>
                        <span v-if="orderDetail.is_paid" class="text-success">
                            {{ orderDetail.paid_date }}
                        </span>
                        <span v-else class="text-muted">尚未付款</span>
                      </td>
                    </tr>
                    <tr>
                      <th>付款狀態</th>
                      <td>
                        <strong v-if="orderDetail.is_paid" class="text-success"
                        >已付款</strong>
                        <span v-else class="text-muted">尚未付款</span>
                      </td>
                    </tr>
                    <tr>
                        <th>總金額</th>
                        <td>
                        {{ orderDetail.total }}
                        </td>
                    </tr>
                  </tbody>
                </table>
                <h3 class="text-dark">選購商品</h3>
                <table class="table">
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    <tr v-for="buyItem in orderDetail.products" :key="buyItem.id">
                      <th>
                        {{ buyItem.product.title }}
                      </th>
                      <td>{{ buyItem.qty }} / {{ buyItem.product.unit }}</td>
                      <td class="text-end">
                        {{ buyItem.final_total }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="d-flex justify-content-end">
                  <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        v-model="orderDetail.is_paid"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                        <span v-if="orderDetail.is_paid" class="text-success">已付款</span>
                        <span v-else class="text-muted">未付款</span>
                    </label>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-secondary"
                @click="updataOrder(orderDetail.id)"
          >
            修改付款狀態
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: {
    order: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      modal: '',
      orderDetail: {},
    };
  },
  watch: {
    order() {
      this.orderDetail = this.order;
    //   console.log(this.orderDetail);
    },
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    updataOrder(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`;
      this.$http.put(api, { data: this.orderDetail }).then((res) => {
        // console.log(res);
        if (res.data.success) {
          this.$swal.fire({
            icon: 'success',
            title: res.data.message,
          });
          this.closeModal();
          this.$emit('renderProducts');
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
  },
  mounted() {
    this.modal = new Modal(this.$refs.orderModal);
  },
};
</script>
