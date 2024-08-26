<template>
  <div class="lamp" :style="lampStyle">
    <div class="lamprow">
      <text class="notice-bank">营行</text>
      <text class="notice-title">公告</text>
    </div>
    <div class="lamp-marquee">
      <div
        :class="[type == 'row' && 'lamp-marquee-r', type == 'cols' && 'lamp-marquee-c']"
        ref="lamp"
        :lamp_list="lamp_list"
      >
        <div v-for="(item, key1) in lampList" :key="key1 + '-1'" @click="mpLampItemClick(item)">
          <text class="lamp-title">{{ item.title }}</text>
        </div>
        <div v-for="(item, key2) in lampList" :key="key2 + '-2'" @click="mpLampItemClick(item)">
          <text class="lamp-title">{{ item.title }}</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const stream = weex.requireModule("stream");
const context = weex.requireModule("context");
const animation = weex.requireModule("animation");

export default {
  props: {
    type: {
      type: String,
      default: "row",
    },
    duration: {
      type: String,
      default: "1000",
    },
    stoping: {
      type: String,
      default: "3000",
    },
    lampStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      lampList: [
        { title: "测试1" },
        { title: "测试2" },
        { title: "测试3" },
        { title: "测试4" },
      ], //跑马灯数据
      lampLength: null, //跑马灯条数
      step: 0, //当前所在第几条
      timer: null,
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.lampLength = this.lampList.length;
      this.step = 0;
      this.loading();
    },
    loading() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.step = this.step + 1;
        this.animateTranstion(this.step);
      }, this.stoping);
    },
    animateTranstion(step, duration = this.duration) {
      animation.transition(
        this.$refs["lamp"],
        {
          styles: {
            transform: this.transformStyle(step),
          },
          duration: duration,
          timingFunction: "ease-out",
          delay: 0,
        },
        () => {
          if (this.step == this.lampLength) {
            this.step = 0;
            this.animateTranstion(this.step, 0);
          }
          this.loading();
        }
      );
    },
    transformStyle(range) {
      let style = "";
      if (this.type == "row") {
        style = "translateX(-" + 520 * range + "px)";
      } else if (this.type == "cols") {
        style = "translateY(-" + 50 * range + "px)";
        alert(style);
      }
      return style;
    },
    mpLampItemClick(item) {
      this.$emit("mpLampItemClick", item);
    },
  },
};
</script>
<style scoped>
.lamp {
  padding-left: 27px;
  padding-right: 20px;
  height: 87px;
  line-height: 87px;
  flex-direction: row;
  align-items: center;
  background-color: #63c314;
  margin-top: 24px;
}
.lamp-image {
  width: 80px;
  height: 40px;
}
.lamprow {
  flex-direction: row;
  align-items: center;
  background: #c4e91f;
}
.notice-bank {
  font-weight: bord;
  line-height: 87px;
  font-size: 28px;
  color: #1b1b1b;
}
.notice-title {
  margin-left: 5px;
  width: 60px;
  height: 32px;
  line-height: 32px;
  font-size: 26px;
  color: #ffffff;
  text-align: center;
  border-radius: 2px;
  background-color: #fe7d37;
}
.lamp-marquee {
  width: 420px;
  height: 50px;
  margin-left: 30px;
  overflow: hidden;
  background-color: aqua;
}
.lamp-marquee-c {
  /* height: 300px; */
  /* position: absolute; */
  flex-direction: column;
}
.lamp-marquee-r {
  flex-direction: row;
}
.lamp-title {
  width: 520px;
  height: 50px;
  line-height: 50px;
  text-overflow: ellipsis;
  font-size: 28px;
  color: #404561;
  overflow: hidden;
  text-overflow: ellipsis;
  lines: 1;
}
</style>
