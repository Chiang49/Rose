<template>
  <Header :photoUrl="headerPhoto.url"></Header>
  <section class="container">
    <h2 class="subtitle mb-4">常見問題</h2>
    <ul class="accordion" id="accordionExample">
      <li class="accordion-item"
          v-for="(QItem, key) in problems" :key="key"
      >
        <h2 class="accordion-header" :id="`heading${QItem.heading}`">
          <button class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse${QItem.heading}`"
                  aria-expanded="false"
                  :aria-controls="`collapse${QItem.heading}`"
          >
            {{ QItem.question }}
          </button>
        </h2>
        <div :id="`collapse${QItem.heading}`"
              class="accordion-collapse collapse"
              :aria-labelledby="`heading${QItem.heading}`"
              data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            {{ QItem.answer }}
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      headerPhoto: {
        url: 'https://images.unsplash.com/photo-1518621628030-4866bc43853b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80',
      },
      problems: [
        {
          heading: 'One',
          question: '如何取貨？',
          answer: '因花朵商品較為脆弱，為避免花朵損傷等情況，商品一律採到店自取，當面檢查與照顧方式解說。',
        },
        {
          heading: 'Two',
          question: '一般商品付款方式？',
          answer: '可選擇 ATM 轉帳，或到店付款。(可用現金、信用卡、Line Pay 付款)',
        },
        {
          heading: 'Three',
          question: '客製商品流程',
          answer: '當客人下單客製品後，約 2 ~ 3 個工作日後我們會與您聯絡討論需求與客製方向，於 3 個工作日後給予設計圖並報價；訂金支付後 5 個工作日內完成並通知您取貨。',
        },
        {
          heading: 'Four',
          question: '客製商品付款方式？',
          answer: '當客製設計圖完成後，需先付報價的 3 分之 1 訂金，尾款商品交貨時再付清。(付款方式如上一般商品付款方式)',
        },
        {
          heading: 'Five',
          question: '照顧方式',
          answer: '就澆水、放在有陽光的地方、還有通風，很簡單吧!!',
        },
        {
          heading: 'Six',
          question: '乾燥花製作方式',
          answer: '倒過來掛起來曬乾.....應該吧。',
        },
        {
          heading: 'Seven',
          question: '永生花製作方式',
          answer: '把花拿去泡福馬林 ???!!XD',
        },
        {
          heading: 'Eight',
          question: '如何成為會員',
          answer: '消費 1 次客製類的商品就可成為會員。',
        },
      ],
    };
  },
};
</script>
