<template>
  <div class="home">
    <!-- 头栏 -->
    <nav-index/>

     <div class="inside">
       <!-- 顶栏图片 -->
      <product-banner/>

      <!-- 内容部分 -->
      <enterprise-culture/>
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
import ProductBanner from '@/views/Product/children/ProductBanner.vue'
import EnterpriseCulture from '@/views/Product/children/EnterpriseCulture.vue'


export default {
  name: 'Product',
  components: {
    navIndex,
    bottomBar,
    ProductBanner,
    EnterpriseCulture
  }
}
</script>
