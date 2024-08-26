<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 17:00:43
 * @LastEditors: Please set LastEditors
 * @Description:定时器
 * @FilePath: \vueDemo\src\views\string\match1.vue
-->
<template>
  <div>
    <div>1、遇到setTimeout，异步宏任务将其放到宏任务列表中，命名为time1；</div>
    <div>
      2、newPromise 在实例化过程中所执行的代码都是同步执行的（ function
      中的代码），输出2 ；
    </div>
    <div>3、 将 Promise中注册的回调函数放到微任务队列中，命名为 then1 ；</div>
    <div>
      4、执行同步任务console.log('4') ，输出 4 ，此执行栈中的代码执形完毕；
    </div>
    <div>
      5、从微任务队列取出任务 then1 到主线程中，输出 3 ，此微任务队列为空；
    </div>
    <div>
      6、从宏任务队列中取出任务 time1 到主线程中，输出 1 ，此宏任务队列为空
    </div>
  </div>
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
    // 2 5  3 4 1
    test() {
      setTimeout(() => {
        console.log("1");
      });
      new Promise(function (resolve) {
        console.log("2");
        resolve();
      })
        .then((res) => {
          // res undefines
          console.log("3");
        })
        .then((res) => {
          console.log("4");
        });
      console.log("5");
    },
  },
};
</script>

<style scoped></style>
