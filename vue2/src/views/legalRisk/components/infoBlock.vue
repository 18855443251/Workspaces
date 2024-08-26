<template>
  <div class="box">
    <slot name="header"></slot>
    <div v-for="(line,index) in infoList" :key="index">
      <div class="line" v-if="line.key===true"></div>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props: {
    map: {
      type: Object,
      default: () => ({}),
    },
    info: {
      type: Object,
      default: () => ({}),
    },
    smaller: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    infoList() {
      return this.infoToList(this.info, this.map);
    },
  },
  methods: {
    /**
     * @param {Object} info 展示信息数据
     * @param {Object} map  展示名与数据字段映射
     */
    infoToList(info, map) {
      let keys = Object.keys(map);
      return (
        keys
          // .filter((key) => map[key]) // 过滤在映射表找不到的
          .map((key) => ({
            key: map[key],
            value: info[key],
          }))
      );
    },
  },
};
</script>

<style scoped>
.box {
  background-color: #ffffff;
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.line {
  width: 750px;
  height: 20px;
  background-color: #f3f3f3;
}
</style>