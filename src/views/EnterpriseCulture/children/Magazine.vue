<template>

    <!-- 企业内刊 -->
    <div class="magazine">
        <!-- 时间 -->
        <!-- 改版 2018.8.8 -->
        <!-- magazineTimePullDown  下拉显示的状态-->
        <div class="magazineTime magazineTimePullDown">
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
                <li @click="check">
                    <a href="javascript:;">
                        <div class="magazineText" style="background: rgb(166, 128, 69);">
                            <span>2018</span>
                            <p>年&nbsp;&nbsp; 第一刊</p>
                        </div>
                        <img :src="magazineImg" alt="">
                    </a>
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
                magazineImg
            }
        },
        methods:{
           check() {
                console.log(123)
                let url = '/static/pdf/web/demo.pdf'
               window.open('http://localhost:8080/generic/web/viewer.html?file='+ url)
            },     
        }
    }
</script>
