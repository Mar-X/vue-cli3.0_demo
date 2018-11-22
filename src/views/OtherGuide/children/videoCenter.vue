<template>

     <!--企业资质-->
    <div class="enterpriseCulturePage" style=" background: #eee">
          <!-- 企业风光 -->
        <div class="enterpriseScenery">
            <ul>
                <!-- 此处有更改 -->
                <li v-for="videoCenter in videoCenterList">
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
    </div>
</template>


<script>

    import enterpriseImg from '@/assets/images/矢量智能对象1@2x.png'

    export default {
        name:'videoCenter',
        data(){
            return{
                videoCenterList:[
                    {name:'RB电影',title:'你想看的小视频',images:enterpriseImg},
                    {name:'RB电影',title:'你想看的小视频',images:enterpriseImg},
                    {name:'RB电影',title:'你想看的小视频',images:enterpriseImg},
                    {name:'RB电影',title:'你想看的小视频',images:enterpriseImg},
                    {name:'RB电影',title:'你想看的小视频',images:enterpriseImg},
                    {name:'RB电影',title:'你想看的小视频',images:enterpriseImg},
                ]
            }
        },
        methods:{

        }
    }
</script>