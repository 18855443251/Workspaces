<!--
 * @Author: your name
 * @Date: 2021-08-12 15:06:34
 * @LastEditTime: 2022-08-04 10:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\VxMobile.vue
-->
<template>
  <div class="claneCache_view">
    <div class="test">
      <selectCard
        title="请选择账户"
        :addFlag="false"
        :selectShow="isBankShow"
        :cardList="actionDataBank"
        :isAmount="false"
        @cancel="
          isBankShow = false;
          changeIconBank = !changeIconBank;
        "
        @choose="handleSelectorChoose2"
      >
      </selectCard>
    </div>
  </div>
</template>
<script>
import selectCard from "./components/selectCard";
export default {
  name: "claneCache",
  components: { selectCard },
  data() {
    return {
      isBankShow: true,
      actionDataBank: [],
      changeIconBank: false,
    };
  },
  created() {},
  methods: {
    handleSelectorChoose2() {},
  },
};
</script>
<style scoped>
.test {
  background: red;
}
.qrCode_icon {
  width: 50px;
  height: 50px;
}
</style>