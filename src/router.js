import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 页面引入
import Home from './views/Home/Home.vue';
const AboutSeaever = () =>
    import ('@/views/AboutSeaever/AboutSeaever.vue');
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
            path: '/AboutSeaever',
            name: 'AboutSeaever',
            component: AboutSeaever
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