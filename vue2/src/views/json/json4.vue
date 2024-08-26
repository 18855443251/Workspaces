<template>
  <div>{{ res }}</div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      res: "",
    };
  },
  created() {
    this.test();
    // this.test1();
  },
  methods: {
    test() {
      axios
        .get("/test.json")
        .then((res) => {
          this.res = res;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    test1() {
      this.$axios
        .post("test.do")
        .then((res) => {
          this.res = res;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
