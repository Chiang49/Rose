<template>
  <router-link class="hotProductCard" :to="`/product/${hotProduct.product.id}`">
    <img :src="`${hotProduct.product.imageUrl}`" :alt="`${hotProduct.product.title}`">
    <div class="hotProductCard-text">
      <h3 class="hotProductCard-rank">TOP {{rank + 1}}</h3>
      <div class="hotProductCard-content">
        <h3 class="hotProductCard-title">{{ hotProduct.product.title }}</h3>
        <p class="hotProductCard-price">NT {{ toCurrency(hotProduct.product.price) }}</p>
        <p class="hotProductCard-sell">目前已銷售 {{ hotProduct.sales }} 盒</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    hotProduct: {
      type: Object,
      default() {
        return {};
      },
    },
    rank: {
      type: Number,
    },
  },
};
</script>
