<template>
   <div
    class="modal fade"
    id="delModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
            <span v-if="modalStatus === 'product'">刪除 {{ deleteData.title }}</span>
            <span v-else>刪除訂單</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong
            v-if="modalStatus === 'product'"
            class="text-danger"
          >
          {{ deleteData.title }}
          </strong>
          <strong v-else class="text-danger">{{ deleteData.id }} 此訂單</strong>
          (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="submitDeleteData(deleteData.id)"
          >
            確認刪除
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
    status: {
      type: String,
    },
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      modal: '',
      modalStatus: '',
      deleteData: {},
    };
  },
  watch: {
    status() {
      this.modalStatus = this.status;
      // console.log(this.modalStatus);
    },
    data() {
      this.deleteData = this.data;
      // console.log(this.deleteData);
    },
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    // 刪除單一資料
    submitDeleteData(id) {
      let api = '';
      if (this.modalStatus === 'product') {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
      } else if (this.modalStatus === 'order') {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`;
      }
      this.$http.delete(api).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.$swal(res.data.message);
          this.$emit('renderProducts');
          this.closeModal();
        } else {
          this.$swal(res.data.message);
        }
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
