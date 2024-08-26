    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 16:36:03
 * @LastEditors: Please set LastEditors
 * @Description:indexOf
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>{{ AuthRole }}</div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      // "Z|U|T"
      AuthRole: "Z",
    };
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      //  只有U和T同时不存在的情况下才是未开通
      if (this.AuthRole.indexOf("U") < 0 && this.AuthRole.indexOf("T") < 0) {
        alert("您还没开通安全认证方式，请到柜台开通");
        return;
        // 只要有U或者T其中的一个存在就是已开通
      } else {
        alert("已开通安全认证方式");
      }
    },
  },
};
</script>

<style scoped></style>
