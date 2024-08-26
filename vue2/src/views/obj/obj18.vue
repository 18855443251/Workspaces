<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view">
    <div>{{ result }}</div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {
      result: {},
      limitList: [
        {
          productId: "my",
          transCode: "name",
          limitType: "张三",
          limitAmount: 15525,
        },
        {
          productId: "you",
          transCode: "name",
          limitType: "李四",
          limitAmount: 25525,
        },
      ],
      standardlimitObj: {
        "my/name/张三": 18555,
        "you/name/李四": 1555,
        limitType: "张三",
      },
      testArr: [
        { value: 1, label: "schoolMerchantInfo" },
        { value: 2, label: "communityMerchantInfo" },
        { value: 3, label: "socialMerchantInfo" },
        { value: 4, label: "partyMerchantInfo" },
        { value: 8, label: "faYuanPayMerchantInfo" },
        { value: 7, label: "comprehensiveMerchantInfo" },
      ],
    };
  },
  created() {
    //     let low = [{ name: "张三" }];
    //     let high = [{ age: "28" }];
    //     this.result = this.test(low, high);
    // this.compareList();
    let a = this.tableMapList(7, this.testArr);
    console.log(a, "哈哈");
  },
  methods: {
    test(low, high) {
      return { low, high };
    },
    compareList() {
      for (var i = 0; i < this.limitList.length; i++) {
        for (let key in this.standardlimitObj) {
          let limitKey =
            this.limitList[i].productId +
            "/" +
            this.limitList[i].transCode +
            "/" +
            this.limitList[i].limitType;
          if (
            limitKey === key &&
            this.limitList[i].limitAmount > this.standardlimitObj[key]
          ) {
            console.log("进来了");
          }
        }
      }
    },
    tableMapList(val, list, value = "value", label = "label", obj = {}) {
      list.forEach((item) => {
        obj[item[value]] = item[label];
      });
      console.log(obj);
      return obj[val] || val;
    },
  },
};
</script>
<style scoped></style>
