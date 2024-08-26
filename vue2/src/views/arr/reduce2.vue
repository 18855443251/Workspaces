<template>
  <div>
    <div>hh</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      arrList: [
        {
          status: true,
          prince: 25,
        },
        {
          status: false,
          prince: 25,
        },
        {
          status: true,
          prince: 3,
        },
      ],
    };
  },
  created() {
    this.test();
  },
  methods: {
    // slice() 方法不会改变原始数组。
    test() {
      let result = this.arrList
        .filter((item) => item.status)
        .reduce((sum, element) => {
          return (sum += element.prince);
        }, 0);
      console.log(result);
    },
  },
};
</script>

<style scoped></style>
