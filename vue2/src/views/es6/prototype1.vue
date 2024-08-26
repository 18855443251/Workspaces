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
    return {};
  },
  created() {
    // 构造函数  公共的属性和方法 封装到 Star 构造函数里面了
    // 1.公共的属性写到 构造函数里面
    function Star(uname, age) {
      this.uname = uname;
      this.age = age;
    }
    // 2. 公共的方法写到原型对象身上   节约了内存
    Star.prototype.sing = function () {
      console.log("唱歌");
    };
    console.log(Star.prototype)
    const ldh = new Star("刘德华", 55);
    const zxy = new Star("张学友", 58);
    ldh.sing(); //调用
    zxy.sing(); //调用
    // console.log(ldh === zxy)  // false
    console.log(ldh.sing === zxy.sing); //true
    // console.dir(Star.prototype)
  },
  methods: {},
};
</script>
<style scoped>
</style>