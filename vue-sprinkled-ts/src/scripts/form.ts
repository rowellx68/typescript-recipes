import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Form from '~/components/Form.vue';

Vue.config.productionTip = false;
Vue.use(VeeValidate, {
  delay: 500,
  classes: true,
  classNames: {
    invalid: 'is-danger',
    touched: '',
    pristine: '',
    dirty: '',
    untouched: '',
  }
});

new Vue(Form).$mount('#form');