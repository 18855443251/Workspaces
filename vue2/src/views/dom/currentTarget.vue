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
    <div id="A" class="test">
      我是A
      <div id="B" class="test1">我是B</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      arrList: [
        {
          title: "张三",
        },
        {
          title: "李四",
        },
      ],
    };
  },
  mounted() {
    // target点击谁就是谁  currentTarge谁添加点击事件就是谁
    // this.test1();
    this.test2();
  },
  methods: {
    test1() {
      var a = document.getElementById("A"),
        b = document.getElementById("B");
      function handler(e) {
        // 点击<div id="A"> currentTarge与target都是 a
        // 点击b时，target为b，但currentTarget仍为 a
        //currentTarget始终是监听事件者，即 直接调用addEventlistener那个节点
        // 而target是事件的真正发出者， 即触发事件的节点，在click事件中就是被点击的节点。
        console.log(this, "this");
        console.log(e.target, "target");
        console.log(e.currentTarget, "currentTarget");
        console.log(this === e.currentTarget);
        console.log(this === e.target);
      }
      a.addEventListener("click", handler);
    },
    test2() {
      var a = document.getElementById("A"),
        b = document.getElementById("B");
      function handler(e) {
        // 点击<div id="A"> currentTarge与target都是 a
        // 点击b时，target为b，但currentTarget仍为 a
        //currentTarget始终是监听事件者，即 直接调用addEventlistener那个节点
        // 而target是事件的真正发出者， 即触发事件的节点，在click事件中就是被点击的节点。
        console.log(this, "this");
        console.log(e.target, "target");
        console.log(e.currentTarget, "currentTarget");
        console.log(this === e.currentTarget);
        console.log(this === e.target);
      }
      b.addEventListener("click", handler);
    },
  },
};
</script>

<style scoped>
.test {
  height: 200px;
  background: red;
}
.test1 {
  height: 50px;
  background: rgb(114, 105, 201);
}
</style>
