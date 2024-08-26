<template>
  <div>
    <ul>
      <li v-for="(item, index) in booksList" >
        <input type="text" />
        <span>{{ item.name }}</span>
        <span>{{ item.author }}</span>
        <button @click="del(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      booksList: [
        { id: 1, name: "《红楼梦》", author: "曹雪芹" },
        { id: 2, name: "《西游记》", author: "吴承恩" },
        { id: 3, name: "《水浒传》", author: "施耐庵" },
        { id: 4, name: "《三国演义》", author: "罗贯中" },
      ],
    };
  },
  methods: {
    del(id) {
      this.booksList = this.booksList.filter((item) => item.id !== id);
    },
  },
};
</script>

<style>
</style>