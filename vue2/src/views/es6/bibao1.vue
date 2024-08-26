<template>
  <div>
    <div class="gg">闭包</div>
  </div>
</template>
<script>
import tab from "@/components/tab";
export default {
  components: {
    tab,
  },
  name: "home",
  data() {
    return {};
  },
  mounted() {
    function outer() {
      const a = 1;
      function inner() {
        console.log(a);
      }
      inner();
    }
    outer();
  },
  methods: {},
};
</script>

<style scoped>
.gg {
  display: flex;
  flex-direction: row;
}
div {
  margin-right: 60px;
}
.test {
  margin-left: 20px;
}
</style>
