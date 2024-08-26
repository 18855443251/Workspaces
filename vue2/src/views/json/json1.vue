<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-07-30 17:14:51
 * @LastEditors: Please set LastEditors
 * @Description: 推荐
 * @FilePath: \vueDemo\src\views\json\json1.vue
-->
<template>
  <div>
    <div v-for="(item, index) in playerList" :key="index">
      {{ item.title }}
      <div v-for="(sub, index) in item.items" :key="index">
        <div>{{ sub.BankName }}</div>
        <div>{{ sub.age }}</div>
      </div>
    </div>
    <div>{{ThemeJson}}</div>
  </div>
</template>

<script>
import bankList from "./js/bankList/bankList.js";
import ThemeJson from "@/json/theme.json";
export default {
  name: "home",
  data() {
    return {
      ThemeJson:ThemeJson,
      playerList: [
        // {
        //   title: "推荐",
        //   items: [
        //     {
        //       BankName: "中国银行",
        //       BankId: "104100000004",
        //       ClearBankId: "104100000004",
        //       age: "1",
        //       name: "中国银行",
        //       avatar: "1"
        //     },
        //     {
        //       BankName: "农业银行",
        //       BankId: "103100000026",
        //       ClearBankId: "103100000026",
        //       age: "2",
        //       name: "农业银行",
        //       avatar: "2"
        //     }
        //   ]
        // }
      ],
    };
  },
  created() {
    this.formatRecommendBank();
  },
  methods: {
    formatRecommendBank() {
      var arr = [];
      let obj = {};
      obj.title = "推荐";
      obj.items = bankList.map((item) => {
        item.name = item.BankName;
        item.avatar = item.age;
        return item;
      });
      arr.push(obj);
      this.playerList = arr;
      console.log(this.playerList);
    },
  },
};
</script>

<style scoped></style>
