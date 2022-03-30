//该文件专门用于创建整个应用的路由器

import VueRouter from 'vue-router'
import ContentHome from '../pages/ContentHome'
import ContentBaby from '../pages/ContentBaby'
import GubaoBaby from '../pages/GubaoBaby'
import GubaoPet from '../pages/GubaoPet'
import DetailsBaby from '../pages/DetailsBaby'
import DetailsPet from '../pages/DetailsPet'


const router = new VueRouter({
  routes: [
    {
      name: 'Homepage',
      path: '/home',
      component: ContentHome,
      meta:{
        title:'Home'
      },
    },
    {
      name: 'Gubao',
      meta:{
        isAuth:true,
        title:'Gubao'
      },
      path: '/gubao',
      component: ContentBaby,
      children: [
        {
          name: 'Baby',
          path: 'baby',
          component: GubaoBaby,
          children: [
            {
              name: 'DetailsBaby',
              path: 'details',
              component: DetailsBaby,
              props($route) {
                return {
                  name: $route.query.name,
                  age: $route.query.age,
                }
              }
            },
          ]
        },
        {
          name: 'Pet',
          path: 'pet',
          component: GubaoPet,
         
          children: [
            {
              name: 'DetailsPet',
              path: 'details',
              component: DetailsPet,
              props($route) {
                return {
                  name: $route.query.name,
                  msg: $route.query.msg,
                }
              }
            }
          ]
        },

      ]
    },

  ]
})

//全局前置路由守卫
//初始化时调用
//每次切换前调用
router.beforeEach((to, from, next) => {
  if(to.meta.isAuth){
    console.log()
    if(localStorage.getItem('keycode') === 'Haishigugue33'){
      next()
    }else{
      alert("无权限！")
    }
  }else{
    next()
  }
})

//全局后置路由守卫
//初始化时调用
//每次切换后调用
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router