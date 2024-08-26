<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view">
    <div>call</div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {};
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      var person = {
        fullName: function () {
          return this.firstName + " " + this.lastName;
        },
      };
      var person1 = {
        firstName: "Bill",
        lastName: "Gates",
      };
      var person2 = {
        firstName: "Steve",
        lastName: "Jobs",
      };
      console.log(person.fullName.apply(person1)); // 将返回 "Bill Gates"
      console.log(person.fullName.call(person1)); // 将返回 "Bill Gates"
      console.log(person.fullName.call(person2)); // 将返回 "Steve Jobs"
    },
  },
};
</script>
<style scoped></style>
