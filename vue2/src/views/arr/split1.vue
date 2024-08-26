<template>
  <div></div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    this.test();
  },
  methods: {
    // split() 方法不改变原始字符串。
    // split() 方法用于把一个字符串分割成字符串数组。
    test() {
      var str = "How are you doing today?";
      console.log(str.split()); //['How are you doing today?']
      console.log(str.split(" ")); //['How', 'are', 'you', 'doing', 'today?']
      console.log(str.split(" ", 3)); //['How', 'are', 'you']
      console.log(str.split("o")); //['H', 'w are y', 'u d', 'ing t', 'day?']
    },
  },
};
</script>

<style scoped></style>
