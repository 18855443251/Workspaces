
<template>
  <div class="container">
    <div class="index-list-wrap">
      <div v-for="(group, index) in data" :key="index" class="index-group" ref="indexGroup">
        <h3 class="index-group-title">{{ group.title }}</h3>
        <div class="index-group-box">
          <div v-for="(item, index) in group.items" :key="index" class="index-group-item">
            <span class="name">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pinyinObj from "./js/bankList/pinyin.js";
import ABCArr from "./js/bankList/ABC.js";
import newList from './js/bankList/default-data.js'
export default {
  name: "bankList",
  data() {
    return {
      playerList: [
        {
          title: "推荐",
          items: [
            {
              name: "工商银行",
            },
            {
              name: "农业银行",
            },
            {
              name: "建设银行",
            },
            {
              name: "渤海银行",
            },
          ],
        },
      ],
      data: [],
    };
  },
  created() {
    this.formatBankList(newList.cities,newList.hotCity);
  },
  methods: {
    formatBankList(cities,hotCity) {
      cities = this.formatOrderList(cities, "BankName");
      this.data = [...this.playerList, ...cities];
    },
    formatOrderList(cities = [], key = "py") {
      let allArr = [];
      for (let item of cities) {
        // 第一个字
        let letter = item[key].substring(0, 1);
        // 第一个字的拼音
        item.PYFlag = this.pingyingConvert(letter);
        item.name = item[key];
      }
      for (let index in ABCArr) {
        const tempObj = {
          title: "",
          items: [],
        };
        tempObj.title = ABCArr[index];
        for (let key in cities) {
          if (cities[key].PYFlag === ABCArr[index]) {
            tempObj.items.push(cities[key]);
          }
        }
        if (tempObj.items.length > 0) {
          allArr.push(tempObj);
        }
      }
      return allArr;
    },
    pingyingConvert(input) {
      let result = "";
      for (let key in pinyinObj) {
        let pinyin = key;
        let hanzi = pinyinObj[key];
        if (hanzi.indexOf(input) > -1) {
          result = pinyin.substring(0, 1);
        } 
      }
      return result.toUpperCase(); // 小写转大写
    },
  },
};
</script>

<style scoped></style>
