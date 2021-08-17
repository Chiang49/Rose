<template>
  <header class="otherHeader">
    <img :src="photoUrl" :style="photoPosition" alt="">
  </header>
</template>

<script>
export default {
  props: {
    photoUrl: {
      type: String,
    },
    photoPosition: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@import '../assets/stylesheet/components/_header.scss';
</style>
