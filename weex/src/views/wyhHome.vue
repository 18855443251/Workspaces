<template>
  <div>
    <headerBar
      @navclick="showNav"
      :navUnread="navUnread"
      :handleUnread="handleUnread"
      :dateUnread="dateUnread"
    />
    <scroller show-scrollbar="false" offset-accuracy="100" @scroll="changeY">
      <div>
        <text ref="business-morningpost" class="test" :style="{'color':themeStyle.fontColor}">业务早报</text>
        <text
          ref="agency-dlmoney"
          class="test"
          :style="[changebgColor ? {backgroundColor:'red'}:{backgroundColor:'blue'}]"
        >机构存贷款</text>
        <text ref="website-thread" class="test">网点运营</text>
        <text ref="special-activity" class="test">近期专项活动</text>
        <text ref="achievement-norm" class="test">业绩指标</text>
        <text ref="earn-chance" class="test">经营机会</text>
        <text ref="business-risk" class="test">经营风险</text>
        <text ref="stuff-score" class="test">机构员工业绩</text>
        <text ref="ygfz-comp" class="test">员工发展</text>
      </div>
    </scroller>
    <nav-jump :show="isNavShow" @navigateto="scrollTo" :refsList="refsList"></nav-jump>
  </div>
</template>

<script>
import headerBar from "@/components/bank/headerBar.vue";
import navJump from "@/components/bank/navJump"; //导航
const dom = weex.requireModule("dom");
export default {
  components: {
    headerBar,
    navJump,
  },
  data() {
    return {
      osType: "android",
      changebgColor: false,
      handleUnread: false,
      dateUnread: true,
      navUnread: true,
      isNavShow: false,
      offsetY: "",
      refsList: {
        "business-morningpost": {
          ref: "business-morningpost",
          name: "业务早报",
        },
        "agency-dlmoney": { ref: "agency-dlmoney", name: "机构存贷款" },
        "website-thread": { ref: "website-thread", name: "网点运营" },
        "special-activity": { ref: "special-activity", name: "近期专项活动" },
        "achievement-norm": { ref: "achievement-norm", name: "业绩指标" },
        "earn-chance": { ref: "earn-chance", name: "经营机会" },
        "business-risk": { ref: "business-risk", name: "经营风险" },
        "stuff-score": { ref: "stuff-score", name: "机构员工业绩" },
        "ygfz-comp": { ref: "ygfz-comp", name: "员工发展" },
      },
    };
  },
  created() {
    Object.keys(this.refsList).forEach((item, index) => {
      this.refsList[item].isNew = true;
    });
    // this.osType = weex.config.env.platform.toLowerCase();
  },
  watch: {
    //监听refsList判断小红点的消失
    refsList: {
      immediate: true,
      deep: true,
      handler() {
        let newArr = Object.keys(this.refsList).filter((item, index) => {
          return this.refsList[item].isNew == true;
        });
        if (newArr.length == 0) {
          this.navUnread = false;
        }
      },
    },
  },
  methods: {
    // 点击跳转到指定位置
    showNav() {
      this.isNavShow = true;
    },
    scrollTo(value) {
      let offset = this.osType === "android" ? -132 : 120;
      if (value) {
        dom.scrollToElement(this.$refs[value.ref], {
          offset,
        });
      }
      this.isNavShow = false;
      this.navUnread = false;
    },
    //改变背景色
    changeY(e) {
      this.offsetY = e.contentOffset.y;
      if (this.offsetY < 550) {
        this.changebgColor = true;
      } else {
        this.changebgColor = false;
      }
      console.log(this.offsetY);
      // this.alertMsg(this.offsetY);
    },
  },
};
</script>

<style scoped>
.bg_img {
  height: 176px;
  width: 750px;
}
.search_image {
  width: 70px;
  height: 70px;
}
.test {
  width: 750px;
  height: 300px;
}
</style>