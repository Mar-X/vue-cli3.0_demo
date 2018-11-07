<template>
   <!--中文版-导航栏 -->
    <nav class="navIndex">
        <div class="container-fluid">
            <!-- logo -->
            <div class="navbar-header">
                <a class="navbar-brand" href="#">
                    <img alt="Brand" src="../assets/logo.png">
                </a>
            </div>
            <!-- 导航 -->
            <!-- 此处有更改 -->
            <ul>
                <li><a href="javascript:;" :class="$route.path==='/home'? 'active' : ' '" @click="go({path:'/home'})">首页</a>
                    <div class="navBg"></div>
                </li>
                <li class="">
                    <a href="javascript:;" :class="$route.path==='/AboutSeaever'? 'active' : ' '" @click="go({path:'/AboutSeaever'})">关于我们</a>
                    <div class="navBg"></div>
                    <!-- 下拉列表 -->
                    <nav-bottom :title="secondList"><nav-bottom>
                    <!-- <div class="navBottom">
                        <ul>
                            <li class="secondarySelect"><a href="javascript:;">公司介绍</a></li>
                            <li><a href="javascript:;">发展历史</a></li>
                            <li><a href="javascript:;">企业资质</a></li>
                            <li><a href="javascript:;">企业荣誉</a></li>
                            <li><a href="javascript:;">客户名录</a></li>
                            <li><a href="javascript:;">合作伙伴</a></li>
                        </ul>
                    </div> -->
                </li>
                <li><a href="javascript:;" :class="$route.path==='/Product'? 'active' : ' '" @click="go({path:'/Product'})">企业文化</a>
                    <div class="navBg"></div>
                </li>
                <li><a href="javascript:;">产品与服务</a>
                    <div class="navBg"></div>
                </li>
                <li><a href="javascript:;">经典案例</a>
                    <div class="navBg"></div>
                </li>
                <li><a href="javascript:;">新闻媒体</a>
                    <div class="navBg"></div>
                </li>
                <li><a href="javascript:;">联系我们</a>
                    <div class="navBg"></div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

    import NavBottom from './NavBottom.vue'

    export default {
        name: 'HelloWorld',
        data:{
            secondList:['公司介绍','发展历史','企业资质','企业荣誉','客户名录','合作伙伴']
        },
        methods:{
            go(path){
                this.$router.push(path)
                }
        },
        components:{
            NavBottom
        }
    }
</script>

