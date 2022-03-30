//该文件专门用于创建整个应用的路由器

import VueRouter from 'vue-router'
import ContentHome from '../pages/ContentHome'
import ContentBaby from '../pages/ContentBaby'
import GubaoBaby from '../pages/GubaoBaby'
import GubaoPet from '../pages/GubaoPet'
import DetailsBaby from '../pages/DetailsBaby'
import DetailsPet from '../pages/DetailsPet'


export default new VueRouter({
    routes: [
        {
            name: 'Homepage',
            path: '/home',
            component: ContentHome
        },
        {
            path: '/gubao',
            component: ContentBaby,
            children: [
                {
                    path: 'baby',
                    component: GubaoBaby,
                    children: [
                        {
                            name: 'DetailsBaby',
                            // path: 'details/:name/:age',
                            path: 'details',
                            component: DetailsBaby,
                            //第一种写法 值为对象 传给GubaoDetails组件 但是是死数据
                            // props: { a: 'hello' }

                            //第二种写法 值为布尔值 若为真 就会把params以props传给GubaoDetails组件
                            // props: true

                            //第三种写法 值为函数
                            // props({query}){  //结构赋值
                            // props({query:{name,age}}){   //连续结构赋值

                            props($route){
                                return {
                                    name:$route.query.name,
                                    age:$route.query.age,
                                }
                            }
                        },
                    ]
                },
                {
                    path: 'pet',
                    component: GubaoPet,
                    children: [
                        {
                            name: 'DetailsPet',
                            path: 'details',
                            component: DetailsPet,
                            props($route){
                                return {
                                    name:$route.query.name,
                                    msg:$route.query.msg,
                                }
                            }
                        }
                    ]
                },

            ]
        },

    ]
})


