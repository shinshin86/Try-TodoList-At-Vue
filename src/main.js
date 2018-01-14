import Vue from 'vue';
import App from './App.vue';
import store from './store/index';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial);

new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
});
