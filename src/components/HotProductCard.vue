<template>
  <router-link class="hotProductCard" to="/product/-Mf7iysbKM9M9amWgnY9">
    <div class="row align-items-center">
      <div class="col-md-5 order-2 order-md-1">
        <div>
          <h3 class="hotProductCard-title">玫瑰盒</h3>
          <p class="hotProductCard-price">NT {{ toCurrency(1250) }}</p>
          <p class="hotProductCard-sell">目前已銷售 1000 盒</p>
        </div>
      </div>
      <div class="col-md-7 p-md-4 p-lg-5 mb-3 mb-md-0 order-1 order-md-2">
        <div class="squareRWD">
          <img src="https://images.unsplash.com/photo-1613414312279-0549888b3ab1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="">
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {

};
</script>
