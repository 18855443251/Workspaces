<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 09:57:14
 * @LastEditors: Please set LastEditors
 * @Description: 分页
 * @FilePath: \vueDemo\src\views\arr\hebingArr.vue
-->
<template>
<!-- 前端分页 -->
  <div class="currentAccount">
    <div v-if="tableList.length > 0" ref="myScroller">
      <md-scroll-view
        ref="scrollView"
        :scrolling-x="false"
        :manual-init="true"
        :auto-reflow="true"
        @endReached="endReached"
        :is-prevent="false"
      >
        <div
          v-for="(item, index) in tableList"
          :key="index"
          class="content-left1"
        >
          <div>{{ item.yuqiDate }}</div>
        </div>
        <md-scroll-view-more
          slot="more"
          :is-finished="isFinished"
        ></md-scroll-view-more>
      </md-scroll-view>
    </div>
  </div>
</template>
<script>
import { ScrollView, ScrollViewMore } from "mand-mobile";
export default {
  name: "claneCache",
  components: {
    [ScrollView.name]: ScrollView,
    [ScrollViewMore.name]: ScrollViewMore,
  },
  data() {
    return {
      year: "",
      tableList: [],
      testList: [
        { yuqiDate: "坚决反对飓风等级登记0" },
        { yuqiDate: "坚决反对飓风等级登记1" },
        { yuqiDate: "坚决反对飓风等级登记2" },
        { yuqiDate: "坚决反对飓风等级登记3" },
        { yuqiDate: "坚决反对飓风等级登记4" },
        { yuqiDate: "坚决反对飓风等级登记5" },
        { yuqiDate: "坚决反对飓风等级登记6" },
        { yuqiDate: "坚决反对飓风等级登记7" },
        { yuqiDate: "坚决反对飓风等级登记8" },
        { yuqiDate: "坚决反对飓风等级登记9" },
        { yuqiDate: "坚决反对飓风等级登记10" },
        { yuqiDate: "坚决反对飓风等级登记11" },
        { yuqiDate: "坚决反对飓风等级登记12" },
        { yuqiDate: "坚决反对飓风等级登记13" },
        { yuqiDate: "坚决反对飓风等级登记14" },
        { yuqiDate: "坚决反对飓风等级登记15" },
        { yuqiDate: "坚决反对飓风等级登记16" },
        { yuqiDate: "坚决反对飓风等级登记17" },
        { yuqiDate: "坚决反对飓风等级登记18" },
        { yuqiDate: "坚决反对飓风等级登记19" },
        { yuqiDate: "坚决反对飓风等级登记20" },
        { yuqiDate: "坚决反对飓风等级登记21" },
        { yuqiDate: "坚决反对飓风等级登记22" },
        { yuqiDate: "坚决反对飓风等级登记23" },
        { yuqiDate: "坚决反对飓风等级登记24" },
        { yuqiDate: "坚决反对飓风等级登记25" },
      ],
      isFinished: false,
      //默认从第一页开始
      currentPage: 1,
      pageSize: 2,//每页页数
      isInit: true,
      noDataFlag: false,
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    initScollerStatus() {
      this.tableList = [];
      //   页数
      this.currentPage = 1;
      this.isInit = true;
      this.isFinished = false;
    },
    initScollerHeight() {
      //屏幕高度
      let windowHeight =
        (document.documentElement.clientHeight /
          document.documentElement.clientWidth) *
        750;
      let notSlipping = 320;
      //可以滚动的区域
      let slidingContainer = (windowHeight - notSlipping) / 75;
      setTimeout(() => {
        this.$refs.myScroller.style.height = slidingContainer + "rem";
        this.$refs.scrollView.init();
      });
    },
    // 上拉加载
    endReached() {
      if (this.isFinished) return;
      this.isInit = false;
      this.currentPage = this.currentPage + 1;
      setTimeout(() => {
        this.getTableData(() => {
          this.$refs.scrollView.finishLoadMore();
        });
      }, 1000);
    },
    getTableData(callback) {
      if (this.testList.length > 0) {
        this.noDataFlag = false;
        // [0, 10]  [10, 20]   [20, 30];
        const start = (this.currentPage - 1) * this.pageSize;
        const end = this.currentPage * this.pageSize;

        this.tableList.push(
          ...this.testList.slice(start,end)
        );
        this.isInit && this.initScollerHeight();
        if (this.tableList.length >= this.testList.length) {
          this.isFinished = true;
        }
      } else {
        this.noDataFlag = true;
      }
      callback && callback();
    },
  },
};
</script>
<style scoped>
.header {
  width: 686px;
  margin: 32px;
  overflow-wrap: break-word;
  word-break: break-all;
}
.number {
  font-size: 28px;
  color: #3e5cd7;
}
.content {
  width: 718px;
  overflow-x: scroll;
  margin-left: 32px;
  /* position: relative; */
}
.content-header {
  width: 1980px;
  height: 80px;
  line-height: 80px;
  display: flex;
  margin-left: 140px;
  background-color: #e6f2ff;
  box-sizing: content-box;
  /* border-top: 1px solid #ccc; */
}
.content-header .title {
  border-top: 1px solid #ccc;
  overflow: hidden;
  overflow-x: scroll;
  /* text-overflow: ellipsis; */
  white-space: nowrap;
}
.content-left {
  position: absolute;
  left: 32px;
  /* box-shadow: 3px 0px 3px  #dbdbdb; */
}
.content-right1 .box .text {
  overflow: hidden;
  overflow-x: scroll;
  /* text-overflow: ellipsis; */
  white-space: nowrap;
}
.content-right1 .box {
  margin-left: 140px;
  display: flex;
}
.updown {
  width: 14px;
  height: 24px;
  display: inline-block;
}
.start {
  width: 20px;
  height: 20px;
  display: inline-block;
  position: absolute;
  left: 0px;
  z-index: 999;
}
.desc {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 32px;
  margin-bottom: 16px;
  font-size: 24px;
  color: #999999;
  position: relative;
}
.desc-right,
.desc-right div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.desc-right1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 32px;
}
.desc-right img {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
.custName1 {
  width: 140px;
  height: 80px;
  line-height: 80px;
  border: 1px solid #ccc;
  text-align: center;
  background-color: #e6f2ff;
}
.custName2 {
  width: 140px;
  height: 80px;
  line-height: 80px;
  border: 1px solid #ccc;
  text-align: center;
  border-top: 0;
  background-color: #ffffff;
  overflow: hidden;
  overflow-x: scroll;
  /* text-overflow: ellipsis; */
  white-space: nowrap;
}
.column {
  min-width: 180px;
  height: 80px;
  line-height: 80px;
  border: 1px solid #ccc;
  text-align: center;
  border-top: 0;
  border-left: 0;
  border-right: 0;
}

.phone {
  min-width: 220px;
  height: 80px;
  line-height: 80px;
  border: 1px solid #ccc;
  border-top: 0;
  text-align: center;
}
.produce {
  min-width: 300px;
  height: 80px;
  line-height: 80px;
  border: 1px solid #ccc;
  text-align: center;
  border-top: 0;
  border-left: 0;
  border-right: 0;
}
.loanNo {
  min-width: 280px;
  height: 80px;
  line-height: 80px;
  border: 1px solid #ccc;
  text-align: center;
  border-top: 0;
  border-right: 0;
}
.yuqiDate {
  min-width: 240px;
  height: 80px;
  line-height: 80px;
  border: 1px solid #ccc;
  text-align: center;
  border-top: 0;
}
.yuqiAmt {
  min-width: 280px;
  height: 80px;
  line-height: 80px;
  border: 1px solid #ccc;
  text-align: center;
  border-top: 0;
  border-left: 0;
  border-right: 0;
}
.loanBalance {
  min-width: 280px;
  height: 80px;
  line-height: 80px;
  border: 1px solid #ccc;
  text-align: center;
  border-top: 0;
}
.cusManager {
  min-width: 200px;
  height: 80px;
  line-height: 80px;
  border: 1px solid #ccc;
  text-align: center;
  border-top: 0;
  border-left: 0;
}
.box1 img {
  margin-left: 10px;
}
.color1 {
  background-color: #fff4e5;
  color: #666666;
}
.color2 {
  background-color: #ffe6e9;
  color: #666666;
}
.color3 {
  background-color: #ffffff;
  color: #666666;
}
</style>