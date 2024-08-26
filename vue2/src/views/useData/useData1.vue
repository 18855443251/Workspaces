<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 17:09:52
 * @LastEditors: Please set LastEditors
 * @Description:取数据
 * @FilePath: \vueDemo\src\views\string\match1.vue
-->
<template>
  <div>
    <h1>对象套对象套数组</h1>
    <div v-for="(item, index) in paramsMode.uiParams.entryList" :key="index">
      <div>{{ item.name }}</div>
    </div>
    <h1>城市列表</h1>
    <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
      <div class="title border-topbottom">{{ key }}</div>
      <div class="item-list needsclick" :key="innerItem.id" v-for="innerItem of item">
        <div class="item border-bottom">{{ innerItem.name }}</div>
      </div>
    </div>
    <h1>分组列表数组套对象套数组</h1>
    <div class="info">
      <div v-for="(item, index) in group" :key="index" class="item">
        <div class="info_item">
          <div class="info_title">{{ item.GroupName }}&nbsp;&nbsp;&nbsp;({{ item.FZQrySize }}人)</div>
        </div>
        <div class="detail_item" @click="groupDetail1(item)">
          <div class="detail_item_box_left" v-for="(sub, index2) in item.FZQry" :key="index2">
            <div class="logo" v-if="index2 <= 3">
              <div class="text_state">{{ sub.AcName }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1>数组取值</h1>
    <div class="hzzb_nav_box" v-for="(title,index) in ['昨日业务总结','业务机会','业务风险']" :key="index">
      <div @click="showContent(index+1)" :class="[showID==index+1?'active':'text']">{{title}}</div>
      <div class="bottom_line" v-if="showID==index+1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      showID: 1,
      paramsMode: {
        uiParams: {
          title: "理财产品撤销", //标题
          subTitle: "", // 副标题
          entryList: [],
        },
      },
      ReserveStatus: {
        "000": "已登记",
        "1": "已激活",
        "2": "已取消",
        "3": "已过期",
      },
      cities: {
        A: [
          {
            id: 56,
            spell: "aba",
            name: "阿坝",
          },
          {
            id: 57,
            spell: "akesu",
            name: "阿克苏",
          },
        ],
        B: [
          {
            id: 1,
            spell: "beijing",
            name: "北京",
          },
          {
            id: 66,
            spell: "baicheng",
            name: "白城",
          },
        ],
      },
      group: [
        {
          FZQrySize: "2",
          GroupName: "北京",
          FZQry: [
            {
              AcName: "小红",
            },
            {
              AcName: "小云",
            },
            {
              AcName: "小花",
            },
            {
              AcName: "小财",
            },
            {
              AcName: "小米",
            },
            {
              AcName: "小辣",
            },
          ],
        },
        {
          FZQrySize: "2",
          GroupName: "南京",
          FZQry: [
            {
              AcName: "小李",
            },
            {
              AcName: "小安",
            },
          ],
        },
      ],
    };
  },
  created() {
    var a = this.ReserveStatus["000"];
    console.log(a);
    this.paramsMode.uiParams.entryList = [
      {
        name: "理财期限",
        content: "63",
      },
      {
        name: "购买金额",
        content: "56",
      },
    ];
    console.log(JSON.stringify(this.paramsMode));
    // {"uiParams":{"title":"理财产品撤销","subTitle":"","entryList":[{"name":"理财期限","content":"63"},{"name":"购买金额","content":"56"}]}}
  },
  methods: {
    showContent(id) {
      this.showID = id;
    },
  },
};
</script>

<style scoped>
.active {
  font-weight: 700;
  font-size: 30px;
}
.text {
  color: brown;
}
</style>
