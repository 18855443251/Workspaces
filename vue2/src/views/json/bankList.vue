<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 09:58:32
 * @LastEditors: Please set LastEditors
 * @Description:银行搜索遍历
 * @FilePath: \vueDemo\src\views\json\bankList.vue
-->
<template>
  <div class="container">
    <div class="index-list-wrap">
      <div v-for="(group, index) in data" :key="index" class="index-group" ref="indexGroup">
        <h3 class="index-group-title">{{ group.title }}</h3>
        <div class="index-group-box">
          <div v-for="(item, index) in group.items" :key="index" class="index-group-item">
            <span class="name">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatOrderList } from "./js/bankList/index.js";
export default {
  name: "bankList",
  data() {
    return {
      playerList: [
        {
          title: "推荐",
          items: [
            {
              name: "工商银行",
            },
            {
              name: "农业银行",
            },
            {
              name: "建设银行",
            },
            {
              name: "渤海银行",
            },
          ],
        },
      ],
      newList: [
        {
          BankName: "工商",
        },
        {
          BankName: "农业银行",
        },
        {
          BankName: "建设银行",
        },
        {
          BankName: "渤海银行",
        },
      ],
      acTotal: {},
      data: [
        // {
        //   title: "推荐",
        //   items: [
        //     { name: "工商银行" },
        //     { name: "农业银行" },
        //     { name: "建设银行" },
        //     { name: "渤海银行" }
        //   ]
        // },
        // {
        //   title: "B",
        //   items: [{ BankName: "渤海银行", PYFlag: "B", name: "渤海银行" }]
        // },
        // {
        //   title: "G",
        //   items: [{ BankName: "工商银行", PYFlag: "G", name: "工商银行" }]
        // },
        // {
        //   title: "J",
        //   items: [{ BankName: "建设银行", PYFlag: "J", name: "建设银行" }]
        // },
        // {
        //   title: "N",
        //   items: [{ BankName: "农业银行", PYFlag: "N", name: "农业银行" }]
        // }
      ],
    };
  },
  created() {
    this.formatBankList(this.newList);
  },
  methods: {
    formatBankList(newList) {
      newList = formatOrderList(newList, "BankName");
      this.data = [...this.playerList, ...newList];
    },
  },
};
</script>

<style scoped></style>
