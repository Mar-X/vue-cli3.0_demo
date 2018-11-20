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
          <router-view @imgListData='getImgListData'></router-view>
      </div>

     </div>

    <!-- 弹出窗 -->
    <!-- ===引入组件当弹出窗实现关闭===
    
    出现的问题：当弹出窗弹出时会父组件跟子组件都有两个关闭事件，
    但是状态不能统一起来，所以会出现点击两下才能打开关闭的问题。

    解决方案：1、使用父组件监听子组件事件，来改变状态值。
              2、使用Vuex实现状态管理，但需要用computed监听vuex里面值的变化 -->
    <!-- <carouselPopup :swiperList="imgList" v-show="PopupType" @carouselPopup="carouselPopupType"></carouselPopup> -->
    <carouselPopup :swiperList="imgList" v-show="PopupTypemonitor"></carouselPopup>
    
     <!-- 遮罩层 -->
    <div class="poplayer" v-show="PopupTypemonitor"></div> 
  
    <!-- 底栏 -->
    <bottom-bar/>
  </div>
</template>

<script>
// 头栏尾栏
import navIndex from '@/components/navIndex.vue'
import bottomBar from '@/components/BottomBar.vue'
import ProductBanner from '@/components/ProductBanner.vue'
import carouselPopup from '@/components/carouselPopup.vue'


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
         imgList:[],
    }
  },
  components: {
    navIndex,
    bottomBar,
    ProductBanner,
    levelThreePage,
    carouselPopup
  },
  methods:{
      getImgListData(msg){
        // console.log(msg)
         this.imgList = msg
      }  
  },
   computed : {
      PopupTypemonitor() {
          return this.$store.state.carouselPopupType
      }
  },
   watch: {
    PopupTypemonitor() {
          return this.$store.state.carouselPopupType
    }
  }
}
</script>
