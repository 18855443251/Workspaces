<template>
  <div>
    <div @click="parentMethod" class="test">父组件调用子组件的方法</div>
    <son1 ref="son1"></son1>
    <div @click="changeName">获取某个子组件的属性值</div>
  </div>
</template>
<script>
import son1 from "./components/son1";

export default {
  name: "father",
  components: {
    son1,
  },
  data() {
    return {
      fatherName: "王五",
    };
  },
  methods: {
    test() {
      console.log('进来了')
    },
    // 父组件调用子组件方法
    parentMethod() {
      console.log(this.$refs.son1); //返回的是一个vue对象，可以看到所有添加ref属性的元素
      this.$refs.son1.childMethods(); //父组件调用子组件的方法并改变子组件的值
    },
    // 获取某个子组件的属性值 获取的是son1里面的值
    changeName() {
      console.log(this.$children[1].name);
      console.log(this.$children[1].sonList);
    },
  },
};
</script>
<style scoped></style>
