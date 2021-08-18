<template>
  <Header class="mb-8"
          :photoUrl="headerPhoto.url"
  ></Header>
  <div class="container">
    <div class="introduce">
      <h2 class="introduce-title">Rose's story</h2>
      <div class="row align-items-center">
        <div class="d-md-none mb-3 mb-md-0">
          <div class="introduce-img">
            <img src="https://images.unsplash.com/photo-1584461730592-5bfab6460bae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" alt="">
          </div>
        </div>
        <div class="introduce-background"></div>
        <div class="offset-md-6 col-md-6 introduce-textGroup">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro cupiditate dignissimos, earum consectetur,
            recusandae ullam quis corrupti quos inventore,
            vel quas! Et cumque, repudiandae animi eligendi soluta quis explicabo molestias.
          </p>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro cupiditate dignissimos, earum consectetur,
            recusandae ullam quis corrupti quos inventore,
            vel quas! Et cumque, repudiandae animi eligendi soluta quis explicabo molestias.
          </p>
        </div>
      </div>
    </div>

  </div>
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
        url: 'https://images.unsplash.com/photo-1558001768-fb8b238bccda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      },
    };
  },
};
</script>

<style lang="scss">
@import '../assets/stylesheet/pages/_about.scss';
</style>
