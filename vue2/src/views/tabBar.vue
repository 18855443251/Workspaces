<template>
  <div>
    <div class="tab">
      <div v-for="(item,index) in tabList" :key="index" class="tab-item" @click="tabBtn(index)">
        <div class="tab-box">
          <div :class="[changeIndex==index?'title-black':'title-gray']">{{item.name}}</div>
          <div :class="[changeIndex==index?'line':'']"></div>
        </div>
      </div>
    </div>
    <div class="dzContent" v-touch:left="toLeft" v-touch:right="toRight">
      <all v-if="changeIndex==0" />
      <manageNorm v-if="changeIndex==1" />
      <reportForms v-if="changeIndex==2" />
      <enterprise v-if="changeIndex==3" />
    </div>
  </div>
</template>
<script>
import all from "@/components/fuzai/all";
import manageNorm from "@/components/fuzai/manageNorm";
import reportForms from "@/components/fuzai/reportForms";
import enterprise from "@/components/fuzai/enterprise";
export default {
  name: "claneCache",
  components: {
    all,
    manageNorm,
    reportForms,
    enterprise,
  },
  data() {
    return {
      changeIndex: 0,
      tabList: [
        {
          name: "全部",
        },
        {
          name: "经营指标",
        },
        {
          name: "报表",
        },
        {
          name: "企业",
        },
      ],
    };
  },
  created() {},
  methods: {
    tabBtn(index) {
      this.changeIndex = index;
    },
    toLeft() {
      if (this.changeIndex == 3) return;
      this.changeIndex++;
    },
    toRight() {
      if (this.changeIndex == 0) return;
      this.changeIndex--;
    },
  },
};
</script>
<style scoped>
.tab {
  height: 92px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #ffffff;
  align-items: center;
}
.tab-item {
  width: 120px;
  height: 84px;
  line-height: 84px;
}
.tab-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title-gray {
  color: #999999;
  font-size: 30px;
}
.title-black {
  color: #333333;
  font-size: 30px;
}
.line {
  width: 80px;
  height: 4px;
  border-radius: 8px;
  background: #0077e6;
  text-align: center;
}
.dzContent {
  height: 888px;
}
</style>