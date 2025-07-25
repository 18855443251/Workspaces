
<template>
  <div>
    <div class="test">箭头函数</div>
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
    let test = function (x, y) {
      return x + y;
    };
    console.log(test(1, 2));
    let test1 = (x, y) => x + y;
    console.log(test1(3, 2));
  },
  mounted() {
    let a = document.querySelector(".test");
    a.addEventListener("click", () => {
      console.log(this);
    });
  },
  methods: {},
};
</script>

<style scoped></style>
