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
    //   1、数组里面的值相减
    let yList = [1, 2, 5, 7, 9];
    let res = [];
    for (let i = 0; i < yList.length; i++) {
      console.log(i,'Jj')
      if (yList[i + 1]) {
        res.push(yList[i + 1] - yList[i]);
      }
    }
    console.log(res);//[1, 3, 2, 2]
  },
  methods: {},
};
</script>

<style scoped></style>
