<template>
  <div>
    <p class="test">标签1</p>
    <p class="test">标签2</p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    let p1 = document.getElementsByTagName("p");
    for (let i = 0; i < p1.length; i++) {
      p1[i].style.color = "red";
    }

    console.log(p1);
  },
  methods: {},
};
</script>

<style scoped>
</style>
