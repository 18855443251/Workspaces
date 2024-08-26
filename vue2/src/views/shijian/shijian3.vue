    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-23 15:41:19
 * @LastEditors: Please set LastEditors
 * @Description:事件冒泡
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <div class="granFather" ref="granFather">
      <div class="father" ref="father">
        <div class="son" ref="son"></div>
      </div>
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
    this.test();
  },
  methods: {
    test() {
      //   var offsetLeftG = this.$refs.granFather.offsetLeft;
      //   var offsetLeftF = this.$refs.father.offsetLeft;
      //   var offsetLeftS = this.$refs.son.offsetLeft;
      console.log(this.getOffset(this.$refs.granFather));
      this.getOffset(this.$refs.granFather);
    },
    getOffset(el) {
      var parent = el.offsetParent,
        offsetLeft = el.offsetLeft,
        offsetTop = el.offsetTop;
      while (parent) {
        offsetLeft += parent.offsetLeft;
        offsetTop += parent.offsetTop;
        parent = parent.offsetParent;
      }
      return {
        left: offsetLeft,
        top: offsetTop,
      };
    },
  },
};
</script>

<style scoped>
.granFather {
  width: 500px;
  height: 500px;
  background: aqua;
  margin-left: 20px;
  position: relative;
}
.father {
  width: 400px;
  height: 400px;
  background: rgb(148, 219, 126);
  margin-left: 16px;
  position: relative;
}
.son {
  width: 300px;
  height: 300px;
  background: rgb(236, 245, 161);
  margin-left: 18px;
}
</style>
