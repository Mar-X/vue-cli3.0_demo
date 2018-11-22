<template>
  <div class="home">
    <!-- 头栏 -->
    <nav-index/>

     <div class="inside">

      <!-- 顶栏图片 -->
      <product-banner/>

      <levelThreePage :list="listData"></levelThreePage>


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
            {name:'图书馆RFID全套解决方案',path:'/Product/productList_1'},
            {name:'24小时自助图书馆',path:'/Product/productList_2'},
            {name:'城市书房',path:'/Product/productList_3'},
            {name:'大数据平台',path:'/Product/productList_4'},
            {name:'智能立体书库',path:'/Product/productList_5'},
        ],
        // 模拟从服务器获取的列表数据
        productList:[
          { name:'图书馆RFID全套解决方案',
            url:'productList_1',
            list:[
            {urlID:'1',title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
            {urlID:'2',title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
            {urlID:'3',title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
          ]},
          { name:'24小时自助图书馆',
            url:'productList_2',
            list:[
            {urlID:'1',title:'我是还是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714539348&di=1d2cc09ef0ed1061f0fb7245f4717590&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff703738da9773912f0c50a5af3198618367ae22e.jpg'},
            {urlID:'2',title:'我是还是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714539348&di=1d2cc09ef0ed1061f0fb7245f4717590&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff703738da9773912f0c50a5af3198618367ae22e.jpg'},
            {urlID:'3',title:'我是还是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714539348&di=1d2cc09ef0ed1061f0fb7245f4717590&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff703738da9773912f0c50a5af3198618367ae22e.jpg'},
          ]},
          { name:'城市书房',
            url:'productList_3',
            list:[
            {urlID:'1',title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
            {urlID:'2',title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
            {urlID:'3',title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
          ]},
          { name:'大数据平台',
            url:'productList_4',
            list:[
            {urlID:'1',title:'我是还是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714539348&di=1d2cc09ef0ed1061f0fb7245f4717590&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff703738da9773912f0c50a5af3198618367ae22e.jpg'},
            {urlID:'2',title:'我是还是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714539348&di=1d2cc09ef0ed1061f0fb7245f4717590&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff703738da9773912f0c50a5af3198618367ae22e.jpg'},
            {urlID:'3',title:'我是还是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714539348&di=1d2cc09ef0ed1061f0fb7245f4717590&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff703738da9773912f0c50a5af3198618367ae22e.jpg'},
          ]},
          { name:'智能立体书库',
            url:'productList_5',
            list:[
            {urlID:'1',title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
            {urlID:'2',title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
            {urlID:'3',title:'我是一个名字',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'},
          ]},
        ],
        // 找出需要渲染列表的数据
        newProductList:[]
      }
  },
  methods: {
      // 使用 axios获取数据
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
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "listDataType"
  },
  // 与watch同样适用的vue-router导航守卫观察路由变化调用方法
  // beforeRouteUpdate (to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   console.log(2)
  //   this.listDataType();
  // },
   beforeCreate: function () {
          console.group('beforeCreate 创建前状态===============》');
          console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
          console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
          console.log("%c%s", "color:red","message: " + this.message)  
  },
  created: function () {
      console.group('created 创建完毕状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el); //undefined
          console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
          console.log("%c%s", "color:red","message: " + this.message); //已被初始化
  },
  beforeMount: function () {
      console.group('beforeMount 挂载前状态===============》');
      console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
      console.log(this.$el);
          console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
          console.log("%c%s", "color:red","message: " + this.message); //已被初始化
  },
  mounted: function () {
      console.group('mounted 挂载结束状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
      console.log(this.$el);    
          console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
          console.log("%c%s", "color:red","message: " + this.message); //已被初始化

         this.listDataType(); 
         
  },
  beforeUpdate: function () {
      console.group('beforeUpdate 更新前状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);   
          console.log("%c%s", "color:red","data   : " + this.$data); 
          console.log("%c%s", "color:red","message: " + this.message); 
  },
  updated: function () {
      console.group('updated 更新完成状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el); 
          console.log("%c%s", "color:red","data   : " + this.$data); 
          console.log("%c%s", "color:red","message: " + this.message); 
  },
  beforeDestroy: function () {
      console.group('beforeDestroy 销毁前状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);    
          console.log("%c%s", "color:red","data   : " + this.$data); 
          console.log("%c%s", "color:red","message: " + this.message); 
  },
  destroyed: function () {
      console.group('destroyed 销毁完成状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);  
          console.log("%c%s", "color:red","data   : " + this.$data); 
          console.log("%c%s", "color:red","message: " + this.message)
  },
  components: {
    navIndex,
    bottomBar,
    ProductBanner,
    levelThreePage,
  }
}
</script>
