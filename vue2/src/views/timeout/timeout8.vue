<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2022-06-17 14:10:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view"></div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {
      name: "",
    };
  },
  created() {
    this.test6();
  },
  methods: {
    test1() {
      // 1 2 3
      new Promise((resolve, reject) => {
        console.log("1");
        setTimeout(() => {
          console.log("2");
          resolve("3");
        }, 100);
      })
        .then((value) => {
          console.log(value); //3
        })
        .catch((error) => {
          console.log(error, "error");
        });
    },
    test2() {
      // 1 4 6 3 5 2
      console.log("1");
      setTimeout(() => {
        console.log("2");
      }, 0);
      this.$nextTick(() => {
        console.log("3");
      });
      new Promise((resolve, reject) => {
        console.log("4");
        resolve("5");
      }).then((value) => {
        console.log(value); //3
      });
      console.log("6");
    },
    test3() {
      // 1 4 6 3 5 2 7
      console.log("1");
      setTimeout(() => {
        console.log("2");
      }, 0);
      this.$nextTick(() => {
        console.log("3");
      });
      new Promise((resolve, reject) => {
        console.log("4");
        setTimeout(() => {
          console.log("7");
        }, 0);
        resolve("5");
      }).then((value) => {
        console.log(value); //3
      });
      console.log("6");
    },
    test4() {
      // 1 4 6 3 5 2 7
      console.log("1");
      setTimeout(() => {
        console.log("2");
      }, 0);
      this.$nextTick(() => {
        console.log("3");
      });
      new Promise((resolve, reject) => {
        console.log("4");
        resolve("5");
      }).then((value) => {
        setTimeout(() => {
          console.log("7");
        }, 0);
        console.log(value); //3
      });
      console.log("6");
    },
    test5() {
      // 1 4 6 3 5 2 7 8
      console.log("1");
      setTimeout(() => {
        console.log("2");
      }, 0);
      this.$nextTick(() => {
        console.log("3");
      });
      new Promise((resolve, reject) => {
        console.log("4");
        setTimeout(() => {
          console.log("7");
        }, 0);
        resolve("5");
      }).then((value) => {
        setTimeout(() => {
          console.log("8");
        }, 0);
        console.log(value); //3
      });
      console.log("6");
    },
    // 8为啥在2后面
    test6() {
      // 1 4 6 3 5  7 2 8
      console.log("1");
      this.$nextTick(() => {
        console.log("3");
      });
      new Promise((resolve, reject) => {
        console.log("4");
        setTimeout(() => {
          console.log("7");
        }, 0);
        resolve("5");
      }).then((value) => {
        setTimeout(() => {
          console.log("8");
        }, 0);
        console.log(value); 
      });
      setTimeout(() => {
        console.log("2");
      }, 0);
      console.log("6");
    },
  },
};
</script>
<style scoped></style>
