import pinyinObj from './pinyin.js'
import ABCArr from './ABC.js'
import Vue from "vue";
/**
 * @desc 格式化数据列表
 * @param newList 数组
 * @param key 字符串
 */
export function formatOrderList(newList = [], key = 'name') {
  let allArr = []
  // 传入整个数组  key代表要以哪个字段来判断
  for (let item of newList) {
    // 截取第一个文字
    let letter = item[key].substring(0, 1)
    Vue.prototype.$set(item,'PYFlag',pingyingConvert(letter))
    // item.PYFlag = pingyingConvert(letter)
    item.name = item[key]
  }
  for (let index in ABCArr) {
    const tempObj = {
      title: '',
      items: [],
    }
    tempObj.title = ABCArr[index]
    console.log(tempObj)

    for (let key in newList) {
      if (newList[key].PYFlag === ABCArr[index]) {
        tempObj.items.push(newList[key])
      }
    }
    if (tempObj.items.length > 0) {
      allArr.push(tempObj)
    }
  }
  return allArr
}

//拼音匹配 单个汉字转换拼音大写
function pingyingConvert(input) {
  let result = ''
  for (let key in pinyinObj) {
    // key值
    let pinyin = key
    // 键值
    let hanzi = pinyinObj[key]
    if (hanzi.indexOf(input) > -1) {
      // 截取第一个拼音 小写的
      result = pinyin.substring(0, 1)
    }
  }
  return result.toUpperCase() // 小写转大写
}