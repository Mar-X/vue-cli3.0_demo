<template>
        <!-- 经营理念 -->
       <div class="enterpriseCulturePage">
            <div class="enterpriseCulturePageTop">
                <div class="container">
                    <!--产品分类-中文版-->
                    <ul class="enterpriseCulturePageClassify" style="display:block">
                        <li>
                            <a href="javascript:;"><img class="indexImg" :src="home2" alt=""></a>
                        </li>
                        <li>
                            <a href="javascript:;"><img class="arrows" :src="nextLevel" alt="">关于海恒</a>
                        </li>
                        <!--选中introducePageSelection-->
                        <li class="enterpriseCulturePageSelection">
                            <a href="javascript:;"><img class="arrows" :src="nextLevel" alt="">公司介绍</a>
                        </li>
                    </ul>
                
                    <!--类型分类-->
                    <ul class="typeClassify" style="display:block">
                        <!-- 选中typeClassifySelection -->
                        <li class="typeClassifySelection"><a href="javascript:;">经营理念</a></li>
                        <li><a href="javascript:;">海恒内刊</a></li>
                        <li><a href="javascript:;">员工风采</a></li>
                    </ul>
                </div>

            </div>
            <div class="operationPhilosophy">
                <ul>
                    <li>
                        <h2>核心理念<i></i></h2>
                        <p class="companyName">专业、专注、创新</p>
                    </li>
                    <li>
                        <h2>企业愿景<i></i></h2>
                        <p class="companyName">使命-助力知识与文化传播<br> 愿景-成为全球智慧文化领先的创新技术和服务提供商，让人们更容易获取知识与文化
                        </p>
                    </li>
                    <li>
                        <h2>经营理念<i></i></h2>
                        <p class="companyName">客户至上--我们以客户为中心、以需求为导向，致力于持续提升客户的满意<br> 专注创新--我们追求技术创新、产品创新、服务创新，力求极致
                            <br> 以人为本--我们尊重人才、培养人才、善用人才、人才与企业一起迈步前进
                            <br> 恪守诚信--我们诚实正直，信守承诺
                            <br>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>

    import home2 from '../../../assets/images/icon/home2@2x.png';
    import nextLevel from '../../../assets/images/icon/下一级箭头02@2x.png';
    //关于经验理念
    export default {
        name: 'EnterpriseCulture',
        data(){
            return {
                home2,
                nextLevel
            }
        },
        components: {}
    }
</script>
