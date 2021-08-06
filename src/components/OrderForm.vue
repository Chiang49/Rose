<template>
  <div ref="formObject">
    <h2 class="subtitle">訂單資料</h2>
    <Form ref="orderFrom" class="orderFrom" v-slot="{ errors }" @submit="sendOrder">
      <div class="mb-3">
        <label for="name" class="form-label">姓名</label>
        <Field type="text"
              class="form-control"
              id="name"
              placeholder="姓名"
              name="姓名"
              v-model="user.name"
              rules="required"
              :class="{ 'is-invalid': errors['姓名'] }"
        ></Field>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <Field type="email"
              class="form-control"
              id="email"
              placeholder="Email@xxx.xxx"
              name="Email"
              v-model="user.email"
              rules="email|required"
              :class="{ 'is-invalid': errors['Email'] }"
        ></Field>
        <ErrorMessage name="Email" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="tel" class="form-label">手機</label>
        <Field type="tel"
              class="form-control"
              id="tel"
              placeholder="0900000000"
              name="手機"
              v-model="user.tel"
              rules="min:10|required"
              :class="{ 'is-invalid': errors['手機'] }"
        ></Field>
        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">地址</label>
        <Field type="text"
              class="form-control"
              id="address"
              placeholder="地址"
              name="地址"
              v-model="user.address"
              rules="required"
              :class="{ 'is-invalid': errors['地址'] }"
        ></Field>
        <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="pay" class="form-label">付款方式</label>
        <Field
          id="pay"
          class="form-select"
          name="付款方式"
          v-model="user.pay"
          rules="required"
          :class="{ 'is-invalid': errors['付款方式'] }"
          as="select"
        >
          <option selected disabled>選擇付款方式</option>
          <option value="ATM轉帳">ATM轉帳</option>
          <option value="親洽付款">親洽付款</option>
        </Field>
        <ErrorMessage name="付款方式" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">其他留言</label>
        <textarea
          class="form-control"
          id="message"
          rows="6"
          v-model="message"
        ></textarea>
      </div>
      <button class="btn btn-secondary w-100 px-3">送出訂單</button>
    </Form>
  </div>
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse';

export default {
  data() {
    return {
      form: '',
      user: {},
      message: '',
    };
  },
  methods: {
    // 開啟表單
    openForm() {
      this.form.show();
    },
    // 關閉表單
    closeForm() {
      this.form.hide();
    },
    // 送出訂單
    sendOrder() {
      const orderData = {
        user: this.user,
        message: this.message,
      };
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.$http.post(api, { data: orderData }).then((res) => {
        // console.log(res);
        if (res.data.success) {
          this.$swal.fire({
            icon: 'success',
            title: res.data.message,
          });
          this.$refs.orderFrom.resetForm();
          this.message = '';
          this.$emit('renderCart');
          this.closeForm();
        } else {
          this.$swal.fire({
            icon: 'error',
            title: res.data.message,
          });
        }
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  mounted() {
    this.form = new Collapse(this.$refs.formObject, {
      toggle: false,
    });
  },
};
</script>

<style lang="scss">
@import '../assets/stylesheet/components/_orderForm.scss';
</style>
