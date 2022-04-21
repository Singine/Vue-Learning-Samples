import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'

export default [
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
    },
    {
        path: '/detail/:skuid?',
        component: Detail,
        meta: {
            showFooter: true
        },
        name:'Detail',
        props: true
    },
]