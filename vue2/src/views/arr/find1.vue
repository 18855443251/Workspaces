<!--
 * @Author: your name
 * @Date: 2021-07-27 09:38:09
 * @LastEditTime: 2021-08-25 16:14:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\views\map\map1.vue
-->
<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    // this.test1();
    // this.test2();
    this.test3();
    // this.test4();
  },
  methods: {
    // 数组为空 不会进来find
    // find 条件不满足返回一个undefined
    // 该方法主要应用于查找第一个符合条件的数组元素
    test1() {
      let arr = [1, 2, 3, 14, 5];
      let newIndex = arr.find((item) => {
        console.log("val", item); //1 2 3 14
        return item > 3;
      });
      console.log(newIndex, "newIndex"); //14
    },

    test2() {
      let arr = [
        { cityCode: "25666", name: "张三" },
        { cityCode: "123", name: "李四" },
        { cityCode: "123", name: "赵四" },
      ];
      let newIndex =
        arr.find((item) => {
          return item.cityCode === "123";
        }).name || {}; ////不满足条件会返回一个undefined,undefined.name会报错
      console.log(newIndex, "newIndex"); //李四
    },
    //数组为空 不会进来findIndex
    // 当条件为true时findIndex()返回的是索引值
    // 如果没有符合条件元素时findIndex()返回的是-1
    //空数组遍历 newIndex返回-1而不是undefined
    test3() {
      let arr = [1, 2, 3, 14, 5];
      let newIndex = arr.findIndex((item) => {
        console.log("val", item); //1 2 3 14
        return item > 3;
      });
      console.log(newIndex); //3
    },
    // 当条件为true时findIndex()返回的是索引值
    // 如果没有符合条件元素时findIndex()返回的是-1
    test4() {
      let arr = [
        { cityCode: "25666", name: "张三" },
        { cityCode: "123", name: "李四" },
        { cityCode: "123", name: "赵四" },
      ];
      let newIndex = arr.findIndex((item) => {
        return item.cityCode === "123";
      });
      console.log(newIndex); //1
    },
  },
};
</script>

<style scoped></style>
