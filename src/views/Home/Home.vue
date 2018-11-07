<template>
  <div class="home">
    <!-- 头栏 -->
    <nav-index/>

     <div class="inside">
        <!-- banner轮播 -->
        <banner-index/>
        
        <!--产品页-->
        <product/>

        <!--经典案例-->
        <classic/>

        <!--新闻媒体-->
        <news-media/>
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
import bannerIndex from '@/views/Home/children/bannerIndex.vue'
import product from '@/views/Home/children/product.vue'
import classic from '@/views/Home/children/classic.vue'
import newsMedia from '@/views/Home/children/newsMedia.vue'

export default {
  name: 'home',
  components: {
    navIndex,
    bottomBar,
    bannerIndex,
    product,
    classic,
    newsMedia
  }
}
</script>
