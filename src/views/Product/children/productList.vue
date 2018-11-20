<template>
        <!-- 产品列表页 -->
        <div class="productPage">
            <div class="productPageBottom">
                <ul>
                    <li v-for="product in ProductList.list">
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
        components: {}
    }
</script>
