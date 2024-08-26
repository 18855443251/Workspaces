<template>
  <div>
    <nav-bar title="欠息逾期" />
    <div ref="header">就看</div>
    <div ref="myScroller" class="myScroller">
      <div class="content-header touch-scroll" ref="contentHeader" :style="{left:left+'px'}">
        <div class="custName1 text">客户名称</div>
        <div class="custId text">客户号</div>
        <div class="orgNo text">机构号</div>
        <div class="mobileNo text">联系方式</div>
        <div class="prdName text">产品名称</div>
      </div>
      <md-scroll-view
        ref="scrollView"
        :scrolling-x="false"
        :manual-init="true"
        :auto-reflow="true"
        @endReached="endReached"
        :is-prevent="false"
      >
        <div
          @touchmove="touchmove"
          @touchstart="touchstart"
          class="touch-scroll"
          :style="{left:left+'px'}"
        >
          <div v-for="(item,index) in tableList" :key="index">
            <div class="box">
              <div class="custName2 text">{{item.custName}}</div>
              <div class="custId text">{{item.custId}}</div>
              <div class="orgNo text">{{item.orgNo}}</div>
              <div class="mobileNo text">{{item.mobileNo}}</div>
              <div class="prdName text">{{item.prdName}}</div>
            </div>
          </div>
        </div>
        <md-scroll-view-more slot="more" :is-finished="isFinished"></md-scroll-view-more>
      </md-scroll-view>
    </div>
  </div>
</template>
<script>
import navBar from "@/components/navBar";
import { ScrollView, ScrollViewMore } from "mand-mobile";

export default {
  name: "claneCache",
  components: {
    navBar,
    [ScrollView.name]: ScrollView,
    [ScrollViewMore.name]: ScrollViewMore,
  },
  data() {
    return {
      tableList: [],
      tableList1: [
        {
          custId: "1005260013",
          custName: "周二",
          mobileNo: "20320110",
          orgNo: "01012",
          prdName: "按揭贷款个人住房一手房贷款",
        },
      ],
      isFinished: false,
      currentPage: 1,
      isInit: true,
      noDataFlag: false,
      positionSX: "", //X轴开始坐标
      positionEX: "", //X轴结束坐标
      positionSY: "", //Y轴开始坐标
      positionEY: "", //Y轴结束坐标
      left: 0,
    };
  },

  created() {
    this.getTableData();
  },
  mounted() {
    document
      .querySelector(".myScroller")
      .addEventListener("touchmove", function (e) {
        e.preventDefault();
      });
  },
  methods: {
    getTableData(callback) {
      this.$axios
        .post("managebankQueryUnusualStateAccount.do", {
          deptCode: "",
          orgCode: "A0002",
          pageNum: this.currentPage + "",
          pageSize: "15",
          sortField: "",
          sortType: "",
        })
        .then((res) => {
          if (res.valueItems && res.valueItems.length) {
            this.tableList.push(...res.valueItems);
            this.noDataFlag = false;
            this.isInit && this.initScollerHeight();
            if (this.tableList.length >= res.count) {
              this.isFinished = true;
            }
          } else {
            this.noDataFlag = true;
          }
          callback && callback();
        })
        .catch((error) => {
          this.$axios.fetchErrorhandling(error);
          callback && callback();
        });
    },
    scrolltop() {
      let windowHeight =
        (document.documentElement.clientHeight /
          document.documentElement.clientWidth) *
        750;
      let notSlipping = 420;
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
      this.getTableData(() => {
        this.$refs.scrollView.finishLoadMore();
      });
    },
    // 手势判断
    touchstart(e) {
      console.log(e);
      //开始x轴坐标
      this.positionSX = e.changedTouches[0].clientX;
      this.positionX = this.left;
    },
    touchmove(e) {
      //结束X轴坐标
      this.positionEX = e.changedTouches[0].clientX;
      //X轴移动的偏移量
      const distanceX = this.positionEX - this.positionSX;
      let str1 = this.$refs.contentHeader.clientWidth;
      let str2 = document.body.clientWidth;
      let str = str1 - str2 + 32;
      if (distanceX + this.positionX > 0) {
        return;
      }
      if (distanceX + this.positionX < -str) {
        return;
      }
      this.left = distanceX + this.positionX;
      console.log(distanceX, this.left);
    },
  },
};
</script>
<style scoped>
.myScroller {
  margin-left: 32px;
  overflow: hidden;
  padding-bottom: 100px;
}
.overflow-x {
  overflow-x: scroll;
}
.touch-scroll {
  position: relative;
}
.content-header {
  width: 1200px;
  display: flex;
  background-color: #e6f2ff;
  border-top: 1px solid #ccc;
}
.text {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-left: 0;
  border-top: 0;
  height: 88px;
}
.box {
  margin-left: 200px;
  display: flex;
}
.custName1 {
  min-width: 200px;
  border-left: 1px solid #ccc;
  background-color: #e6f2ff;
  position: sticky;
  left: 0;
}
.custName2 {
  width: 200px;
  border-left: 1px solid #ccc;
  background-color: #ffffff;
  position: fixed;
  left: 0;
}
.custId {
  min-width: 200px;
}
.mobileNo {
  min-width: 200px;
}
.orgNo {
  min-width: 200px;
}
.prdName {
  min-width: 400px;
}
</style>