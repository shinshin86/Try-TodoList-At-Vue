import Vue from 'vue'
import store from './store/index'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueRouter from 'vue-router'

import App from './App.vue'
import TodoHeader from './components/TodoHeader.vue'

Vue.use(VueMaterial)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        header: TodoHeader,
        main: App
      }
    }
  ]
})

new Vue({
  router,
  store,
}).$mount('#app');
