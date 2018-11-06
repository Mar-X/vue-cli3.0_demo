<template>
      <div class="newsMedia">
            <div class="container-fluid">
                <div class="newsMediaTop" style="display:block">
                    <h3>新闻媒体<i></i></h3>
                    <a class="even">更多>></a>
                </div>
                <div class="newsMediaTop" style="display:none">
                    <h3>LATEST NEWS<i></i></h3>
                    <a class="even">MORE>></a>
                </div>
                <div class="newsMediaBottom">
                    <div class="newsMediaLeft">
                        <!-- 新闻轮播 -->
                        <div id="carousel-example-generic" class="carousel slide mediaBox" data-ride="carousel">
                            <!-- Wrapper for slides -->
                            <div class="carousel-inner" role="listbox">
                                <div class="item active">
                                    <a class="media-a" href="javascript:;" :style="{backgroundImage: 'url('+newsMedia+')'}"></a>
                                </div>
                                <!-- <div class="item">
                                    <a class="media-b" href="javascript:;" style=" background-image: url('../../../assets/images/_MG_9300@2x.png');"></a>
                                </div>
                                <div class="item">
                                    <a class="media-c" href="javascript:;" style=" background-image: url('../../../assets/images/_MG_9300@2x.png');"></a>
                                </div>
                                <div class="item">
                                    <a class="media-d" href="javascript:;" style=" background-image: url('../../../assets/images/_MG_9300@2x.png');"></a>
                                </div> -->
                            </div>
                        </div>

                    </div>
                    <div class="newsMediaRight">
                        <ul>
                            <li v-for="(Text,i) in newsMediaText" :key="i">
                                <a href="javascript;;">
                                    <div class="newsMediaDate">
                                        <h5>15</h5>
                                        <p>{{Text.date}}</p>
                                    </div>
                                    <div class="newsMediaText">
                                        <h4>{{Text.title}}</h4>
                                        <p>{{Text.content}}</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

    import newsMediaImg from '../../../assets/images/_MG_9300@2x.png';

    // 新闻媒体组件
    export default {
        name: 'newsMedia',
        data(){
            return{
               newsMedia:newsMediaImg,
               newsMediaText:[
                   {date:'2018.6.15',title:'FNAGHEK AHA E EEJJAJ AKE',content:'Continuous digitisation and budget cuts are bringing challenging times to libraries. A pity, because Nedap Library Solutions knows libraries with inspiring books, stunning films and moving music...'},
                   {date:'2018.6.15',title:'FNAGHEK AHA E EEJJAJ AKE',content:'Continuous digitisation and budget cuts are bringing challenging times to libraries. A pity, because Nedap Library Solutions knows libraries with inspiring books, stunning films and moving music...'},
                   {date:'2018.6.15',title:'FNAGHEK AHA E EEJJAJ AKE',content:'Continuous digitisation and budget cuts are bringing challenging times to libraries. A pity, because Nedap Library Solutions knows libraries with inspiring books, stunning films and moving music...'},
                   {date:'2018.6.15',title:'FNAGHEK AHA E EEJJAJ AKE',content:'Continuous digitisation and budget cuts are bringing challenging times to libraries. A pity, because Nedap Library Solutions knows libraries with inspiring books, stunning films and moving music...'},
               ]
            }
        },
        components: {}
    }
</script>
