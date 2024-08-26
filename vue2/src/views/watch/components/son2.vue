<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 17:21:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\components\son.vue
-->
<template>
  <div>
    <div class="son">{{ arr }}</div>
    <div>{{ money }}</div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      arr: [],
    };
  },
  computed: {
    money() {
      // return this.msg
      console.log("computed");
    },
  },
  watch: {
    value: {
      handler(newval, oldVal) {
        console.log(newval, "newval-watch");
        console.log(oldVal, "oldVal-watch");
        this.arr = newval;
      },
      immediate: true,
    },
  },
  methods: {},
};
</script>
