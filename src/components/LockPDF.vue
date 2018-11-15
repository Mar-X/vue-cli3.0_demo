<template>
  <div class="pdf_view">
      <iframe :src="src" frameborder="0"></iframe>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                src:'../../static/pdf/web/viewer.html?file=demo.pdf'
            }
        },
        activated(){
            this.src="/static/pdf/web/viewer.html?file=demo.pdf"
        }
    }
</script>

<style>
    .pdf_view iframe{
        position: fixed;
        width: 100%;
        height: 100%;
        top:0;
        bottom:0;
        left: 0;
        right:0;
        z-index: 9999;
        overflow: hidden;
    }
</style>

