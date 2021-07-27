<template>
  <li class="col-md-6 col-lg-3 mb-5" v-for="productItem in productsData" :key="productItem.key">
    <a class="productCard" href="">
      <div class="productCard-header">
        <img class="productPh" :src="productItem.imageUrl" :alt="productItem.title">
      </div>
      <p class="productCard-text">{{ productItem.title }}</p>
      <p class="productCard-text">NT {{ productItem.price }}</p>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
    },
  },
  data() {
    return {
      productsData: [],
    };
  },
  watch: {
    products() {
      this.productsData = this.products;
    },
  },
};
</script>

<style lang="sass">
@import '../assets/stylesheet/components/_productCard.scss';
</style>
