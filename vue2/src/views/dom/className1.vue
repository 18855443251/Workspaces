<template>
  <div>
    <div id="test" class="test">选择器1</div>
    <p>标签</p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    // className是使用新值换旧值, 如果需要添加一个类,需要保留之前的类
    let div = document.getElementById("test");
    div.className = "red";
    console.log(div);
  },
  methods: {},
};
</script>

<style scoped>
.test {
  color: aqua;
}
.red {
  color: red;
  width: 220px;
}
</style>
