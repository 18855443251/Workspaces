<!--
 * @Author: your name
 * @Date: 2021-06-03 16:14:06
 * @LastEditTime: 2021-08-25 16:33:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \root\mgBank\src\views\workbench\corporateClients\outBusiness\busicInfo.vue
-->
<template>
  <div class="view">
    <div>v发v的v</div>
  </div>
</template>
<script>
export default {
  name: "VxMobile",
  components: {},
  data() {
    return {};
  },
  mounted() {
    // 阻止页面滑动
    document.querySelector(".view").addEventListener("touchmove", function (e) {
      e.preventDefault();
    });
  },

  methods: {},
};
</script>
<style scoped>
.line {
  width: 750px;
  height: 20px;
}
</style>