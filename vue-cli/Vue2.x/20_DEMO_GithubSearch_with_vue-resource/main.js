import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(vueResource)

new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate(){      //全局事件总线
        Vue.prototype.$bus = this
    }
})