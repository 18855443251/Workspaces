<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2022-06-17 14:41:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view">
    <div>{{name}}</div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {
      name: "",
    };
  },
  created() {
    // this.queryData().then((res) => {
    //   console.log(res,'res'); //返回数据
    // });
    this.test();
  },
  methods: {
    async queryData() {
      var ret = await this.$axios.post("myIndex.do", {
        userId: "35123",
      });
      return ret;
    },
    async test() {
      var ret = await this.$axios
        .post("myIndex.do", {
          userId: "35123",
        })
        .then((res) => {
          console.log(res); //返回数据
        });
        console.log(ret,'就')
    },
  },
};
</script>
<style scoped>
</style>