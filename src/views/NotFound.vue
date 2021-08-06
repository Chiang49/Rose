<template>
  <div class="notFound">
    <div class="container">
      <div class="notFound-text">
        <h2 class="notFound-title">404 錯誤的頁面</h2>
        <p>親愛的客人，您跑到不存在的頁面囉。</p>
        <p class="countSeconds"><span class="notFound-notice">{{ seconds }}</span> 秒後將會接您回首頁。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seconds: 6,
    };
  },
  methods: {
    countBackwards() {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.$router.replace('/');
      }
      setTimeout(this.countBackwards, 1000);
    },
  },
  mounted() {
    this.countBackwards();
  },
};
</script>

<style lang="scss">
@import '../assets/stylesheet/pages/_notFound.scss';
</style>
