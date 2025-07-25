
<template>
  <div class="page">
    <!-- this指向 -->
    <div>{{ msg }}</div>
  </div>
</template>
<script>
export default {
  name: "thisCompletion",
  components: {},
  data() {
    return {
      msg: "",
    };
  },
  created() {
    this.query1();
  },
  methods: {
    query1() {
      let obj = {
        firstName: "Bill",
        add() {
          let count = 0;
          let arrow = () => {
            console.log(count, this.firstName); // 0 'Bill'
          };
          arrow();
        },
      };
      obj.add();
    },
  },
};
</script>
<style scoped>
</style>