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
    <ul>
      <li
        v-for="(obj, index) in list1"
        :key="index"
        :ref="index"
        @click="hanlderClick"
      >
        {{ obj }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",

  data() {
    return {
      list1: ["a", "b", "c", "d"],
    };
  },
  mounted() {},
  methods: {
    hanlderClick() {
      this.list1.forEach((obj, index, arr) => {
        console.log(this.$refs[index][0]);
      });
    },
  },
};
</script>

<style scoped>
</style>
