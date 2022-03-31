// 引入的不是Vue的构造函数了
// 引入名为createApp的工厂函数（无需通过new来声明）
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')










// //创建应用实例对象 app （类似于Vue2中的vm，但是app更轻）
// const app = createApp(App)
// //挂载
// app.mount('#app')




// const vm = new Vue({
//     render:h => h(App)
// })
// vm.$mount('#app')