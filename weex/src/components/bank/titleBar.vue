<template>
  <div class="fix_head">
    <div :class="['bg_img',  osType=='android'?'transition':'']" :style="{top:offset>80?-80:-offset+'px'}">
      <image :class="['bg_img']" :src="themeStyle.bgImg" />
    </div>
    <div class="search_title">
      <div class="search_box" :style="{width:686 - (this.offset<<1)+'px'}" @click="launch('main.search')">
        <image class="search_image" :src="themeStyle.searchIcon"></image>
        <text class="input" :style="{width:686 - (this.offset<<1)-90+'px'}" placeholder="智能搜索">智能搜索</text>
      </div>
      <div :class="['title_box', 'mt', osType=='android'?'transition':'']" :style="{left: (offset<<1)+'px',bottom:((offset)/2.5)+'px'}">
        <div
          :class="['title_box','title_item_box','mt',osType=='android'?'transition':'']"
          :style="{width:width/2+10+'px',borderRightWidth:index<titleList.length-1?'1px':'0px'}"
          v-for="(item,index) in titleList"
          :key="index"
          @click="launch(item.url)"
        >
          <image class="title_icon" :src="`./imgs/bank/${item.icon}.png`"/>
          <text class="title_text">{{item.title}}</text>
          <div class="red_point" v-if="item.isUnread"></div>
        </div>
      </div>
    </div>
    <!-- <div :class="['mask',osType=='android'?'transition':'']" :style="{height:(25-(offset<<1))>=0?(25-(offset<<1)):0+'px',bottom:-offset+10+'px'}"></div> -->
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: "big", // small
    },
    offset:{
      type: Number,
      default: 0, // scroll offset
    },
    handleUnread: {
      type: Boolean,
      default: false,
    },
    dateUnread: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    width() {
      // return this.mode == "big" ? 686 : 343;
      return 686 - (this.offset<<1);
    },
  },
  watch: {
    handleUnread:{
      immediate:true,
      handler(){
        this.$set(this.titleList[0], 'isUnread', this.handleUnread)
      }
    },
    dateUnread:{
      immediate:true,
      handler(){
        this.$set(this.titleList[1], 'isUnread', this.dateUnread)
      }
    }
  },
  data() {
    return {
      titleList: [
        {
          icon: "handle",
          title: "待办",
          url: "main.handle",
          isUnread: false
        },
        {
          icon: "date",
          title: "日程",
          url: "main.schedule",
          isUnread: false
        },
      ],
      osType: ''
      // osType: 'web'
    };
  },
    created() {
      this.osType = weex.config.env.platform.toLowerCase()
    },
};
</script>

<style scoped>
.fix_head {
  position: fixed;
}
.bg_img {
  height: 256px;
  width: 750px;
  overflow: hidden;
}
.transition {
  /* transition-property: width, height, bottom, left;
  transition-duration: 100ms;
  transition-timing-function: linear; */
}
.input {
  width: 586px;
  height: 64px;
  placeholder-color: #aaa;
  background-color: rgba(255, 255, 255, 0);
  line-height: 64px;
  color: #aaa;
}
.search_title {
  width: 750px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 32px;
  padding-right: 32px;
  position: absolute;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  top: 88px;
}
.search_box {
  height: 64px;
  width: 686px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 35px;
  background-color: #fff;
}
.search_image {
  height: 28px;
  width: 28px;
  margin-left: 32px;
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
.red_point{
  height: 12px;
  width: 12px;
  background-color: #d6162f;
  border-radius: 6px;
  margin-bottom: 30px;
}
</style>