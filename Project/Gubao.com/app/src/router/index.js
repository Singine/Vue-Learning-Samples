/**
 * index.js
 * E:\Project\Vue-Learning-Samples\Project\Gubao.com\app\src\router
 * ------------------------------------------------------------------
 * @Author: DZH
 * @Date: 2022/04/09 23:14:24
 * @Description: 配置路由
 * ------------------------------------------------------------------
 */



import Vue from "vue"
import VueRouter from "vue-router"

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

Vue.use(VueRouter)


let replace_origin = VueRouter.prototype.replace
let push_origin = VueRouter.prototype.push
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        push_origin.call(this, location, resolve, reject)
    } else {
        push_origin.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        replace_origin.call(this, location, resolve, reject)
    } else {
        replace_origin.call(this, location, () => { }, () => { })
    }
}

export default new VueRouter({
    routes: [
        //重定向
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search/:keyword?',
            component: Search,
            meta: {
                showFooter: true
            },
            name: 'Search',
            props: true
        },
        {
            path: '/login',
            component: Login,
            meta: {
                showFooter: false
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                showFooter: false
            }
        }
    ],

})
