import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)

// 引入重置样式
import "normalize.css/normalize.css"

// 引入样式
import "@/style/index.scss"

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')