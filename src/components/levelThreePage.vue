<template>
    <!-- 三级页面 -->
   <div class="levelThreePage">
        <div class="container">
            <!--产品分类-->
            <ul class="introducePageClassify">
                <li>
                   <router-link to="/"><img class="indexImg" src="../assets/images/icon/home2@2x.png" alt=""></router-link>
                </li>
                <li>
                    <router-link :to="firstNav.path"><img class="arrows" src="../assets/images/icon/下一级箭头02@2x.png" alt="">{{firstNav.name}}</router-link>
                </li>
                <!--选中introducePageSelection-->
                <li class="introducePageSelection">
                    <router-link :to="secondNav.path"><img class="arrows" src="../assets/images/icon/下一级箭头02@2x.png" alt="">{{secondNav.name}}</router-link>
                </li>
            </ul>
            <!--类型分类-->
            <ul class="typeClassify">
                <li v-for="(ls,index) in list" @click="Selection(ls)" :class="{'typeClassifySelection':ls.name == secondNav.name}"><router-link :to="ls.path">{{ls.name}}</router-link></li>
                
                <!-- :class="{'typeClassifySelection':index==SelectionType} -->
                <!-- 问题：当点击标签高亮显示；
                     利用数组循环中的index索引，当点击事件传递过去index，
                     让事件给一个变量为SelectionType:'-1'赋值，（当-1时
                     列表都不显示高亮），当赋值为索引时，利用列表中当前元素
                     索引与变量判断，如果相同就高亮显示 -->

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
                firstNavs:{},
                secondNavs:{},
            }
        },
        components:{
            
        },
        // 计算属性
        computed: {
            // 问题：为了解决浏览器刷新后vuex状态没有保存的问题；
            // 解决方法：在每次改变vuex中的状态的时候，利用window.localStorage储存数据给浏览器，
            //          因为是对象形式，所以每次vuex的state的属性改变的时候，储存前要把对象转化
            //          为字符串储存(JSON.stringify())，然后在使用取值是转化字符串为对象
            //          （JSON.parse()），并在计算属性中做判断，当vuex的state的属性为空值的时候
            //          给vuex附localStorage储存的值。

            firstNav () {
                let firstNavStorage = window.localStorage.getItem('firstNavStorage')
                let firstNavStorageObj = JSON.parse(window.localStorage.getItem('firstNavStorage'));
                // Object.keys()判断对象为空值：是ES6的新方法, 返回值也是对象中属性名组成的数组
                let firstNav = Object.keys(this.$store.state.firstNav);

                if(firstNav.length == 0&&firstNavStorageObj){
                    this.$store.commit('newFirstNav',firstNavStorageObj)//同步操作
                }
                return this.$store.state.firstNav
            },
            secondNav () {
                let secondNavStorage = window.localStorage.getItem('secondNavStorage')
                let secondNavStorageObj = JSON.parse(window.localStorage.getItem('secondNavStorage'));
                // Object.keys()判断对象为空值：是ES6的新方法, 返回值也是对象中属性名组成的数组
                let secondNav = Object.keys(this.$store.state.secondNav);

                if(secondNav.length == 0&&secondNavStorageObj){
                    this.$store.commit('newsecondNav',secondNavStorageObj)//同步操作
                }

                return this.$store.state.secondNav
            }
        },
        created:function(){
              
        },
        methods:{
            Selection:function(enter){
                // console.log(enter)
                // 第二导航状态
                this.$store.commit('newsecondNav',enter)
            }
        }
    }

</script>