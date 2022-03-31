import Vue from 'vue'
import App from './App'
import store from "./store";
Vue.config.productionTip = false




new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate() {      //全局事件总线
        Vue.prototype.$bus = this
    },
    mounted() {
        console.log(this)
    }
})