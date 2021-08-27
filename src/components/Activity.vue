<template>
  <section class="activity">
    <div class="container h-100 d-flex d-md-block align-items-center">
      <a class="activity-content"
         href="#"
         @click.prevent="goShop('情人節限定')"
      >
        <h2 class="activity-title">{{ activityTitle }}</h2>
        <p class="activity-text">{{ activityText }}</p>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activityTitle: "Valentine's Day",
      activityText: '用玫瑰來表達你火熱的愛',
      backgroundImgUrl: 'https://github.com/Chiang49/8week_use_image/blob/main/%E6%83%85%E4%BA%BA%E7%AF%802.jpg?raw=true',
    };
  },
  methods: {
    goShop(category) {
      this.$router.push({
        name: 'shop',
        query: { category },
      });
    },
  },
};
</script>
