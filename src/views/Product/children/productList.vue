<template>
        <!-- 产品列表页 -->
        <div class="productPage">
            <div class="productPageBottom">
                <ul>
                    <li @click="productSelect(ProductList,product)" :urlId="product.urlID" v-for="product in ProductList.list">
                        <a href="javascript:;">
                            <img :src="product.url" alt="">
                            <p>{{product.title}}</p>
                        </a>
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
    
            }
        },
        updated() {
            // console.log(this.ProductList)
        },
        methods:{
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
            }
        },
        components: {}
    }
</script>
