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
            <ul>
                <li v-for="(secondList,index) in secondLists" :key="index" @mouseenter="secondList.type =! secondList.type" @mouseleave="secondList.type = false">
                    <!-- @mouseenter="firstNavGo(secondList)" -->
                    <a href="javascript:;" @click="go(secondList)" @mouseenter="firstNavGo(secondList)">{{secondList.name}}</a>
                    <div class="navBg"></div>
                      <!-- 下拉列表 -->
                      <!-- :firstNavDatas="firstNavData" -->
                    <nav-bottom v-show="secondList.type && secondList.list.length!= 0" :title="secondList.list" :firstNavDatas="firstNavData"></nav-bottom>
                </li>
                <!-- <li>
                    <a href="javascript:;" :class="$route.path==='/AboutSeaever'? 'active' : ' '" @click="go({path:'/AboutSeaever'})">关于我们</a>
                    <div class="navBg"></div>
                    <nav-bottom :title="secondList[0]"></nav-bottom>
                    <div class="navBottom">
                        <ul>
                            <li class="secondarySelect"><a href="javascript:;">公司介绍</a></li>
                            <li><a href="javascript:;">发展历史</a></li>
                            <li><a href="javascript:;">企业资质</a></li>
                            <li><a href="javascript:;">企业荣誉</a></li>
                            <li><a href="javascript:;">客户名录</a></li>
                            <li><a href="javascript:;">合作伙伴</a></li>
                        </ul>
                    </div>
                </li>
                <li @mouseenter="enter"><a href="javascript:;" :class="$route.path==='/Product'? 'active' : ' '" @click="go({path:'/Product'})">企业文化</a>
                    <div class="navBg"></div>
                    <nav-bottom></nav-bottom>
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
                </li> -->
            </ul>
        </div>
    </nav>
</template>

<script>

    import NavBottom from '@/components/NavBottom.vue'

    export default {
        name: 'navIndex',
        data(){
            return{
                secondLists:[
                    {
                        name:'首页',
                        path:'/',
                        type:false,
                        list:[]
                    },
                    {
                        name:'关于我们',
                        path:'/AboutSeaever',
                        type:false,
                        list:[
                            {name:'公司介绍',path:'/AboutSeaever/introduce'},
                            {name:'发展历史',path:'/AboutSeaever/historyDevelopment'},
                            {name:'企业资质',path:'/AboutSeaever/qualification'},
                            // {name:'客户名录',path:'/AboutSeaever/clientList'},
                            // {name:'合作伙伴',path:'/AboutSeaever/partner'}
                        ],
                    },
                    {
                        name:'企业文化',
                        path:'/EnterpriseCulture',
                        type:false,
                        list:[
                             {name:'经营理念',path:'/EnterpriseCulture/OperationPrinciple'},
                             {name:'企业内刊',path:'/EnterpriseCulture/Magazine'},
                             {name:'员工风采',path:'/EnterpriseCulture/EnterpriseScenery'},
                        ],
                    },
                    {
                        name:'产品与服务',
                        path:'/Product',
                        type:false,
                        list:[
                             {name:'图书馆RFID全套解决方案',path:'/Product/productList_1'},
                             {name:'24小时自助图书馆',path:'/Product/productList_2'},
                             {name:'城市书房',path:'/Product/productList_3'},
                             {name:'大数据平台',path:'/Product/productList_4'},
                             {name:'智能立体书库',path:'/Product/productList_5'},
                            ]
                    },
                    {   
                        name:'其他内容',
                        path:'/OtherGuide',
                        type:false,
                        list:[ 
                            {name:'视频中心',path:'/OtherGuide/VideoCenter'},
                            {name:'联络我们',path:'/OtherGuide/ContactUs'},
                            {name:'人才招聘',path:'/OtherGuide/Recruit'}
                        ],
                    },
                ],
                firstNavData:{}
            }
        },
        methods:{
            go(enter){
                this.$router.push(enter.path);
                // console.log(enter.list[0])
                // 第一导航的状态
                this.$store.commit('newFirstNav',enter)
                // 第二导航状态
                this.$store.commit('newsecondNav',enter.list[0])
            },
            firstNavGo(enter){
                this.firstNavData = enter;    
            }
        },
        components:{
            NavBottom
        }
    }
</script>

