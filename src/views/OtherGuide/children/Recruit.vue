<template>
    <div class="recruitPage">
        <div class="recruitPageBottom">
            <table>
                <thead>
                    <tr>
                        <th>职位名称</th>
                        <th>职位类别</th>
                        <th>工作城市</th>
                        <th>发布时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(Recruit,index) in RecruitList" :key="index">
                        <td>{{Recruit.title}}</td>
                        <td>{{Recruit.type}}</td>
                        <td>{{Recruit.coordinate}}</td>
                        <td>{{Recruit.date}}</td>
                        <td><a @click="recruitPopup(Recruit)" href="javascript:;">查看详情<i></i></a></td>
                    </tr>
                </tbody>
            </table>
            <!-- 分页插件 -->
            <v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
        </div>
    </div>
</template>


<script>
// 引入分页插件
import pagination from "@/components/pagination";

export default {
  name: "Recruit",
  data() {
    return {
      RecruitList: [
        { title: "硬件", type: "研发类", coordinate: "西安", date: "2018-07-20" },
        { title: "web", type: "研发类", coordinate: "深圳", date: "2018-07-20" },
        { title: "Java", type: "研发类", coordinate: "西安", date: "2018-07-20" },
        { title: "Node", type: "研发类", coordinate: "深圳", date: "2018-07-20" },
        { title: "H5", type: "研发类", coordinate: "西安", date: "2018-07-20" },
        { title: "PHP", type: "研发类", coordinate: "深圳", date: "2018-07-20" },
        { title: "Ui", type: "产品", coordinate: "西安", date: "2018-07-20" },
        { title: "产品经理", type: "产品", coordinate: "深圳", date: "2018-07-20" },
        { title: "美工", type: "产品", coordinate: "西安", date: "2018-07-20" }
      ],
      total: 150, // 记录总条数
      display: 10, // 每页显示条数
      current: 1 // 当前的页数
      // PopupType: this.$store.state.carouselPopupType
    };
  },
  components: {
    "v-pagination": pagination
  },
  methods: {
    recruitPopup(dom) {
      //   console.log(dom);
      this.$emit("recruitPopData", dom);
      this.$store.commit("newcarouselPopupType", true);
    },
    // 分页插件管理
    pagechange: function(currentPage) {
      // console.log(currentPage);
      // ajax请求, 向后台发送 currentPage, 来获取对应的数据

      function randomsort(a, b) {
        return Math.random() > 0.5 ? -1 : 1; //通过随机产生0到1的数，然后判断是否大于0.5从而影响排序，产生随机性的效果。
      }
      let arr = this.RecruitList;
      arr.sort(randomsort);
      // console.log(randomsort)
    }
  }
};
</script>