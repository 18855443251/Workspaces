<template>
  <div>
    <div v-for="(item, index) in dataList" :key="index">
      <div class="detail">
        <div class="info" v-for="(info, index) in infoList" :key="index">
          <div class="title">{{ info.title }}</div>
          <div class="value" v-if="info.renderType == 'div'">
            {{ info.value }}
          </div>
          <img
            class="img"
            v-else-if="info.renderType == 'img'"
            :src="info.value"
          />
        </div>
      </div>
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
      map: {
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
  methods: {},
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
