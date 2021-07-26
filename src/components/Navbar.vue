<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
    <div class="container">
      <h1 class="logo-sm">
        <router-link class="nav-link" to="/">Rose</router-link>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="about">品牌</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="userProducts">商品</router-link>
          </li>
        </ul>
        <h1 class="logo-lg">
          <router-link class="nav-link" to="/">Rose</router-link>
        </h1>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">登入</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="cart">購物車</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@import '../assets/stylesheet/components/_navbar.scss';
</style>
