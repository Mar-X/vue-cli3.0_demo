<template>
     <div id="carousel-example-generic" class="carousel slide bannerIndex" data-ride="carousel">
            <!-- 切换点 -->
            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <!-- <div class="item "> -->
                    <!-- <a class='pc-bg-a' href="javascript:void(0)"></a> -->
                    <!-- <a class='pc-bg-a' style="background-image: url('../../../assets/images/首页banner1@2x.png');" href="javascript:void(0)"></a> -->
                <!-- </div> -->
                <div class="item active">
                    <a class='pc-bg-b' :style="{backgroundImage: 'url('+pcbg+')'}" href="javascript:void(0)"></a>
                </div>
                <!-- <div class="item">
                    <a class='pc-bg-b' style="background-image: url('../../../assets/images/imgMin/404969251089690841.jpg');" href="javascript:void(0)"></a>
                </div> -->
            </div>

            <!-- 切换键 -->
            <!-- <a class="left carousel-control controlLeft" href="#carousel-example-generic" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            </a>
            <a class="right carousel-control controlRight" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            </a> -->
        </div>
</template>

<script>

    import pcbg from '../../../assets/images/imgMin/404969251089690841.jpg'

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
