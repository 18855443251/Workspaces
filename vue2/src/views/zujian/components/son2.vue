<template>
  <div>
    <input type="text" v-model="number" />
  </div>
</template>

<script>
export default {
  name: "home",
  props: {
    value: {
      type: Number,
      required: true,
      default: 0,
      validator(val) {
        // console.log(val)
        if (val >= 100 || val <= 0) {
          console.error("传入的范围必须是0-100之间");
          return false;
        } else {
          return true;
        }
      },
    },
  },
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    value: {
      handler(val) {
        console.log(val, "value");
        this.number = val;
      },
      immediate: true,
    },
    number(val) {
      console.log(val, "number");
      this.$emit("input", val);
    },
  },
  methods: {},
};
</script>

<style scoped></style>
