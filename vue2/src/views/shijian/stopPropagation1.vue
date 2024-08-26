    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-11 09:08:46
 * @LastEditors: Please set LastEditors
 * @Description:事件冒泡
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <div class="father">
      <div class="son"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    window.addEventListener("click", this.sonBtn);
    window.addEventListener("click", this.fatherBtn);
  },
  methods: {
    fatherBtn() {
      console.log("爸爸");
    },
    sonBtn(e) {
      //   e.stopPropagation();
      console.log("儿子");
    },
  },
};
</script>

<style scoped>
.father {
  width: 300px;
  height: 300px;
  background: rgb(193, 196, 60);
}
.son {
  width: 200px;
  height: 200px;
  background: rgb(48, 158, 209);
}
</style>



