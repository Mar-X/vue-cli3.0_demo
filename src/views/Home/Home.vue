<template>
  <div class="home">
    <!-- 头栏 -->
    <nav-index/>

     <!-- 侧边栏组件 -->
    <!-- <side-menu>
      <re-drop-down>111</re-drop-down>
      <re-drop-down>222</re-drop-down>
      <re-submenu>
         <div slot="title">333</div>
         <re-drop-down>333-1</re-drop-down>
          <re-submenu>
              <div slot="title">333-2</div>
              <re-drop-down>333-2-1</re-drop-down>
              <re-drop-down>333-2-2</re-drop-down>
            </re-submenu>
         </re-drop-down>
      </re-submenu>
    </side-menu> -->
    <side-menu>
      <template v-for="(item,index) in routers">
          <re-drop-down v-if="!item.children" :key="`menu_${index}`">{{item.title}}</re-drop-down>
          <submenu v-else :key="`menu_item_${index}`" :preat="item" :index="index"></submenu>
      </template>
    </side-menu>
     

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

import { mapState } from 'vuex'

// 头栏尾栏
import NavIndex from '@/components/navIndex.vue'
import BottomBar from '@/components/BottomBar.vue'

// 侧边栏
import MySideMenu from '@/components/side-menu'
import submenu from '@/components/side-menu/submenu.vue'
const { SideMenu, ReDropDown, ReSubmenu } = MySideMenu


// 页面组件
import BannerIndex from '@/views/Home/children/bannerIndex.vue'
import Product from '@/views/Home/children/product.vue'
import Classic from '@/views/Home/children/classic.vue'
import NewsMedia from '@/views/Home/children/newsMedia.vue'

export default {
  name: 'home',
  data(){
    return{
      SideMenuType:true,
      list: [
        {
          title: '1111'
        },
        {
          title: '2222'
        },
        {
          title: '3333',
          children: [
            {
              title: '3333-1'
            },
            {
              title: '3333-2',
              children: [
                {
                  title: '3333-2-1'
                },
                {
                  title: '3333-2-2'
                },
                {
                  title: '3333-2-3',
                  children: [
                    {
                      title: '3333-2-3-1'
                    },
                    {
                      title: '3333-2-3-2'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    NavIndex,
    BottomBar,
    BannerIndex,
    Product,
    Classic,
    NewsMedia,
    SideMenu,
    ReDropDown,
    ReSubmenu,
    submenu  
  },
  computed:{
    ...mapState({
      routers:state => state.list
    })
  }
}
</script>

