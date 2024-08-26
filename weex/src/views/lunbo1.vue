<template>
  <div class="contain">
    <slider class="slider" @change="changeCard" interval="5000" auto-play="true" infinite="false">
      <div class="card_bg">
        <richtext class="test">
          轮播1
          <span class="duo">多岁的</span>
        </richtext>
      </div>
      <div class="card_bg">
        <text>轮播2</text>
      </div>
    </slider>
    <div class="point">
      <div
        :class="[index==changeIndex?'activeP':'pointLi']"
        v-for="(item,index) in sliderList"
        :key="index"
      ></div>
    </div>
  </div>
</template>
<script>
const context = weex.requireModule("context");
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      sliderList: [1, 2],
      changeIndex: 0,
    };
  },
  methods: {
    changeCard(e) {
      this.changeIndex = e.index;
    },
  },
};
</script>
<style scoped>
.card_bg {
  position: relative;
  width: 694px;
  height: 330px;
  background: aquamarine;
  margin-left: 20px;
}
.slider {
  width: 694px;
  height: 330px;
}
.duo {
  font-size: 36px;
  color: rgb(230, 21, 21);
}
.test {
  color: bisque;
  font-size: 56px;
}
.point {
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
}
.pointLi {
  margin-left: 4px;
  margin-right: 4px;
  height: 8px;
  width: 8px;
  border-radius: 10px;
  background-color: #cccccc;
}
.activeP {
  margin-left: 8px;
  margin-right: 8px;
  height: 8px;
  width: 20px;
  border-radius: 20px;
  background-color: #a67342;
}
</style>