<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-03 16:12:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\components\setAliasDialog.vue
-->
<template>
  <div class="container">
    <transition name="fade">
      <div class="dialog-box" v-if="showDialog">
        <div class="dialog-box-content">
          <span class="alias-desc">请输入新的别名</span>
          <input
            type="text"
            ref="aliasInput"
            maxlength="5"
            @focus="showViewPosition"
            v-model="updateAlias"
            class="alias-input mgt28"
            placeholder="'请输入别名'"
          />
          <div class="space-line"></div>
        </div>
        <div class="dialog-box-bottom" @click="confirmUpdateAlias">
          <span class="confim-txt">确认</span>
        </div>
        <div class="dialog-box-bottom" @click="confirmUpdateAlias">
          <span class="confim-txt" @click="closeAliasDialog">取消</span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "set-alias-dialog",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    actDetail: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      updateAlias: "",
      aliasAccountMsg: {},
    };
  },
  computed: {
    showDialog() {
      return this.value;
    },
  },
  methods: {
    //键盘弹出来时input框在可视区域内
    showViewPosition($event) {
      $event.target.scrollIntoView(false);
      console.log($event.target.scrollIntoView);
    },
    //关闭弹框
    closeAliasDialog() {
      this.$emit("input", false);
    },
    confirmUpdateAlias() {
      this.aliasSetup();
    },
    //设置别名
    aliasSetup() {
      this.$emit("input", false);
      this.$emit("resetAcctAllList");
    },
  },
};
</script>
<style scoped></style>
