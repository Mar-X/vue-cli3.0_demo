<template>
  <div class="home">
    <!-- 头栏 -->
    <nav-index/>

     <div class="inside">
        
        <!-- 产品列表 -->
        <levelThreePage :list="listData"></levelThreePage>

        <!-- 产品详情 -->
        <div class="productDetails">
            <div class="productDetailsBottom">
                <div class="productDetailsBox1">
                    <!-- 轮播图 -->
                    <div class="carousel slide PopupImg">
                        
                    </div>
                    <!-- 详情页-中文版 -->
                    <div class="detailsContent" style="display:inline-block">
                        <h3>自助办证机</h3>
                        <h4>REG-F2</h4>
                        <i></i>
                        <p class="content">
                            自助办证机是通过SIP2或NCIP协议与图书馆ILS/LMS连接，通过对第二代身份证信息认证，由读者自助完成读者证办理、查询、扣缴、凭条打印等功能的设备。帮助图书馆在有限的人力资源条件下，减少人工办证的繁琐手续，简化办证流程，进而提升图书馆读者服务品质及降低图书馆从业人员劳动强度的一种自助设备。
                        </p>
                    </div>
                </div>
                <!-- <div class="productDetailsBox2" style="background-image: url('../images/001.jpg');"></div>
                <div class="productDetailsBox2" style="background-image: url('../images/002.jpg');"></div>
                <div class="productDetailsBox2" style="background-image: url('../images/003.jpg');"></div>
                <div class="productDetailsBox2" style="background-image: url('../images/004.jpg');"></div>
                <div class="productDetailsBox2" style="background-image: url('../images/005.jpg');"></div> -->
            </div>
        </div>
    </div>
  
    <!-- 底栏 -->
    <bottom-bar/>
  </div>
</template>

<script>
// 头栏尾栏
import navIndex from '@/components/navIndex.vue'
import bottomBar from '@/components/BottomBar.vue'


// 页面组件
import levelThreePage from '@/components/levelThreePage.vue'

export default {
  name: 'Product',
  data(){
    return{
      listData:[
            //   {name:'经营理念',path:'/EnterpriseCulture/OperationPrinciple'},
            //   {name:'企业内刊',path:'/EnterpriseCulture/Magazine'},
            //   {name:'员工风采',path:'/EnterpriseCulture/EnterpriseScenery'},
        ],
    }
  },
  components: {
    navIndex,
    bottomBar,
    levelThreePage
  },
  methods:{
      
  },
   computed : {
     
  }
}
</script>