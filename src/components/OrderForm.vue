<template>
  <h2 class="subtitle">訂單資料</h2>
  <Form class="orderFrom" v-slot="{ errors }">
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
      <label for="tel" class="form-label">電話</label>
      <Field type="tel"
             class="form-control"
             id="tel"
             placeholder="02-0000-0000"
             name="電話"
             v-model="user.tel"
             rules="min:12|required"
             :class="{ 'is-invalid': errors['電話'] }"
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
  </Form>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
};
</script>

<style lang="scss">
@import '../assets/stylesheet/components/_orderFrom.scss';
</style>
