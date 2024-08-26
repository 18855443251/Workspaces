<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 14:42:17
 * @LastEditors: Please set LastEditors
 * @Description: 数字格式化
 * @FilePath: \vueDemo\src\views\money\formatMoney.vue
-->
<template>
  <div>
    <div>保留卡号后四位：{{ bankNum1 | tailNumBankCard }}</div>
    <div>保留卡号后四位：{{ bankNum1 | dividelastfour }}</div>
    <div>过滤器保留卡号后四位：{{ bankNum2 }}</div>
    <div>加密银行卡号：{{ bankNum3 | encryptBankCard }}</div>
    <div>加密银行卡号：{{ bankNum3 | showBanks }}</div>
    <div>加密手机号:{{ phoneNum | encryptPhoneNo }}</div>
    <div>加密银行卡号：{{ bankNum4 | capitalize }}</div>
    <div>银行卡号每四位分割:{{ bankNum5 | divieBanks }}</div>
    <div>银行卡号每四位分割:{{ bankNum5 | formatBankCard }}</div>
    <div>银行卡号每四位分割:{{ bankNum6 | AccountNoFormat }}</div>
    <div>银行卡号带星号每四位分割:{{ bankNum6 | AccountNoFormat(6, -4) }}</div>
    <div>{{divieName(name)}}</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      name:'',
      bankNum1: "136",
      bankNum2: "59258662",
      bankNum3: "592c8868612358s62",
      // 18位
      bankNum4: "5928868612359653485",
      bankNum5: "592886861235965sc8",
      bankNum6: "56s67 89339k63",
      phoneNum: "18856562963",
    };
  },
  created() {
    //   在方法中使用过滤器
    this.bankNum2 = this.$options.filters.tailNumBankCard(this.bankNum2);
    console.log(this.$utils.testGong("用户号或密码不能为空！"))
  },
  methods: {},
};
</script>

<style scoped></style>
