<template>
   <!-- 弹出窗 -->
    <div class="carouselPopup" style="display:block">
        <div class="carouselPopupBox">
            <!-- 关闭键 -->
            <img class="carouselPopupDel" src="../assets/images/icon/关闭  X@2x.png" alt="">
            <!-- 轮播图 -->
            <div class="PopupImg">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">Slide 1</div>
                        <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                    
                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    
                    <!-- 如果需要滚动条 -->
                    <!-- <div class="swiper-scrollbar"></div> -->
                </div>
            </div>
            <h4>海恒年会海恒年会海恒年会</h4>
            <p>海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会</p>
        </div>
    </div>
</template>

<script>

    import Swiper from 'swiper';

    export default {
        name: 'carouselPopup',
        data(){
            return {
                
            }
        },
        mounted(){
            new Swiper ('.swiper-container', {
            loop: true,
           // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
           navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // 如果需要滚动条
            scrollbar: '.swiper-scrollbar',
            })        
        },
        methods:{

        }
    }
</script>

<style scoped>
 .swiper-container {
        width: 100%;
        height: 100%;
    }
</style>
