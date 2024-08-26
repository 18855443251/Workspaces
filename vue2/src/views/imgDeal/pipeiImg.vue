<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 09:57:57
 * @LastEditors: Please set LastEditors
 * @Description: 状态存储匹配银行图片
 * @FilePath: \vueDemo\src\views\imgDeal\pipeiImg.vue
-->
<template>
  <div>
    <div v-for="(item, index) in RecordList" :key="index">
      <img class="logo" :src="item.BankImg" />
    </div>
    <!-- <img :src="imgdata(BankId)" class="bank_img" /> -->
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      BankId: "PayeeBankName",
      RecordList: [
        {
          PayeeBankName: "营口银行",
        },
        {
          PayeeBankName: "工商银行",
        },
        {
          PayeeBankName: "农业银行",
        },
      ],
    };
  },
  created() {
    this.formatRecordList();
  },
  methods: {
    formatRecordList() {
      for (let item of this.RecordList) {
        this.$store.commit("bankNameLogoMate", item.PayeeBankName);
        item.BankImg = this.$store.state.BankImg;
      }
      // console.log(JSON.stringify(this.RecordList));
    },
  },
};
</script>

<style scoped>
</style>
