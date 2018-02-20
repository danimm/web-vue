import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from '@/routes'
import i18n from '@/i18n'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  i18n
})
