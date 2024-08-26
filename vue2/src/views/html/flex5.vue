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
  width: 800px;
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
            flex: flex-grow flex-shrink flex-basis;
            默认值:
            flex: 0 1 auto;

            注意点:
            在连写格式中, flex-shrink flex-basis是可以省略的
            */
  /*flex: 1 1 200px;*/
  flex: 1;
}
ul > li:nth-child(2) {
  background-color: skyblue;
  /*flex: 1 2 200px;*/
  flex: 2;
}
ul > li:nth-child(3) {
  background-color: yellow;
  /*flex: 1 3 200px;*/
  flex: 3;
}
</style>