<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 15:13:09
 * @LastEditors: Please set LastEditors
 * @Description:搜索文档文字匹配颜色
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
-->
<template>
  <div class="container">
    <search-bar
      placeholder="搜索文档或者部门"
      ref="searchBar"
      @search="search"
      @clear="clear"
      @cancel="cancel"
    ></search-bar>
    <search-list ref="searchList"></search-list>
  </div>
</template>

<script>
import { ScrollView, ScrollViewMore } from "mand-mobile";
import searchBar from "@/components/search/searchBar";
import searchList from "@/components/search/searchList";
export default {
  name: "searchFile",
  components: {
    searchBar,
    searchList,
    [ScrollView.name]: ScrollView,
    [ScrollViewMore.name]: ScrollViewMore,
  },
  data() {
    return {};
  },
  beforeRouteLeave(to, from, next) {
    if (from.path == "/search") {
      this.$refs["searchBar"].clear();
      this.$refs["searchList"].clearList();
    }
    next();
  },
  methods: {
    clear() {
      this.$refs["searchList"].clearList();
    },
    search(searchText) {
      this.searchText = searchText;
      if (!this.searchText) {
        // 搜索内容为空时 置空列表
        this.$refs["searchList"].clearList();
        return;
      }
      this.$refs["searchList"].postSearch(this.searchText);
    },
    cancel() {
      this.$refs["searchList"].clearList();
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
}
</style>