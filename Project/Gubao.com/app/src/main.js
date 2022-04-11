import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import Nav from '@/components/Nav'

Vue.config.productionTip = false
Vue.component(Nav.name,Nav)

new Vue({
  render: h => h(App),
  router,
  store,  // vc身上会多一个$store
}).$mount('#app')
