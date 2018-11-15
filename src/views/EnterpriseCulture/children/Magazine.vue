<template>

    <!-- 企业内刊 -->
    <div class="magazine">
        <!-- 时间 -->
        <!-- 改版 2018.8.8 -->
        <!-- magazineTimePullDown  下拉显示的状态-->
        <div class="magazineTime magazineTimePullDown" :class="searchBarFixed == true ? 'searchBarTop' :''" id="searchBar">
            <div class="time">
                <p>内刊年份：</p>
                <ul>
                    <!--改版 2018.8.5-->
                    <li class="timeClick"><a href="javascript:;">全部</a></li>
                    <li><a href="javascript:;">2018</a></li>
                    <li><a href="javascript:;">2017</a></li>
                    <li><a href="javascript:;">2016</a></li>
                    <!--<li><a href="javascript:;">2015</a></li>
                        <li><a href="javascript:;">2014</a></li>
                        <li><a href="javascript:;">2013</a></li>
                        <li><a href="javascript:;">2012</a></li>
                        <li><a href="javascript:;">2011</a></li>
                        <li><a href="javascript:;">2010</a></li>
                        <li><a href="javascript:;">2009</a></li>-->
                </ul>
            </div>
        </div>
        <!-- 内刊 -->
        <div class="magazineBox">
            <ul>
                <li @click="check" >
                    <!-- <router-link to="/LockPDF"> -->
                    <a href="javascript:;">
                        <div class="magazineText" style="background: rgb(166, 128, 69);">
                            <span>2018</span>
                            <p>年&nbsp;&nbsp; 第一刊</p>
                        </div>
                        <img :src="magazineImg" alt="">
                    </a>
                    <!-- </router-link> -->
                </li>
                <!-- <li>
                    <a href="javascript:;">
                        <div class="magazineText" style="background: rgb(166, 128, 69);">
                            <span>2018</span>
                            <p>年&nbsp;&nbsp; 第一刊</p>
                        </div>
                        <img src="../images/微信截图_20180702101852@2x.png" alt="">
                    </a>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script>

    import magazineImg from '../../../assets/images/微信截图_20180702101852@2x.png'

    export default {
        name:'magazine',
        data(){
            return{
                magazineImg,
                searchBarFixed:false
            }
        },
        methods:{
           check() {
                console.log(123)
                // let Urls = 'demo.pdf'  // 有效 服务器配置跨域处理
                window.open('../../../assets/static/pdf/web/viewer.html')
                // console.log(window)
                //window.location.href = '/static/pdf/web/viewer.html'
            },
            handleScroll () {
                // 浏览器滑动高度
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                // 操作需要固定栏的高度
                var offsetTop = document.querySelector('#searchBar').offsetTop
                // console.log(scrollTop,offsetTop)
                if (scrollTop > 430) {
                    this.searchBarFixed = true
                } else {
                    this.searchBarFixed = false
                }
            },
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },    
        components:{

        }
    }
</script>

<style>
.searchBarTop{
    position: fixed;
    top: 100px;
}
</style>

