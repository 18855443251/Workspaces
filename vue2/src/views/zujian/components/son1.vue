<template>
  <div>
    <div>{{ name }}</div>
    <div @click="changeFather">调用父亲的方法</div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      name: "张三",
      sonList: [
        {
          bankName: "农业",
        },
        {
          bankName: "建设",
        },
      ],
    };
  },
  methods: {
    childMethods() {
      this.name = "李四";
    },
    changeFather() {
      this.$parent.test();
    },
  },
};
</script>
