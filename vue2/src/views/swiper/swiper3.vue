<template>
  <div>
    <div class="carousel-wrap" id="carousel">
      <transition-group tag="ul" class="slide-ul" name="list">
        <li
          v-for="(list, index) in slideList"
          :key="index"
          v-show="index === currentIndex"
          @mouseenter="stop"
          @mouseleave="go"
        >
          <a :href="list.clickUrl">
            <img :src="list.image" :alt="list.desc" />
          </a>
        </li>
      </transition-group>
      <div class="carousel-items">
        <span
          v-for="(item, index) in slideList.length"
          :class="{ active: index === currentIndex }"
          @mouseover="change(index)"
          :key="index"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      slideList: [
        {
          clickUrl: "#",
          desc: "nhwc",
          image: require("@/assets/img/icon1.png"),
        },
        {
          clickUrl: "#",
          desc: "hxrj",
          image: require("@/assets/img/icon2.png"),
        },
        {
          clickUrl: "#",
          desc: "rsdh",
          image: require("@/assets/img/icon3.png"),
        },
      ],
      currentIndex: 0,
      timer: "",
    };
  },
  created() {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
    });
  },
  methods: {
    go() {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 2000);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    change(index) {
      clearInterval(this.timer);
      this.timer = null;
      this.currentIndex = index;
    },
    autoPlay() {
      this.currentIndex++;
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0;
      }
    },
  },
};
</script>

<style scoped>
.carousel-wrap {
  height: 453px;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}

.slide-ul {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-ul li {
  position: absolute;
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 380px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}

.carousel-items span {
  display: inline-block;
  height: 6px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
}
.carousel-items .active {
  background-color: orange;
}

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%);
}

.list-enter {
  transform: translateX(100%);
}

.list-leave {
  transform: translateX(0);
}
</style>
