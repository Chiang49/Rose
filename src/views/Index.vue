<template>
  <IndexHeader></IndexHeader>
  <!-- 介紹文 -->
  <div class="container">
    <Divider></Divider>
    <section class="block">
      <div class="introduction">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus quibusdam officiis, voluptas ipsum laudantium ad nisi quos.
          Earum itaque unde beatae saepe facere alias at nemo, labore molestiae quo deleniti.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus quibusdam officiis, voluptas ipsum laudantium ad nisi quos.
          Earum itaque unde beatae saepe facere alias at nemo, labore molestiae quo deleniti.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus quibusdam officiis, voluptas ipsum laudantium ad nisi quos.
          Earum itaque unde beatae saepe facere alias at nemo, labore molestiae quo deleniti.
        </p>
      </div>
    </section>
  </div>
  <!-- 活動區 -->
  <Activity></Activity>
  <!-- 設計服務 -->
  <div class="container">
    <Divider></Divider>
    <section class="block">
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
import Activity from '../components/Activity.vue';
import ServiceCard from '../components/ServiceCard.vue';
import Subscription from '../components/Subscription.vue';

export default {
  components: {
    IndexHeader,
    Divider,
    Activity,
    ServiceCard,
    Subscription,
  },
};
</script>

<style lang="scss">
@import '../assets/stylesheet/pages/_index.scss';
</style>
