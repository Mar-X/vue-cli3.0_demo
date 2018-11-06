<template>
      <div class="classic">
            <div class="container-fluid">
                <div class="classicTop" style="display:block">
                    <h3>经典案例<i></i></h3>
                    <a class="even">更多>></a>
                </div>
                <div class="classicTop classicTop_en" style="display:none">
                    <h3>AWESOME LIBRARIES<i></i></h3>
                    <a class="even">MORE>></a>
                </div>
                <div class="classicBottom">
                    <ul>
                        <li v-for="(classic,i) in classicImg" :key="i">
                            <a href="javascript:;">
                                <!-- 替换图片在这里 -->
                                <div class="classicImg" :style="{backgroundImage:'url('+classic.bg+')'}"></div>
                                <p>{{classic.name}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>

    import classicImg from '@/assets/images/58ee3d6d55fbb2fb9d4f23a9454a20a44623dc21@2x.png';
    //经典案例组件
    export default {
        name: 'classic',
        data(){
            return {
                classicImg:[
                    {bg:classicImg,name:'首都图书馆'},
                    {bg:classicImg,name:'首都图书馆'},
                    {bg:classicImg,name:'首都图书馆'},
                    {bg:classicImg,name:'首都图书馆'},
                    {bg:classicImg,name:'首都图书馆'},
                    {bg:classicImg,name:'首都图书馆'},
                    {bg:classicImg,name:'首都图书馆'},
                    {bg:classicImg,name:'首都图书馆'}
                ]    
            }
        },
        components: {}
    }

</script>
