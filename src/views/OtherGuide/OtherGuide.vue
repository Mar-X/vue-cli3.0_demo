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
        <router-view @recruitPopData="GetData"></router-view>
     </div>
    
    <!-- 招聘弹窗 -->
    <recruitPop></recruitPop>

    <!-- 底栏 -->
    <bottom-bar/>
  </div>
</template>

<script>
// 头栏尾栏
import navIndex from "@/components/navIndex.vue";
import bottomBar from "@/components/BottomBar.vue";
import ProductBanner from "@/components/ProductBanner.vue";
import recruitPop from "@/components/recruitPopup.vue";

// 页面组件
import levelThreePage from "@/components/levelThreePage.vue";

export default {
  name: "OtherGuide",
  data() {
    return {
      listData: [
        { name: "视频中心", path: "/OtherGuide/VideoCenter" },
        { name: "联络我们", path: "/OtherGuide/ContactUs" },
        { name: "人才招聘", path: "/OtherGuide/Recruit" }
      ]
    };
  },
  components: {
    navIndex,
    bottomBar,
    ProductBanner,
    levelThreePage,
    recruitPop
  },
  methods: {
    GetData(data) {
      console.log("111", data);
    }
  }
};
</script>
