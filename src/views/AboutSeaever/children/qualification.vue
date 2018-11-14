<template>
  <!-- 企业资质 -->
  <div class="qualificationPageBottom">
        <ul>
             <viewer :images="qualificationList">
                <li v-for="qualification in qualificationList">
                    <a href="javascript:;">
                        <div class="qualificationImg">
                            <img class="pimg" :srcMax="qualification.imgMax" :src="qualification.images" alt="">
                            <span></span>
                        </div>
                        <p>{{qualification.text}}</p>
                    </a>
                </li>
            </viewer>
            
            <!-- <li>
                <a href="javascript:;">
                    <div class="qualificationImg">
                        <img class="pimg" src-max="../images/十大最有型效力创新奖-智能归书桌.jpg" src="../images/图2@2x.png" alt="">
                        <span></span>
                    </div>
                    <p>计算机信息系统集成企业资质证书</p>
                </a>
            </li> -->

        </ul>
       
  </div>
</template>

<script>
import pimg from '../../../assets/images/图1@2x.png'
import pimgMax from '../../../assets/images/十大最有型效力创新奖-智能归书桌.jpg'


    export default {
        name:'qualification',
        data(){
            return{
                qualificationList:[
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                    {text:'计算机信息系统集成企业资质证书',images:pimg,imgMax:pimgMax},
                ],
            }
        },
        methods:{
           
        }
    }
</script>
