import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import Nav from './pages/Home/Nav'


Vue.config.productionTip = false
Vue.component(Nav.name,Nav)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
