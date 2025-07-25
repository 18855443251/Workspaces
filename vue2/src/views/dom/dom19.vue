<template>
  <div>
    <ul>
      <li
        v-for="(obj, index) in list1"
        :key="index"
        :ref="index"
        @click="hanlderClick"
      >
        {{ obj }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",

  data() {
    return {
      list1: ["a", "b", "c", "d"],
    };
  },
  mounted() {},
  methods: {
    hanlderClick() {
      this.list1.forEach((obj, index, arr) => {
        console.log(this.$refs[index][0]);
      });
    },
  },
};
</script>

<style scoped>
</style>
