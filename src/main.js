import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'
// 图片放大插件
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

//Vue.use(Viewer)

// 默认配置写法  url为大图展示的地址标签属性名设置
Vue.use(Viewer, {
    defaultOptions: {
        zIndex: 9999,
        url: "srcMax"
    }
})


Vue.use(Vuex)

// 引入重置样式
import "normalize.css/normalize.css"
// 引入swiper样式
import 'swiper/dist/css/swiper.css';
// 引入样式
import "@/style/index.scss"

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')