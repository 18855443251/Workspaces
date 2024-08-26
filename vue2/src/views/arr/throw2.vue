<template>
  <div>
    <p>请输入 5 到 10 之间的数字：</p>
    <input id="demo" type="text" />
    <div @click="myFunction()">检测输入</div>
    <p id="p01"></p>
    <img src="boat.gif" alt="Big Boat">
  </div>
</template>
<script>
import tab from "@/components/tab";
export default {
  components: {
    tab,
  },
  name: "home",
  data() {
    return {
    };
  },

  mounted() {
    this.myFunction()
  },
  methods: {
    myFunction() {
      var message, x;
      message = document.getElementById("p01");
      message.innerHTML = "";
      x = document.getElementById("demo").value;
      // 供测试的代码块
      try {
        if (x == "") throw "是空的";
        if (isNaN(x)) throw "不是数字";
        x = Number(x);
        if (x < 5) throw "太小";
        if (x > 10) throw "太大";
      } catch (err) {
        message.innerHTML = "输入：" + err;
      } finally {
        // 无论结果如何都执行的代码块
        document.getElementById("demo").value = "finally";
      }
    },
  },
};
</script>

<style scoped>
span{
  /* display: inline-block;
  width: 40px;
  height: 80px; */
  margin: 20px;
  background: forestgreen;
/* line-height: 140px; */
}
</style>
