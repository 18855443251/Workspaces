    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-11 14:06:49
 * @LastEditors: Please set LastEditors
 * @Description:对象调用
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <div @click="setData">设置数据sesstionStorage</div>
    <div @click="getData">获取数据sesstionStorage</div>
    <div>{{name}}</div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
    name:""
    };
  },
  created() {
     console.log(localStorage.getItem('name')) //null
  },
  methods: {
    // sessionStorage
    // 不同源浏览器不可共享
    // 无论怎么刷新数据都会存在
    // 同源浏览器重新打开一个窗口，数据不会存在
    // 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。
    // 跳转页面也会存在
    setData(){
      sessionStorage.setItem('age',"25")
    },
    getData(){
      // sessionStorage.clear() //清空所有缓存
      //  this.name=sesstionStorage.removeItem('age') //undefined
      this.name=sessionStorage.getItem('age');
      console.log(this.name) //25
      // this.jump("/localStorage1")
    }
  },
};
</script>

<style scoped>
</style>
