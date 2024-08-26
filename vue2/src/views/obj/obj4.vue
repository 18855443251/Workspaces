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
      obj1: {
        name:"张三",
        age:"26",
        language:[1,[2,3],[4,5]]
      },
    };
  },
//   直接赋值
  created() {
   var obj3=this.obj1
   obj3.name="李四";
   obj3.language[1]=["二","三"];
   console.log("obj1",this.obj1)
   console.log("obj3",obj3)
  },
  methods: {
  
  },
};
</script>
<style scoped>
</style>