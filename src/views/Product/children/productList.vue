<template>
        <!-- 产品列表页 -->
        <div class="productPage">
            <div class="productPageBottom">
                <ul>
                    <li @click="productSelect" :urlId="product.urlID" v-for="product in ProductList.list">
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
            productSelect(){
               console.log(123)
               const { href } = this.$router.resolve({
                    name: "产品详情",
                    params: {
                       location: Location,
                       route: Route,
                       href: string
                    }
               })
                console.log(href)

                // window.open(href, '_blank');
            //    window.open(href, '_blank', 'toolbar=yes, width=1300, height=900')
            }
        },
        components: {}
    }
</script>
