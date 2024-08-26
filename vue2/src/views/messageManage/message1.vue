<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 14:52:41
 * @LastEditors: Please set LastEditors
 * @Description: 排序
 * @FilePath: \vueDemo\src\views\paixu\sort.vue
-->
<template>
  <div>
    <div v-for="(item, index) in dataList" :key="index">
      <record-detail :dataObj="item" :map="receiveMap"></record-detail>
    </div>
  </div>
</template>

<script>
import recordDetail from "./subCombs/recordDetail";
export default {
  name: "home",
  components: {
    recordDetail,
  },
  data() {
    return {
      dataList: [
        {
          messageType: "消息处理失败",
          pushReturnStatus: "0",
        },
        {
          messageType: "消息处理成功",
          pushReturnStatus: "1",
        },
      ],
      record: {
        messageType: "消息处理成功",
        pushReturnStatus: "1",
      },
      receiveMap: {
        messageType: "消息类型",
        pushReturnStatus: {
          title: "状态",
          getValue: function (v) {
            if (v == "0") {
              return "推送失败";
            } else if (v == "1") {
              return "推送成功";
            } else {
              return "息屏推送失败";
            }
          },
        },
      },
    };
  },

  methods: {},
};
</script>

<style scoped></style>
