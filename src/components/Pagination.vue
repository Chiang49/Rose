<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 上一頁 -->
      <li class="page-item" v-if="pages.has_pre">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="goPage(pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <template v-for="(page, key) in pages.total_pages" :key="key">
        <li class="page-item">
          <a  class="page-link" href=""
              :class="{ 'active': page === pages.current_page }"
              @click.prevent="goPage(page)">{{ page }}
          </a>
        </li>
      </template>
      <!-- 下一頁 -->
      <li class="page-item" v-if="pages.has_next">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="goPage(pages.current_page + 1)"
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
  methods: {
    goPage(page) {
      this.$emit('goPage', page);
    },
  },
};
</script>
