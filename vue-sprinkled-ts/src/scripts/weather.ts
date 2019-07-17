import Vue from 'vue';
import Weather from '~/components/Weather.vue';

Vue.config.productionTip = false;

new Vue(Weather).$mount('#weather');