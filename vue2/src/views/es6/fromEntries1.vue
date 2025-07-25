
<template>
  <div>
    <div>fromEntries</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      name: "",
    };
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      const entries = [
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ];

      const obj = Object.fromEntries(entries);
      console.log(obj);
      // 输出: { a: 1, b: 2, c: 3 }
    },
  },
};
</script>

<style scoped></style>
