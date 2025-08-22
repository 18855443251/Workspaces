<template>
  <div>
    <template v-for="(compItem, index) in compAuthList">
      <component
        :is="compItem.type_id"
        :ref="compItem.type_id"
        :key="index"
        v-show="active === compItem.type_id"
      ></component>
    </template>
    <van-tabbar
      v-model="active"
      placeholder
      active-color="#407fff"
      @change="handleSrTab"
    >
      <van-tabbar-item name="shouye">
        <span>首页</span>
        <template #icon="props">
          <svg-icon icon-class="homeFill" v-if="props.active"></svg-icon>
          <svg-icon icon-class="home" v-else></svg-icon>
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="notice">
        <span>通知</span>
        <template #icon="props">
          <svg-icon icon-class="homeTzFill" v-if="props.active"></svg-icon>
          <svg-icon icon-class="homeTz" v-else></svg-icon>
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="my">
        <span>我的</span>
        <template #icon="props">
          <svg-icon icon-class="homeMyFill" v-if="props.active"></svg-icon>
          <svg-icon icon-class="homeMy" v-else></svg-icon>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import shouye from "./components/shouye";
import notice from "./components/notice";
import my from "./components/my";
export default {
  name: "workAsstHome",
  components: {
    shouye,
    notice,
    my,
  },
  data() {
    return {
      active: "shouye",
      compAuthList: [
        {
          type_id: "shouye",
        },
        {
          type_id: "notice",
        },
        {
          type_id: "my",
        },
      ], //首页组件列表
    };
  },
  methods: {
    handleSrTab(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="less" scoped>
.icon-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  cursor: pointer;

  .van-icon {
    margin-bottom: 4px;
    font-weight: bold;
    background: linear-gradient(90deg, #407fff, #6c5dff);
    background-clip: text;
    color: transparent;
    margin-top: -5px;
  }

  span {
    font-size: 12px;
    color: #646566;
  }

  &::after {
    content: "";
    position: absolute;
    width: 60px;
    height: 60px;
    top: -35%;
    z-index: -1;
    background-color: #fff;
    border: 1px solid #eef3ff;
    border-radius: 50%;
    box-shadow: 0 0 10px #eef3ff;
  }
}

// .footer >>> .van-tabbar-item--active{
//   background-color: #f2f3f58c;
// }

.van-tabbar-item--active,
.van-tabbar-item--active /deep/ .van-tabbar-item__icon .van-icon {
  // background: linear-gradient(90deg, #407fff, #6c5dff);
  background: #55b5f2;
  background-clip: text;
  color: #55b5f2 !important;
  font-weight: bold;
}
</style>
