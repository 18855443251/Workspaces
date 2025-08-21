<!--（客调装维）省公司/分公司/装维经理看板-->
<template>
  <div class="view">
    <!-- 标题 -->
    <div class="test">台阶收入</div>
    <div ref="monthChart" style="width: 100%; height: 400px"></div>
    <div ref="sequentialChart" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "zhuangWeiPoints",
  components: {},
  data() {
    return {
      monthChart: null,
      sequentialChart: null,
      chartData: {
        months: Array.from(
          { length: 31 },
          (_, i) => `08/${String(i + 1).padStart(2, "0")}`
        ), // Generates dates from 08/01 to 08/31
        points: [
          120, 200, 150, 80, 70, 110, 130, 90, 100, 160, 140, 180, 120, 200,
          150, 80, 70, 110, 130, 90, 100, 160, 140, 180, 120, 200, 150, 80, 70,
          110, 130,
        ], // Example data for 31 days
      },
    };
  },
  mounted() {
    this.monthlyTrendChart();
    this.sequentialTrendChart();
  },
  methods: {
    monthlyTrendChart() {
      const chartDom = this.$refs.monthChart;
      this.monthChart = echarts.init(chartDom);
      const option = {
        title: {
          text: "月度趋势图",
          left: "left",
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "white", // Set tooltip background color to white
          textStyle: {
            color: "#333333", // Set tooltip text color to black
          },
          formatter: (params) => {
            const date = params[0].axisValue.replace(/\//g, "-"); // Convert 08/01 to 08-01
            const formattedDate = new Date(`2023-${date}`).toLocaleDateString(
              "en-CA"
            ); // Format as yyyy/mm/dd
            const value = params[0].value;
            return `
              <div>${formattedDate}</div>
              <div style="display: flex; align-items: center;">
                <span style="display: inline-block; width: 8px; height: 8px; background-color: orange; border-radius: 50%; margin-right: 8px;"></span>
                <span style="color: #666666;">收入&nbsp; ${value}</span>
              </div>
            `;
          },
        },
        legend: {
          x: "center",
          y: "top",
          orient: "horizontal",
          data: [
            { name: "收入", icon: "circle", textStyle: { color: "#333333" } },
          ],
          itemWidth: 20,
          itemHeight: 14,
          itemGap: 10,
          selectedMode: true,
          backgroundColor: "#f0f0f0",
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 5,
          padding: 10,
        },
        xAxis: {
          type: "category",
          data: this.chartData.months,
          boundaryGap: false,
          axisLabel: {
            color: "#666666", // Set X-axis text color to gray
          },
          axisLine: {
            lineStyle: {
              color: "#666666", // Set X-axis line color to gray
            },
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#666666", // Set Y-axis text color to gray
          },
          axisLine: {
            lineStyle: {
              color: "#666666", // Set Y-axis line color to gray
            },
          },
          splitLine: {
            lineStyle: {
              type: "dashed", // Set Y-axis grid lines to dashed
              color: "#666666", // Set Y-axis grid line color to gray
            },
          },
        },
        series: [
          {
            name: "收入",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              color: "orange", // Set the line color to orange
            },
            itemStyle: {
              color: "transparent", // Hide the default markers
              borderColor: "transparent", // Hide the border of the default markers
            },
            emphasis: {
              itemStyle: {
                color: "orange", // Show orange markers on hover/click
                borderColor: "orange", // Show orange border on hover/click
              },
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(255, 165, 0, 0.8)" }, // Orange at the top
                { offset: 1, color: "rgba(255, 255, 255, 0.8)" }, // White at the bottom
              ]),
            },
            data: this.chartData.points,
          },
        ],
      };
      this.monthChart.setOption(option);
    },
    sequentialTrendChart() {
      const chartDom = this.$refs.sequentialChart;
      this.sequentialChart = echarts.init(chartDom);
      const option = {
        title: {
          text: "环比趋势",
          left: "left",
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "white", // Set tooltip background color to white
          textStyle: {
            color: "#333333", // Set tooltip text color to black
          },
          formatter: (params) => {
            const date = params[0].axisValue.replace(/\//g, "-"); // Convert 08/01 to 08-01
            const formattedDate = new Date(`2023-${date}`).toLocaleDateString(
              "en-CA"
            ); // Format as yyyy/mm/dd
            const value = params[0].value;
            return `
              <div>${formattedDate}</div>
              <div style="display: flex; align-items: center;">
                <span style="display: inline-block; width: 8px; height: 8px; background-color: #94c694; border-radius: 50%; margin-right: 8px;"></span>
                <span style="color: #666666;">收入&nbsp; ${value}</span>
              </div>
            `;
          },
        },
        legend: {
          x: "center",
          y: "top",
          orient: "horizontal",
          data: [
            { name: "环比", icon: "circle", textStyle: { color: "#333333" } },
          ],
          itemWidth: 20,
          itemHeight: 14,
          itemGap: 10,
          selectedMode: true,
          backgroundColor: "#f0f0f0",
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 5,
          padding: 10,
        },
        xAxis: {
          type: "category",
          data: this.chartData.months,
          boundaryGap: false,
          axisLabel: {
            color: "#666666", // Set X-axis text color to gray
          },
          axisLine: {
            lineStyle: {
              color: "#666666", // Set X-axis line color to gray
            },
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#666666", // Set Y-axis text color to gray
          },
          axisLine: {
            lineStyle: {
              color: "#666666", // Set Y-axis line color to gray
            },
          },
          splitLine: {
            lineStyle: {
              type: "dashed", // Set Y-axis grid lines to dashed
              color: "#666666", // Set Y-axis grid line color to gray
            },
          },
        },
        series: [
          {
            name: "环比",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              color: "#94c694", // Set the line color to orange
            },
            itemStyle: {
              color: "transparent", // Hide the default markers
              borderColor: "transparent", // Hide the border of the default markers
            },
            emphasis: {
              itemStyle: {
                color: "#94c694", // Show orange markers on hover/click
                borderColor: "#94c694", // Show orange border on hover/click
              },
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#94c694" }, // Orange at the top
                { offset: 1, color: "rgba(255, 255, 255, 0.8)" }, // White at the bottom
              ]),
            },
            data: this.chartData.points,
          },
        ],
      };
      this.sequentialChart.setOption(option);
    },
  },
  beforeDestroy() {
    if (this.monthChart) {
      this.monthChart.dispose();
    }
    if (this.sequentialChart) {
      this.sequentialChart.dispose();
    }
  },
};
</script>

<style scoped>
.view {
  padding: 120px 12px 20px 12px;
}
iframe {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
}
.test {
  font-size: 20px;
}
</style>
