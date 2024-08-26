<template>
  <div>
    <div v-for="(item, index) in newList" :key="index">{{ item.Bankname }}</div>
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
    this.test2();
  },
  methods: {
    test2() {
      // try/catch可以让js代码遇到错误了也可以执行下去
      try {
        this.oldList.forEach((item) => {
          if (item.Bankname == "李四") {
            throw "遇到李四才终止循环";
          }
          console.log(item, "当前项"); //会打印一次
        });
      } catch (e) {
        console.log("catch-" + e); //会被打印
      }
    },
  },
};
</script>

<style scoped></style>
