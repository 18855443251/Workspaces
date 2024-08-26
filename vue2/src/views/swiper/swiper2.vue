<template>
  <div>
    <div style="width:1080px;margin:0 auto">
      <div class="banner-container" @mouseenter="autoStop" @mouseleave="autoStart">
        <ul
          :style="{
            width: banners.length * 100 + '%',
            marginLeft: -index * 100 + '%'
          }"
        >
          <li v-for="(item, i) in banners" :key="i">
            <a href="#">
              <img :src="item.url" alt />
            </a>
          </li>
        </ul>
        <ul class="dots">
          <li
            v-for="(item, i) in banners"
            :key="i"
            :class="{
              active: i === index
            }"
            @click="index = i"
          ></li>
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
      index: 0, //默认显示图片
      timer: null, //定时器
      banners: [
        {
          url: require("@/assets/img/icon1.png"),
          link: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
        },
        {
          url: require("@/assets/img/icon2.png"),
          link: "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
        },
        {
          url: require("@/assets/img/icon3.png"),
          link: "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
        },
      ],
    };
  },
  created() {
    this.autoStart();
  },
  destroyed() {
    this.autoStop();
  },
  methods: {
    autoStart() {
      if (this.timer) {
        return;
      }
      this.timer = setInterval(() => {
        this.index = (this.index + 1) % this.banners.length;
      }, 2000);
    },
    autoStop() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
};
</script>

<style scoped>
.banner-container {
  height: 350px;
  position: relative;
  overflow: hidden;
}
.banner-container li {
  display: block;
  width: 1080px;
  height: 100%;
  float: left;
}
.active {
  background-color: brown;
}
.images {
  height: 100%;
  transition: 0.5s;
}
.banner-container img {
  width: 1080px;
  height: 100%;
}
.dots {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
}
.dots li {
  width: 10px;
  cursor: pointer;
  height: 10px;
  margin: 0 3px;
  border-radius: 50%;
  border: 1px solid white;
}
</style>
