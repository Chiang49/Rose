<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 上一頁 -->
      <li class="page-item" v-if="pagination.has_pre">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click="goPage(pagination.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <template v-for="(page, key) in pagination.total_pages" :key="key">
        <li class="page-item">
          <a class="page-link" href="" @click="goPage(page)">{{ page }}</a>
        </li>
      </template>
      <!-- 下一頁 -->
      <li class="page-item" v-if="pagination.has_next">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click="goPage(pagination.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pages: {
      type: Object,
    },
  },
  data() {
    return {
      pagination: {},
    };
  },
  watch: {
    pages() {
      this.pagination = this.pages;
    },
  },
  methods: {
    goPage(page) {
      console.log(page);
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/stylesheet/components/_pagination.scss';
</style>
