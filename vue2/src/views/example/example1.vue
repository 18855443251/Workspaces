<template>
  <div class="contain" ref="myScroller">
    <div class="content_container" v-for="(item, index) in list" :key="index">
      <span
        class="title"
        v-html="textParseToHtml(searchText, item.ruleName, higilightColor)"
      ></span>
      <div class="sub">
        <span class="date sub_text">{{ item.publishDate }}</span>
        <span
          class="dept sub_text"
          v-html="
            textParseToHtml(
              searchText,
              item.departmentName,
              higilightColor,
              '主管部门：'
            )
          "
        ></span>
      </div>
      <div
        class="content"
        v-html="textParseToHtml(searchText, item.hotContent, higilightColor)"
      ></div>
      <div v-html="item.hotRuleName"></div>
      <div v-html="item.msg"></div>
    </div>
  </div>
</template>

<script>
import { ScrollView, ScrollViewMore } from "mand-mobile";
export default {
  components: {
    [ScrollView.name]: ScrollView,
    [ScrollViewMore.name]: ScrollViewMore,
  },
  data() {
    return {
      searchText: "美团",
      list: [
        {
          departmentName: "美团农商行总行计财部",
          hotRuleName:
            "江苏<mark>美团</mark>农村商业银行股份有限公司全面成本管理应用系统管理办法",
          publishDate: "2020-09-03",
          ruleName:
            "江苏美团农村商业银行股份有限公司全面成本管理应用系统管理办法",
          msg: "<span style=background-color:red;>html标签在渲染的时候被源码输出</span>",
        },
      ],
      higilightColor: "#a67342",
    };
  },
  created() {
    this.higilightColor = this.themeStyle.fontColor;
  },
  methods: {
    // 将文本转换为html
    textParseToHtml(searchText, source, color, preStr = "") {
      if (source == "null" || !source) {
        return "--";
      }
      let reg = new RegExp(searchText, "g");
      let res =
        source &&
        source.replace(
          reg,
          `<span style="background-color:#91ec53;color:${color}">${searchText}</span>`
        );
      res = preStr + res;
      console.log(res);
      return res;
    },
  },
};
</script>

<style scoped>
</style>