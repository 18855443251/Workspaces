<template>
  <div class="hot-words-hotWordRank">
    <div
      ref="hotWordRank"
      style="width: 100%; height: 400px; background-color: blue"
    ></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "FeedbackChart",
  data() {
    return {
      hotWordRank: null,
    };
  },
  mounted() {
      this.initChart();
      // 监听窗口大小改变事件，以便动态调整图表大小
      window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    if (this.hotWordRank) {
      this.hotWordRank.dispose();
    }
    // 监听窗口大小改变事件，以便动态调整图表大小
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    initChart() {
      this.hotWordRank = echarts.init(this.$refs.hotWordRank);
      this.setOptions();
    },
    setOptions() {
      const option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "horizontal",
          bottom: "bottom",
          data: [
            "IT类问题",
            "营业规则类问题",
            "装维类问题",
            "产品套餐类问题",
            "政支类问题",
            "政企问题",
            "财务业务支撑类",
            "其他",
          ],
          itemWidth: 12, // Width of the legend icon
          itemHeight: 12, // Height of the legend icon
        },
        series: [
          {
            name: "工单分类分布",
            type: "pie",
            radius: [30, 110],
            center: ["50%", "50%"],
            roseType: "area",
            color: [
              "#5470C6", // IT类问题
              "#91CC75", // 营业规则类问题
              "#FAC858", // 装维类问题
              "#EE6666", // 产品套餐类问题
              "#73C0DE", // 政支类问题
              "#3BA272", // 政企问题
              "#CA8622", // 财务业务支撑类
              "#BAD8A9", // 其他
            ],
            data: [
              { value: 30, name: "IT类问题" },
              { value: 25, name: "营业规则类问题" },
              { value: 20, name: "装维类问题" },
              { value: 25, name: "产品套餐类问题" },
              { value: 17, name: "政支类问题" },
              { value: 21, name: "政企问题" },
              { value: 15, name: "财务业务支撑类" },
              { value: 10, name: "其他" },
            ],
            label: {
              // formatter: "{b}: {c} ({d}%)",
              formatter: "{c}",
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      this.hotWordRank.setOption(option);
    },
  },
  handleResize() {
    if (this.hotWordRank) {
      this.hotWordRank.resize();
    }
  },
};
</script>

<style scoped>
.hot-words-hotWordRank {
  width: 100%;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 4px;
  margin: 0 auto;
}
</style>