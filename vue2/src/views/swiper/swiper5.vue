<!--
 * @Author: your name
 * @Date: 2021-06-03 16:14:06
 * @LastEditTime: 2021-08-02 11:14:35
 * @LastEditors: Please set LastEditors
 * @Description: 经营风险遍历
 * @FilePath: \root\mgBank\src\views\workbench\corporateClients\outBusiness\busicInfo.vue
-->
<template>
  <div class="view">
    <md-swiper
      ref="swiper"
      :autoplay="autoplay"
      :is-prevent="false"
      :use-native-driver="false"
    >
      <md-swiper-item
        v-for="(item, index) in activityList"
        :key="index + Math.random()"
      >
        <img :src="item.markingImg" />
      </md-swiper-item>
    </md-swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem, ScrollView, ScrollViewMore } from "mand-mobile";
export default {
  name: "VxMobile",
  components: {
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem,
    [ScrollView.name]: ScrollView,
    [ScrollViewMore.name]: ScrollViewMore,
  },
  data() {
    return {
      autoplay: 0,
      activityList: [
        {
          markingImg: require("@/assets/img/icon1.png"),
        },
        {
          markingImg: require("@/assets/img/icon2.png"),
        },
        {
          markingImg: require("@/assets/img/icon3.png"),
        },
      ],
    };
  },
  mounted() {
    this.autoplay = 4000;
  },
  methods: {},
};
</script>
<style scoped>
</style>