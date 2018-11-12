<template>


    <!--公司介绍-->
    <div class="clientListPage">
        <div class="historyDevelopment" :style="{backgroundImage: 'url('+historyDevelopment+')'}"></div>
      </div>
    </div>

</template>

<script>

// 静态图片资源
import historyDevelopment from '../../../assets/images/发展历程en.png';

export default {
  name: 'home',
   data(){
            return {
                historyDevelopment
            }
    },
    components: {
    }
}
</script>

