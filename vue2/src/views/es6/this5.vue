<!--
 * @Author: your name
 * @Date: 2022-06-29 10:49:00
 * @LastEditTime: 2022-06-29 10:53:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\views\callback\callback1.vue
-->
<template>
  <div class="page">
    <div>{{ msg }}</div>
  </div>
</template>
<script>
export default {
  name: "thisCompletion",
  components: {},
  data() {
    return {
      msg: "",
    };
  },
  created() {
    this.query1();
  },
  methods: {
    query1() {
      let obj = {
        firstName: "Bill",
        add() {
          let count = 0;
          let arrow = () => {
            console.log(count, this.firstName); // 0 'Bill'
          };
          arrow();
        },
      };
      obj.add();
    },
  },
};
</script>
<style scoped>
</style>