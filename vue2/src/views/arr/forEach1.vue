<template>
  <div>
    <div>{{ oldList }}</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      oldList: [
        { Bankname: "张三", age: 55 },
        { Bankname: "李四", age: 14 },
        { Bankname: "王五", age: 14 },
      ],
      newList: [],
    };
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      // 允许callback更改原始数组的元素
      // forEach中可以使用return跳出循环,不能终止循环
      // return不能终止循环，只是将满足条件的跳过了。
      // forEach没有返回值 foreach的所有返回值都是undefined。
      // 要想有返回值，需要另声明一个变量接收。
      // .如果遍历的是个空数组，则不进行遍历。
      this.oldList.forEach((item, index, arr) => {
        if (item.Bankname == "李四") {
          item.Bankname = "修改";
          return;
        }
        console.log(item.Bankname, "当前项"); //会打印两次
      });
    },
  },
};
</script>

<style scoped></style>
