<template>
  <div>
    <div class="chart">
      <div ref="tjsrChart" class="tjsrChart-container"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "tjsrEcharts",

  data() {
    return {
      option: {
        tooltip: { trigger: "axis" },
        toolbox: { show: true, feature: { mark: { show: true } } },
        calculable: true,
        legend: { data: ["2024", "2025"] },
        xAxis: {
          type: "category",
          boundaryGap: true,
          axisLabel: { interval: 0, margin: 15 },
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
        },
        yAxis: {
          show: false,
          type: "value",
          name: "单位: 亿元",
          nameTextStyle: { fontWeight: "bold", padding: [10, 0, 10, 0] },
        },
        dataZoom: [
          {
            type: "slider",
            show: true,
            realtime: true,
            start: 0,
            end: 80,
            bottom: 10,
            height: 30,
            filterMode: "filter",
            brushSelect: false,
            moveOnMouseMove: true,
            zoomLock: false,
            fillerColor: "rgba(0,138,255,0.2)",
            borderColor: "rgba(0,138,255,0.5)",
            handleStyle: {
              color: "#008aff",
              borderWidth: 1,
              borderColor: "#fff",
              shadowBlur: 3,
              shadowColor: "rgba(0,0,0,0.2)",
            },
            textStyle: { color: "#333" },
          },
          {
            type: "inside",
            zoomOnMouseWheel: true,
            moveOnMouseMove: true,
            start: 0,
            end: 80,
          },
        ],
        series: [
          {
            name: "2024",
            // 原始数据
            rawData: [
              "-3.92",
              "-3.22",
              "3.89",
              "3.58",
              "3.61",
              "4.26",
              "3",
              "-3.18",
              "3.13",
              "1.91",
              "3.14",
              "4.45",
            ],
            data: [
              "-3.92",
              "-3.22",
              "3.89",
              "3.58",
              "3.61",
              "4.26",
              "3",
              "3.18",
              "3.13",
              "1.91",
              "3.14",
              "4.45",
            ].map((value) => Math.abs(value)), // 数据取绝对值用于图表渲染
            type: "bar",
            label: {
              show: true,
              color: "#333",
              fontWeight: "bold",
              fontSize: 14,
              formatter: (params) => {
                // 使用原始数据进行显示
                return this.option.series[0].rawData[params.dataIndex];
              },
            },
            itemStyle: { color: "#008aff" },
          },
          {
            name: "2025",
            // 原始数据
            rawData: [
              "-3.25",
              "-2.88",
              "-4.43",
              "3.14",
              "3.61",
              "4.46",
              "3.18",
            ],
            data: [
              "-3.25",
              "-2.88",
              "-4.43",
              "3.14",
              "3.61",
              "4.46",
              "3.18",
            ].map((value) => Math.abs(value)), // 数据取绝对值用于图表渲染
            type: "line",
            smooth: true,
            label: {
              show: true,
              position: "top",
              color: "red",
              fontSize: 12,
              padding: [2, 2, 2, 2],
              formatter: (params) => {
                // 使用原始数据进行显示
                return this.option.series[1].rawData[params.dataIndex];
              },
            },
            lineStyle: { width: 3, color: "#ff6b6b" },
            symbol: "circle",
            symbolSize: 8,
            itemStyle: { color: "red" },
          },
        ],
      },
    };
  },

  mounted() {
    const chart = echarts.init(this.$refs.tjsrChart);
    chart.setOption(this.option);
  },
};
</script>
<style lang="less" scoped>
.view {
  padding: 110px 0 20px;
  background: #ffffff;
}
.chart {
  height: 580px;
}
.tjsrChart-container {
  width: 100%;
  height: 580px; /* 设置所需高度 */
}
</style>