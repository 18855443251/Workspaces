<template>
  <mp-lamp
    :lampStyle="getLampStyle"
    type="row"
    @mpLampItemClick="mpLampItemClick"
    @mpLampListClick="mpLampListClick"
  ></mp-lamp>
</template>

<script>
import mpLamp from "@/components/mpLamp";
const context = weex.requireModule("context");
export default {
  components: {
    mpLamp,
  },
  data() {
    return {
      data: {
        margin: "52",
        radius: "25",
      },
      noticeList: [{ title: "公共" }],
    };
  },
  computed: {
    // getShowNoticeList() {
    //   return this.data.noticeList;
    // },
    getLampStyle() {
      return {
        "margin-left": this.data.margin + "px",
        "margin-right": this.data.margin + "px",
        "border-radius": this.data.radius + "px",
      };
    },
  },
  methods: {
    mpLampItemClick(value) {
      console.log(JSON.stringify(value));
      this.jump("/login");
    },
    mpLampListClick() {
      console.log(JSON.stringify(value));
      this.jump("/login");
    },
  },
};
</script>

<style scoped>
</style>
