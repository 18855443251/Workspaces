<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 15:07:27
 * @LastEditors: Please set LastEditors
 * @Description: 搜索匹配
 * @FilePath: \vueDemo\src\views\paixu\sort.vue
-->
<template>
  <div>
    <input
      class="search-inpt"
      v-model="keyPd"
      @input="keyPdInput"
      placeholder="请输入银行关键字"
      type="text"
    />
    <ul class="index-group-box" v-for="(item, index) in newCityBankList" :key="index">
      {{
      item.BankName
      }}
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      cityBankList: [
        {
          BankName: "农业",
        },
        {
          BankName: "工商",
        },
        {
          BankName: "农业",
        },
        {
          BankName: "建设",
        },
      ],
      newCityBankList: [
        {
          BankName: "农业",
        },
        {
          BankName: "工商",
        },
        {
          BankName: "农业",
        },
        {
          BankName: "建设",
        },
      ],
      keyPd: "",
    };
  },
  created() {},
  methods: {
    keyPdInput() {
      this.newCityBankList = this.cityBankList.filter((item) => {
        return item.BankName.match(this.keyPd);
      });
    },
  },
};
</script>

<style scoped></style>
