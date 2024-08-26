<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view"></div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {};
  },
  created() {
    this.get();
    this.set();
  },
  methods: {
    get() {
      // 创建对象：
      var person = {
        firstName: "Bill",
        lastName: "Gates",
        language: "en",
        get lang() {
          return this.language;
        },
      };
      console.log(person.lang);
    },
    set() {
      // 创建对象：
      var person = {
        firstName: "Bill",
        lastName: "Gates",
        language: "en",
        set lang(value) {
          this.language=value
        },
      };
      person.language="中国"
      console.log(person.language);
    },
  },
};
</script>
<style scoped></style>
