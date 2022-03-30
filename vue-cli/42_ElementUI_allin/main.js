import Vue from 'vue'

//引入ElementUI组件库
import ElementUI from 'element-ui';

//引入ElementUI样式
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'

Vue.config.productionTip = false


//应用ElementUI
Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(App),

})