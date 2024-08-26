    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-09 14:37:16
 * @LastEditors: Please set LastEditors
 * @Description:preventDefault
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div class="box">
    <div
      class="test"
      @click="test"
    >测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测测试测试测试测试测试测试测试测试测试测试</div>
    <rule :isShowRule="isShowRule" />
    <a src="http://32.114.112.53:10080/users/sign_in">阻止默认事件</a>
  </div>
</template>

<script>
import rule from "@/components/rule";
export default {
  name: "home",
  components: { rule },
  data() {
    return {
      isShowRule: false,
    };
  },

  methods: {
    test() {
      this.isShowRule = true;
      document.body.style.overflow = "hidden";
    },
  },
};
</script>

<style scoped>
.test {
  height: 1200px;
}
</style>
