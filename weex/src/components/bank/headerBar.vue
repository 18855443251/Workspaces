<template>
  <div class="fix_head">
    <image :class="['bg_img']" :src="themeStyle.bgImg" />
    <div class="search_title">
      <increase-image
        src="handling"
        title="导航"
        :isUnread="navUnread"
        @iconclick="$emit('navclick')"
      ></increase-image>
      <increase-image
        src="kqs"
        title="待办"
        :isUnread="handleUnread"
        @iconclick="launch('main.handle')"
      ></increase-image>
      <increase-image
        src="kqs"
        title="日程"
        :isUnread="dateUnread"
        @iconclick="launch('main.schedule')"
      ></increase-image>
      <div class="search_box" @click="launch('main.searchFromHome')">
        <image class="search_image" :src="themeStyle.handled" />
      </div>
    </div>
  </div>
</template>

<script>
import IncreaseImage from "@/components/bank/increaseImage.vue";
export default {
  components: {
    IncreaseImage,
  },
  props: {
    handleUnread: {
      type: Boolean,
      default: false,
    },
    dateUnread: {
      type: Boolean,
      default: false,
    },
    navUnread: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    handleUnread: {
      // immediate: true,
      handler() {
        this.$set(this.titleList[0], "isUnread", this.handleUnread);
      },
    },
    dateUnread: {
      // immediate: true,
      handler() {
        this.$set(this.titleList[1], "isUnread", this.dateUnread);
      },
    },
    navUnread: {
      handler() {
        this.$set(this.titleList[2], "isUnread", this.navUnread);
      },
    },
  },
  data() {
    return {
      changebgColor: false,
      titleList: [
        {
          icon: "handle",
          title: "待办",
          url: "main.handle",
          isUnread: false,
        },
        {
          icon: "date",
          title: "日程",
          url: "main.schedule",
          isUnread: false,
        },
        {
          icon: "nav",
          title: "导航",
          // url: "main.schedule",
          isUnread: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg_img {
  height: 176px;
  width: 750px;
}
.input {
  width: 292px;
  line-height: 64px;
  height: 64px;
  font-size: 26px;
  color: #fff;
}
.search_title {
  width: 750px;
  height: 88px;
  top: 88px;
  padding-left: 32px;
  padding-right: 32px;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
}
.search_box {
  height: 64px;
  width: 446px;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 35px;
}
.search_image {
  height: 28px;
  width: 28px;
  margin-left: 30px;
  margin-right: 16px;
}
.title_box {
  height: 64px;
  align-items: center;
  flex-direction: row;
  right: 0px;
}
.title_item_box {
  height: 48px;
  justify-content: center;
  align-items: center;
  border-right-color: #fff;
}
.title_icon {
  height: 32px;
  width: 32px;
}
.mt {
  /* margin-top: 24px; */
}
.title_text {
  /* width: 64px; */
  height: 32px;
  font-size: 32px;
  margin-left: 22px;
  font-weight: normal;
  line-height: 32px;
  color: #ffffff;
}
.red_point {
  height: 12px;
  width: 12px;
  background-color: #d6162f;
  border-radius: 6px;
  margin-bottom: 30px;
}
</style>