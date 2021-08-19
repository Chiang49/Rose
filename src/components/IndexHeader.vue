<template>
  <swiper class="mySwiper indexSwiper"
          :autoplay="{ 'delay': 6000, 'disableOnInteraction': false }"
          :effect="'fade'"
  >
    <swiper-slide v-for="(img, key) in headerImags" :key="key">
      <img :src="img" alt="" />
    </swiper-slide>
    <div class="slogan">
      <h2 class="title mb-3">玫瑰花語</h2>
      <p class="slogan-text">愛情、高貴，象徵愛與美、美麗的愛情、美好常在</p>
    </div>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      headerImags: [
        'https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80',
        'https://images.unsplash.com/photo-1550296390-61c47f1195ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1564029182809-a495e9f0179d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/stylesheet/components/_indexHeader.scss";
</style>
