# 前端Vue核心

> 开发一个前端模块可以概括为以下几个步骤：
> 1. 写静态页面、拆分为静态组件
> 2. 发请求（API）
> 3. Vuex（actions、mutations、state三连操作）
> 4. 组件获取仓库数据，动态展示


## 一、vue文件目录分析
> **public文件夹：**
> 静态资源，webpack进行打包的时候会原封不动打包到 `dist` 文件夹中。
>
> **pubilc/index.html**
> 是一个模板文件，作用是生成项目的入口文件，webpack打包的js,css也会自动注入到该页面> 中。我们浏览器访问项目的时候就会默认打开生成好的 `index.html` 。
>
> **src文件夹**（程序员代码文件夹）
> - `assets` ： 存放公用的静态资源
> - `components` ： 非路由组件（全局组件），其他组件放在 `pages` 文件夹中
> - `App.vue` ： 唯一的跟组件
> - `main.js` ： 程序入口文件，最先执行的文件
>
> **babel.config.js**
> 配置文件（babel相关）
>
> **package.json**
> 项目的详细信息记录
>
> **package-lock.json**
> 缓存性文件（各种包的来源）


## 二、项目配置
### 2.1 浏览器自动打开
> 在 `package.json` 文件中进行配置
> ```json
> "scripts": {
>     "serve": "vue-cli-service serve --open",
>     "build": "vue-cli-service build",
>     "lint": "vue-cli-service lint"
> },
> ```

### 2.2 关闭eslint校验工具
> 根目录下创建 `vue.config.js` ,进行配置
> ```js
> module.exports = {
>   lintOnSave: false //关闭eslint
> }
> ```

### 2.3 src文件夹配置别名
> 创建jsconfig.json，用 `@/` 代替 `src/` ，`exclude` 表示不可以使用该别名的文件
> ```json
>  {
>     "compilerOptions": {
>             "paths": {
>         "baseUrl": "./",
>             "@/*": [
>                 "src/*"
>             ]
>         }
>     },
>     "exclude": [
>         "node_modules",
>         "dist"
>     ]
>  }
> ```


## 三、组件页面样式
> 组件页面的样式使用的是less样式，浏览器不识别该样式，需要下载相关依赖
> ```
> npm install --save less less-loader@5
> ```
> 如果想让组件识别less样式，则在组件中设置
> ```
> <script scoped lang="less">
> ```


## 四、清楚Vue页面默认样式
> Vue是单页面开发，我们只需要修改 `./public` 下的 `index.html` 文件
> ```
> <link rel="stylesheet" href="reset.css">
> ```


## 五、pages文件夹
> 创建 `pages` 文件夹，并创建路由组件
>
> 创建 `router` 文件夹，并创建 `index.js` 进行路由配置，最终在 `main.js` 中引入注册
>
> 路由组件和非路由组件区别：
> - 非路由组件放在 `components` 中，路由组件放在 `pages` 中
> - 非路由组件通过标签使用，路由组件通过路由使用
> - 在 `main.js` 注册好路由，所有的路由和非路由组件身上都会拥有 `$router` `$route` 属性
> - $router： 一般进行编程式导航进行路由跳转
> - $route： 一般获取路由信息（name path params等）
>
> 路由跳转方式
> - 声明式导航router-link标签 ,可以把router-link理解为一个a标签，它 也可以加class修饰
> - 编程式导航 ：声明式导航能做的编程式都能做，而且还可以处理一些业务


## 六、Footer组件显示与隐藏
> `Footer`在登录注册页面是不存在的，所以要隐藏，`v-if` 或者 `v-show`
>
> 这里使用 `v-show`，因为 `v-if` 会频繁的操作dom元素消耗性能，`v-show` 只是通过样式将元素显示或隐藏
>
> 配置路由的时候，可以给路由配置元信息 `meta`
>
> 在路由的原信息中定义属性，用来给 `v-show` 赋值，判断是否显示 `Footer` 组件


## 七、路由传参
 ### query 和 params 
>  两个属性都可以传递参数
> - query参数不属于路径当中的一部分，类似于GET请求，地址栏表现为 `/search?k1=v1&k2=v2`
> - query参数对应的路由信息 `path: "/search"`
> - params参数属于路径当中的一部分，需要注意，在配置路由的时候，需要占位 ,地址栏表现为 `/search/v1/v2`
> - params参数对应的路由信息要修改为 `path: "/search/:keyword"` 这里的 `/:keyword` 就是一个params参数的占位符

 ### 相关面试题
> **路由传递参数有哪几种写法？**
> - 有2种写法，传递字符串或传递对象。
> ```
>   this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
> ```
> ```
>   this.$router.push({
>       name:'Search',
>       params:{
>           keyword:''||undefined
>       },
>       query:{
>          k:this.keyword.toUpperCase()
>       }
>   })
> ```
> **对象传参中Path是否可以结合Params参数一起使用？**
> - 不可以。
> ```
>   传递对象方式中，使用 name 来确定跳转的路径。
>   使用 path 不能和 params 一起进行路由跳转。
> ```
> **如何指定Params参数可传可不传？**
> - 如果在配置路由的时候已经占位了Params参数 `:keyword` ，在路由跳转的不传递该参数，会导致路径出现问题。需要在占位时写成
> ```
>    :keyword?
> ```
> **如果Params参数传的是空值怎么办？**
> - 需要使用 `undefined` 来解决这个问题。
> ```
>   params:{
>       keyword:''||undefined
>    },
> ```
> **路由组件能不能传递props数据？**
> - 可以。
> ```
>   1. 布尔值
> 
>   在配置路由时设定 props:true ,可以将params参数变成 $attrs ,然后在路由组件中设定props数组引入即可。
> ```
> ```
>   2. 对象
> 
>   在配置路由时设定 props:{key:value} ,可以额外传递若干个对象参数。
> ```
> ```
>   3. 函数
> 
>   在配置路由时设定 
> 
>   props:()=>{
>       return {
>           key:$route.params.keyword
>       }
>   }
> 
>   可以返回params参数和query参数
> ```


## 八、多次执行相同push的问题
> 声明式导航不会有此类问题，因为 `vue-router` 已经在底层解决了这个问题
> 
> 编程式导航使用 `push()` 时，返回值为一个 `Promise` 对象，没有传入 `resolve` 或 `reject` 
> 
> `push()` 是 `VueRouter.prototype` 的一个方法，在 `router` 中的 `index` 重写该方法即可
> ```
>   let originPush = VueRouter.prototype.push;
>   VueRouter.prototype.push = function (location,resolve,reject){
>       if(resolve && reject){
>           originPush.call(this,location,resolve,reject)
>       }else{
>           originPush.call(this,location,() => {},() => {})
>       }
>   }
> ```


## 九、定义全局组件
> 全局组件需要在 `main.js` 中进行配置
> 
> 全局组件可以在任一页面中直接使用，不需要导入声明
> ```
>   //将三级联动组件注册为全局组件
>   import TypeNav from '@/pages/Home/TypeNav';
> 
>   //第一个参数：全局组件名字，第二个参数：全局组件
>   Vue.component(TypeNav.name,TypeNav);
> ```


## 十、封装axios
> axios中文文档，供参考。
> ```
>   https://www.kancloud.cn/yunye/axios/234845
> ```
> 在根目录下创建 `api` 文件夹，创建 `request.js` 文件
> 
> 内容如下，当前文件代码还比较少，后续有需求可以增添内容
> ```
>   import axios from "axios";
>   //1、对axios二次封装
>   const requests = axios.create({
>       //基础路径，requests发出的请求在端口号后面会跟改baseURl
>       baseURL:'/api',
>       timeout: 5000,
>   })
>   //2、配置请求拦截器
>   requests.interceptors.request.use(config => {
>       //config内主要是对请求头Header配置
>       //比如添加token
>       
>       return config;
>   })
>   //3、配置相应拦截器
>   requests.interceptors.response.use((res) => {
>       //成功的回调函数
>       return  res.data;
>   },(error) => {
>       //失败的回调函数
>       console.log("响应失败"+error)
>       return Promise.reject(new Error('fail'))
>   })
>   //4、对外暴露
>   export default requests;
> ```


## 十一、前端通过代理解决跨域问题
> 在根目录下的 `vue.config.js` 中配置 `proxy` ，通过代理解决跨域问题
> 
> 我们在封装axios的时候已经设置了 `baseURL` ,所以所有的请求都会携带 `/api` 
> 
> 如果项目没有封装axios，或者没有配置baseURL，建议进行配置
> ```
>   module.exports = {
>       lintOnSave: false,  //关闭eslint
> 
>       devServer: {
>           inline: false,  // true 则热更新，false 则手动刷新，默认值为 true
>           port: 8888,  // development server port
>           //代理服务器解决跨域
>           proxy: {        
>               '/api': {
>                   target: 'http://39.98.123.211',  //提供数据的服务器地址
>               }
>           },
>       }
>   }
> ```


## 十二、请求接口统一封装
> 在文件夹api中创建 `index.js` 文件，用于封装所有请求
> 
> 将每个请求封装为一个函数，并暴露出去，组件只需要调用相应函数即可，这样当我们的接口比较多时，如果需要修改只需要修改该文件即可
> ```
>   import requests from "@/api/request";
>   
>   export const reqCateGoryList = () => {
>       return requests({
>           url: '/product/getBaseCategoryList',
>           method: 'GET'
>       })
>   }
> ```
> 当组件想要使用相关请求时，只需要导入相关函数即可，以上图的 `reqCateGoryList` 为例:
> ```
>   import {reqCateGoryList} from './api'
>   reqCateGoryList();  //发起请求
> ```


## 十三、手动引入vuex
> 安装 `vuex` ，`Vue2` 环境下需要安装 `vuex@3` 版本
> 
> 根目录创建 `store` 文件夹，文件夹下创建 `index.js` ，内容如下：
> ```
>   import Vue from 'vue'
>   import Vuex from 'vuex'
>   
>   Vue.use(Vuex)
>   
>   export default new Vuex.Store({  //对外暴露store的一个实例
>       state:{},
>       mutations:{},
>       actions:{},
>   })
> ```
> 在入口文件 main.js 中进行引入
> ```
>   import store from './store'
> 
>   new Vue({
>     render: h => h(App),
>     router,
>     store  //注册store,此时组件中都会拥有$store
>   }).$mount('#app')
> ```
> vuex 可以模块化开发，是数据存储更清晰，维护和操作更方便
> ```
>   const state = {}  // state 仓库存储数据的地方
>   
>   const mutations = {}  // mutations 修改state的唯一手段
>   
>   const actions = {}  // actions 处理action
>   
>   const getters = {}  // getters 可以理解为计算属性 让组件获取仓库数据更方便
>   
>   export default {
>       state,
>       mutations,
>       actions,
>       getters
>   }
> ```
> ```
>   export default new Vuex.Store({
>      modules:{
>          home,
>      }
>   })
> ```


## 十四、函数的防抖和节流
> 在进行窗口的resize、scroll，输入框内容校验等操作时，如果事件处理函数调用的频率无限制，会加重浏览器的负担，导致用户体验非常糟糕
> 
> 此时我们可以引入 `ladash.js` ，采用 `_.debounce`（防抖）和 `_.throttle`（节流）函数的方式来减少调用频率，同时又不影响实际效果

### 防抖
> 前面的所有触发都被取消，最后一次执行在规定的时间之后才会触发，如果连续快速触发只会执行一次
> ```
>   input.oninput = _.debounce(function(){
>       // 发送ajax请求 1s后执行一次 期间的所有操作全都取消
>   },1000)
> ```

### 节流
> 在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发
> ```
>   button.onclick = _.throttle(function(){
>       // 执行操作，在1s内无论点击几次，只执行一次
>   },1000)
> ```

> 防抖：用户操作很频繁，但是只执行一次
> 
> 节流：用户操作很频繁，但是把频繁的操作变为一定时间内少量的操作，给浏览器充分的时间来解析代码


## 十五、...
