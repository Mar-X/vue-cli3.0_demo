<template>
      <div class="product">
            <div class="container-fluid">
                <!-- 中文版 -->
                <div class="productTop" style="display:block">
                    <!--改版 2018.8.5-->
                    <h3>新品放松<i></i></h3>
                    <a class="even">更多>></a>
                </div>
                <!-- 英文版 -->
                <div class="productTop productTop_en" style="display:none">
                    <h3>FEATURED PRODUCT<i></i></h3>
                    <a class="even">MORE>></a>
                </div>

                <div class="productBottom">
                    <ul>
                        <li v-for="(product,i) in productData" :key="i">
                            <a href="javascript:;">
                                <img :src="product.url" alt="">
                                <p>{{product.text}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>

    import productImg from '../../../assets/images/产品矩形1-白@2x.png';

    // 产品页组件
    export default {
        name: 'product',
        data(){
            return {
                productData:[
                    {text:'REG-F2 自助办证机',url:productImg},
                    {text:'REG-F2 自助办证机',url:productImg},
                    {text:'REG-F2 自助办证机',url:productImg},
                    {text:'REG-F2 自助办证机',url:productImg},
                ]
            }
        },
        components: {}
    }
</script>
