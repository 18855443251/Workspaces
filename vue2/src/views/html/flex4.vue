<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {};
  },
};
</script>
<style scoped>
ul {
  width: 400px;
  height: 400px;
  border: 1px solid #000;
  margin: 100px auto;
  list-style: none;
  display: flex;
}
ul > li {
  width: 200px;
  height: 200px;
  background-color: pink;
  text-align: center;
  line-height: 200px;
  font-size: 35px;
}
ul > li:nth-child(1) {
  /*
            如果有伸缩项没有设置flex-grow, 那么系统会保持原有的宽度
            而会将多余的宽度等分之后, 按照每个伸缩项需要的份数添加给它们
            如果想让某个伸缩项不缩小, 那么需要将它的flex-shrink设置为0
            */
  flex-shrink: 0;
}
ul > li:nth-child(2) {
  background-color: skyblue;
  flex-grow: 1;
}
ul > li:nth-child(3) {
  background-color: yellow;
  flex-grow: 4;
}
</style>