<!--
 * @Author: your name
 * @Date: 2022-05-17 18:57:03
 * @LastEditTime: 2022-05-23 17:25:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dtapp\appManager\src\pages\appManager\views\messageCenter\components\recordDetail.vue
-->
<template>
  <div class="detail">
    <div class="info" v-for="(info, index) in infoList" :key="index">
      <div class="title">{{info.title}}</div>
      <div class="value" v-if="info.renderType == 'div'">{{info.value}}</div>
      <img class="img" v-else-if="info.renderType == 'img'" :src="info.value" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataObj: {
      type:Object,
      default:() => ({}),
    },
    map: {
      type:Object,
      default:() => ({}),
    },
  },
  data() {
    return {};
  },
  computed: {
    infoList() {
      return Object.keys(this.map).map((key) => {
        return {
          renderType: this.map[key].renderType || "div",
          title: this.map[key].title || this.map[key],
          value: this.map[key].getValue
            ? this.map[key].getValue(this.dataObj[key])
            : this.dataObj[key],
        };
      });
    },
  },
};
</script>
<style scoped>
.detail {
  width: 545px;
  /* height: 610px; */
  padding: 40px 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  /* border: solid 1px #000000; */
}
.info {
  display: flex;
  flex-direction: row;
}
.title {
  width: 120px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 40px;
  letter-spacing: 0px;
  color: #999999;
  text-align: right;
}
.value {
  max-width: 340px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 35px;
  letter-spacing: 0px;
  color: #333333;
  margin-left: 21px;
  overflow-wrap: anywhere;
}
.img {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  margin-left: 21px;
}
</style>
