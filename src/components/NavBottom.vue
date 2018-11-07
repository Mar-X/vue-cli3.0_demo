<template>
    <!-- 下拉列表 -->
    <div class="navBottom">
        <ul v-for="(navBottom,i) in navBottomList" :key="i">
             <li><a href="javascript:;">navBottom</a></li>
            <!-- <li class="secondarySelect"><a href="javascript:;">公司介绍</a></li>
            <li><a href="javascript:;">发展历史</a></li>
            <li><a href="javascript:;">企业资质</a></li>
            <li><a href="javascript:;">企业荣誉</a></li>
            <li><a href="javascript:;">客户名录</a></li>
            <li><a href="javascript:;">合作伙伴</a></li> -->
        </ul>
    </div>
</template>

<script>
    export default {
        name:'navBottom',
        props:['title'],
        data:{
            navBottomList:this.title,
        },
        components:{

        }     
    }

</script>
