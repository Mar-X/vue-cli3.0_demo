<template>
    <!--产品banner展示-->
    <div class="productBanner">
        <div class="productImg" :style="{backgroundImages:'url('+pcbg+')'}"></div>
    </div>
</template>

<script>

    import pcbg from '../assets/images/二级banner图@2x.png'

    // 首页轮播图组件
    export default {
        name: 'bannerIndex',
        data(){
            return {
                pcbg:pcbg
            }
        },
        components: {}
    }
</script>

