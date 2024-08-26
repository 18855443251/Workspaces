<template>
  <div>
    <!-- 使用input语法糖在子组件和父组件之间实现数据的双向绑定： -->
    <son3 v-model="inputValue"></son3>
    <div>相对应{{ inputValue }}</div>
    <!-- <son3 v-bind:value="inputValue" v-on:input="inputValue = argument[0]"></son3> -->
    <!-- 这个时候，inputValue接受的值就是input事件的回调函数的第一个参数，所以在自定义组件中，要实现数据绑定，还需要$emit去触发input的事件。 -->
    <!-- this.$emit('input', value) -->
  </div>
</template>

<script>
import son3 from "./components/son3";
export default {
  components: {
    son3,
  },
  data() {
    return {
      inputValue: "张三",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
