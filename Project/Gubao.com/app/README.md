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
> ### query
>  `query` 和 `params` 两个属性可以传递参数
> - query参数不属于路径当中的一部分，类似于GET请求，地址栏表现为 `/search?k1=v1&k2=v2`
> - query参数对应的路由信息 `path: "/search"`
> - params参数属于路径当中的一部分，需要注意，在配置路由的时候，需要占位 ,地址栏表现为 `/search/v1/v2`
> - params参数对应的路由信息要修改为 `path: "/search/:keyword"` 这里的 `/:keyword` 就是一个params参数的占位符

