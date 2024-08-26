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
    <div @click="test">点击</div>
    <!-- <div ref="viewRef" v-show="name == '张三'">测试1</div> -->
    <!-- <div ref="viewRef" v-if="name == '李四'">测试2</div> -->
    <!--2 ref + for -->
    <!-- <div v-for="(item, index) in 2" :key="index">
      <div ref="viewRef">{{ index }}</div>
    </div> -->
    <!-- this.$refs.viewRef 会直接获取两个div this.$refs.viewRef[0].innerHTML- this.$refs.viewRef[1].innerHTML- -->
    <div v-for="(item, index) in 2" :key="index">
      <div ref="viewRef" v-show="index === 1">{{ index }}</div>
    </div>
    <!-- 只会获取一个div 并且元素内容是1 this.$refs.viewRef[0].innerHTML-->
    <!-- <div v-for="(item, index) in 2" :key="index">
      <div ref="viewRef" v-if="index === 1">{{ index }}</div>
    </div> -->
    <!-- this.$refs.viewRef.message -->
    <!-- <son1 v-show="isShow" ref="viewRef"></son1> -->
  </div>
</template>

<script>
import son1 from "./components/son1";
export default {
  name: "home",
  components: {
    son1,
  },
  data() {
    return {
      name: "",
      isShow: false,
    };
  },
  mounted() {},
  methods: {
    test() {
      this.name = "李四";
      this.$nextTick(() => {
        console.log(this.$refs.viewRef[0].innerHTML);
      });
    },
  },
};
</script>

<style scoped>
</style>
