import { createApp } from 'vue';
// Axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// Bootstrap
import 'bootstrap';
// Sweet Alert 2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// VeeValidate
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';

// VeeValidate / Rule
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
// VeeValidate / i18n 語言設定
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true, // 調整為輸入字元立即進行驗證
});
setLocale('zh_TW');

const app = createApp(App);
// Axios
app.use(VueAxios, axios);
// Sweet Alert 2
app.use(VueSweetalert2);
// VeeValidate
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.use(router);
app.mount('#app');
