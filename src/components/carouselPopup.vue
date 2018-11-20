<template>
 <!-- v-show="PopupType" -->
   <!-- 弹出窗 -->
    <div class="carouselPopup">
        <div class="carouselPopupBox">
            <!-- 关闭键 -->
            <img @click="del" class="carouselPopupDel" src="../assets/images/icon/关闭  X@2x.png" alt="">
            <!-- 轮播图 -->
            <div class="PopupImg">
                <!-- ===swiper当获取动态数据不轮播问题===

                解决方法：在swiper标签外面加入v-if判断获取的数组长度，如果有数据就开始轮播


                ===swiper分页器不切换问题===

                解决方法：使用swiper 4.0 属性
                pagination: {
                    el: '.swiper-pagination',
                    // 控制分页器切换图片
                    clickable :true,
                  }, -->
                <swiper v-if="swiperList.length>1" :options="swiperOption" ref="mySwiper" class="swiper-box">
                    <!-- slides -->
                    <swiper-slide v-for="swiper in swiperList">
                        <a class='pc-bg-a' :style="{backgroundImage: 'url('+swiper.url+')'}" href="javascript:void(0)"></a>
                    </swiper-slide>
                    <!-- 注意！一定要把swiper-pagination这个分页器写在swiper标签里面，swiper-slide标签外面 -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <h4>海恒年会海恒年会海恒年会</h4>
            <p>海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会</p>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue'
    //前提你已经下载好vue-awesome-swiper,swiper.min.css 引入
    import VueAwesomeSwiper from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.min.css'
    Vue.use(VueAwesomeSwiper)

   

    export default {
        name: 'carouselPopup',
        props:{
            swiperList:{
                type:Array,
                required:true
            },
            // PopupType:{
            //     type:String,
            //     required:true
            // }
        },
        data(){
            return {
               PopupType:this.$store.state.carouselPopupType,
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
        methods:{
            del(){
                this.PopupType = false
                this.$store.commit('newcarouselPopupType',this.PopupType)
            }
        }
    }
</script>

<style scoped>
 .swiper-container {
        width: 100%;
        height: 100%;
    }
</style>
