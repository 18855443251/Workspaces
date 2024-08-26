<!--
 * @Author: your name
 * @Date: 2021-06-03 16:14:06
 * @LastEditTime: 2021-11-22 15:51:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \root\mgBank\src\views\workbench\corporateClients\outBusiness\busicInfo.vue
-->
<template>
  <div class="view">
    <navBar title="授信情况" />
    <tabBar :tabList="tabList" @tabBtn="tabBtn" />
    <div>
      <div class="deposit">存款</div>
      <div class="loan">贷款</div>
    </div>
    <!-- <pkResult v-else-if="changeIndex=='1'"></pkResult> -->
  </div>
</template>
<script>
import tabBar from "@/components/tabBar";
import navBar from "@/components/navBar";
import pkResult from "./components/pkResult";
import performance from "./components/performance";
export default {
  name: "VxMobile",
  components: {
    tabBar,
    navBar,
    pkResult,
    performance,
  },
  data() {
    return {
      changeIndex: "0",
      tabList: [
        {
          name: "我行授信",
        },
        {
          name: "他行授信",
        },
        // {
        //   name: "授信情况分析",
        // },
        // {
        //   name: "江苏",
        // },
        // {
        //   name: "南京",
        // },
        // {
        //   name: "北京",
        // },
      ],
      index: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.test);
    // 阻止页面滑动
    // document.querySelector(".view").addEventListener("touchmove", function (e) {
    //   e.preventDefault();
    // });
  },

  methods: {
    test() {
      console.log(document.documentElement.scrollTop);
    },
    // 导航栏切换
    // 切换标签回到原点
    tabBtn(index) {
      // this.changeIndex = index;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      if (index == 0) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      } else {
        document.body.scrollTop = document.documentElement.scrollTop = 600;
      }
    },
  },
};
</script>
<style scoped>
.line {
  width: 750px;
  height: 20px;
}
.deposit {
  width: 100px;
  height: 1200px;
  background: aqua;
  margin-top: 80px;
}
.loan {
  width: 100px;
  height: 1200px;
  background: rgb(114, 218, 119);
}
</style>