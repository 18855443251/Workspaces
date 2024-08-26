<template>
  <div>
    <div v-for="(item, index) in newList" :key="index" @click="testbtn(item)">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      newList: [1, 2, undefined, 3, null, 4, 5],
    };
  },
  created() {
    // join方法用于把数组中的所有元素放入一个字符串，元素是通过指定的分隔符进行分隔的,不会改变原数组。
    this.test()
    // this.test1();
    // this.test2();
  },
  methods: {
    test() {
      let arr = [1, 2, undefined, 3, null, 4, 5];
      console.log(arr.join()); //1,2,,3,,4,5
      console.log(arr.join("")); //12345
      console.log(arr.join(" ")); //1 2  3  4 5
      console.log(arr.join("  ")); //1  2    3    4  5
      console.log(arr.join(",")); //1,2,,3,,4,5
      console.log(arr.join(" ,  ")); //1 ,  2 ,   ,  3 ,   ,  4 ,  5
      console.log(arr.join("  ,  ")); //1  ,  2  ,    ,  3  ,    ,  4  ,  5
    },
    test1() {
      let arr = ["张三", "李四", "王五"];
      console.log(arr.join()); //张三,李四,王五
      console.log(arr.join("")); //张三李四王五
      console.log(arr.join(" ")); //张三 李四 王五
      console.log(arr.join("  ")); //张三  李四  王五
      console.log(arr.join(",")); //张三,李四,王五
      console.log(arr.join(" ,  ")); //张三 ,  李四 ,  王五
      console.log(arr.join("  ,  ")); //张三  ,  李四  ,  王五
    },
     test2() {
      let arr = ["张三","undefined", "李四", "null","王五"];
      console.log(arr.join()); //张三,undefined,李四,null,王五
      console.log(arr.join("")); //张三李四王五
      console.log(arr.join(" ")); //张三undefined李四null王五
      console.log(arr.join("  ")); //张三  undefined  李四  null  王五
      console.log(arr.join(",")); //张三,undefined,李四,null,王五
      console.log(arr.join(" ,  ")); //张三 ,  undefined ,  李四 ,  null ,  王五
      console.log(arr.join("  ,  ")); //张三  ,  undefined  ,  李四  ,  null  ,  王五
    },
  },
};
</script>

<style scoped></style>
