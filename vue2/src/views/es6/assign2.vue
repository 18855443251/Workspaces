
<template>
  <div></div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    // Object.assign()而言，如果对象的属性值为简单类型（string，number），通过Object.assign({},srcobj);得到的新对象为深拷贝；如果属性值为对象或其他引用类型，那对于这个对象而言其实是浅拷贝的
    const obj1 = { name: "张三", a: { b: 1 } };
    const obj2 = Object.assign({}, obj1);
    obj1.a.b = 2;
    obj1.name = "李四";
    // obj2.a.b; // 2
    console.log(obj1);
    console.log(obj2);
  },
  methods: {},
};
</script>

<style scoped></style>
