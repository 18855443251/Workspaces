<template>
  <div class="hot-words-resultFeedback">
    <div class="chart-container">
      <div
        ref="resultFeedback"
        style="width: 100%; height: 400px"
       
      ></div>
    </div>
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
      resultFeedback: null,
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
    if (this.resultFeedback) {
      this.resultFeedback.dispose();
      this.resultFeedback = null;
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
      this.$nextTick(() => {
        const chartDom = this.$refs.resultFeedback;
        this.resultFeedback = echarts.init(chartDom);
        const option = {
          tooltip: {
            trigger: "item",
          },
          legend: {
            orient: "horizontal",
            bottom: "bottom",
          },
          series: [
            {
              name: "反馈类型",
              type: "pie",
              radius: ["35%", "50%"],
              avoidLabelOverlap: false,
              label: {
                show: true,
                position: "outer",
                formatter: "{b}\n{c} ({d}%)",
                alignTo: "labelLine",
                bleedMargin: 5,
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "16",
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: true,
                length: 15,
                length2: 20,
                smooth: true,
                lineStyle: {
                  width: 2,
                  type: "solid",
                },
              },
              color: [
                "red", // 其他
                "#91CC75", // 格式问题
                "#FAC858", // 问题理解问题
                "#EE6666", // 知识不全
                "#73C0DE", // 答非所问
              ],
              data: [
                { value: 10, name: "其他" },
                { value: 15, name: "格式问题" },
                { value: 20, name: "问题理解问题" },
                { value: 25, name: "知识不全" },
                { value: 30, name: "答非所问" },
              ],
            },
          ],
        };
        this.resultFeedback.setOption(option);
        this.resultFeedback.resize(); // Add explicit resize
      });
    },
    handleResize() {
      if (this.resultFeedback) {
        setTimeout(() => this.resultFeedback.resize(), 100);
      }
    },
  },
};
</script>

<style scoped>
.hot-words-resultFeedback {
  width: 100%;
  min-height: 400px; /* Add fixed min-height */
  background-color: #ffffff;
  padding: 16px;
  border-radius: 4px;
  position: relative; /* Add this */
}
.chart-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}
</style>