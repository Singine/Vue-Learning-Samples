import Vue from 'vue'

//引入ElementUI组件库
// import ElementUI from 'element-ui';

//引入ElementUI样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入ElementUI组件库
import { Button, Input, Row, DatePicker } from 'element-ui';

import App from './App'

Vue.config.productionTip = false


//应用ElementUI
// Vue.use(ElementUI);


Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);



new Vue({
    el: '#app',
    render: h => h(App),

})