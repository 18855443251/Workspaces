<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-12 16:00:59
 * @LastEditors: Please set LastEditors
 * @Description:轮播
 * @FilePath: \vueDemo\src\views\string\match1.vue
-->
<template>
  <div>
    <div class="banner">
      <div class="item">
        <img :src="dataList[currentIndex]" />
      </div>
      <div class="page" v-if="this.dataList.length > 1">
        <ul>
          <li @click="gotoPage(prevIndex)">&lt;</li>
          <li
            v-for="(item, index) in dataList"
            @click="gotoPage(index)"
            :class="{ current: currentIndex == index }"
            :key="index"
          >{{ index + 1 }}</li>
          <li @click="gotoPage(nextIndex)">&gt;</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      dataList: [
        require("@/assets/img/icon1.png"),
        require("@/assets/img/icon2.png"),
        require("@/assets/img/icon3.png"),
      ],
      currentIndex: 0, //默认显示图片
      timer: null, //定时器
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.gotoPage(this.nextIndex);
    }, 2000);
    // clearInterval(this.timer);
  },
  computed: {
    //上一张
    prevIndex() {
      if (this.currentIndex == 0) {
        return this.dataList.length - 1;
      } else {
        return this.currentIndex - 1;
      }
    },
    //下一张
    nextIndex() {
      if (this.currentIndex == this.dataList.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    },
  },
  methods: {
    gotoPage(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul li {
  float: left;
  width: 30px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}
.banner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-top: 60px;
}
.banner img {
  width: 100%;
  display: block;
}
.banner .page {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
}
.banner .page ul {
  float: right;
}
.current {
  color: #ff6700;
}
</style>
