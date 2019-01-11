import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// 图片放大插件
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(Vuex)

// Vue.use(iView);
Vue.use(iView, {
  transfer: true,
  size: 'large'
});

//Vue.use(Viewer)
// 默认配置写法  url为大图展示的地址标签属性名设置
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999,
    url: "srcMax"
  }
})


// 引入重置样式
import "normalize.css/normalize.css"
// 引入swiper样式
import 'swiper/dist/css/swiper.css';
// 引入样式
import "@/style/index.scss"

Vue.config.productionTip = false

// 利用localStorage模仿从后台返回的cookie登录状态
window.localStorage.setItem('loginType', false);


router.beforeEach((to, from, next) => {
  let getType = window.localStorage.getItem('loginType');
  let getTypes = eval(getType.toLowerCase())
  console.log('1111', getTypes)
  if (getTypes) {
    next()
  } else {
    alert('您还没有登录，请先登录或者注册！');
    window.localStorage.setItem('loginType', true);
    next('/login')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')