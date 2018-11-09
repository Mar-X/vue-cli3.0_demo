<template>
  <div class="home">
    <!-- 头栏 -->
    <nav-index/>

     <div class="inside">
       <!-- 顶栏图片 -->
      <product-banner/>

       <!--公司介绍-->
        <div class="clientListPage">

            <!-- 三级导航栏 -->
            <levelThreePage></levelThreePage>

          <div class="historyDevelopment" :style="{backgroundImage: 'url('+historyDevelopment+')'}"></div>
        </div>

     </div>
    
    <!-- 底栏 -->
    <bottom-bar/>
  </div>
</template>

<script>
// 头栏尾栏
import navIndex from '@/components/navIndex.vue'
import bottomBar from '@/components/BottomBar.vue'
// 页面组件
import ProductBanner from '@/views/AboutSeaever/children/ProductBanner.vue'
import levelThreePage from '@/components/levelThreePage.vue'

// 静态图片资源
import historyDevelopment from '../../assets/images/发展历程en.png';

export default {
  name: 'home',
   data(){
            return {
                historyDevelopment
            }
    },
    components: {
        navIndex,
        bottomBar,
        ProductBanner,
        levelThreePage
    }
}
</script>

