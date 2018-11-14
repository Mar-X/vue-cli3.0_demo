<template>
  <div class="home">
    <!-- 头栏 -->
    <nav-index/>

     <div class="inside">
       <!-- 顶栏图片 -->
      <product-banner/>

      <levelThreePage :list="listData"></levelThreePage>

      <div class="enterpriseCulturePage">
         <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
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
import ProductBanner from '@/components/ProductBanner.vue'

// 页面组件
import levelThreePage from '@/components/levelThreePage.vue'

export default {
  name: 'Product',
  data(){
    return{
      listData:[
              {name:'经营理念',path:'/EnterpriseCulture/OperationPrinciple'},
              {name:'企业内刊',path:'/EnterpriseCulture/Magazine'},
              {name:'员工风采',path:'/EnterpriseCulture/EnterpriseScenery'},
        ],
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
