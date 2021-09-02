<template>
  <div class="divider">
    <img class="divider-icon" src="../assets/logo.png" alt="Rose" />
    <h2 class="divider-title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>
