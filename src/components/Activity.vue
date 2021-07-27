<template>
  <section class="block activity">
    <div class="container h-100">
      <div class="activity-text">
        <p>{{ activityText }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activityText: '情人節文案再想想',
      backgroundImgUrl: 'https://github.com/Chiang49/8week_use_image/blob/main/%E6%83%85%E4%BA%BA%E7%AF%80.jpg?raw=true',
    };
  },
};
</script>

<style lang="scss">
@import '../assets/stylesheet/components/_activity.scss';
</style>
