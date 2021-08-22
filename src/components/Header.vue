<template>
  <header class="otherPagesHeader">
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
