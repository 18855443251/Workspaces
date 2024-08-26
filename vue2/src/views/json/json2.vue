<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-30 10:47:02
 * @LastEditors: Please set LastEditors
 * @Description: json导入
 * @FilePath: \vueDemo\src\views\json\json1.vue
-->
<template>
  <div>
    <!-- <div>userArr:{{ userArr }}</div>
    <div>typeArr:{{ typeArr }}</div>
    <div>configArr:{{ configArr }}</div>
    <div>$store.state.name:{{$store.state.name}}</div>
    <div>$tableMapList:{{ $tableMapList(name) }}</div> -->
    <!-- <div>userArr:{{struct.userArr}}</div> -->
  </div>
</template>

<script>
// import { userArr, typeArr, configArr, message, message1,message2 } from "./js/config.js";
import info,{ userArr, typeArr, configArr } from "@/common/js/config1.js";//按需导入
// import * as struct from "./js/config.js";
import Msg from "./js/msg";
export default {
  name: "home",
  data() {
    return {
      userArr,
      typeArr,
      configArr,
      name: "",
      // struct,
    };
  },
  created() {
    console.log(info)
    // console.log(message("张三"));
    // console.log(message1(this, this.$store, { age: "15" }));
    // Msg.Confirm("该文件过大，请退出后稍后再试", () => {
    //   console.log("好好");
    // });
    // Msg.Confirm(
    //   {
    //     icon: "",
    //     title: "温馨提示",
    //     content: "何恢复",
    //     confirmText: "查看",
    //   },
    //   () => {
    //     console.log("好好");
    //   }
    // );
  },
  methods: {},
};
</script>

<style scoped></style>
