<template>
  <li class="serviceItem" v-for="(item, key) in service" :key="key">
    <a
      href="#"
      class="serviceCard"
      @click.prevent="goProducts(item.title)"
    >
      <div class="serviceCard-photo">
        <img :src="item.imgUrl" :alt="item.title" />
      </div>
      <div class="serviceCard-content">
        <div class="serviceCard-text">
          <h3 class="subtitle">{{ item.title }}</h3>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  data() {
    return {
      service: [
        {
          title: '花束',
          content: '依照您的需求，設計專屬於您的花束',
          imgUrl:
            'https://images.unsplash.com/photo-1508105769260-9d986349313e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        },
        {
          title: '擺飾',
          content: '為特別的您，設計出不平凡的玫瑰擺飾',
          imgUrl:
            'https://images.unsplash.com/photo-1599733594230-6b823276abcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
        },
        {
          title: '花盒',
          content: '為特別的您，設計出特別的玫瑰擺飾',
          imgUrl:
            'https://images.unsplash.com/photo-1582804855075-2a859d86a780?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        },
      ],
    };
  },
  methods: {
    goProducts(category) {
      this.$router.push({
        name: 'shop',
        query: { category },
      });
    },
  },
};
</script>
