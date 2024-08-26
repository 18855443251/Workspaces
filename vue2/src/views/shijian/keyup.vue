    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-20 09:02:33
 * @LastEditors: Please set LastEditors
 * @Description:client
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div id="card">
    <input
      type="text"
      v-model="value"
      placeholder="按下回车键以确定..."
      @keyup.up="confirmInfo"
    />
     <!-- @keyup.enter="confirmInfo" -->
     <!-- @keyup.delete="confirmInfo" -->
      <!-- @keyup.up="confirmInfo" -->
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      value: "张三",
    };
  },
  mounted() {},
  
  methods: {
    confirmInfo(e) {
      console.log(e,"按下回车键以确定");
    },
  },
};
</script>

<style scoped>
</style>
