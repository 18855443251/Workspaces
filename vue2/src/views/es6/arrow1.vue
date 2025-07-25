<template>
  <div>
    <div>箭头函数</div>
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
    window.addEventListener("click", function () {
      console.log(this); //window
    });
    let test = function () {
      setTimeout(function () {
        console.log(this);
      });
      console.log(this, "火锅"); //undefined
    };
    test();
    let test1 = () => console.log(this);
    test1();
  },
  methods: {},
};
</script>

<style scoped></style>
