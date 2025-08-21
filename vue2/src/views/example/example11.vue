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
