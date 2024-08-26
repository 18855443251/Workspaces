<!--
 * @Author: your name
 * @Date: 2022-03-15 16:47:37
 * @LastEditTime: 2022-06-15 15:56:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \root\bank\src\views\appCenter\appCenter.vue
-->
<template>
  <div ref="main_view">
    <!-- 导航头 -->
    <nav-bar title="应用中心" ref="navBar" rightTitle="管理"></nav-bar>
    <!-- 我的应用 -->
    <div ref="myApp" class="my_app">
      <p class="title">我的应用</p>
      <div>
        <!-- 拖拽 -->
        <draggable
          :options="{ delay: 300 }"
          v-model="myAppList"
          v-bind="dragOptions"
          @start="startBtn"
          @end="endBtn"
        >
          <transition-group name="flip-list" tag="div" class="section_box">
            <div
              class="box_img"
              v-for="(item, index) in myAppList"
              :key="index"
            >
              <img src="@/assets/img/agree.png" alt class="img" />
              <p class="img_desc">{{ item.appName }}</p>
            </div>
          </transition-group>
        </draggable>
      </div>
    </div>
    <!-- 热门应用和推荐应用 -->
    <div ref="slideBar" class="slideBar">
      <div>就很好</div>
    </div>
    <!-- 应用分类切换 -->
    <div
      ref="tabBox"
      class="tab_box"
      :style="{
        top: navBarHeight + 'px',
      }"
    >
      <md-tab-bar
        v-model="current"
        :hasInk="false"
        :items="appClassList"
        :maxLength="5"
        @change="tabBtn"
        :inkLength="50"
      />
    </div>
    <!-- 应用分类列表 -->
    <div class="classList" :style="{ paddingBottom: paddingBottom + 'px' }">
      <div
        class="classList_item"
        v-for="(item, index1) in appClassList"
        :key="index1"
        :ref="item.classId"
        @click="test"
      >
        <p class="title">{{ item.label }}</p>
        <div class="section_box">
          <div
            class="box_img"
            v-for="(sub, index2) in item.appList"
            :key="index2"
          >
            <img src="@/assets/img/agree.png" alt class="img" />
            <p class="img_desc">{{ sub.appName }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { TabBar } from "mand-mobile";
import draggable from "vuedraggable";
import navBar from "@/components/navBar";
import debounce from "@/utils/debounce.js";
import "@/utils/mixins/myTool.js";
export default {
  components: {
    draggable,
    navBar,
    [TabBar.name]: TabBar,
  },
  data() {
    return {
      current: 1, //tab标签索引
      title: "应用中心",
      leftTitle: "", //取消
      rightTitle: "管理",
      leftImgUrl: require("@/assets/img/agree.png"),
      myAppList: [
        { appName: "公务用车1" },
        { appName: "公务用车2" },
        { appName: "公务用车3" },
        { appName: "公务用车4" },
        { appName: "公务用车5" },
      ], //我的应用
      appClassList: [
        {
          name: 1,
          label: "标签一",
          classId: "class01",
          appList: [
            {
              appName: "公务用车1",
            },
          ],
        },
        {
          name: 2,
          label: "标签二",
          classId: "class02",
          appList: [
            {
              appName: "公务用车2",
            },
            {
              appName: "公务用车2",
            },
            {
              appName: "公务用车2",
            },
            {
              appName: "公务用车2",
            },
            {
              appName: "公务用车2",
            },
          ],
        },
        {
          name: 3,
          label: "标签三",
          classId: "class03",
          appList: [
            {
              appName: "公务用车3",
            },
          ],
        },
        {
          name: 4,
          label: "标签四",
          classId: "class04",
          appList: [
            {
              appName: "公务用车4",
            },
          ],
        },
      ], //所有应用
      toastMsg: "", //吐司文本
      dragOptions: {
        animation: 200,
      },
      viewFn: null,
      paddingBottom: 0,
      clientHeight: 0, //屏幕高度
      myAppHeight: 0, //我的应用高度
      navBarHeight: 0, //导航高度
      slideBarHeight: 0, //推荐和热门高度
      tabBoxHeight: 0, //分类标签高度
      scrollTop: "",
    };
  },
  mounted() {
    // 如果是组件获取clientHeight需要加上$el
    this.navBarHeight = this.$refs["navBar"].$el.clientHeight; //导航高度
    console.log(this.navBarHeight, "导航高度");
    this.myAppHeight = this.$refs["myApp"].offsetHeight; //我的应用
    console.log(this.myAppHeight, "我的应用");
    this.slideBarHeight = this.$refs["slideBar"].clientHeight; //推荐高度
    console.log(this.slideBarHeight, "推荐高度");
    this.clientHeight = myTool.client().height; //屏幕高度
    this.tabBoxHeight = this.$refs["tabBox"].offsetHeight; //分类标签高度
    console.log(this.tabBoxHeight, "分类标签高度");
    // 获取各个模块距离
    this.getDistance();
    window.addEventListener(
      "scroll",
      debounce(
        (e) => {
          this.scrollTop = myTool.scroll().top;
          this.getIndex(this.scrollTop);
        },
        100,
        1,
        this
      )
    );
  },
  methods: {
    // 滚动切换标签
    getIndex(scrollTop) {
      let lastIndex = this.appClassList.length - 1;
      this.appClassList.forEach((item, index) => {
        if (
          scrollTop >= item["offsetEdit"][0] &&
          scrollTop <= item["offsetEdit"][1]
        ) {
          this.current = index + 1;
          this.paddingBottom =
            this.clientHeight -
            this.tabBoxHeight -
            this.navBarHeight -
            this.appClassList[lastIndex].offsetEdit[2];
        }
      });
    },

    //获取每个模块距离页面顶部的距离
    getDistance() {
      let lastIndex = this.appClassList.length - 1;
      let offsetTop = 0;
      let offsetHeight = 0;
      this.appClassList.forEach((item, index) => {
        // 5是marginTop的距离
        offsetTop =
          this.$refs[item.classId][0].offsetTop -
          5 -
          this.tabBoxHeight -
          this.navBarHeight;
        offsetHeight = this.$refs[item.classId][0].offsetHeight + 5;
        // 第一项
        if (index == 0) {
          this.$set(this.appClassList[index], "offsetEdit", [
            0,
            offsetTop + offsetHeight,
            offsetHeight,
          ]);
          // 最后一项
        } else if (index == lastIndex) {
          this.$set(this.appClassList[index], "offsetEdit", [
            offsetTop,
            offsetTop + offsetHeight + this.paddingBottom,
            offsetHeight,
          ]);
        } else {
          this.$set(this.appClassList[index], "offsetEdit", [
            offsetTop,
            offsetTop + offsetHeight,
            offsetHeight,
          ]);
          offsetTop += offsetHeight;
        }
      });
    },
    // 开始拖拽
    startBtn() {},
    endBtn(item) {},
    // 分类标签切换
    tabBtn(item, index) {
      this.paddingBottom =
        this.clientHeight -
        this.tabBoxHeight -
        this.navBarHeight -
        item.offsetEdit[2];
      this.$nextTick(() => {
        window.scrollTo({ top: item.offsetEdit[0], behavior: "smooth" });
      });
    },
    // 随便点击恢复原始状态
    test() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}
.title-area >>> .title-right-text {
  color: #333333;
}
.my_app {
  width: 686px;
  margin-left: 32px;
  padding: 32px 0;
  background-color: #ffffff;
}
.save {
  position: sticky;
  /* top: 160px; */
  z-index: 2;
}

.classList_item {
  width: 686px;
  margin-left: 32px;
  padding: 32px 0;
  background-color: #d29292;
  margin-top: 10px;
  border-radius: 8px;
}
.title {
  margin-left: 32px;
  font-weight: 700;
}
.section_box {
  width: 686px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
}
.box_img {
  width: 171px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  position: relative;
}
.img {
  width: 70px;
  height: 70px;
}
.img_desc {
  color: #333333;
  font-size: 24px;
  margin-top: 16px;
  text-align: center;
  word-break: break-all;
  padding: 0 20px;
}
.status {
  position: absolute;
  top: -15px;
  right: 20px;
  width: 40px;
  height: 30px;
  border-radius: 30px;
  background-color: #ffffff;
}
.status_img {
  width: 30px;
  height: 30px;
  margin-left: 1px;
  border-radius: 50px;
}
.tab_box {
  position: sticky;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #f3f3f3;
}
.slideBar {
  position: sticky;
  left: 0;
  right: 0;
  z-index: 2;
  height: 50px;
}
.md-tab-bar {
  height: 82px;
  background-color: #f3f3f3;
}
.md-tab-bar /deep/.md-tab-bar-list {
  display: inline-block;
}
.md-tab-bar /deep/ .md-tab-bar-item.is-active {
  color: #333333 !important;
  font-weight: 700;
}
.md-tab-bar /deep/ .md-tab-bar-ink {
  background: #333333;
  height: 1px;
}
.md-toast >>> .md-popup-box {
  color: red;
  width: 390px;
  height: 120px;
  position: absolute;
  top: 400px;
}
.md-toast >>> .md-toast-content {
  font-size: 24px;
}
.icon {
  position: relative;
  width: 32px;
  height: 32px;
}
.nodata {
  margin: 32px;
}
.new_img,
.jian_img {
  width: 28px;
  height: 23px;
  position: absolute;
  top: 8px;
  left: 46px;
}
</style>
