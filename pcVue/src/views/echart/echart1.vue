<template>
  <div class="hot-words-hotWordRank">
    <div ref="hotWordRank" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: {
    query: {},
    selectTime: {},
  },
  data() {
    return {
      hotWordRank: null,
      hotWordsData: [],
    };
  },
  created() {},
  mounted() {
    // this.getHotWork();
    this.initChart();
    // 监听窗口大小改变事件，以便动态调整图表大小
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    if (this.hotWordRank) {
      this.hotWordRank.dispose();
      this.hotWordRank = null;
    }
    // 在组件销毁前移除监听器
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    getHotWork() {
      console.log("getHotWork");
      let params = {
        ...this.query,
        hotWork:
          this.query.hotWork && this.query.hotWork.length > 0
            ? this.query.hotWork.join(",")
            : "",
        startTime: this.selectTime[0],
        endTime: this.selectTime[1],
      };
      problemStatisticsApi.getHotWork(params).then((res) => {
        const {
          data: { data },
        } = res;
        this.hotWordsData = data;
        this.initChart();
      });
    },
    initChart() {
      const chartDom = this.$refs.hotWordRank;
      this.hotWordRank = echarts.init(chartDom);

      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          bottom: "bottom",
          data: ["采纳量", "提问量"],
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
          },
        },
        calculable: true,
        xAxis: [
          {
            type: "value",
          },
        ],
        yAxis: [
          {
            type: "category",
            data: [
              "发票开具",
              "费用收取争议",
              "营业受理报障",
              "违约金减免申请",
              "订单全流程保障",
            ],
          },
        ],
        series: [
          {
            name: "采纳量",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: { label: { show: true, position: "insideRight" } },
            },
            data: [320, 302, 301, 334, 390, 330, 320],
            color: "blue",
          },
          {
            name: "提问量",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: { label: { show: true, position: "insideRight" } },
            },
            color: "#FFA500",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
        ],
      };
      this.hotWordRank.setOption(option);
    },
    handleResize() {
      if (this.hotWordRank) {
        this.hotWordRank.resize();
      }
    },
  },
};
</script>

<style scoped>
.hot-words-hotWordRank {
  width: 100%;
  background-color: #ffffff;
  border-radius: 4px;
}
</style>