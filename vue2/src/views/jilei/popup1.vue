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
      <div @click="test">打开弹框</div>
      <address-picker-pop
        v-model="showAddressPicker"
        @confirm="onPickerConfirm"
        ref="addressPickerPop"
      />
    </div>
  </div>
</template>
<script>
import addressPickerPop from "./components/addressPickerPop";
export default {
  name: "claneCache",
  components: { addressPickerPop },
  data() {
    return {
      showAddressPicker: false, //城市弹框是否打开
    };
  },
  methods: {
    test() {
      this.showAddressPicker = true;
    },
    onPickerConfirm(values) {
      console.log(values, "values");
    },
  },
};
</script>
<style scoped>
</style>