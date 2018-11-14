<template>
   <!-- 员工风光 -->
    <div class="enterpriseScenery">
        <ul>
            <li>
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

    export default {
        name: 'EnterpriseScenery',
        data(){
            return{
                enterpriseImg
            }
        },
        components:{
            
        },
        methods:{

        }
    }

</script>
