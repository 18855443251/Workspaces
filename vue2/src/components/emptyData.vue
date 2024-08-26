<!--
 * @Author: your name
 * @Date: 2021-08-12 15:06:33
 * @LastEditTime: 2021-11-22 09:06:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\components\emptyData.vue
-->
 
<template>
  <div class="empty">
    <!-- <div v-if="isTop" class="kongdiv"></div> -->
    <!-- <img src="@/assets/img/nohuida.png" class="empty-img" /> -->
    <div class="textDesc">{{textDesc}}</div>
  </div>
</template>
<script>
export default {
  name: "emptyData",
  props: {
    textDesc: {
      type: String,
      default: "暂无数据",
    },
    // isTop: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.empty-img {
  width: 750px;
  height: 422px;
  margin-top: 300px;
}
.textDesc {
  font-size: 28px;
  color: #cccccc;
  text-align: center;
  margin-top: -90px;
}
.kongdiv {
  width: 750px;
  height: 300px;
  background-color: rgb(248, 248, 248);
}
</style>