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
    // let a = this.test1();
    // console.log(a); //返回的是一个promise对象
    // this.test1().then((value) => {
    //   console.log(value);
    // });
    // this.test2(false)
    //   .then((value) => {
    //     console.log(value, "value");
    //   })
    //   .catch((error) => {
    //     console.log(error, "error");
    //   });
    // this.test3(true)
    //   .then((value) => {
    //     console.log(value, "value");
    //   })
    //   .catch((error) => {
    //     console.log(error, "error");
    //   });

    this.test4()
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  },
  methods: {
    // async写在函数前，返回一个promise对象，当返回值不是一个promise对象，会强制转为promise对象
    async test1() {
      return "成功";
    },
    async test2(flag) {
      if (flag) {
        return "成功";
      } else {
        throw "错误";
      }
    },
    async test3(flag) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (flag) {
            resolve("成功");
          } else {
            reject("失败");
          }
        });
      }, 3000);
    },
    async test4() {
      // return Promise.resolve("成功");
      return Promise.reject("失败");
    },
  },
};
</script>
<style scoped>
</style>