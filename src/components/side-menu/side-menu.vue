<template>
 <div class="a-menu">
     <slot></slot>
 </div>
</template>

<script>

 export default {
   name:'sidemenu',
   data () {
     return {

     }
   },
   props:{
       showtyle:{
           type:Boolean,
           default:false
       }
   },
   components: {

   }
 }
</script>


<style lang="scss">
  .a-menu {
    width: 10vw;
    height: calc(100vh - 100px);
    background:#666;
    position: fixed;
    top: 99px;
    left: 0;
    z-index: 100;
  }
</style>
