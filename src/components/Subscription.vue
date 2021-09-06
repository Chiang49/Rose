<template>
  <section class="subscription">
    <div class="container subscription-content">
      <label for="subscriptionEmail">訂閱 活動資訊</label>
      <Form class="input-group" v-slot="{ errors }" @submit="onSubmit">
        <Field
          type="email"
          id="subscriptionEmail"
          class="form-control"
          name="email"
          placeholder="輸入信箱取得活動訊息"
          v-model="userEmail"
          rules="email"
          :class="{ 'is-invalid': errors['email'] }"
        ></Field>
        <button type="submit" class="input-group-text">送出</button>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
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
      if (this.userEmail === '') {
        this.$swal.fire({
          icon: 'error',
          title: '您並未填寫 Email 喔',
        });
      } else {
        this.subscriptionEmails.push(this.userEmail);
        this.$swal.fire({
          icon: 'success',
          title: '感謝您的訂閱',
        });
        this.userEmail = '';
      }
    },
  },
};
</script>
