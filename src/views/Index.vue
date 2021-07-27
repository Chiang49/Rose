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
  <!-- 店面資訊 -->
  <section class="shopInf">
    <div class="shop-content">
      <h2 class="subtitle">店面資訊</h2>
      <ul>
        <li>地址：台北市中山區敬業三路 123 號</li>
        <li>電話：02-2699-9999</li>
        <li>營業時間：11:00 ~ 22:00</li>
        <li>E-mail：rose999@xxxx.com</li>
      </ul>
    </div>
  </section>
</template>

<script>
import IndexHeader from '../components/IndexHeader.vue';
import Divider from '../components/Divider.vue';
import Activity from '../components/Activity.vue';
import ServiceCard from '../components/ServiceCard.vue';

export default {
  components: {
    IndexHeader,
    Divider,
    Activity,
    ServiceCard,
  },
};
</script>

<style lang="scss">
@import '../assets/stylesheet/pages/_index.scss';
</style>
