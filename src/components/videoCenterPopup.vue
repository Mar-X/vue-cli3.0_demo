<template>
  <!-- 视频中心弹出窗 -->
    <div class="carouselPopup">
        <div class="carouselPopupBox">
            <!-- 关闭键 -->
            <img @click="del" src="../assets/images/icon/关闭  X@2x.png" alt="">
            <!-- 视频 -->
            <div class="video">
                <iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=a0720cqyz8d&tiny=0&auto=0" allowfullscreen></iframe>
            </div>
            <h4>海恒年会海恒年会海恒年会</h4>
            <p>海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会海恒年会</p>
        </div>
    </div>
</template>

<script>
     export default {
        name: 'carouselPopup',
        props:{
            // PopupType:{
            //     type:String,
            //     required:true
            // }
        },
        data(){
            return {
               PopupType:this.$store.state.carouselPopupType,

            }
        },
        methods:{
            del(){
                this.PopupType = false
                this.$store.commit('newcarouselPopupType',this.PopupType)
            }
        }
    }
</script>
