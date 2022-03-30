//该文件专门用于创建整个应用的路由器

import VueRouter from 'vue-router'
import ContentHome from '../pages/ContentHome'
import ContentBaby from '../pages/ContentBaby'
import GubaoBaby from '../pages/GubaoBaby'
import GubaoPet from '../pages/GubaoPet'


export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: ContentHome
        },
        {
            path: '/gubao',
            component: ContentBaby,
            children: [
                {
                    path: 'baby',
                    component: GubaoBaby
                },
                {
                    path: 'pet',
                    component: GubaoPet
                },

            ]
        },

    ]
})


