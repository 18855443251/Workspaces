<template>
  <wxc-popup
    :show="isBottomShow"
    :overlay-cfg="{'can-auto-close':false}"
    pos="bottom"
    :height="height"
  >
    <div class="content" v-for="(item , index) in wayList" :key="index">
      <text class="wayText" @click="clickItem(item,index)">{{item.wayName}}</text>
    </div>
    <div class="line_grey"></div>
    <text class="dismiss" @click="cancelBtn()">取消</text>
  </wxc-popup>
</template>
<script>
import { WxcPopup } from "weex-ui";
export default {
  components: {
    WxcPopup,
  },
  props: {
    isBottomShow: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: "",
    },
    wayList: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      test: false,
      currentIndex: 0,
    };
  },
  methods: {
    clickItem(item, index) {
      this.$emit("clickItem", item, index);
    },
    cancelBtn() {
      this.$emit("clickItem");
    },
  },
};
</script>
<style scoped>
.wayText {
  height: 88px;
  text-align: center;
  line-height: 88px;
  font-size: 32px;
  color: #333333;
  border-bottom-color: #f0f0f0;
  border-bottom-width: 2px;
  border-bottom-style: solid;
}
.line_grey {
  height: 16px;
  background-color: #f8f8f8;
}
.dismiss {
  height: 88px;
  text-align: center;
  line-height: 88px;
  font-size: 32px;
  color: #a67342;
}
.changeBg {
  background-color: #d4c89e;
}
</style>


