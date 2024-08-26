<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view">
    <div v-for="item in goodList" :key="item.id">
      {{ item.name }}&nbsp;&nbsp;&nbsp;{{ item.value }}
    </div>
    <Button type="success" @click="handleClick()">改变数据</Button>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {
      goodList: [
        { name: "书本", value: "200元", id: 1 },
        { name: "玩偶", value: "200元", id: 2 },
        { name: "薯片", value: "300元", id: 3 },
      ],
      obj:{}
    };
  },
  created() {
    // this.$set(this.obj,"name",'jjd')
    // 判断对象为空
    if (JSON.stringify(this.obj) == "{}") {
      console.log(JSON.stringify(this.obj),"对象为空1");
    }
    // Object.keys(this.obj)会将属性值放到一个数组里面
    if (Object.keys(this.obj).length === 0) {
      console.log(Object.keys(this.obj),"对象为空2");
    }
  },
  methods: {
    handleClick() {
      this.goodList[2] = { name: "口罩", value: "409元", id: 4 };
      console.log(this.goodList);
    },
  },
};
</script>
<style scoped>
</style>