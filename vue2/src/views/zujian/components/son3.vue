<template>
  <div>
    <input v-model="inputValue" />
    <!-- <input v-bind:value="inputValue" v-on:input="inputValue = $event.target.value"> -->
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  watch: {
    value: {
      handler(value) {
        this.inputValue = value;
      },
      immediate: true,
    },
    inputValue: {
      handler(value) {
        this.$emit("input", value);
      },
    },
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
