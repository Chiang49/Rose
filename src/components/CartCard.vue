<template>
  <li v-if="cartData.length === 0"
      class="noProduct"
  >
    <p>購物車是空的喔，快去選購
        <router-link class="d-inline" to="userProducts">商品</router-link>
    吧</p>
  </li>
  <template v-else>
    <li class="text-center mb-3" v-for="cartItem in cartData" :key="cartItem.id">
        <div class="cartCard">
        <div class="cartCard-inf">
            <img
            class="cartCard-image"
            :src="cartItem.product.imageUrl"
            :alt="cartItem.product.title"
            />
            <div class="cartCard-text">
            <p class="cartCard-title">{{ cartItem.product.title }}</p>
            <div class="input-group mb-2">
                <input type="number" class="form-control"
                       v-model.number="cartItem.qty"
                       @change="updataCart(cartItem.id, cartItem.qty)"
                />
                <span class="input-group-text">{{ cartItem.product.unit}}</span>
            </div>
            <p class="d-none d-md-block text-danger mb-2"
                v-if="cartItem.product.category === '客制'"
            >
                此款為客制，下單後 2 個工作天會與您聯絡!
            </p>
            <p>總價：NT {{ cartItem.final_total }}</p>
            </div>
        </div>
        <div class="cartCard-close">
            <button type="button" class="btn-close" aria-label="Close"
                    @click="deleteCart(cartItem.id)"
            ></button>
        </div>
        </div>
        <p class="d-md-none text-danger"
        v-if="cartItem.product.category === '客制'"
        >
        此款為客制，下單後 2 個工作天會與您聯絡!
        </p>
    </li>
  </template>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
    },
  },
  data() {
    return {
      cartData: [],
    };
  },
  watch: {
    cart() {
      this.cartData = this.cart;
      // console.log(this.cartData);
    },
  },
  methods: {
    // 刪除單一購物車
    deleteCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(api).then((res) => {
        // console.log(res);
        if (res.data.success) {
          this.$emit('updataCart');
          this.$swal.fire({
            icon: 'success',
            title: res.data.message,
          });
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    // 更新購物車商品數量
    updataCart(id, qty) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      const updata = {
        product_id: id,
        qty,
      };
      this.$http.put(api, { data: updata }).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.$emit('updataCart');
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

<style lang="scss">
@import '../assets/stylesheet/components/_cartCard.scss';
</style>
