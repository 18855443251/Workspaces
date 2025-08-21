<!-- 信息组件 -->
<template>
  <div class="my_info">
    <div class="my_info_item" v-for="(item, index) in dataList" :key="index">
      <div
        :class="['row_key', { underline: item[isDrillIst]=='1'}]"
        @click="handleOpenDescription(item)"
      >
        <span> {{ item[label] }}</span>
      </div>
      <div>
        <slot :name="item[slotName]" :record="item" :index="index">
          <slot :record="item" :index="index"></slot>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myInfo",
  props: {
    // 属性
    map: {
      type: Object,
      default: () => ({}),
    },
    // 值
    data: {
      type: [Array, Object],
      default: () => [],
    },
    // 传入对象
    isCustom: {
      type: Boolean,
      default: false,
    },
    // 标题
    label: {
      type: String,
      default: "label",
    },
    // 如果指标有描述显示下划线
    isDrillIst: {
      type: String,
      default: "isDrillIst",
    },
    // 插槽名
    slotName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {
    dataList() {
      if (this.isCustom) {
        return this.mapToDataList();
      } else {
        return this.data;
      }
    },
  },
  methods: {
    mapToDataList() {
      return Object.keys(this.map).map((key) => ({
        label: this.map[key].title || this.map[key],
        value: this.map[key].customRender
          ? this.map[key].customRender(this.data[key])
          : this.data[key],
        slotName: this.map[key].slotName || "",
        // objStyle: this.map[key].objStyle || {},
      }));
    },
    handleOpenDescription(item) {
      if (item.isDrillIst == "1") {
        this.$emit("handleOpenDescription", item);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.my_info {
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  .my_info_item {
    margin-bottom: 12px;
    padding-right: 10px;
    box-sizing: border-box;
  }
  .row_key {
    color: rgba(100, 110, 125, 0.8);
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 4px;
    line-height: 20px;
  }
  .underline {
    text-decoration: underline;
    text-decoration-color: #008aff;
  }
  .row_value {
    color: #0a1534;
    font-family: DIN;
    font-size: 16px;
    font-weight: 500;
    margin-top: 4px;
  }
  .desc {
    color: rgba(120, 130, 150, 0.8);
    font-size: 12px;
    font-weight: 400;
  }
}
</style>
