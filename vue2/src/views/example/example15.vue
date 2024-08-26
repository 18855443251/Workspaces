<template>
  <div>
    <input
      type="text"
      ref="aliasInput"
      v-model="tlid"
      class="alias-input mgt28"
      placeholder="请输入编号"
      @input="input"
    />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      tlid: "",
      timeout: null, // 防抖计时器
      flag: true,
    };
  },
  // watch: {
  //   tlid(curVal, oldVal) {
  //     console.log(oldVal + "旧值", curVal + "当前输入");
  //     // 实现input连续输入，只发一次请求
  //     if (curVal) {
  //       if (this.timeout) {
  //         clearTimeout(this.timeout);
  //       }
  //       this.timeout = setTimeout(async() => {
  //           let res=await new Promise((resolve,reject)=>{
  //             resolve('2')
  //           })
  //           console.log(res,'res')
  //       }, 300);
  //     }
  //   },
  // },
  // 防抖: 触发高频事件后n秒后，函数只会执行依次，如果n秒内再次触发，则重新计时
  // 节流: 高频事件触发，但是在n秒内只会执行一次，在这n秒内，无论触发多少次，只会执行一次，节流会稀释函数的执行频率
  //   防抖的应用场景:
  // 1 resize窗口缩放
  // 2 输入框中不停输入

  // 节流应用场景
  // 1 scroll滚动事件,上拉加载
  // 2 按钮不停点击
  methods: {
    findPlatformTlfmInfoByTlid(curVal) {
      this.$axios
        .post("Timestamp.do", {}, { disableOverLayShow: true })
        .then((data) => {});
    },
    input() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.findPlatformTlfmInfoByTlid();
      }, 300);
    },
    // 节流
    throttle() {
      if (this.flag) {
        setTimeout(() => {
          console.log("value");
          this.flag = true;
        }, 1000);
      }
      this.flag = false;
    },
  },
  beforeDestroy() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout=null
  },
};
</script>

<style scoped>
</style>
