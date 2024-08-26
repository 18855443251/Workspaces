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
    this.test1();
  },
  methods: {
    test1() {
      this.oldList.forEach((item, index, arr) => {
         let obj=JSON.parse(JSON.stringify(item));//深拷贝不会改变原始数组oldList,不会改变arr
        // let obj = item; //浅拷贝会改变原始数组oldList,也会改变arr
        obj.value = index;
        obj.Bankname = "借记卡";
        // return obj //没有返回值不能这样写
      });
      this.newList = this.oldList;
      console.log(this.newList, "原始数组oldList改变,newList跟着改变");
    },
  },
};
</script>

<style scoped></style>
