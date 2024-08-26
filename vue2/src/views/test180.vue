<!--
 * @Author: your name
 * @Date: 2021-05-06 20:10:09
 * @LastEditTime: 2021-06-25 15:12:51
 * @LastEditors: Please set LastEditors
 * @Description: 旋转180
 * @FilePath: \root\glhHome\src\views\login.vue
-->
<template>
  <div class="cardBox_view">
    <div class="cardBox" v-for="(item,index) in achievementList" :key="index">
      <div
        :class="['card_bottom_typeOne',isChange?'changeCardClass':'']"
        :style="{transform: `rotateX(${number*180}deg)`}"
        v-if="!item.compareLastPhase"
      >
        <text>数据传输出问题了</text>
      </div>
      <div
        :class="['card_bottom_typeOne',isChange?'changeCardClass':'']"
        :style="{transform: `rotateX(${number*180}deg)`}"
        v-else
      >
        <text>正面</text>
      </div>

      <div
        :class="['card_bottom_typeOne',isChange?'':'changeCardClass']"
        :style="{transform: `rotateX(${(number-1)*180}deg)`,marginTop:-60+'px'}"
        v-if="item.indexValue"
      >
        <text>测面</text>
      </div>
      <div
        :class="['card_bottom_typeOne',isChange?'':'changeCardClass']"
        :style="{transform: `rotateX(${(number-1)*180}deg)`,marginTop:-60+'px'}"
        v-else
      >
        <text>数据传输出问题了</text>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",

  data() {
    return {
      isChange: false,
      number: 0,
      achievementList: [
        {
          compareLastPhase: "",
          indexValue: "50781.57",
        },
        {
          compareLastPhase: "555",
          indexValue: "50781.57",
        },
        {
          compareLastPhase: "2332",
          indexValue: "",
        },
        {
          compareLastPhase: "555",
          indexValue: "50781.57",
        },
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.isChange = !this.isChange;
      this.number++;
    }, 5000);
  },
  methods: {},
};
</script>
<style scoped>
.cardBox_view {
  width: 686px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cardBox {
  width: 338px;
  height: 162px;
  background: cyan;
  margin-top: 10px;
}
.card_bottom_typeOne {
  width: 338px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  opacity: 1;
  transition-delay: 1s;
  transition-duration: 1s;
  transition-property: transform, opacity;
  transition-timing-function: linear;
}
.changeCardClass {
  opacity: 0;
}
</style>
