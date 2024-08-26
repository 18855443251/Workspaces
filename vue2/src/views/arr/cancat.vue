<template>
  <div>
    <div>arr1:{{arr1}}</div>
    <div>arr2:{{arr2}}</div>
    <div>arr3:{{arr3}}</div>
  </div>
</template>

<script>
import join1Vue from "./join1.vue";
export default {
  name: "home",
  data() {
    return {
      arr1: [],
      arr2: [1, 3, 4, "a"],
      arr3: [],
    };
  },
  created() {
    // this.test1();
    // this.test2();
    // this.test3();
    this.test4();
  },
  methods: {
    // 如果对象里面包含基本数据类型和引用类型，应该这么说 扩展运算对对象里面的引用类型执行的是浅拷贝  对对象里面的基本数据类型执行的是深拷贝
    test1() {
      this.arr3 = this.arr1.concat(this.arr2); //[1, 1, 3, 4, 'a']
    },
    // 当然若拼接的第一个数组是[]空数组，就实现了一个数组拷贝，这也是数组拷贝的一个方法，而且是深拷贝哦。
    test2() {
      this.arr3 = this.arr1.concat(this.arr2); //[ 1, 3, 4, 'a']
    },
    // 简单情况都是基本类型时
    test3() {
      const originArray = [1, 2, 3, 4, 5]; //一层数组
      const cloneArray = originArray.concat();
      // 对象的比较是引用的比较 而不是值的比较 ==是值的比较
      console.log(cloneArray === originArray); // false
      cloneArray.push(6);
      console.log(cloneArray); // [1,2,3,4,5,6]
      console.log(originArray); //[1, 2, 3, 4, 5]
    },
    test4() {
      // const originArray = [1, [1, 2, 3], { a: 1 }]; //多层数组
      // const cloneArray = originArray
      // const cloneArray = originArray.concat();
      // cloneArray[0] = 2;
      // console.log(originArray);// [1,[1,2,3],{a:1}];   修改cloneArray的第一个值不影响原数组

      //有引用类型时
      const originArray = [1, [1, 2, 3], { a: 1 }]; //多层数组
      const cloneArray = originArray.concat();
      cloneArray[1].push(4);
      // cloneArray[2].a = 2;
      console.log(originArray); // [1,[1,2,3,4],{a:1}]   //修改cloneArray的数组和对象值时会影响原数组，说明两者的引用是同一个
    },
  },
};
</script>

<style scoped></style>
