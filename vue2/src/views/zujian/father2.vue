<template>
  <div>
    <son2 v-model.number="count"></son2>
    <div @click="test">点击</div>
    <!-- <son2 :value="count"></son2> -->
  </div>
</template>

<script>
import son2 from "./components/son2";
export default {
  components: {
    son2,
  },
  data() {
    return {
      count: 6,
    };
  },
  created() {},
  methods: {
    test() {
      console.log(this.count, "count");
    },
  },
};
</script>

<style scoped></style>
