<!--
 * @Author: your name
 * @Date: 2021-07-27 09:38:09
 * @LastEditTime: 2021-08-25 16:14:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\views\map\map1.vue
-->
<template>
  <div>
    <div>map2</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.test(2);
    // this.test1("MPO001");
  },
  methods: {
    test(index) {
      let map = [
        "main.yesterdaySummary",
        "main.businessChance",
        "main.businessRisk",
      ];
      let stageId = map[index];//数组
      console.log(stageId);
    },
    test1(val) {
      let map = {
        // 风险
        MPO001: "/personalDeposit", //潜力对私存款客户（大额流失挽回）
        MPO002: "/QueryPotential", //活期账户大额留存7天以上(对公)
      };
      return this.jump(map[val]);//对象
    },
  },
};
</script>

<style scoped></style>
