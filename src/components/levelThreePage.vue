<template>
    <!-- 三级页面 -->
   <div class="levelThreePage">
        <div class="container">
            <!--产品分类-中文版-->
            <ul class="introducePageClassify">
                <li>
                   <router-link to="/"><img class="indexImg" src="../assets/images/icon/home2@2x.png" alt=""></router-link>
                </li>
                <li>
                    <a href="javascript:;"><img class="arrows" src="../assets/images/icon/下一级箭头02@2x.png" alt="">关于海恒</a>
                </li>
                <!--选中introducePageSelection-->
                <li class="introducePageSelection">
                    <router-link to="/AboutSeaever/introduce"><img class="arrows" src="../assets/images/icon/下一级箭头02@2x.png" alt="">公司介绍</router-link>
                </li>
            </ul>
            <!--类型分类-->
            <ul class="typeClassify">
                <li v-for="(ls,index) in list" @click="Selection(index)" :class="{'typeClassifySelection':index==SelectionType}"><router-link :to="ls.path">{{ls.name}}</router-link></li>
                <!-- 选中typeClassifySelection -->
                <!-- <li class="typeClassifySele    ction"><a href="javascript:;">公司介绍</a></li>
                <li><a href="javascript:;">发展历程</a></li>
                <li><a href="javascript:;">企业资质</a></li>
                <li><a href="javascript:;">企业荣誉</a></li>
                <li><a href="javascript:;">客户名录</a></li>
                <li><a href="javascript:;">合作伙伴</a></li> -->
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name:'levelThreePage',
        props:{
            list:{
                type:Array,
                required:true
            }
        },
        data(){
            return{
                //控制点亮状态 -1为默认不点亮
                SelectionType:'-1',
            }
        },
        components:{
            
        },
        methods:{
            Selection:function(index){
                // console.log(index)
                this.SelectionType = index;
            }
        }
    }

</script>