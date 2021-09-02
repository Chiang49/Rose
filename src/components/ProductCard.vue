<template>
  <router-link class="productCard" :to="`/product/${product.id}`">
    <div class="productCard-header">
      <img class="productCard-photo" :src="product.imageUrl" :alt="product.title">
    </div>
    <p class="productCard-text">{{ product.title }}</p>
    <p class="productCard-text">NT {{ toCurrency(product.price) }}</p>
  </router-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
