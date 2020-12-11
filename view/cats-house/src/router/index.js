import Vue from 'vue'
import Router from 'vue-router'

//首页
const Index = () => import('../components/index/index');
//登录后台
const Login = () => import('../components/index/login');
//页面刷新
const Refresh = () => import('../components/refresh');
//404页面
const NotFound = () => import("../components/NotFound");
//后台框架
const Admin = () => import("../components/admin/Admin");
//后台首页
const Home = () => import("../components/admin/Home");


Vue.use(Router);

const routes = [
    {
        path: '/',
        component: Index
    }, {
        path: '/login',
        component: Login
    },
    {
        path: '/refresh',
        component: Refresh
    },
    {
        path: '/admin',
        name:"Admin",
        component: Admin,
        children:[
            {
                path:'/',
                component:Home
            }
        ],
        meta: {
            requireAuth: true,
        }
    },
    {
        path: '/404',
        name: '404',
        component: NotFound
    },
    {
        path: '*',
        redirect: '/404'
    }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router;