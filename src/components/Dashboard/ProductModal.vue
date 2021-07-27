<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div ref="modalForm" class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="is_New">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="border-bottom mb-2">
                <div class="form-group">
                  <label for="imageUrl">輸入主圖片網址</label>
                  <input
                    type="url"
                    id="imageUrl"
                    class="form-control"
                    placeholder="請輸入主圖片連結"
                    v-model="product.imageUrl"
                  />
                </div>
                <img
                  class="img-fluid mb-1"
                  :src="product.imageUrl"
                  :alt="product.title"
                />
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm d-block w-100 mb-2"
                  @click="product.imageUrl = ''"
                >刪除主圖片
                </button>
              </div>
              <!-- 多張圖片 -->
              <div>
                <input
                  type="text"
                  class="form-control mb-1"
                  placeholder="請輸入其他圖片連結"
                  v-model="tempImages"
                >
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm d-block w-100 mb-2"
                  @click="product.imagesUrl.push(tempImages), tempImages = ''"
                >
                  新增其他圖片
                </button>
              </div>
                <!-- swiper -->
                <swiper :navigation="true" class="mySwiper">
                  <swiper-slide v-for="(image, key) in product.imagesUrl" :key="key">
                    <img :src="image" :alt="key">
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm d-block w-100 mb-2"
                      @click="product.imagesUrl.splice(key, 1)"
                    >刪除圖片
                    </button>
                  </swiper-slide>
                </swiper>
                <!-- swiper end -->
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">產品名稱</label>
                <input
                  id="title"
                  type="text"
                  name="產品名稱"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="product.title"
                />
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input
                    id="category"
                    type="text"
                    name="分類"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="product.category"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="unit">單位</label>
                  <input
                    id="unit"
                    type="text"
                    name="單位"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="product.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    name="原價"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="product.origin_price"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="product.price"
                  />
                </div>
              </div>
              <hr />

              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="product.description"
                >
                </textarea>
              </div>
              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea
                  id="content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="product.content"
                >
                </textarea>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="product.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
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
          <button
            type="submit"
            class="btn btn-outline-secondary"
            @click="submit(product.id)"
          >
            確認
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
    isNew: {
      type: Boolean,
    },
    editProduct: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      modal: '',
      product: {
        imagesUrl: [],
      },
      tempImages: '',
      is_New: true, // 判斷是否為新增商品
    };
  },
  watch: {
    isNew() {
      this.is_New = this.isNew;
    },
    editProduct() {
      this.product = this.editProduct;
    },
  },
  methods: {
    openModal() {
      this.product = {
        imagesUrl: [],
      };
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    submit(id) {
      if (this.is_New) {
        this.createProduct();
      } else {
        this.eidtProduct(id);
      }
    },
    createProduct() {
      const newProduct = this.product;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      this.$http.post(api, { data: newProduct }).then((res) => {
        // console.log(res);
        if (res.data.success) {
          this.$swal.fire({
            icon: 'success',
            title: res.data.message,
          });
          this.$emit('renderProduct');
          this.closeModal();
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
    eidtProduct(id) {
      const editProduct = this.product;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
      this.$http.put(api, { data: editProduct }).then((res) => {
        // console.log(res);
        if (res.data.success) {
          this.$swal.fire({
            icon: 'success',
            title: res.data.message,
          });
          this.$emit('renderProduct');
          this.closeModal();
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
    this.modal = new Modal(this.$refs.productModal);
  },
};
</script>

<style lang="scss">
@import '@/assets/stylesheet/components/Dashboard/_productModal.scss';
</style>
