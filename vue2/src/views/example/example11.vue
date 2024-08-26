<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-09-13 15:40:30
 * @LastEditors: Please set LastEditors
 * @Description: 点击复制
 * @FilePath: \vueDemo\src\views\arr\hebingArr.vue
-->
<template>
  <div>
    <h6>点击复制</h6>
    <div
      class="blue"
      v-for="item in testList"
      :key="item.name"
      id="commitClipboard"
      :data-clipboard-text="value"
      @click="clickBoard(item)"
    >{{item.name}}{{item.indexName}}</div>
  </div>
</template>

<script>
import ClipboardJs from "clipboard"; //h5复制
export default {
  name: "home",
  data() {
    return {
      testList: [
        {
          name: "张三",
          indexName: "暴富",
        },
      ],
      value: "",
    };
  },
  created() {},
  methods: {
    clickBoard(item) {
      this.value = item.name + "\n" + item.indexName;
      let clipboard = new ClipboardJs("#commitClipboard");
      clipboard.on("success", (e) => {
        this.myToast("复制成功");
      });
    },
  },
};
</script>

<style scoped>
#commitClipboard {
  cursor: pointer;
}
</style>
