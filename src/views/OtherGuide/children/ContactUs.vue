<template>
    <div class="contactUsPage">
         <!--企业资质-->
        <div class="contactUsPageBottom">
                    <!-- 改版  2018.7.30 -->
            <ul>
                <li>
                    <div class="contactUsLeft">
                        <h2>深圳总部<i></i></h2>
                        <p class="companyName">深圳市呼死你有限公司</p>
                        <p class="companyNameEnglish">SHENZHEN</p>
                        <p class="contactAddress"><i></i>深圳市呼死你生态园2栋A座01层</p>
                        <p class="contactNumber"><i></i>(86)0755-12345678</p>
                        <!-- <p class="contactWeb"><i></i>http://www.seaeverit.com</p> -->
                        <p class="contactMailbox"><i></i>hsn@qq.com</p>
                        <span></span>
                    </div>
                    <div class="contactUsRight" id="allmap"></div>
                </li>
            </ul>
            <div class="contactUsBottomBar">
                <h2>市场合作<i></i></h2>
                <p class="contactNumber"><i></i>（86）0755-12345678转8088</p>
                <span></span>
            </div>
            <div class="contactUsBottomBar">
                <!--改版 2018.8.5-->
                <h2>廉政举报<i></i></h2>
                <p class="contactNumber"><i :style="{backgroundImage: 'url('+mailbox+')'}"></i>110@qq.com</p>
                <span></span>
            </div>
        </div>
    </div>
</template>


<script>

    import mailbox from '../../../assets/images/icon/邮箱.png';
    import BMap from 'BMap';
    import BMAPANCHORTOPLEFT from 'BMAP_ANCHOR_TOP_LEFT';
    import BMAPNAVIGATIONCONTROLLARGE from 'BMAP_NAVIGATION_CONTROL_LARGE';


    export default {
        name:'ContactUs',
        data(){
            return{
               mailbox
            }
        },
        mounted () {
            this.baiduMap()
        },
        methods:{
           // 返回
            goback () {
                this.$router.go(-1)
            },
            baiduMap () {
                var map = new BMap.Map('allmap')
                // 获取定位位置
                var point = new BMap.Point(111.742579, 40.818675)
                // 搜索位置
                map.centerAndZoom('深圳', 12)
                var marker = new BMap.Marker(point)  // 创建标注

                 // 滑轮控制地图放大缩小
                map.enableScrollWheelZoom(true)

                // 添加带有定位的导航控件
                var navigationControl = new BMap.NavigationControl({
                    // 靠左上角位置
                    anchor: BMAPANCHORTOPLEFT,
                    // LARGE类型
                    type: BMAPNAVIGATIONCONTROLLARGE,
                    // 启用显示定位
                    enableGeolocation: true
                });
                map.addControl(navigationControl);
                
                map.addOverlay(marker)              // 将标注添加到地图中
            }
        }
    }
</script>