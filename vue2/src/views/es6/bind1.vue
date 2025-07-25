
<template>
  <div>
    <div>bind</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      name: "",
    };
  },
  created() {
    const obj = {
      age: 18,
    };
    function fn() {
      console.log(this);
    }

    // 1. bind 不会调用函数
    // 2. 能改变this指向
    // 3. 返回值是个函数，  但是这个函数里面的this是更改过的obj
    const fun = fn.bind(obj);
    // console.log(fun)
    fun();
  },
  methods: {},
};
</script>

<style scoped></style>
