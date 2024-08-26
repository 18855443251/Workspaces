<script setup>
import { reactive, ref } from "vue";
defineOptions({
  name: "layout",
});
const navList = ref([
  {
    id: "1005000",
    name: "居家",
    children: [
      {
        id: "1005999003",
        name: "居家生活用品",
      },
      {
        id: "1008017",
        name: "收纳",
      },
    ],
  },
  {
    id: "1005002",
    name: "美食",
    children: [
      {
        id: "1005012",
        name: "南北干货",
      },
      {
        id: "1036003",
        name: "调味酱菜",
      },
    ],
  },
]);
</script>

<template>
  <div>
    <ul>
      <li class="home">
        <RouterLink to="/">首页</RouterLink>
      </li>
      <li v-for="(item, index) in navList" :key="index">
        <RouterLink active-class="active" :to="`/category/${item.id}`">
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
    <div class="test">头部</div>
    <RouterView />
    <div class="test">尾部</div>
  </div>
</template>
<style  scoped>
.test {
  width: 100%;
  height: 500px;
  background: rgb(150, 131, 131);
}
ul {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top:0
}
</style>
