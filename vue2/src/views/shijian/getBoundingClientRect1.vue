    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-25 14:58:34
 * @LastEditors: Please set LastEditors
 * @Description:client
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div class="view">
    <div class="test">呵呵</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    const div = document.querySelector("div");
    console.log(div.getBoundingClientRect());
    window.addEventListener('scroll',function(){
         console.log(div.getBoundingClientRect());
    })
  },
  methods: {},
};
</script>

<style scoped>
.test {
  width: 200px;
  height: 200px;
  background: red;
}
.view{
    height: 1800px;
}
</style>
