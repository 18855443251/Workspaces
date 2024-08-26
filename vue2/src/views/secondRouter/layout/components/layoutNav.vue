<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-03 16:41:47
 * @LastEditors: Please set LastEditors
 * @Description: $event
 * @FilePath: \vueDemo\src\views\dioAlert.vue
-->
<template>
  <div>
    <div v-for="(item, index) in dataList" :key="index">
      <!-- <div>{{ item.name }}</div> -->
      <RouterLink active-class="active" :to="`/category/${item.id}`">
        {{ item.name }}
      </RouterLink>
    </div>
  </div>
</template>

<script>
import setAliasDialog from "@/components/setAliasDialog";

export default {
  components: {
    [setAliasDialog.name]: setAliasDialog,
  },
  name: "home",
  data() {
    return {
      dataList: [
        {
          name: "首页",
          id: "001",
        },
        {
          name: "北京",
          id: "002",
        },
        {
          name: "上海",
          id: "003",
        },
        {
          name: "广州",
          id: "004",
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
