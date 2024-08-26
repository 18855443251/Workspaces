<template>
  <div>
    <!-- <div v-for="(item, index) in compList" :key="index">
      <component :is="item.id" :data="item"></component>
    </div> -->
    <keep-alive :include="['mySon6']"
      ><component :is="comp" :data="{ name: '赵六' }"></component
    ></keep-alive>
    <div @click="test1">显示</div>
    <div @click="test2">隐藏</div>
  </div>
</template>

<script>
import son6 from "./components/son6";
import son7 from "./components/son7";
export default {
  components: {
    son6,
    son7,
  },
  data() {
    return {
      compList: [
        {
          id: "son6",
          name: "张三",
        },
        {
          id: "son7",
          name: "李四",
        },
      ],
      comp: "son6",
    };
  },
  methods: {
    test1() {
      this.comp = "son6";
    },
    test2() {
      this.comp = "son7";
    },
  },
};
</script>

<style>
</style>