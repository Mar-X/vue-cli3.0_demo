<template>
  <div class="home">
    <!-- 头栏 -->
    <nav-index/>

     <div class="inside">
       <!-- 顶栏图片 -->
      <product-banner/>

      <!-- 内容部分 -->
      <introduce-page/>
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
import IntroducePage from '@/views/AboutSeaever/children/introducePage.vue'


export default {
  name: 'home',
  components: {
    navIndex,
    bottomBar,
    ProductBanner,
    IntroducePage
  }
}
</script>
