<template>
  <div class="page">
    <div id="app">
      <div>
        姓： <input type="text" v-model="firstName" @input="getKeyPd" />
      </div>
      <div>名:<input type="text" v-model="lastName" /></div>
      <div>姓名：{{ fullname }}</div>
      <div>{{ money }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "thisCompletion",
  components: {},
  data() {
    return {
      firstName: "张",
      lastName: "云",
      fullname: "张云",
    };
  },
  watch: {
    // watch默认第一次加载不做监听，如果需要第一次加载做监听，添加immediate
    firstName: {
      handler(newval, oldval) {
        console.log(newval, "newval");
        console.log(oldval, "oldval");
        this.fullname = newval + this.lastName;
      },
      immediate: true,
    },
    lastName(newval, oldval) {
      console.log(newval, "newval");
      console.log(oldval, "oldval");
      this.fullname = this.firstName + newval;
    },
  },
  computed: {
    money() {
      console.log("computed");
    },
  },
  methods: {
    getKeyPd(event) {
      let keyPd = event.target.value;
      console.log(keyPd, "获取输入的值");
    },
  },
};
</script>
<style scoped>
</style>