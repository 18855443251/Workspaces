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
    <!-- 不能输入特殊字符 -->
    <input type="text" v-model="inputVal" v-input="handleInput" />
  </div>
</template>
<script>
import navBar from "@/components/navBar";
export default {
  name: "claneCache",
  components: { navBar },
  data() {
    return {
      inputVal: "插槽",
    };
  },
  mounted() {},
  methods: {
    handleInput(value) {
      // 这里面做操作
      console.log(value, "value");
    },
  },
};
</script>
<style scoped></style>

