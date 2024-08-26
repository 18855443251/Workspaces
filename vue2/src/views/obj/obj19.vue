<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view">
    <div>d</div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {
    cityCodeArrays: "[\"360200\",\"360202\"],[\"360200\",\"360203\"],[\"360200\",\"360281\"],[\"360200\",\"360222\"]",
    location:[]
    };
  },
  created() {
    let a = this.cityCodeArrays.replace(/],/g, ']|').split('|')
      a.forEach(element => {
        element = JSON.parse(element)
        console.log(element,'还好哦')
        this.location.push(element)
      })
      console.log(this.location)
  },
  methods: {
    
  },
};
</script>
<style scoped></style>
