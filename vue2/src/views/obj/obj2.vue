<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:21:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view"></div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {
      valueItems: [
        {
          name: "",
          age: "null",
          address: "江苏",
        },
      ],
      ItemObj: {},
    };
  },
  created() {
    if (this.valueItems instanceof Array) {
      this.ItemObj = this.transnullBetter(this.valueItems[0]);
    }
    console.log(JSON.stringify(this.ItemObj));
  },
  methods: {},
};
</script>
<style scoped>
</style>