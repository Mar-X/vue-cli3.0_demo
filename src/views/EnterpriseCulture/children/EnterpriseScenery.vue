<template>
   <!-- 员工风光 -->
    <div class="enterpriseScenery">
        <ul>
            <li @click="Popup()">
                <a href="javascript:;">
                    <!--此处有更改-->
                    <div class="enterpriseImg">
                        <img :src="enterpriseImg" alt="">
                    </div>
                    <h4>海恒年会海恒年会海恒年会</h4>
                    <p>海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会</p>
                </a>
            </li>
            <!-- <li>
                <a href="javascript:;">
                    <div class="enterpriseImg">
                        <img src="../images/矢量智能对象1@2x.png" alt="">
                    </div>
                    <h4>海恒年会海恒年会海恒年会</h4>
                    <p>海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会</p>
                </a>
            </li> -->
          
            <!--此处有更改-->
            <!-- 更多 -->
            <div class="journalismMoreBox">
                <div id="pagination1" class="journalismMore"></div>
            </div>

            
        </ul>
        <!-- 弹出窗 -->
        <carouselPopup :swiperList="imgList" v-show="PopupType"></carouselPopup>
    </div>
</template>

<script>


    import enterpriseImg from '../../../assets/images/矢量智能对象1@2x.png'
    import carouselPopup from '@/components/carouselPopup.vue'

    // 引入弹出窗轮播图片
    import imgSwiper_1 from '../../../assets/images/QQ图片20180707165558.png'
    import imgSwiper_2 from '../../../assets/images/QQ图片20180707165836.png'
    import imgSwiper_3 from '../../../assets/images/QQ图片20180707165847.png'

    export default {
        name: 'EnterpriseScenery',
        data(){
            return{
                enterpriseImg,
                 imgList:[
                    {url:imgSwiper_1},
                    {url:imgSwiper_2},
                    {url:imgSwiper_3},
                ],
                PopupType:false,
            }
        },
        components:{
            carouselPopup
        },
        methods:{
            Popup(){
                this.PopupType =! this.PopupType;
            }
        }
    }

</script>
