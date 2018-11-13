import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 页面引入
import Home from './views/Home/Home';
import AboutSeaever from '@/views/AboutSeaever/AboutSeaever';

// 子页面引入
import introduce from '@/views/AboutSeaever/children/introducePage';
import historyDevelopment from '@/views/AboutSeaever/children/historyDevelopment';

const EnterpriseCulture = () =>
    import ('@/views/EnterpriseCulture/EnterpriseCulture');
const Product = () =>
    import ('@/views/Product/Product');


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/AboutSeaever',
            name: 'AboutSeaever',
            component: AboutSeaever,
            // redirect重定向的属性，把路径指向相应的子路由，使得点击过来默认显示的路由位置
            redirect: '/AboutSeaever/introduce',
            // 子页面
            // 踩坑：配置 path 的时候，以 " / " 开头的嵌套路径会被当作根路径，
            // 所以子路由的 path 不需要添加 " / "
            children: [
                // 也可以作为重定向，但浏览器会报黄色提示，推荐使用redirect属性
                // {
                //     // 为空为默认子页面展示页面
                //     path: '',
                //     name: '公司介绍',
                //     component: introduce
                // }, 
                {
                    path: 'introduce',
                    name: '公司介绍',
                    component: introduce
                },
                {
                    path: 'historyDevelopment',
                    name: '发展历史',
                    component: historyDevelopment
                }
            ]
        },
        {
            path: '/EnterpriseCulture',
            name: 'EnterpriseCulture',
            component: EnterpriseCulture
        },
        {
            path: '/Product',
            name: 'Product',
            component: Product
        },
        {
            path: '*',
            name: 'Home',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Home/Home.vue')
        }
    ]
})