<script setup>
defineOptions({
  name: "subCategory",
});
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const subList = ref([
  {
    id: "1005999003",
    name: "居家生活用品",
    parentId: "1005000",
    parentName: "居家",
  },
  {
    id: "1008017",
    name: "收纳",
    picture: null,
    parentId: "1005000",
    parentName: "居家",
  },
  {
    id: "1005012",
    name: "南北干货",
    picture: null,
    parentId: "1005002",
    parentName: "美食",
  },
  {
    id: "1036003",
    name: "调味酱菜",
    picture: null,
    parentId: "1005002",
    parentName: "美食",
  },
]);
const categoryData = ref({});
categoryData.value = subList.value.filter(
  (item) => item.id == route.params.id
)[0];
</script>

<template>
  <div>
    <div>
      <div>{{ route.params.id }}</div>
      <RouterLink :to="{ path: '/' }">首页&gt;</RouterLink>
      <RouterLink :to="{ path: `/category/${categoryData.parentId}` }"
        >{{ categoryData.parentName }}&gt;</RouterLink
      >
      <RouterLink :to="`/category/sub/${route.params.id}`">{{
        categoryData.name
      }}</RouterLink>
    </div>
    <div>{{ categoryData.name }}</div>
  </div>
</template>
<style  scoped>
</style>
