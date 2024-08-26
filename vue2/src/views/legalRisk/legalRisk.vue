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
    <md-tabs :value="'p'+changeIndex">
      <md-tab-pane
        v-for="(item,index) in tabList"
        :key="index"
        :name="'p'+index"
        :label="item.name"
      >
        <component :is="item.componentName"></component>
      </md-tab-pane>
    </md-tabs>
  </div>
</template>
<script>
import { Tabs, TabPane } from "mand-mobile";
import courtNotice from "./components/courtNotice";
import judgDocument from "./components/judgDocument";
import courtExecutee from "./components/courtExecutee";
import breakExecutee from "./components/breakExecutee";

export default {
  name: "VxMobile",
  components: {
    [Tabs.name]: Tabs,
    [TabPane.name]: TabPane,
    courtNotice,
    judgDocument,
    courtExecutee,
    breakExecutee,
  },
  data() {
    return {
      controllerList: [],
      changeIndex: "0",
      bgColor: "#1b84ff",
      tabList: [
        {
          name: "开庭公告",
          componentName: "courtNotice",
        },
        {
          name: "判决文书",
          componentName: "judgDocument",
        },
        {
          name: "法院被执行人",
          componentName: "courtExecutee",
        },
        {
          name: "失信被执行人",
          componentName: "breakExecutee",
        },
      ],
    };
  },
  mounted() {
    this.controllerList.push(
      // map遍历会返回一个新的数组
      ...this.tabList.map((item) => {
        return {
          ...item,
          data_dt: "张三",
        };
      })
    );
    console.log(JSON.stringify(this.controllerList));
    this.initPosition();
  },
  methods: {
    // 根据菜单点击定位
    initPosition() {
      console.log("定位到：", this.$route.params.tag);
      if (this.$route.params.tag) {
        let map = this.tabList.map((item) => item.name);
        console.log(JSON.stringify(map)); //["开庭公告","判决文书","法院被执行人","失信被执行人"]
        this.changeIndex = map.indexOf(this.$route.params.tag);
        console.log(this.changeIndex);
      }
    },
  },
};
</script>
<style scoped>
.line {
  width: 750px;
  height: 20px;
}
.view >>> .md-tab-bar {
  background-color: #ffffff;
}

.view >>> .md-tab-bar-item {
  color: #999999;
  font-size: 28px;
  font-weight: bold;
}

.view >>> .is-active {
  color: #333333;
  font-weight: bold;
  font-size: 28px;
}
.view >>> .md-tab-bar-end {
  width: 0;
  height: 0;
}
.view >>> .md-tab-bar-start {
  width: 0;
  height: 0;
}
</style>