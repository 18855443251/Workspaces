<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2022-06-17 14:10:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view">
    <div>{{ name }}</div>
  </div>
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
    // 写法一
    // let myPromise = new Promise(function (myResolve, myReject) {
    //   let x = 0;
    //   if (x == 0) {
    //     myResolve("OK");
    //   } else {
    //     myReject("Error");
    //   }
    // });
    // myPromise.then(
    //   function (value) {
    //     console.log(value);
    //   },
    //   function (error) {
    //     console.log(error);
    //   }
    // );
    // 写法二
    // let myPromise = new Promise((myResolve, myReject) => {
    //   let x = 0;
    //   if (x == 0) {
    //     myResolve("OK");
    //   } else {
    //     myReject("Error");
    //   }
    // });
    // myPromise.then(
    //   (value) => {
    //     console.log(value);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // 写法三
    // this.test()
    //   .then((value) => {
    //     console.log(value);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // 写法四
    this.test1();
  },
  methods: {
    test() {
      return new Promise((myResolve, myReject) => {
        let x = 5;
        if (x == 0) {
          myResolve("OK");
        } else {
          myReject("Error");
        }
      });
    },
    test1() {
      new Promise((myResolve, myReject) => {
        let x = 3;
        if (x == 0) {
          myResolve("OK");
        } else {
          myReject("Error");
        }
      })
        .then((value) => {
          console.log(value);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped></style>
