<template>
     <!--企业资质-->
    <div class="enterpriseCulturePage" style=" background: #eee">
          <!-- 企业风光 -->
        <div class="enterpriseScenery">
            <ul>
                <!-- 此处有更改 -->
                <li v-for="videoCenter in videoCenterList" @click="VideoCenterUp(videoCenter)">
                    <a href="javascript:;">
                        <div class="enterpriseImg">
                            <img :src="videoCenter.images" alt="">
                        </div>
                        <h4>{{videoCenter.name}}</h4>
                        <p>{{videoCenter.title}}</p>
                    </a>
                </li>
                
                <!--此处有更改-->
                <!-- 更多 -->
                <div class="journalismMoreBox">
                    <div id="pagination2" class="journalismMore"></div>
                </div>
            </ul>
        </div>
         <!-- 视频中心弹出窗 -->
        <div class="carouselPopup" style="display: none" v-show="VideoCenterUpType">
            <div class="carouselPopupBox">
                <!-- 关闭键 -->
                <img @click="VideoCenterDel" src="../../../assets/images/icon/关闭  X@2x.png" alt="">
                <!-- 视频 -->
                <div class="video">
                    <iframe frameborder="0" width="640" height="498" v-bind:src="VideoUrl" allowfullscreen></iframe>
                </div>
                <h4>海恒年会海恒年会海恒年会</h4>
                <p>海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会</p>
            </div>
        </div>
    </div>
</template>


<script>

    import enterpriseImg from '@/assets/images/矢量智能对象1@2x.png'

    export default {
        name:'videoCenter',
        data(){
            return{
                VideoCenterUpType:false,
                VideoUrl:'',
                videoCenterList:[
                    {name:'RB电影',title:'你想看的小视频',images:enterpriseImg,url:'https://v.qq.com/txp/iframe/player.html?vid=h0762k5n5ao'},
                    {name:'RB电影',title:'你想看的小视频',images:enterpriseImg,url:'https://v.qq.com/iframe/player.html?vid=a0720cqyz8d&tiny=0&auto=0'},
                    {name:'RB电影',title:'你想看的小视频',images:enterpriseImg,url:'https://v.qq.com/txp/iframe/player.html?vid=h0762k5n5ao'},
                    {name:'RB电影',title:'你想看的小视频',images:enterpriseImg,url:'https://v.qq.com/iframe/player.html?vid=a0720cqyz8d&tiny=0&auto=0'},
                    {name:'RB电影',title:'你想看的小视频',images:enterpriseImg,url:'https://v.qq.com/txp/iframe/player.html?vid=h0762k5n5ao'},
                    {name:'RB电影',title:'你想看的小视频',images:enterpriseImg,url:'https://v.qq.com/iframe/player.html?vid=a0720cqyz8d&tiny=0&auto=0'},
                ]
            }
        },
        methods:{
            VideoCenterUp(data){
                // console.log(data)
                this.VideoUrl = data.url
                this.VideoCenterUpType = true 
            },
            // 关闭弹窗
            VideoCenterDel(){
                // console.log(this.VideoCenterUpType)
                this.VideoCenterUpType = false
            }
        }
    }
</script>