    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-20 09:02:33
 * @LastEditors: Please set LastEditors
 * @Description:client
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <div class="wrapper">
      <strong>传智教育年会抽奖</strong>
      <h1>一等奖：<span id="one">???</span></h1>
      <h3>二等奖：<span id="two">???</span></h3>
      <h5>三等奖：<span id="three">???</span></h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      num: "",
      number: "",
    };
  },
  mounted() {
    // 1.声明数组
    const personArr = ["周杰伦", "刘德华", "周星驰", "Pink老师", "张学友"];
    // 2. 先做一等奖
    // 2.1 随机数 数组的下标
    const random = Math.floor(Math.random() * personArr.length);
    // console.log(personArr[random])
    // 2.2 获取one 元素
    const one = document.querySelector("#one");
    // 2.3 把名字给 one
    one.innerHTML = personArr[random];
    // 2.4 删除数组这个名字
    personArr.splice(random, 1);
    // console.log(personArr)
    // 3. 二等奖
    // 2.1 随机数 数组的下标
    const random2 = Math.floor(Math.random() * personArr.length);
    // console.log(personArr[random])
    // 2.2 获取one 元素
    const two = document.querySelector("#two");
    // 2.3 把名字给 one
    two.innerHTML = personArr[random2];
    // 2.4 删除数组这个名字
    personArr.splice(random2, 1);
    // 4. 三等奖
    // 2.1 随机数 数组的下标
    const random3 = Math.floor(Math.random() * personArr.length);
    // console.log(personArr[random])
    // 2.2 获取one 元素
    const three = document.querySelector("#three");
    // 2.3 把名字给 one
    three.innerHTML = personArr[random3];
    // 2.4 删除数组这个名字
    personArr.splice(random3, 1);
  },
  methods: {},
};
</script>

<style scoped>
.wrapper {
  width: 840px;
  height: 420px;
  padding: 100px 250px;
}
</style>
