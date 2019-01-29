<template>
     <re-submenu>
        <div slot="title">{{preat.title}}</div>
        <template v-for="(item,i) in preat.children">
            <re-drop-down v-show="!item.children" :key="`menu_${i}`">{{item.title}}</re-drop-down>
            <submenu v-show="item.children" :key="`menu_${index}_${i}`" :preat="item"></submenu>
        </template> 
     </re-submenu>
</template>

<script>

import MySideMenu from '@/components/side-menu'
const { ReDropDown, ReSubmenu } = MySideMenu

 export default {
   name:'submenu',
   data () {
     return {

     }
   },
   components: {
       ReDropDown,
       ReSubmenu
   },
   props:{
       preat:{
           type:Object,
           default:() => ({})
       },
       index: Number
   }
 }
</script>

<style>

 
</style>
