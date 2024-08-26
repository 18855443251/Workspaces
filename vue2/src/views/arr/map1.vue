<template>
  <div>
    <div v-for="(item, index) in testArr" :key="index">{{ item }}</div>
    <div @click="arrBtn">哈哈</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      oldList: [
        { Bankname: "张三", age: 12 },
        { Bankname: "李四", age: 14 },
      ],
      newList: [],
      testList: ["张三", "李四"],
    };
  },
  computed: {
    testArr() {
      return this.oldList.map((item) => {
        return item.Bankname.substring(0, 1);
      });
    },
  },
  created() {
    // 如果原数组的元素类型是值类型，那么使用数组的map方法，会返回一个新的数组，但不会改变原数组的内容；
    // 如果原数组的元素类型是对象，如果map函数内对元素不进行赋值操作，调用后会返回一个新的数组，不会改变原数组，
    // 如果原数组的元素类型是对象，如果map函数内对元素进行赋值操作，调用后会返回一个新的数组，也会改变原数组，
    //map如果遍历一个数组(数组元素是值类型)，改变数组中的值会返回新数组，原数组不会改变
    //map如果遍历一个数组(数组类型是引用类型)，改变数组中的值会返回新数组，原数组会改变
    // this.test();
    // this.test1();
    this.test2();
    // this.test3();
  },
  methods: {
    arrBtn() {
      console.log(this.testArr);
    },
    test() {
      this.newList = this.oldList.map((item, index, arr) => {
        // let obj=JSON.parse(JSON.stringify(item));//深拷贝不会改变原始数组oldList,不会改变arr
        let obj = item; //浅拷贝会改变原始数组oldList,也会改变arr
        obj.value = index;
        obj.Bankname = "借记卡";
        return obj;
      });
      // this.newList=this.oldList
      console.log(this.newList, "返回一个新数组");
    },
    test1() {
      this.newList = this.oldList.map((item, index, arr) => {
        item.age += 1;
        return item;
      });
      console.log(this.oldList, "返回一个新数组也会改变原来数组");
    },
    test2() {
      this.newList = this.oldList.map((item, index, arr) => {
        return item.age + 1;
      });
      console.log(this.newList, "返回一个新数组不会改变原来数组");
    },
    test3() {
      this.newList = this.testList.map((value, index, arr) => {
        value = "借记卡";
        return value;
      });
      console.log(this.newList, "返回一个新数组且不会改变原来数组");
    },
  },
};
</script>

<style scoped></style>
