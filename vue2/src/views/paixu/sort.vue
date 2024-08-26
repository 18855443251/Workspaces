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
    <!-- 根据数组对象的某个属性值排序  -->
    <div v-for="(item, index) in arr1" :key="index">{{ item.age }}</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      list: [
        { name: "zs3", data: "20200110", age: 10 },
        { name: "zs6", data: "20200113", age: 136 },
        { name: "zs2", data: "20200109", age: 9 },
        { name: "zs8", data: "20200115", age: 15 },
        { name: "zs4", data: "20200111", age: 11 },
        { name: "zs1", data: "20200108", age: 8 },
        { name: "zs7", data: "20200114", age: 14 },
        { name: "zs5", data: "20200112", age: 12 },
        { name: "zs5", data: "20200112", age: 212 },
      ],
    };
  },
  //  根据年龄从小到大排序
  computed: {
    // arr1() {
    //   // 第一种写法
    //   return this.list.sort((a, b) => {
    //     return b.age - a.age;
    //   }); /* 从大到小排序 */
    //   // return this.list.sort((a, b) => {
    //   //   return a.age - b.age;
    //   // }); /* 从小到大排序 */
    // },
    // 第二种写法
    arr1() {
    return this.list.sort(this.compare("age"));
    },
  },
  created() {
    // Array.sort()方法允许我们传入一个比较函数进去。
    var obj = [
      { name: "huawei", value: 3300 },
      { name: "apple", value: 6600 },
      { name: "honor", value: 2000 },
      { name: "mi", value: 1999 },
    ];
    function ascCompare(a, b) {
      return a.value - b.value;
    }
    console.log(obj.sort(ascCompare));
  },
  methods: {
    compare(prop) {
      return function (a, b) {
        let v1 = a[prop];
        let v2 = b[prop];
        // return v1 - v2; //从小到大排序
        return v2 - v1; // 从大到小排序
      };
    },
  },
};
</script>

<style scoped></style>
