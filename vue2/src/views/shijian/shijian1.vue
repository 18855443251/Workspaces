    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-23 10:30:05
 * @LastEditors: Please set LastEditors
 * @Description:事件冒泡
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <div class="father" ref="father">
      <div class="son" ref="son"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    //   $refs不能zai
    var son = this.$refs.son;
    var father = this.$refs.father;
    // 默认false,事件句柄在冒泡阶段触发,儿子->爸爸->文档   传true，事件句柄在捕获阶段触发 文档->爸爸->儿子
    son.addEventListener("click", this.sonBtn, true);
    father.addEventListener("click", this.fatherBtn, true);
    document.addEventListener("click", this.document, true);
  },
  methods: {
    sonBtn() {
      //   e.stopPropagation();
      console.log("儿子");
    },
    fatherBtn() {
      console.log("爸爸");
    },
    document() {
      console.log("文档");
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



