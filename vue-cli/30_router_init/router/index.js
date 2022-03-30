//该文件专门用于创建整个应用的路由器

import VueRouter from 'vue-router'
import ContentHome from '../pages/ContentHome'
import ContentBaby from '../pages/ContentBaby'


export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:ContentHome
        },
        {
            path:'/baby',
            component:ContentBaby
        },

    ]
})


