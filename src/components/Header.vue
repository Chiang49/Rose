<template>
  <header class="otherHeader">
    <img :src="headerImage.product_box" alt="">
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerImage: {
        product_box: 'https://images.unsplash.com/photo-1542995269-471e33417bf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
      },
    };
  },
};
</script>

<style lang="scss">
@import '../assets/stylesheet/components/_header.scss';
</style>
