<!--
 * @Author: your name
 * @Date: 2021-08-12 15:06:34
 * @LastEditTime: 2022-08-04 10:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\VxMobile.vue
-->
<template>
  <div class="claneCache_view">
    <noticeBar :scrollable="true" :animationDuration="animationDuration">
      <template slot="left">
        <img src="@/assets/img/agree.png" class="back" alt />
      </template>
      <span
        v-for="(item, index) in informList"
        :key="index"
        class="card-wait-span"
        ref="marquee_wrap"
        @click="test"
      >
        {{ changeVerbal(item) }}
      </span>
    </noticeBar>
  </div>
</template>
<script>
import noticeBar from "./components/noticeBar";
export default {
  name: "claneCache",
  components: { noticeBar },
  data() {
    return {
      animationDuration: 7,
      width: 0,
      informList: [
        {
          businessType: "0",
        },
        {
          businessType: "1",
        },
        {
          businessType: "2",
        },
        {
          businessType: "3",
        },
        {
          businessType: "4",
        },
        {
          businessType: "5",
        },
         {
          businessType: "2",
        },
        {
          businessType: "3",
        },
        {
          businessType: "4",
        },
        {
          businessType: "5",
        },
      ],
    };
  },
  mounted() {
    this.animationDuration = this.informList.length * 7;
  },
  methods: {
    test() {
    },
    changeVerbal(item) {
      if (item.businessType == "0") {
        return `您已预约取号，排队号码${item.number}`;
      } else if (item.businessType == "1") {
        return `您已预约个人开户,排队号码${item.reserveId}`;
      } else if (item.businessType == "2") {
        return `您已预约跨行转账`;
      } else if (item.businessType == "3") {
        return `您已预约外省农信存款`;
      } else if (item.businessType == "4") {
        return `您已预约外省农信取款`;
      } else {
        return `您已预约大额取现业务`;
      }
    },
  },
};
</script>
<style scoped>
.card-wait-span {
  display: inline-block;
}
span:not(:last-child) {
 margin-right: 500px;
}
</style>