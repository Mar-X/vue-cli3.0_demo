<template>
        <!-- 产品列表页 -->
        <div class="productPage">
            <div class="productPageBottom">
                <ul>
                    <li :urlId="product.urlID" v-for="product in ProductList.list">
                        <a @click="productSelect(ProductList,product)" href="javascript:;">
                            <img class="productPage_img" :src="product.url" alt="">
                            <p>{{product.title}}</p>
                        </a>
                        <img @click="productListDel(product)" class="productList_Del" src="../../../assets/images/icon/icon-del.png" alt="">
                    </li>
                     <li class="productList_Add" @click="productListAdd">
                        <img src="../../../assets/images/icon/icon-add.png" alt="">
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>

    //关于经验理念
    export default {
        name: 'EnterpriseCulture',
        props:['ProductList'],
        data(){
            return {
                ProductList
            }
        },
        updated() {
            // console.log(this.ProductList)
        },
        methods:{
            // 点击打开新页面窗口跳转到产品详情页
            productSelect(item,Select){
               console.log(item)
               var path = item.url
               const { href } = this.$router.resolve({
                    path:`/Product/productDetails/${path}`,
                    query: {
                        title:Select.title,
                        urlID:Select.urlID
                    }
               })
               window.open(href, '_blank');
               //window.open(href, '_blank', 'toolbar=yes, width=1300, height=900')
            },
            // 添加数组
            productListAdd(){
                var urlID_add =  this.ProductList.list.length + 1;
                var add = {urlID:urlID_add,title:'我是新来的',url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542714507569&di=95c854c3c4cf5aed8b1d7917b3c287c5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1751f9c5f0223dd54564e74dc.jpg'};
                this.ProductList.list.push(add)
                
                console.log(urlID_add)
            },
            // 删除数组
            productListDel(dom){
                // console.log(dom)
                for(let value of this.ProductList.list.entries()){
                    if(value[1].urlID == dom.urlID)
                    this.ProductList.list.splice(value[0], 1)
                    // console.log(value[1].urlID)
                }
            }
        },
        components: {}
    }
</script>
