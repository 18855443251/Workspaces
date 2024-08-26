<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 15:10:26
 * @LastEditors: Please set LastEditors
 * @Description:正则
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
-->
<template>
  <div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
        // 证件号码只能是数字或英文字母 /[^A-z0-9]/
        // 手机号码/^(0|86|17951)?(13[0-9]|15[012356789]|16[124567]|17[0135678]|18[0-9]|19[0-9]|14[579])[0-9]{8}$/
        // 大陆身份证 /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/
        // 微信号验证 /^[_a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/
        // QQ号验证 /^[1-9][0-9]{4,10}$/
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
