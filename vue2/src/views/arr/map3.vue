<!--
 * @Author: your name
 * @Date: 2021-07-27 09:38:09
 * @LastEditTime: 2021-08-25 16:14:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\views\map\map1.vue
-->
<template>
  <div>
    <div>map3</div>
  </div>
</template>

<script>
const age=6
export default {
  data() {
    return {
      age:age
    };
  },
  created() {
    console.log(age)
    const person = {
      name: "Alice",
      age: 18,
      getAge: function () {
        return this.age;
      },
    };
    // 在map()的第二个参数thisArg中，可以指定回调函数callback的this对象
    // 不能使用箭头函数
    // 将person对象作为map()的第二个参数，这样在回调函数中就可以使用person对象的属性及方法了。
    // const newArray = [1, 2, 3].map(function (num) {
    //     console.log(this)
    //   return this.getAge() + num;
    // }, person);
    // console.log(newArray);
    const newArray = [1, 2, 3].map((num)=> {
        console.log(this)
      return person.getAge() + num;
    });
    console.log(newArray);

  },
  methods: {},
};
</script>

<style scoped></style>
