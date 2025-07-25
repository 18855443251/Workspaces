<template>
  <div>
    <!-- h获取类名 -->
    <p class="test blue mr">标签1</p>
    <p class="test blue">标签2</p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    const a=5
    a=5
    let p1 = document.getElementsByClassName("test");
    for (let i = 0; i < p1.length; i++) {
      p1[i].classList.add("red");
      p1[i].classList.remove("blue");
      p1[i].classList.toggle("mr");
    }
    console.log(p1);
  },
  methods: {},
};
</script>

<style scoped>
.test {
  color: aqua;
}
.blue {
  border: 1px solid blue;
}
.red {
  color: red;
  width: 220px;
}
.mr{
  margin-left: 30px;
}
</style>
