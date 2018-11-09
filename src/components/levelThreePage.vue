<template>
    <!-- 三级页面 -->
   <div class="levelThreePage">
        <div class="container">
            <!--产品分类-中文版-->
            <ul class="introducePageClassify">
                <li>
                    <a href="javascript:;"><img class="indexImg" src="../assets/images/icon/home2@2x.png" alt=""></a>
                </li>
                <li>
                    <a href="javascript:;"><img class="arrows" src="../assets/images/icon/下一级箭头02@2x.png" alt="">关于海恒</a>
                </li>
                <!--选中introducePageSelection-->
                <li class="introducePageSelection">
                    <a href="javascript:;"><img class="arrows" src="../assets/images/icon/下一级箭头02@2x.png" alt="">公司介绍</a>
                </li>
            </ul>
            <!--类型分类-->
            <ul class="typeClassify" style="display:block">
                <!-- 选中typeClassifySelection -->
                <li class="typeClassifySelection"><a href="javascript:;">公司介绍</a></li>
                <li><a href="javascript:;">发展历程</a></li>
                <li><a href="javascript:;">企业资质</a></li>
                <li><a href="javascript:;">企业荣誉</a></li>
                <li><a href="javascript:;">客户名录</a></li>
                <li><a href="javascript:;">合作伙伴</a></li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name:'levelThreePage',
        props:{
            // title:{
            //     type:Array,
            //     required:true
            // }
        },
        data(){
            return{
                // navBottomList:this.title,
            }
        },
        components:{
            
        }
    }

</script>