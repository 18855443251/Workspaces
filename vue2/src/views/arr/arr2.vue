<template>
  <div>
    <!-- <div>{{ newArr }}</div> -->
    <!-- <input id="demo" type="text" v-model="name" /> -->
    <div>就很好</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      // 数组去重
      newArr: [1, 5, 5, 9, 2, 8],
    };
  },
  created() {
    // this.test()
    // this.test1();
    this.test2();
  },
  methods: {
    test() {
      let a = [...new Set(this.newArr)];
      console.log(a);
    },
    test1() {
      let a = [];
      for (let item of this.newArr) {
        if (a.indexOf(item) == -1) {
          a.push(item);
        }
      }
      console.log(a);
    },
    test2() {
      let a = this.newArr.filter((item, index, arr) => {
        return arr.indexOf(item) === index;
      });
      console.log(a);
    },
  },
};
</script>

<style scoped></style>
