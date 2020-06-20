// eslint-disable-next-line import/extensions
import Vue from 'vue/dist/vue.js';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
