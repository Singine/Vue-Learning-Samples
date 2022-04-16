import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import Nav from '@/components/Nav'
import Carsouel from '@/components/Carsouel'

import '@/mock/mockServe'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
Vue.component(Nav.name, Nav)
Vue.component(Carsouel.name, Carsouel)

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store,  // vc身上会多一个$store
}).$mount('#app')
