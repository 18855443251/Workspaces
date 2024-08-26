<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:04:36
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
      arr:[1,2,3],
    };
  },
  // 如果只有一层，可以看成深拷贝
  created() {
   var arr1=[...this.arr]
    arr1[0]=6;
   console.log("arr",this.arr)
   console.log("arr1",arr1)
  },
  methods: {
  
  },
};
</script>
<style scoped>
</style>