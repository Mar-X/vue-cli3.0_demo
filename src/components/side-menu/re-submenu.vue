<template>
   <ul class="menu_ul">
     <div class="a-submenu-title" @click="submenuBoxClick">
        <slot name="title"></slot>
        <span class="submenu_icon" :style="{ transform: `rotateZ(${submenuBoxType ? 0 : 180}deg)` }">^</span>
     </div>
     <div v-show="submenuBoxType" class="a-submenu-box">
        <slot></slot>
     </div>
   </ul>
</template>

<script>
 export default {
   name:'ReSubmenu',
   data () {
     return {
       submenuBoxType:false
     }
   },
   components: {

   },
   methods:{
     submenuBoxClick(){
       this.submenuBoxType =! this.submenuBoxType
     }
   }
 }
</script>

<style lang="scss">
  .menu_ul{
    color:white;
    >div{
    background:violet
    }
    .a-submenu-title{
      position:relative;
      .submenu_icon{
        position: absolute;
        top:0;
        right:10px;
      }
    }
    .a-submenu-box{
      overflow: hidden;
      padding-left:20px;
    }
    
  }
 
</style>

