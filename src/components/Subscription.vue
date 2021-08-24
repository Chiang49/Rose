<template>
  <section class="subscription">
    <div class="container subscription-content">
      <label for="subscriptionEmail">訂閱 活動資訊</label>
      <Form class="input-group" v-slot="{ errors }" @submit="onSubmit">
        <Field
          type="email"
          id="subscriptionEmail"
          class="form-control"
          name="Email"
          placeholder="輸入信箱取得活動訊息"
          v-model="userEmail"
          rules="email"
          :class="{ 'is-invalid': errors['Email'] }"
        ></Field>
        <button type="submit" class="input-group-text">送出</button>
        <ErrorMessage name="Email" class="invalid-feedback"></ErrorMessage>
      </Form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userEmail: '',
      subscriptionEmails: [],
    };
  },
  methods: {
    onSubmit() {
      this.subscriptionEmails.push(this.userEmail);
      this.userEmail = '';
      this.$swal.fire({
        title: '感謝您的訂閱',
      });
    },
  },
};
</script>
