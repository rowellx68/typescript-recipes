import Vue from 'vue';
import VeeValidate from 'vee-validate';

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

import Form from '~/components/Form.vue';

new Vue(Form).$mount('#form');