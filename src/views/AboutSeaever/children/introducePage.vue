<template>
    <!--公司介绍-->
        <div class="introducePage">

           <!-- 中文版 -->
            <div class="introducePageBottom_zh_CN" style="display:block">
                <!-- 此处有更改 -->
                <!-- 介绍数据 -->
                <div class="introduceTopBox">
                    <!-- 改版  2018年7月30日 -->
                    <div class="introduceTop">
                        <ul>
                            <li>
                                <i></i>
                                <div class="introduceData">
                                    <p>2017<em>年</em></p>
                                    <span>公司成立</span>
                                </div>
                            </li>
                            <li>
                                <i></i>
                                <div class="introduceData">
                                    <p>2000<em>+</em></p>
                                    <span>全球游戏厅合作伙伴</span>
                                </div>
                            </li>
                            <li>
                                <i></i>
                                <div class="introduceData">
                                    <p>60%<em>+</em></p>
                                    <span>市场份额</span>
                                </div>
                            </li>
                            <li>
                                <i></i>
                                <div class="introduceData">
                                    <p>18<em>+</em></p>
                                    <span>全球拥有的分支机构</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- 介绍内容 -->
                <div class="introduceCenterBox">
                    <div class="introduceCenter">
                        <div class="introduceImg" :style="{backgroundImage:'url('+introduceImg+')'}"></div>
                        <div class="introduceText">
                            <h3>深圳市打豆豆有限公司</h3>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;打豆豆（ Shenzhen Ltd）成立 2007年，是一家知名国家高新技术企业，是全球领先的图书管理全套解决方案 应商，致力于推进智文化行业的智能化发展。现拥有“公共游戏厅”、“24y 时自助书馆“、“城市书房”、“大数据云平台”、°智能立体书库库五大图 书管理业务。海恒是科技、智能、教育、公益于一身的高科技智能企业
                                </br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;打豆豆已为全球2000余家游戏厅伙伴提供全方位解决方案，其中于包括中国国家游戏厅、首都游戏厅、上海游戏厅、广州游戏厅、深圳游戏厅替名游戏厅已 建立多年合作关系。在个公共游戏厅的智意文化设中，海恒占有近60％的市场份额。</br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;打豆豆在北京、上海、宁波等地设有分公司，在全国11个地区设有售后服务网点，全球拥有18个分支机构，遍布全球的海恒工程师，能够及时、高效的应客 户服务，无论客户规模大小，距离远近，海恒均能始终保持为你献上一流的服务。<br> &nbsp;&nbsp;&nbsp;&nbsp; “海纳百川，智激永恒”。海恒致力于为全球智文化的应用作出贡献敵这远大目标而不断努力，不断迫求创新。逐步将新型的智文化整体解决方案推向全世界，是海恒人不断进取的追求
                            </p>
                        </div>
                    </div>
                </div>

                <!-- 介绍版图 -->
                <div class="introduceBottomBox">
                    <!-- 改版  2018年7月30日 -->
                    <div class="introduceBottom" :style="{backgroundImage:'url('+introduceBottom+')'}"></div>
                </div>
            </div>
        </div>
</template>

<script>

// 静态图片资源
import introduceImg from '../../../assets/images/公司图片@2x.jpg';
import introduceBottom from '../../../assets/images/企业介绍.jpg';

export default {
  name: 'home',
   data(){
            return {
                 introduceImg,
                introduceBottom,
            }
    },
    components: {
    }
}
</script>
