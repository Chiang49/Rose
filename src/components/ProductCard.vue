<template>
  <router-link class="productCard" :to="`/userProduct/${product.id}`">
    <div class="productCard-header">
      <img class="productPh" :src="product.imageUrl" :alt="product.title">
    </div>
    <p class="productCard-text">{{ product.title }}</p>
    <p class="productCard-text">NT {{ product.price }}</p>
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

<style lang="sass">
@import '../assets/stylesheet/components/_productCard.scss';
</style>
