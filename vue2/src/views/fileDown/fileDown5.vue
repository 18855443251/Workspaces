<template>
  <div>
    <h6>长按复制文本，苹果没有用</h6>
    <div
      class="blue"
      v-for="item in testList"
      :key="item.name"
      @touchend="touchEnds"
      @touchstart="touchStarts(item, $event)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
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
    touchStarts(item, $event) {
      console.log($event);
      clearTimeout(this.loop);
      this.loop = setTimeout(() => {
        let value = item.name;
        // 需要下载vue-clipboard2插件
        this.$copyText(value).then(
          (res) => {
            this.myToast("复制成功");
          },
          (err) => {
            console.log("不能复制");
          }
        );
      }, 1000);
    },
    touchEnds() {
      clearTimeout(this.loop);
    },
  },
};
</script>

<style scoped>
#commitClipboard {
  cursor: pointer;
}
</style>
