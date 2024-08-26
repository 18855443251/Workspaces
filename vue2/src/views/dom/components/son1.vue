<template>
  <div>
    <div>{{ message }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "子组件的值",
    };
  },
  created() {
    console.log("进来了");
  },
  methods: {
    test() {
      console.log("哈哈");
    },
  },
};
</script>
