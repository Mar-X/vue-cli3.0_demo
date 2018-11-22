<template>
  <div class="home">
    <!-- 头栏 -->
    <nav-index/>

     <div class="inside">
        
        <!-- 产品列表 -->
        <!-- <levelThreePage :list="listData"></levelThreePage> -->

        <!-- 产品详情 -->
        <div class="productDetails">
            <div class="productDetailsBottom">
                <div class="productDetailsBox1">
                    <!-- 轮播图 -->
                    <div class="PopupImg">
                         <swiper v-if="swiperList.length>1" :options="swiperOption" ref="mySwiper" class="swiper-box">
                            <!-- slides -->
                            <swiper-slide v-for="swiper in swiperList">
                                <a class='swiperImg' :style="{backgroundImage: 'url('+swiper.url+')'}" href="javascript:void(0)"></a>
                            </swiper-slide>
                            <!-- 注意！一定要把swiper-pagination这个分页器写在swiper标签里面，swiper-slide标签外面 -->
                            <div class="swiper-pagination"  slot="pagination"></div>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </swiper>
                    </div>
                    <!-- 详情页-中文版 -->
                    <div class="detailsContent" style="display:inline-block">
                        <h3>陈奕迅</h3>
                        <h4>CYX</h4>
                        <i></i>
                        <p class="content">
                            一个我正在听的歌手， 一个我正在听的歌手， 一个我正在听的歌手， 一个我正在听的歌手， 一个我正在听的歌手， 一个我正在听的歌手， 一个我正在听的歌手， 一个我正在听的歌手， 一个我正在听的歌手。
                        </p>
                    </div>
                </div>
                <div class="productDetailsBox2" :style="{backgroundImage: 'url('+images001+')'}"></div>
                <div class="productDetailsBox2" :style="{backgroundImage: 'url('+images002+')'}"></div>
                <div class="productDetailsBox2" :style="{backgroundImage: 'url('+images001+')'}"></div>
                <div class="productDetailsBox2" :style="{backgroundImage: 'url('+images002+')'}"></div>
            </div>
        </div>
    </div>
  
    <!-- 底栏 -->
    <bottom-bar/>
  </div>
</template>

<script>

 import Vue from 'vue'
//前提你已经下载好vue-awesome-swiper,swiper.min.css 引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
Vue.use(VueAwesomeSwiper)


// 头栏尾栏
import navIndex from '@/components/navIndex.vue'
import bottomBar from '@/components/BottomBar.vue'



// 页面组件
import levelThreePage from '@/components/levelThreePage.vue'
import images001 from '@/assets/images/001.jpg'
import images002 from '@/assets/images/002.jpg'
import xq1 from '@/assets/images/详情1.jpg'
import xq2 from '@/assets/images/详情2.jpg'
import xq3 from '@/assets/images/详情3.jpg'

export default {
  name: 'Product',
  data(){
    return{
        images001,
        images002,
        swiperList:[
            {url:xq1},
            {url:xq2},
            {url:xq3},
        ],
        listData:[
                {name:'经营理念',path:'/EnterpriseCulture/OperationPrinciple'},
                {name:'企业内刊',path:'/EnterpriseCulture/Magazine'},
                {name:'员工风采',path:'/EnterpriseCulture/EnterpriseScenery'},
        ],
         //配置
        swiperOption: {
            loop : true,
            speed: 900,
            notNextTick: true,
            autoplay:true,
            preloadImages: false,
            pagination: {
            el: '.swiper-pagination',
            // 控制分页器切换图片
            clickable :true,
            },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        },
            
    }
  },
  components: {
    navIndex,
    bottomBar,
    levelThreePage
  },
  methods:{
      
  },
   computed : {
     
  }
}
</script>

<style scoped>
 .swiper-container {
        width: 100%;
        height: 100%;
    }
</style>
