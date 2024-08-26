    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-20 09:02:33
 * @LastEditors: Please set LastEditors
 * @Description:client
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <div id="test" class="test">选择器1</div>
    <p>标签</p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    // className是使用新值换旧值, 如果需要添加一个类,需要保留之前的类
    let div = document.getElementById("test");
    div.className = "red";
    console.log(div);
  },
  methods: {},
};
</script>

<style scoped>
.test {
  color: aqua;
}
.red {
  color: red;
  width: 220px;
}
</style>
