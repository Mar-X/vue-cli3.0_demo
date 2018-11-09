import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 页面引入
import Home from './views/Home/Home.vue';

// 子页面引入
import introduce from '@/views/AboutSeaever/introducePage.vue';
import historyDevelopment from '@/views/AboutSeaever/historyDevelopment.vue';

const EnterpriseCulture = () =>
    import ('@/views/EnterpriseCulture/EnterpriseCulture.vue');
const Product = () =>
    import ('@/views/Product/Product.vue');


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/AboutSeaever/introduce',
            name: 'introduce',
            component: introduce,
            // 子页面
            children: [{
                    path: '/AboutSeaever/introduce',
                    name: 'introduce',
                    component: introduce
                },
                {
                    path: '/AboutSeaever/historyDevelopment',
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