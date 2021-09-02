<template>
  <div class="cartCard">
    <div class="cartCard-content">
      <img class="cartCard-photo"
            :src="inCartProduct.product.imageUrl"
            :alt="inCartProduct.product.title"
      />
      <div class="cartCard-text">
        <p class="cartCard-title">{{ inCartProduct.product.title }}</p>
          <div class="input-group mb-2">
            <input type="number" class="form-control"
                   v-model.number="inCartProduct.qty"
                   @change="updataCart(inCartProduct.id, inCartProduct.qty)"
            />
            <span class="input-group-text">{{ inCartProduct.product.unit }}</span>
          </div>
          <p class="d-none d-md-block text-danger mb-2"
              v-if="inCartProduct.product.category === '客制'"
          >
              此款為客制，下單後 2 個工作天會與您聯絡!
          </p>
          <p>總價：NT {{ toCurrency(inCartProduct.final_total) }}</p>
      </div>
    </div>
    <div class="cartCard-close">
      <button type="button" class="btn-close" aria-label="Close"
              @click="deleteCart(inCartProduct.id)"
      ></button>
    </div>
  </div>
  <p class="d-md-none text-danger"
      v-if="inCartProduct.product.category === '客制'"
  >
    此款為客制，下單後 2 個工作天會與您聯絡!
  </p>
</template>

<script>
import bus from '../mitt';

export default {
  props: {
    cartProducts: {
      type: Object,
    },
  },
  data() {
    return {
      inCartProduct: this.cartProducts,
    };
  },
  watch: {
    cartProducts() {
      this.inCartProduct = this.cartProducts;
    },
  },
  methods: {
    // 刪除單一購物車
    deleteCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.$swal.fire({
            icon: 'success',
            title: res.data.message,
          });
          this.$emit('renderCart');
          this.renderCartNum();
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    // 即時更新 Nav 的 cart 上數量
    renderCartNum() {
      bus.emit('renderNavCartNum');
    },
    // 更新購物車商品數量
    updataCart(id, qty) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      const updata = {
        product_id: id,
        qty,
      };
      this.$http.put(api, { data: updata }).then((res) => {
        if (res.data.success) {
          this.$emit('renderCart');
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
};
</script>
