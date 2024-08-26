<template>
  <div>
    <div>数组扁平化及去重</div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {
      var arr = [
        [1, 2, 2],
        [3, 4, 5, 5],
        [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
        10,
      ];
      let arrHandle = (item) => {
        return item
          .toString()
          .split(",")
          .map((elelment) => {
            return Number(elelment);
          });
      };       
      let newArr = Array.from(new Set(arrHandle(arr))).sort((a, b) => a - b);
      console.log(newArr)
    },
  },
};
</script>

<style scoped></style>
