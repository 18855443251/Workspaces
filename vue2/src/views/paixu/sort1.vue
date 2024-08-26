<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 14:52:54
 * @LastEditors: Please set LastEditors
 * @Description: 排序
 * @FilePath: \vueDemo\src\views\paixu\sort.vue
-->
<template>
  <div>
    <div v-for="(item, index) in arr1" :key="index">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      arr: [2, 8, 1, 36, 12, 6],
    };
  },
  created() {},
  computed: {
    // sort调用该方法时没有使用参数,按照字符编码的顺序进行排序
    // 要按照数值的大小对数字进行排序，要实现这一点，就必须使用一个排序函数：
    arr1() {
      return this.arr.sort(this.sortNumber);

      // 第二种写法
      // return this.arr.sort((a, b) => {
      //   return b - a;
      // });
    },
  },
  methods: {
    //   从小到大
    sortNumber(a, b) {
      return a - b;
    },
  },
};
</script>

<style scoped></style>
