<!--
 * @Author: your name
 * @Date: 2021-04-08 16:18:32
 * @LastEditTime: 2022-01-25 15:55:12
 * @LastEditors: Please set LastEditors
 * @Description: 自动吸附在头部
 * @FilePath: \weex\src\views\wyhFind.vue
-->

<template>
  <div class="container_warpper">
    <list @scroll="changeY" :style="[{height:allheight+'px',backgroundColor:'#f5f5f5'}]">
      <div>
        <text>头部</text>
      </div>
      <header class="header">
        <div class="tablebar">
          <div class="tablebar-content">
            <scroller
              show-scrollbar="false"
              style="width: 636px;height:80px;flex-direction: row;align-items: center;"
              scroll-direction="horizontal"
              class="findTitle"
            >
              <div
                class="father"
                v-for="(item,index) in list"
                :ref="'itemName'"
                :key="index"
                @click="doit({index:index})"
              >
                <div class="dhjz">
                  <text :class="[index===sliderPosition?'gray':'blue']">{{item.typeName}}</text>
                  <div
                    :class="[index===sliderPosition?'classAbrown':'classBbrown']"
                    :style="[index===sliderPosition?{'background-color': themeStyle.fontColor}:{'visibility': 'hidden'}]"
                  ></div>
                </div>
              </div>
            </scroller>
          </div>
        </div>
      </header>
      <cell ref="newTop">
        <div
          :style="[newsList.length<1?{height:800+'px'}:{height:80+newsList.length*200+'px'}]"
          class="slider"
          @swipe="watchmove"
        >
          <div
            class="noumenon"
            ref="noumenon"
            :style="[newsList.length<1?{height:800+'px'}:{height:newsList.length*200+'px'}]"
          >
            <div>
              <div class="news" v-for="(item2,index2) in newsList" :key="index2">
                <div class="news-content" v-if="false">
                  <text class="newstitle">{{item2.title}}</text>
                  <div class="newsauthor">
                    <text
                      class="author"
                      :style="{'color':themeStyle.fontColor}"
                    >{{item2.publishDeptName}}</text>
                    <div class="shuju">
                      <text class="word1">{{"阅读"+item2.readCount}}</text>
                      <text class="word2">{{item2.createDate}}</text>
                    </div>
                  </div>
                  <div class="newsImg">
                    <image class="newsphoto" src="./imgs/fine/newsmenu1.png" />
                  </div>
                </div>
                <!--没图片的-->
                <div class="news-content1" v-else>
                  <text class="newstitle">{{item2.title}}</text>
                  <div class="newsauthor">
                    <text
                      class="author"
                      :style="{'color':themeStyle.fontColor}"
                    >{{item2.publishDeptName}}</text>
                    <div class="shuju">
                      <text class="word1">{{"阅读"+item2.readCount}}</text>
                      <text class="word2">{{item2.createDate}}</text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </cell>
    </list>
  </div>
</template>
<script>
import navBarHome from "@/components/navBarHome.vue";
const context = weex.requireModule("context");
const dom = weex.requireModule("dom");
const animation = weex.requireModule("animation");
import emptyData from "@/components/emptyData";
export default {
  components: {
    navBarHome,
    emptyData,
  },
  data() {
    return {
      allheight: 1334, //整个高度
      list: [
        {
          typeName: "论坛",
          plateId: "0",
          plateTypeId: "4848",
        },
        {
          plateId: "1",
          typeName: "工作提示",
          plateTypeId: "8863",
        },
      ], //横向导航栏数组
      newsList: [],
      testList: [
        {
          title: "主题",
          publishDeptName: "动态",
          readCount: "5",
          createDate: "2012-03-02",
        },
        {
          title: "主题",
          publishDeptName: "动态",
          readCount: "5",
          createDate: "2012-03-02",
        },
        {
          title: "主题",
          publishDeptName: "动态",
          readCount: "5",
          createDate: "2012-03-02",
        },
        {
          title: "主题",
          publishDeptName: "动态",
          readCount: "5",
          createDate: "2012-03-02",
        },
        {
          title: "主题",
          publishDeptName: "动态",
          readCount: "5",
          createDate: "2012-03-02",
        },
        {
          title: "主题",
          publishDeptName: "动态",
          readCount: "5",
          createDate: "2012-03-02",
        },
        {
          title: "主题",
          publishDeptName: "动态",
          readCount: "5",
          createDate: "2012-03-02",
        },
        {
          title: "主题",
          publishDeptName: "动态",
          readCount: "5",
          createDate: "2012-03-02",
        },
        {
          title: "主题",
          publishDeptName: "动态",
          readCount: "5",
          createDate: "2012-03-02",
        },
      ],
      params: {},
      sliderPosition: 0, //当前展示位置
      oldPosition: 0,
      pageNumber: 1,
      refreshing: false,
      loading: false,
      scrollnumber: 0, //滑动距离
    };
  },
  watch: {
    "$store.state.launchChangeFlag"() {
      this.sliderPosition = 0;
      this.params = this.$store.state.userInfo;
      let param = {
        userId: this.params.empid,
      };
      this.postDo("queryFindChannel.do", param, (response) => {
        this.list =
          response.myList.length > 0 ? response.myList : response.dataList;
        this.getnewsdata();
        dom.scrollToElement(this.$refs["itemName"][0], {
          offset: 0,
        });
      });
    },
  },
  mounted() {
    this.params = this.$store.state.userInfo;
    this.getnewsdata();
    this.allheight = this.getHeight() - 196;
  },
  methods: {
    watchmove(e) {
      if (e.direction == "left") {
        if (this.sliderPosition != this.list.length - 1) {
          animation.transition(
            this.$refs.noumenon,
            {
              styles: {
                transform: "translateX(-750px)",
              },
              duration: 500, //ms
              timingFunction: "ease",
              needLayout: false,
              delay: 0, //ms
            },
            () => {
              animation.transition(this.$refs.noumenon, {
                styles: {
                  transform: "translateX(0px)",
                },
                duration: 0, //ms
                timingFunction: "ease",
                needLayout: false,
                delay: 0, //ms
              });
            }
          );
          this.sliderPosition++;
          dom.scrollToElement(this.$refs["itemName"][this.sliderPosition], {
            offset: this.sliderPosition == 0 ? 0 : -100,
          });
          this.getnewsdata();
        }
      } else if (e.direction == "right") {
        if (this.sliderPosition != 0) {
          animation.transition(
            this.$refs.noumenon,
            {
              styles: {
                transform: "translateX(750px)",
              },
              duration: 500, //ms
              timingFunction: "ease",
              needLayout: false,
              delay: 0, //ms
            },
            () => {
              animation.transition(this.$refs.noumenon, {
                styles: {
                  transform: "translateX(0px)",
                },
                duration: 0, //ms
                timingFunction: "ease",
                needLayout: false,
                delay: 0, //ms
              });
            }
          );
          this.sliderPosition--;
          dom.scrollToElement(this.$refs["itemName"][this.sliderPosition], {
            offset: this.sliderPosition == 0 ? 0 : -100,
          });
          this.getnewsdata();
        }
      }
    },
    getnewsdata() {
      // let param = {
      //   userId: this.params.empid,
      //   plateId: this.plateId,
      //   plateTypeId: this.plateTypeId,
      //   pageSize: "15",
      //   pageNumber: this.pageNumber,
      // };
      // this.postDo(
      //   "queryChannelNews.do",
      //   param,
      //   (response) => {
      this.newsList = this.testList;
      if (this.scrollnumber < 0) {
        dom.scrollToElement(this.$refs.newTop, {
          offset: -80,
        });
      }
      // );
    },
    doit(e) {
      this.sliderPosition = e.index;
      if (this.sliderPosition > this.oldPosition) {
        animation.transition(
          this.$refs.noumenon,
          {
            styles: {
              transform: "translateX(-750px)",
            },
            duration: 500, //ms
            timingFunction: "ease",
            needLayout: false,
            delay: 0, //ms
          },
          () => {
            animation.transition(this.$refs.noumenon, {
              styles: {
                transform: "translateX(0px)",
              },
              duration: 0, //ms
              timingFunction: "ease",
              needLayout: false,
              delay: 0, //ms
            });
          }
        );
      }
      if (this.sliderPosition < this.oldPosition) {
        animation.transition(
          this.$refs.noumenon,
          {
            styles: {
              transform: "translateX(750px)",
            },
            duration: 500, //ms
            timingFunction: "ease",
            needLayout: false,
            delay: 0, //ms
          },
          () => {
            animation.transition(this.$refs.noumenon, {
              styles: {
                transform: "translateX(0px)",
              },
              duration: 0, //ms
              timingFunction: "ease",
              needLayout: false,
              delay: 0, //ms
            });
          }
        );
      }
      this.oldPosition = this.sliderPosition;
      dom.scrollToElement(this.$refs["itemName"][e.index], {
        offset: e.index == 0 ? 0 : -100,
      });
      this.getnewsdata();
    },
    changeY(e) {
      this.scrollnumber = e.contentOffset.y;
    },
  },
};
</script>
<style scoped>
.container_warpper {
  width: 750px;
  background-color: #f5f5f5;
}
.title {
  position: absolute;
  top: 0;
  width: 750px;
  text-align: center;
  font-size: 36px;
  font-weight: normal;
  line-height: 88px;
  height: 88px;
  margin-top: 88px;
  color: #ffffff;
}
.slider {
  width: 750px;
  touch-action: none;
  background-color: #a67342;
}
.dhjz {
  height: 80px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rangle-img {
  width: 440px;
  height: 204px;
}
.sanjiao-img {
  width: 40px;
  height: 28px;
  margin-left: 400px;
}
.gray {
  color: #333333;
  /* font-family: "黑体"; */
  font-weight: bold;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 70px;
}
.new-btn {
  flex-direction: row;
  justify-content: space-around;
  width: 440px;
}
.new {
  position: fixed;
  width: 440px;
  height: 204px;
  top: 340px;
  right: 60px;
  z-index: 10000;
  font-size: 0;
  letter-spacing: 0;
}
.btn-text {
  width: 160px;
  height: 64px;
  font-size: 28px;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1px;
  border-radius: 32px;
  color: #ffffff;
  line-height: 64px;
  text-align: center;
}
.bgw {
  background-color: #ffffff;
  color: #a67342;
}
.btn-header {
  color: #ffffff;
  font-size: 32px;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;
}
.btn-box {
  position: absolute;
  top: 20px;
}
.blue {
  color: #999999;
  font-size: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 70px;
}
.findTitle {
  line-height: 80px;
  height: 80px;
  flex-direction: row;
}
.middle {
  /* padding-top: 20px; */
  background-color: rgb(255, 255, 255);
  /* margin-top: 16px; */
}
.fun-container {
  width: 750px;
  /* height: 186px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* justify-content: space-around; */
  flex-wrap: wrap;
}
.fun-item {
  width: 187.5px;
  height: 186px;
  justify-content: center;
  align-items: center;
  /* display: inline-block; */
}
.fun-item1 {
  width: 187.5px;
  height: 186px;
  justify-content: center;
  align-items: center;
  /* display: inline-block; */
  margin-left: 40px;
}
.fun-item2 {
  width: 187.5px;
  height: 186px;
  justify-content: center;
  align-items: center;
  /* display: inline-block; */
  margin-right: 40px;
}
.nav-icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.nav-name {
  margin-top: 16px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  width: 187.5px;
  text-align: center;
}
.fun-img {
  width: 88px;
  height: 88px;
}
.tablebar {
  height: 80px;
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px #dedede;
  /* padding-top: 20px; */
  /* padding-bottom: 20px; */
  /* justify-content: center;
  align-items: center; */
  background-color: rgb(255, 255, 255);
  /* margin-top: 16px; */
  /* margin-top: 20px; */
}
.tablebar-content {
  width: 706px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
/* .tablebar-content >>> .weex-scroller {
  height: auto !important;
}
.tablebar-content >>> .weex-scroller >>> .weex-scroller-inner {
  height: auto !important;
  display: flex;
  flex-direction: row;
  align-items: center;
} */
.father {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.header {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #f0f0f0;
}
.classAblue {
  width: 80px;
  height: 4px;
  background-color: rgb(0, 119, 230);
  border-radius: 4px;
  /* margin-bottom: 3px;
  margin-top: -15px; */
  visibility: visible;
  /* margin-bottom: -2px; */
}
.classAbrown {
  width: 80px;
  height: 6px;
  /* background-color: #a67342; */
  border-radius: 4px;
  visibility: visible;
}
.classBblue {
  width: 80px;
  height: 6px;
  /* background-color: rgb(0, 119, 230); */
  border-radius: 4px;
  visibility: hidden;
}
.classBbrown {
  width: 80px;
  height: 4px;
  background-color: #a67342;
  border-radius: 4px;
  /* margin-bottom: 3px;
  margin-top: -15px; */
  visibility: hidden;
}
.tab-item {
  display: flex;
  flex-direction: row;
  /* width: 686px; */
  /* width: 10000px; */
  height: 40px;
  align-items: center;
  font-size: 30px;
}
.menu {
  margin-right: 30px;
  /* position: absolute;
  top: 0px;
  left: 686px;
  z-index: 99; */
  width: 36px;
  height: 36px;
  margin-top: -5px;
  margin-left: 30px;
}
.news {
  width: 750px;
  height: 200px;
  /* padding-top: 20px;
  padding-bottom: 20px; */
  display: flex;
  /* border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #f6f6f6; */
  background-color: rgb(255, 255, 255);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #dedede;
  /* margin-left: 20px; */
}
/* .news-container {
  width: 720px;
  height: 200px;
} */
.news-content {
  display: flex;
  background-color: rgb(255, 255, 255);
}
.news-content1 {
  width: 720px;
  height: 200px;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 30px;
  /* height: 180px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #dedede;
}
.newsphoto {
  width: 148px;
  height: 148px;
  margin-top: 21px;
  margin-bottom: 21px;
}
.news-img {
  width: 200px;
  height: 200px;
  /* float: right; */
}
.newstitle {
  /* margin-bottom: 30px; */
  width: 690px;
  height: 78px;
  font-size: 32px;
  line-height: 40px;
  /* font-weight: normal;
  font-stretch: normal; */
  color: #333333;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  lines: 2;
  font-weight: bold;
  font-stretch: normal;
}
.newsauthor {
  width: 670px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.author {
  font-size: 24px;
}
.shuju {
  flex-direction: row;
  align-items: center;
}
.word1 {
  font-size: 24px;
  margin-right: 10px;
  color: #888888;
}
.word2 {
  font-size: 24px;
  margin-left: 10px;
  color: #888888;
}
.nodataShow {
  width: 750px;
  height: 800px;
}
.noumenon {
  width: 750px;
}
.card {
  width: 750px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
}
.card-box {
  width: 187.5px;
  height: 186px;
  justify-content: center;
  align-items: center;
}
</style>
