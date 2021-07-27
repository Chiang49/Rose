<template>
  <Navbar></Navbar>
  <div class="falseNav"></div>
  <div class="container mx-80">
    <div class="row">
      <div class="col-12 col-md-6 mb-4 mb-md-0">
        <div class="loginImg">
          <div class="imgFrame">
            <img class="welcomeImg" src="https://images.unsplash.com/photo-1595853035070-59a39fe84de3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80" alt="">
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="loginBlock">
          <Form ref="form" class="form" v-slot="{ errors }" @submit="submit">
            <div class="form-floating mb-3">
              <Field
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
                rules="email|required"
                :class="{ 'is-invalid': errors['email'] }"
                v-model="user.username"
              ></Field>
              <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
              <label for="email">Email address</label>
            </div>
            <div class="form-floating mb-4">
              <Field
                type="password"
                class="form-control"
                id="password"
                name="密碼"
                placeholder="Password"
                rules="required|min:8"
                :class="{ 'is-invalid': errors['密碼'] }"
                v-model="user.password"
              ></Field>
              <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
              <label for="password">Password</label>
            </div>
            <button type="submit" class="btn btn-secondary">登入</button>
          </Form>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    submit() {
      const data = this.user;
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, data).then((res) => {
        // console.log(res);
        if (res.data.success) {
          // 處理 token
          const { token, expired } = res.data;
          document.cookie = `roseToken=${token}; expires=${expired}`;
          // SweetAlert
          this.$swal.fire({
            icon: 'success',
            title: res.data.message,
          });
          this.$router.push('/dashboard/products');
        } else {
          this.$swal.fire({
            icon: 'error',
            title: res.data.message,
          });
        }
        this.$refs.form.resetForm();
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>

<style lang="scss">
@import "../assets/stylesheet/pages/_login.scss";
body{
  height: 100vh;
}
</style>
