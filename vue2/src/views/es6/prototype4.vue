
<template>
  <div>
    <div>JavaScript prototype 属性允许您为对象构造器添加新属性：</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      fruits: ["Banana", "Orange", "Apple"],
    };
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
      }
      // 通过原型对象实现继承
      // 原型对象的作用:定义所有实例对象共享的属性和方法
      Person.prototype.nationality = "English";
      Person.prototype.name = function () {
        return this.firstName + " " + this.lastName;
      };
      var myFriend = new Person("Bill", "Gates", 62, "blue");
      console.log(myFriend.nationality);
      console.log(myFriend.name());
    },
  },
};
</script>
<style scoped>
</style>
