/**
 * request.js
 * E:\Project\GIT\Vue-Learning-Samples\Project\Gubao.com\app\src\api
 * ------------------------------------------------------------------
 * @Author: DZH
 * @Date: 2022/04/11 02:56:10
 * @Description: 对axios进行二次封装
 * ------------------------------------------------------------------
 */

import axios from 'axios'
// 引入进度条包
import nProgress from 'nprogress'
// 引入进图条样式
import 'nprogress/nprogress.css'

// 利用axios对象的方法 create 创建一个axios 实例

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000,
})

// 请求拦截器 发请求之前可以拦截 做一些事情

requests.interceptors.request.use((config)=>{
    // config 配置对象 其中有个header请求头

    // 进度条开始动
    nProgress.start()


    return config
})

// 请求拦截器 发请求之前可以拦截 做一些事情

requests.interceptors.response.use((res)=>{
    // 进度条结束
    nProgress.done()
    return res.data
},(err)=>{
    return Promise.reject(new Error(err))
})


export default requests