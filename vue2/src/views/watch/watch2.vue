<template>
  <div class="page">
    <div id="app">
      <!-- <son2 v-model="nameList" v-if="show"></son2> -->
      <div @click="test">测试</div>
    </div>
  </div>
</template>
<script>
import son2 from "./components/son2";
export default {
  name: "thisCompletion",
  components: { son2 },
  data() {
    return {
      nameList: [{ name: "张云" }],
      show: false,
      obj: {
        sex: "26",
        test: {
          name: "张三",
        },
      },
    };
  },
  watch: {
    // 监听对象
    obj: {
      handler(newval, oldVal) {
        console.log(newval, "newval");
        console.log(oldVal, "oldVal");
      },
      immediate: true,
      deep: true,//直接修改对象里的某一个值需要使用deep
    },
  },
  methods: {
    test() {
      // vue新旧的值只是简单的赋值，对于引用类型来说指向的都是同一个地址，值自然也相同，
      // this.obj.sex = "22";
      // 新值和旧值都会改变
      this.obj = {
        sex: "22",
        test: {
          name: "李四",
        },
      };
    },
  },
};
</script>
<style scoped>
</style>