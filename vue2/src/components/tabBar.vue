<!--
 * @Author: your name
 * @Date: 2021-05-08 17:23:50
 * @LastEditTime: 2021-11-22 15:49:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \root\mgBank\src\components\tabBar.vue
-->
<template>
  <div class="tab" id="scroll_box">
    <div
      v-for="(item,index) in tabList"
      :key="index"
      class="tab-item"
      @click="tabBtn(index)"
      :id="'tab_'+index"
    >
      <div :class="[changeIndex==index?'title-black':'title-gray']">
        {{item.name}}
        <span v-if="tabNum">({{!item.num?'0':item.num}})</span>
      </div>
      <div v-show="changeIndex==index" class="line" :style="{background:bgColor}"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabBar",
  props: {
    tabList: {
      type: Array,
      default: () => [],
    },
    bgColor: {
      type: String,
      default: "#a67342",
    },
    tabNum: {
      type: Boolean,
      default: true,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    index() {
      console.log("k");
      document
        .getElementById("tab_" + this.index)
        .scrollIntoView({ inline: "center", behavior: "smooth" });
      this.changeIndex = this.index;
    },
  },
  data() {
    return {
      changeIndex: 0,
    };
  },
  methods: {
    tabBtn(index) {
      this.$emit("tabBtn", index);
      this.changeIndex = index;
    },
  },
};
</script>
<style scoped>
.tab {
  width: 750px;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  position: fixed;
}
.tab-item {
  /* width: 120px; */
  height: 80px;
  line-height: 80px;
  margin-left: 32px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.title-gray {
  color: #999999;
  font-size: 28px;
  line-height: 48px;
  font-weight: bold;
  min-width: 100px;
  text-align: center;
}
.title-black {
  line-height: 48px;
  color: #333333;
  font-weight: bold;
  font-size: 30px;
  min-width: 100px;
  text-align: center;
}
.line {
  width: 100px;
  height: 6px;
  margin-top: 10px;
  border-radius: 8px;
  /* background: #a67342; */
  text-align: center;
}
</style>
