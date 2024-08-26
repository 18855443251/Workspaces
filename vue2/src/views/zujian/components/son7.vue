<template>
  <div>
    <div>孩子7</div>
    <div>{{ data.name }}</div>
    <div @click="test">点击{{ count }}</div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    test() {
      this.count++;
    },
  },
};
</script>
