<script setup>
defineOptions({
  name: "category",
});
import { ref } from "vue";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";
import { useCategory } from "@/stores/useCategory.js";
// const { categoryData } = useCategory();
const route = useRoute();
const categoryData = ref({});
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
categoryData.value = navList.value.filter(
  (item) => item.id == route.params.id
)[0];
console.log(categoryData.value);
onBeforeRouteUpdate((to) => {
  // 存在问题：使用最新的路由参数请求最新的分类数据
  categoryData.value = navList.value.filter(
    (item) => item.id == to.params.id
  )[0];
});
</script>

<template>
  <div>
    <div>
      <div>{{ route.params.id }}</div>
      <RouterLink :to="{ path: '/' }">首页</RouterLink>><RouterLink
        :to="`/category/${route.params.id}`"
        >{{ categoryData.name }}</RouterLink
      >
    </div>
    <ul>
      <li v-for="i in categoryData.children" :key="i.id">
        <RouterLink :to="`/category/sub/${i.id}`">
          <p>{{ i.name }}</p>
        </RouterLink>
      </li>
    </ul>
    <div>{{ categoryData.name }}</div>
  </div>
</template>
<style  scoped>
ul {
  display: flex;
  justify-content: space-between;
}
</style>
