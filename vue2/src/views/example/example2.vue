<template>
  <div class="contain" ref="myScroller">
    <div>当前城市：{{areaName}}</div>
    <div
      v-for="(item, index) in testList"
      :key="item.areaName"
      class="test"
      @click="test(item)"
    >
      {{ item.areaName }}
    </div>
   <div>
     <div class="city-box" v-for="(item, index) in areaNameList" :key="item.areaName">
      <span> {{ item.areaName }}</span>
    </div>
   </div>
  </div>
</template>

<script>
import { ScrollView, ScrollViewMore } from "mand-mobile";
export default {
  components: {
    [ScrollView.name]: ScrollView,
    [ScrollViewMore.name]: ScrollViewMore,
  },
  data() {
    return {
      areaName: "南昌市",
      testList: [
        { areaName: "南昌市", id: "0" },
        { areaName: "萍乡", id: "1" },
        { areaName: "九江", id: "2" },
        { areaName: "景德镇市", id: "3" },
      ],
      areaNameList: [
        {
          areaName: "南昌市",
          id: "0",
        },
      ],
    };
  },
  created() {},
  methods: {
    test(item) {
      // 没找到返回-1 找到返回索引
      let areaIndex = this.areaNameList.findIndex((element) => {
        return item.areaName == element.areaName;
      });
      console.log(areaIndex)
      // 没找到
      if (areaIndex == -1) {
        this.areaNameList.unshift({areaName:item.areaName});
      } else {
        // 找到
        this.areaNameList.splice(areaIndex, 1);
        this.areaNameList.unshift({areaName:item.areaName});
      }
      this.areaName=item.areaName//当前城市名字
    },
  },
};
</script>

<style scoped>
.test {
  width: 100px;
  height: 100px;
  margin-top: 40px;
}
</style>