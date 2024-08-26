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
    <div>1、 执⾏同步任务 console.log(1) ，输出 1 ；</div>
    <div>2、 遇到 setTimeout 放到宏任务队列中，命名 time1 ；</div>
    <div>3、 遇到 setTimeout 放到宏任务队列中，命名 time2 ；</div>
    <div>
      4、new Promise 在实例化过程中所执⾏的代码都是同步执⾏的（ function
      中的代码），输出8 ；
    </div>
    <div>5、 将 Promise 中注册的回调函数放到微任务队列中，命名为 then1 ；</div>
    <div>6、 将 Promise 中注册的回调函数放到微任务队列中，命名为 then2 ；</div>
    <div>7、 执行同步任务 console.log(11)， 输出 11 ；</div>
    <div>8、 从微任务队列取出任务 then1 到主线程中，输出 9 ；</div>
    <div>
      9、 从微任务队列取出任务 then2 到主线程中，输出 10 ，此微任务队列为空；
    </div>
    <div>
      10、从宏任务队列中取出 time2( 注意这里不是 time1 的原因是 time2
      的执⾏时间为 0)；
    </div>
    <div>11、 执⾏同步任务 console.log(5) ，输出 5 ；</div>
    <div>
      12、new Promise 在实例化过程中所执行的代码都是同步执⾏的（ function
      中的代码），输出6 ；
    </div>
    <div>
      13、 将 Promise 中注册的回调函数放到微任务队列中，命名为 then3
      ，⾄此宏任务time2执⾏完成；
    </div>
    <div>
      14、 从微任务队列取出任务 then3 到主线程中，输出 7 ，此微任务队列为空；
    </div>
    <div>15、 从宏任务队列中取出 time1 ，此宏任务队列为空；</div>
    <div>16、 执⾏同步任务 console.log(2) ，输出 2 ；</div>
    <div>
      17、new Promise 在实例化过程中所执行的代码都是同步执行的（ function
      中的代码），输出3 ；
    </div>
    <div>
      18、 将 Promise 中注册的回调函数放到微任务队列中，命名为 then4
      ，此宏任务time1执行完成；
    </div>
    <div>
      19、 从微任务队列取出任务 then4 到主线程中，输出 4 ，此微任务队列为空。
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
    test() {
      console.log(1);
      setTimeout(function () {
        console.log(2);
        let promise = new Promise(function (resolve, reject) {
          console.log(3);
          resolve();
        }).then(function () {
          console.log(4);
        });
      }, 1000);
      setTimeout(function () {
        console.log(5);
        let promise = new Promise(function (resolve, reject) {
          console.log(6);
          resolve();
        }).then(function () {
          console.log(7);
        });
      }, 0);
      let promise = new Promise(function (resolve, reject) {
        console.log(8);
        resolve();
      })
        .then(function () {
          console.log(9);
        })
        .then(function () {
          console.log(10);
        });
      console.log(11);
      //执行顺序：1 8 11 9 10 5 6 7 2 3 4
    },
  },
};
</script>

<style scoped></style>
