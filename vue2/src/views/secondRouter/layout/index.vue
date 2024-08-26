<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-03 16:41:47
 * @LastEditors: Please set LastEditors
 * @Description: $event
 * @FilePath: \vueDemo\src\views\dioAlert.vue
-->
<template>
  <div>
    <layoutNav />
    <RouterView />
  </div>
</template>

<script>
import layoutNav from "./components/layoutNav";

export default {
  components: {
  layoutNav
  },
  name: "home",
  data() {
    return {
      dataList: [
        {
          name: "首页",
          id: "001",
        },
        {
          name: "北京",
          id: "002",
        },
        {
          name: "上海",
          id: "003",
        },
        {
          name: "广州",
          id: "004",
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
