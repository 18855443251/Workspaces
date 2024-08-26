<template>
  <div class="login-view">
    <input
      type="text"
      v-model="inputStr"
      @keypress.enter="search"
      :placeholder="msg"
      @focus="clearmsg"
      @blur="addmsg"
    />
    <div class="fangge" @click="getFocus">
      <input
        ref="verinput"
        type="number"
        @input="watchinput"
        v-model="tokenName"
        maxlength="6"
        style="width:1px;height:1px;opacity:0;"
      />
    </div>
  </div>
</template>
<script>
const context = weex.requireModule("context");
export default {
  name: "Login",
  data() {
    return {
      inputStr: "",
      msg: "输入工号",
    };
  },
  methods: {},
};
</script>
<style scoped>
</style>
