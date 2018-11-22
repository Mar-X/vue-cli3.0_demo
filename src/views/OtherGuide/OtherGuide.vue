<template>
  <div class="home">
    <!-- 头栏 -->
    <nav-index/>

     <div class="inside">
        <!-- 顶栏图片 -->
        <product-banner/>

        <!-- 三级导航栏 -->
        <levelThreePage :list="listData"></levelThreePage>

         <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
     </div>
     
    <!-- 底栏 -->
    <bottom-bar/>
  </div>
</template>

<script>
// 头栏尾栏
import navIndex from '@/components/navIndex.vue'
import bottomBar from '@/components/BottomBar.vue'
import ProductBanner from '@/components/ProductBanner.vue'

// 页面组件
import levelThreePage from '@/components/levelThreePage.vue'


export default {
  name: 'home',
   data(){
        return {
            listData:[
                 {name:'视频中心',path:'/Product/videoCenter'},
                 {name:'联络我们',path:'/Product/contactUs'},
                 {name:'人才招聘',path:'/Product/recruit'}
            ],
        }
    },
    components: {
        navIndex,
        bottomBar,
        ProductBanner,
        levelThreePage
    },
    methods:{    
       
    }
}
</script>
