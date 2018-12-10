<template>
    <!-- 招聘弹出窗 -->
    <div class="recruitPopup">
        <div class="recruitPopupBox">
            <!-- 关闭键 -->
            <img class="recruitPopupDel" @click="recruitPopupDel()" src="../assets/images/icon/关闭  X@2x.png" alt="">
            <div class="recruitPopupText">
                <h3>{{RecruitData.title}}</h3>
                <!-- 基本信息 -->
                <ul class="essentialInformation">
                    <li>职位类别：{{RecruitData.type}}</li>
                    <li>工作城市：{{RecruitData.coordinate}}</li>
                    <li>发布时间：{{RecruitData.date}}</li>
                </ul>
                <!-- 职位要求 -->
                <div class="jobRequirements">
                    <h4>职位要求：</h4>
                    <ul>
                        <li>1. 镜头相关的嵌入式开发，实现对焦电机、光圈电机和快门的控制和算法优化，以及与机身及配件的通信 </li>
                        <li>2. 镜头生产、调试、测试相关的设备开发</li>
                        <li>3. 其他光电类精密仪器、设备的开发</li>
                        <li>4. 协同公司内部的其他团队，推动不同应用方向的产品落地开发</li>

                    </ul>
                </div>
                <!-- 工作内容 -->
                <div class="jobContent">
                    <h4>工作内容：</h4>
                    <ul>
                        <li>1. 硕士研究生及以上学历，电子、计算机、软件、通信、自动化、精密仪器等相关专业</li>
                        <li>2. 理论功底好，熟悉控制算法，熟悉各种类型的电机</li>
                        <li>3. 了解并熟悉常用的硬件架构平台如ARM、 DSP、GPU、FPGA等 。有一定的系统或驱动开发经验。熟练C/C++编程</li>
                        <li>4. 掌握数字、模拟电路及数字信号处理等基本原理，有一定的数字电路设计基础</li>
                        <li>5. 有光电或光机背景者优先</li>
                        <li>6. 英文或日文流利者优先</li>
                    </ul>
                </div>
                <button @click="sendResume()"><a href="javascript:;">投递简历</a></button>
                <p class="recruitHint">请上传pdf、word、html格式的文件，大小不超过5M</p>
            </div>
            <!-- 添加内容 2018.7.24 -->
            <!-- 投递简历 -->
            <div class="submitResume" v-show="submitResumeType">
                <form action="url" method="post" enctype="multitype/form-data">
                    <!-- 改版 2018.8.6 -->
                    <p class="submitResume-1"><i>*</i>姓&nbsp;名<input type="text" placeholder="请输入姓名" /></p>
                    <p class="submitResume-1"><i>*</i>电&nbsp;话<input type="text" placeholder="请输入电话" /></p>
                    <p class="submitResume-1"><i>*</i>邮&nbsp;箱<input style="width: 266px;" type="text" placeholder="请输入邮箱" /></p>
                    <!-- 改版 2018.8.1 -->
                    <!-- 改版 2018.8.6 -->
                    <div class="fileBox">
                        <span><i>*</i>简&nbsp;历</span>
                        <div class="fileBox-1">
                            <!-- 改版 2018.8.5 -->
                            <p class="resumeBottom">
                                <i class="fileText">选择文件
                                    <input type="file" readonly="readonly" placeholder="海恒 企业介绍 2018 0717.docx">
                                </i>
                                <a href="javascript:;" class="resumeDel">
                                    <img src="../assets/images/icon/删除.png" alt="">
                                </a>
                            </p>
                            <p class="resumeBottom">
                                <i class="fileText">选择文件
                                    <input type="file" readonly="readonly" placeholder="海恒 企业介绍 2018 0717.docx">
                                </i>
                                <a href="javascript:;" class="resumeDel">
                                    <img src="../assets/images/icon/删除.png" alt="">
                                </a>
                            </p>
                            <p class="resumeBottom">
                                <i class="fileText">选择文件
                                    <input type="file" readonly="readonly" placeholder="海恒 企业介绍 2018 0717.docx">
                                </i>
                                <a href="javascript:;" class="resumeDel">
                                    <img src="../assets/images/icon/删除.png" alt="">
                                </a>
                            </p>
                            <p class="remark">注：“ * ”为必填项，文件大小不超过5M</p>
                            <p class="remark">上传不成功，请直接发邮件至：chenshuhao@seaeverit.com </p>
                        </div>
                        <a href="javascript:;" class="resumeAdd">
                        继续添加
                        </a>
                    </div>
                    <span class="textsubmit">
                        <div class="verificationCodeBox">
                            <i></i>验证码<input type="text" placeholder="验证码" />
                            <div class="verificationCode">
                                <img src="../assets/images/icon/验证码.png" alt="">
                            </div>
                        </div>
                        <input class="submit" type="submit" value="提交">
                    </span>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "recruitPopup",
  props: {
    RecruitData: {
      type: Object
    }
  },
  data() {
    return {
      submitResumeType: false
    };
  },
  methods: {
    recruitPopupDel() {
      this.submitResumeType = false;
      this.$store.commit("newcarouselPopupType", false);
    },
    // 点击平滑下拉框
    sendResume() {
      this.submitResumeType = true;
      this.$nextTick(function() {
        let div = document.querySelector(".recruitPopupBox");
        let step = div.scrollHeight / 50; //每步的距离
        let distance = 0;
        (function jump() {
          if (distance < div.scrollHeight) {
            distance += step;
            // console.log(distance);
            // console.log(step);
            div.scrollTop = distance;
            setTimeout(jump, 14);
          }
        })();
      });
    }
  }
};
</script>
