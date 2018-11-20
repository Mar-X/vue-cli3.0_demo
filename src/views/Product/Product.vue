<template>
  <div class="home">
    <!-- 头栏 -->
    <nav-index/>

     <div class="inside">

      <!-- 顶栏图片 -->
      <product-banner/>

      <levelThreePage :list="listData"></levelThreePage>

      {{listDataType}}

      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view :ProductList="newProductList"></router-view>

     </div>
    
    <!-- 底栏 -->
    <bottom-bar/>
  </div>
</template>

<script>
// 头栏尾栏
import navIndex from '@/components/navIndex.vue'
import bottomBar from '@/components/BottomBar.vue'
import ProductBanner from '@/components/ProductBanner.vue'
import levelThreePage from '@/components/levelThreePage.vue'



export default {
  name: 'Product',
  data(){
      return{
         listData:[
            {name:'图书馆RFID全套解决方案',path:'/Product/productList'},
            {name:'24小时自助图书馆',path:'/Product/productList'},
            {name:'城市书房',path:'/Product/productList'},
            {name:'大数据平台',path:'/Product/productList'},
            {name:'智能立体书库',path:'/Product/productList'},
        ],
        // 模拟从服务器获取的列表数据
        productList:[
          { name:'图书馆RFID全套解决方案',
            list:[
            {title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
            {title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
            {title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
          ]},
          { name:'24小时自助图书馆',
            list:[
            {title:'我是还是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714539348&di=1d2cc09ef0ed1061f0fb7245f4717590&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff703738da9773912f0c50a5af3198618367ae22e.jpg'},
            {title:'我是还是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714539348&di=1d2cc09ef0ed1061f0fb7245f4717590&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff703738da9773912f0c50a5af3198618367ae22e.jpg'},
            {title:'我是还是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714539348&di=1d2cc09ef0ed1061f0fb7245f4717590&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff703738da9773912f0c50a5af3198618367ae22e.jpg'},
          ]},
          { name:'城市书房',
            list:[
            {title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
            {title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
            {title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
          ]},
          { name:'大数据平台',
            list:[
            {title:'我是还是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714539348&di=1d2cc09ef0ed1061f0fb7245f4717590&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff703738da9773912f0c50a5af3198618367ae22e.jpg'},
            {title:'我是还是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714539348&di=1d2cc09ef0ed1061f0fb7245f4717590&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff703738da9773912f0c50a5af3198618367ae22e.jpg'},
            {title:'我是还是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714539348&di=1d2cc09ef0ed1061f0fb7245f4717590&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff703738da9773912f0c50a5af3198618367ae22e.jpg'},
          ]},
          { name:'智能立体书库',
            list:[
            {title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
            {title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
            {title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
          ]},
        ],
        // 找出需要的数据渲染列表
        newProductList:[]
      }
  },
  computed:{
    listDataType(){
      // console.log(this.$store.state.secondNav)
      this.productList.map((v,i)=>{
        if(v.name==this.$store.state.secondNav.name){
          this.newProductList = v
          // console.log(this.newProductList)
        }
      })
    }
  },
  // watch: {
  //   listDataTypes() {
  //         console.log(this.$store.state.secondNav)
  //         return this.$store.state.carouselPopupType
  //   }
  // },
  components: {
    navIndex,
    bottomBar,
    ProductBanner,
    levelThreePage,
  }
}
</script>
