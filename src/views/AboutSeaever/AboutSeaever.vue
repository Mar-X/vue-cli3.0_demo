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
                  {name:'公司介绍',path:'/AboutSeaever/introduce'},
                  {name:'发展历史',path:'/AboutSeaever/historyDevelopment'},
                  {name:'企业资质',path:'/AboutSeaever/qualification'},
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
