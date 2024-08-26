<template>
  <div class="contain" ref="myScroller">
    <div
      class="content_container"
      v-for="(item,index) in list"
      :key="index"
      @click="goDetail(item)"
    >
      <span class="title" v-html="textParseToHtml(searchText,item.ruleName,higilightColor)"></span>
      <div class="sub">
        <!-- <span
          class="date sub_text"
          v-html="textParseToHtml(searchText,item.publishDate,higilightColor)"
        ></span>
        <span
          class="dept sub_text"
          v-html="textParseToHtml(searchText,item.departmentName,higilightColor,'主管部门：')"
        ></span>-->
      </div>
      <!-- <div class="content" v-html="textParseToHtml(searchText,item.hotContent,higilightColor)"></div> -->
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
          ruleName:
            "江苏美团农村商业银行股份有限公司全面成本管理应用系统管理办法（修订）",
        },
      ],
      higilightColor: "#a67342",
    };
  },
  methods: {
    // 将文本转换为html
    textParseToHtml(target, source, color, preStr = "") {
      if (source == "null" || !source) {
        return "--";
      }
      // target：
      let reg = new RegExp(target, "g");
      let res =
        source &&
        source.replace(reg, `<span style="color:${color}">${target}</span>`);
      res = preStr + res;
      console.log(res);
      return res;
    },
  },
};
</script>

<style scoped>
.content_container {
  width: 750px;
  height: 226px;
  margin-top: 16px;
  padding-top: 16px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 16px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title {
  padding-top: -4px;
  line-height: 44px;
  font-size: 28px;
  font-weight: bold;
  color: #333333;
}
.sub {
  display: flex;
  flex-direction: row;
}
.sub_text {
  height: 32px;
  line-height: 32px;
  font-size: 24px;
  font-weight: normal;
  line-height: 36px;
  color: #999999;
}
.date {
  width: 204px;
}
.content {
  width: 686px;
  height: 82px;
  font-size: 24px;
  font-weight: normal;
  line-height: 40px;
  color: #666666;
  text-overflow: ellipsis;
  line-clamp: 2;
  overflow: hidden;
}
</style>