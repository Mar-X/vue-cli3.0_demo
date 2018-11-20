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
    </div>
</template>

<script>


    import enterpriseImg from '../../../assets/images/矢量智能对象1@2x.png'
    import carouselPopup from '@/components/carouselPopup.vue'

    export default {
        name: 'EnterpriseScenery',
        data(){
            return{
                enterpriseImg,
                 imgList:[
                    {url:'http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521787689&di=93244aa612844df03a1348591759ee2f&imgtype=jpg&er=1&src=http%3A%2F%2Fs13.sinaimg.cn%2Flarge%2F00192M1ggy6QbpV5eXi9c%26amp%3B690'},
                    {url:'https://image-static.segmentfault.com/258/913/258913899-59eed23e77796_articlex'},
                    {url:'http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521787689&di=93244aa612844df03a1348591759ee2f&imgtype=jpg&er=1&src=http%3A%2F%2Fs13.sinaimg.cn%2Flarge%2F00192M1ggy6QbpV5eXi9c%26amp%3B690'},
                ],
                PopupType:this.$store.state.carouselPopupType,
            }
        },
        //  beforeMount(){
        //     console.log('====',this.PopupType);
        // },
        components:{
            carouselPopup
        },
        methods:{
            Popup(){
                this.PopupType = true
                this.$store.commit('newcarouselPopupType',this.PopupType)
                this.$emit('imgListData',this.imgList)
            }
            // carouselPopupType(msg){
            //     // console.log(msg)                
            //     this.PopupType = msg
            // }
        },
        computed : {
            PopupTypemonitor() {
                return this.$store.state.carouselPopupType
            }    
        }
    }

</script>
