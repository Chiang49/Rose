<template>
  <IndexHeader></IndexHeader>
  <!-- 介紹文 -->
  <div class="container mb-10">
    <Divider></Divider>
    <section class="hotProduct">
      <HotProductCard></HotProductCard>
    </section>
  </div>
  <!-- 活動區 -->
  <Activity></Activity>
  <!-- 設計服務 -->
  <div class="container mb-10">
    <Divider></Divider>
    <section>
      <ul class="service">
        <ServiceCard></ServiceCard>
      </ul>
    </section>
  </div>
  <!-- 訂閱資訊 -->
  <Subscription></Subscription>
</template>

<script>
import IndexHeader from '../components/IndexHeader.vue';
import Divider from '../components/Divider.vue';
import HotProductCard from '../components/HotProductCard.vue';
import Activity from '../components/Activity.vue';
import ServiceCard from '../components/ServiceCard.vue';
import Subscription from '../components/Subscription.vue';

export default {
  components: {
    IndexHeader,
    Divider,
    HotProductCard,
    Activity,
    ServiceCard,
    Subscription,
  },
};
</script>
