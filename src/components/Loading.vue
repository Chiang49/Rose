<template>
    <div class="loading" v-if="loading">
        <img class="loader" src="../assets/logo.png" alt="Rose">
    </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
