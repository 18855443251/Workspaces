<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 16:55:49
 * @LastEditors: Please set LastEditors
 * @Description:填报
 * @FilePath: \vueDemo\src\views\string\match1.vue
-->
<template>
  <div>
    <div v-for="(item,index) in valutList" :key="index">
      <div :style="{color:item.color}">{{test(item.status)}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      valutList: [
        {
          status: "01",
        },
        {
          status: "02",
        },
        {
          status: "03",
        },
      ],
      status: "04",
    };
  },
  created() {
    for (let item of this.valutList) {
      if (item.status == "01") {
        if (this.status == "04") {
          this.$set(item, "color", "red");
        }
      } else if (item.status == "02") {
        this.$set(item, "color", "blue");
      } else if (item.status == "03") {
        this.$set(item, "color", "green");
      }
    }
    // this.wyData();
  },
  methods: {
    test(val) {
      switch (val) {
        case "01":
          return "未填报";
          break;
        case "02":
          return "填报";
          break;
        case "03":
          return "已上报";
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
</style>
