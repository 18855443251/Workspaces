<template>
  <div>
    <div>
      flat()
      方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回,
      不会改变原数组
    </div>
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
    this.test1();
    this.test2();
    this.test3();
  },
  methods: {
    // 扁平化数组，不传递参数的时候默认为一层
    test() {
      let arr = [1, 2, [3, [4, [5]]]];
      const reasut = arr.flat();
      console.log(reasut); // [1, 2, 3, [4,[5]]]
    },
    // 设置扁平化的深度
    test1() {
      let arr = [1, 2, [3, [4, [5]]]];
      const reasut2 = arr.flat(3);
      console.log(reasut2); // [1, 2, 3, 4, 5]
    },
    // 当传入Infinity时，相当于扁平化最深层次的数组
    test2() {
      let arr = [1, 2, [3, [4, [5]]]];
      const reasut3 = arr.flat(Infinity);
      console.log(reasut3); // [1, 2, 3, 4, 5]
    },
    // 当数组里面有空项的时候，会过滤掉空值
    test3() {
      const arr2 = [1, , 2, [3]];
      const reasut4 = arr2.flat();
      console.log(reasut4); // [1, 2, 3]
    },
  },
};
</script>

<style scoped></style>
