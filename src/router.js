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
            // 子页面
            // 踩坑：配置 path 的时候，以 " / " 开头的嵌套路径会被当作根路径，
            // 所以子路由的 path 不需要添加 " / "
            children: [{
                    // 为空为默认子页面展示页面
                    path: '',
                    name: 'introduce',
                    component: introduce
                }, {
                    path: 'introduce',
                    name: 'introduce',
                    component: introduce
                },
                {
                    path: 'historyDevelopment',
                    name: 'historyDevelopment',
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