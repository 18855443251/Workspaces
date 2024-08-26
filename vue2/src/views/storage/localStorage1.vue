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
     <div @click="setData">设置数据localStorage</div>
    <div @click="getData">获取数据localStorage</div>
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
     console.log(sessionStorage.getItem('age')) //null
  },
  methods: {
    // localStorage
    // 不同源浏览器不可共享
    // 可以永久存储，只要不手动删除，那么用localStorage存入的数据就可以永远存在客户端了
    //同源的浏览器打开多个窗口还是存在，重新刷新还是存在
    setData(){
      localStorage.setItem('name',"张三")
    },
    getData(){
      // 删除某一项
      // this.name=localStorage.removeItem('name') //undefined
      this.name=localStorage.getItem('name');
      // this.jump("/sesstionStorage1")
      console.log(this.name)
    }
  },
};
</script>

<style scoped>
</style>
