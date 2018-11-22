import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 关于我们页面引入
import Home from './views/Home/Home';
import AboutSeaever from '@/views/AboutSeaever/AboutSeaever';

// 子页面引入
import introduce from '@/views/AboutSeaever/children/introducePage';
import historyDevelopment from '@/views/AboutSeaever/children/historyDevelopment';
import qualification from '@/views/AboutSeaever/children/qualification';

// 企业文化页面引入
const EnterpriseCulture = () =>
    import ('@/views/EnterpriseCulture/EnterpriseCulture');
// 子页面引入
const OperationPrinciple = () =>
    import ('@/views/EnterpriseCulture/children/OperationPrinciple');
const Magazine = () =>
    import ('@/views/EnterpriseCulture/children/Magazine');
const EnterpriseScenery = () =>
    import ('@/views/EnterpriseCulture/children/EnterpriseScenery');

const Product = () =>
    import ('@/views/Product/Product');
const productList = () =>
    import ('@/views/Product/children/productList');

const OtherGuide = () =>
    import ('@/views/OtherGuide/OtherGuide');

const LockPDF = () =>
    import ('@/components/LockPDF');


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
                },
                {
                    path: 'qualification',
                    name: '企业资质',
                    component: qualification
                }
            ]
        },
        {
            path: '/EnterpriseCulture',
            name: 'EnterpriseCulture',
            component: EnterpriseCulture,
            redirect: '/EnterpriseCulture/OperationPrinciple',
            children: [{
                    path: 'OperationPrinciple',
                    name: '经营理念',
                    component: OperationPrinciple
                },
                {
                    path: 'Magazine',
                    name: '企业内刊',
                    component: Magazine
                },
                {
                    path: 'EnterpriseScenery',
                    name: '员工风采',
                    component: EnterpriseScenery
                }
            ]

        },
        {
            path: '/Product',
            name: 'Product',
            component: Product,
            redirect: '/Product/productList_1',
            children: [{
                    path: 'productList_1',
                    name: '图书馆RFID全套解决方案',
                    component: productList
                },
                {
                    path: 'productList_2',
                    name: '24小时自助图书馆',
                    component: productList
                },
                {
                    path: 'productList_3',
                    name: '城市书房',
                    component: productList
                },
                {
                    path: 'productList_4',
                    name: '大数据平台',
                    component: productList
                },
                {
                    path: 'productList_5',
                    name: '智能立体书库',
                    component: productList
                }
            ]
        },
        {
            path: '/OtherGuide',
            name: '其他内容',
            component: OtherGuide,
            redirect: '/OtherGuide/videoCenter',
            children: [{
                    path: 'videoCenter',
                    name: '视频中心',
                    component: () =>
                        import ('@/views/OtherGuide/children/videoCenter.vue'),
                },
                {
                    path: 'contactUs',
                    name: '联络我们',
                    component: () =>
                        import ('@/views/OtherGuide/children/videoCenter.vue'),
                },
                {
                    path: 'recruit',
                    name: '人才招聘',
                    component: () =>
                        import ('@/views/OtherGuide/children/videoCenter.vue'),
                }
            ]
        },
        {
            path: '/Product/productDetails/:id',
            name: '产品详情',
            component: () =>
                import ('@/views/Product/children/productDetails.vue'),
        },
        {
            path: '/LockPDF',
            name: 'LockPDF',
            component: LockPDF
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