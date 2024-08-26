<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 14:52:41
 * @LastEditors: Please set LastEditors
 * @Description: 排序
 * @FilePath: \vueDemo\src\views\paixu\sort.vue
-->
<template>
  <div>
    <div>排序最初</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      // sort方法会调用数组中每一项的toString()方法，然后按照ascii编码进行排序，如果数组含有undefined元素，它们将会被排到尾部。
      // 先对每一项的第一位按照ascii从小到大进行排序，如果第一位相同再将第二位按照unicode从小到大进行排序
      // sort方法会使原数组改变。
    };
  },

  created() {
    let arr = [2, 5, 6, 8];
    console.log(arr.sort());
    console.log(arr);
    // this.test()
  },
  methods: {
    test() {
      // a-d=[97-100] A-D=[65-68]
      console.log([54, 12, 36, 5, 6].sort()); //[12, 36, 5, 54, 6]
      console.log([54, 12, undefined, 36, 5, 6].sort()); // [12, 36, 5, 54, 6, undefined]
      console.log(["d", "a", "undefined", "F", "b", "A"].sort()); //['A', 'F', 'a', 'b', 'd', 'undefined']
    },
  },
};
</script>

<style scoped></style>
