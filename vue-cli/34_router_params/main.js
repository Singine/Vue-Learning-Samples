import Vue from 'vue'
import App from './App'

import store from "./store";

import VueRouter from "vue-router";
import router from './router';

Vue.config.productionTip = false

Vue.use(VueRouter)


new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router,
    beforeCreate() {      //全局事件总线
        Vue.prototype.$bus = this
    },
    // mounted() {
    //     console.log(this)
    // }
})