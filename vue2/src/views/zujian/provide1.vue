<!--
 * @Author: your name
 * @Date: 2021-07-07 10:35:39
 * @LastEditTime: 2022-06-02 09:53:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\components\children\children1.vue
-->
<template>
  <div>
    <!-- @click.prevent -->
    <!-- @click.native.prevent -->
    <children1 @click.native="test"></children1>
    <!-- 父组件想在子组件上监听自己的click的话，需要加上native修饰符。 -->
    <button @click="changeMsg">祖组件触发</button>
  </div>
</template>
<script>
import children1 from "./components/children/children1";

export default {
  components: {
    children1,
  },
  provide() {
    return {
      year: this.year, //简单类型，非响应式
      sex: () => this.sex,
      obj: this.obj, // 方式1.传入一个可监听的对象
      developerFn: () => this.developer, // 方式2.通过 computed 来计算注入的值
      app: this, // 方式4. 提供祖先组件的实例 缺点：实例上挂载很多没有必要的东西 比如：props，methods。
    };
  },
  data() {
    return {
      year: 1995,
      sex: "男",
      obj: {
        name: "张三",
      },
      developer: "布兰登·艾奇",
      update: "26",
    };
  },
  methods: {
    changeMsg() {
      this.sex = "女";
      this.obj.name = "Vue";
      this.developer = "尤雨溪";
      this.year = 2014;
      this.update = "36";
    },
    test() {
      console.log("张三");
    },
  },
};
</script>
