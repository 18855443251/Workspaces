<!--
 * @Author: your name
 * @Date: 2021-08-12 15:19:20
 * @LastEditTime: 2021-08-12 16:00:24
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\components\search\searchBar.vue
-->
<template>
  <div class="search_bar">
    <img src="@/assets/img/agree.png" v-if="isBack" class="back" @click="goBack" alt />
    <form action style="width:100%">
      <input
        type="search"
        class="search"
        ref="search"
        @input="input"
        v-model="searchText"
        @keypress.enter="search"
        autofocus="autofocus"
        placeholder="搜索"
      />
      <img src="@/assets/img/agree.png" v-show="searchText" @click="clear" class="clear" alt />
      <span class="cancel" @click="cancel" :style="{color:themeStyle.fontColor}">取消</span>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    isBack: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      searchText: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.$refs["search"].focus();
    }, 500);
  },
  methods: {
    search(e) {
      this.$emit("search", this.searchText);
      this.$refs["search"].blur();
      e.preventDefault();
    },
    clear() {
      this.searchText = "";
      this.$emit("clear");
    },
    cancel() {
      this.$emit("cancel");
    },
    input() {
      this.$emit("search", this.searchText);
    },
  },
};
</script>

<style scoped>
</style>