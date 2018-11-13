<template>
    <!-- 下拉列表 -->
    <div class="navBottom">
        <ul>
             <li v-for="(navBottom,i) in title" :key="i" @click="go(navBottom)"><a href="javascript:;">{{navBottom.name}}</a></li>
        </ul>
        <!-- <ul>
            <li class="secondarySelect"><a href="javascript:;">公司介绍</a></li>
            <li><a href="javascript:;">发展历史</a></li>
            <li><a href="javascript:;">企业资质</a></li>
            <li><a href="javascript:;">企业荣誉</a></li>
            <li><a href="javascript:;">客户名录</a></li>
            <li><a href="javascript:;">合作伙伴</a></li> 
         </ul> -->
    </div>
</template>

<script>
    export default {
        name:'navBottom',
        props:{
            title:{
                type:Array,
                required:true
            },
            firstNavDatas:{
                type:Object,
                redirect: true
            }
        },
        data(){ 
            return{

            }
        },
        methods:{
            go(enter){
                // console.log(enter.path)
                this.$router.push(enter.path);

                // 第一导航状态
                this.$store.commit('newFirstNav',this.firstNavDatas)
                // 第二导航状态
                this.$store.commit('newsecondNav',enter)
            },
        },
        components:{
            
        }
    }

</script>
