<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-03 16:41:47
 * @LastEditors: Please set LastEditors
 * @Description: $event
 * @FilePath: \vueDemo\src\views\dioAlert.vue
-->
<template>
  <div>
    <set-alias-dialog v-model="showAliasDialog" @resetAcctAllList="resetAcctAllList"></set-alias-dialog>
    <div @click="setUserAlias">测试</div>
  </div>
</template>

<script>
import setAliasDialog from "@/components/setAliasDialog";

export default {
  components: {
    [setAliasDialog.name]: setAliasDialog,
  },
  name: "home",
  data() {
    return {
      showAliasDialog: true,
      actDetail: {},
    };
  },
  created() {},
  methods: {
    setUserAlias() {
      this.showAliasDialog = true;
    },
    resetAcctAllList() {
      alert(JSON.stringify(this.actDetail));
    },
  },
};
</script>

<style scoped></style>
