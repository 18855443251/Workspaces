
<template>
<!-- vue 移动端弹窗后禁止页面滚动 @touchmove.prevent -->
  <div class="dialog" v-if="actDialog.open" @touchmove.prevent>
    <md-swiper
      :autoplay="autoplay"
      :transition="transition"
      :transition-duration="transitionDuration"
      :default-index="defaultIndex"
      :is-prevent="isPrevent"
      :is-loop="isLoop"
      :dragable="dragable"
      ref="swiper"
      :style="{ height: swiperHeight + 'px' }"
    >
      <md-swiper-item :key="$index" v-for="(item, $index) in dataList">
        <div class="card">
          <div class="card-header">您已预约{{ transStatus(item) }}</div>
          <div class="card-content">
           内容
          </div>
          <div class="card-btn">
            <div
              class="btn_first"
              v-if="item.businessType == '0' || item.businessType == '5'"
              @click="firstBtn(item)"
            >
              <div class="btn_text">{{ firstBtnText }}</div>
            </div>
            <div class="line" v-if="firstBtnText && secondBtnText"></div>
            <div class="btn_second" v-if="secondBtnText" @click="secondBtn">
              <div class="btn_text" style="color: #ff541b">
                {{ secondBtnText }}
              </div>
            </div>
          </div>
        </div>
      </md-swiper-item>
    </md-swiper>
  </div>
</template>
<script>
import {NoticeBar,Swiper, SwiperItem} from 'mand-mobile'
export default {
  components: {
    [NoticeBar.name]: NoticeBar,
     [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem,
  },
  name: "takeNumber",
  data: function () {
    return {
      imgSrc: '',
    };
  },
  props: {
    dataList: {
      type: Array,
      default: function _default() {
        return [];
      },
    },
    autoplay: {
      type: Number,
      default: 0,
    },
    transition: {
      type: String,
      default: "slide",
    },
    transitionDuration: {
      type: Number,
      default: 250,
    },
    defaultIndex: {
      type: Number,
      default: 0,
    },
    isPrevent: {
      type: Boolean,
      default: false,
    },
    isLoop: {
      type: Boolean,
      default: false,
    },
    dragable: {
      type: Boolean,
      default: true,
    },
    swiperHeight: {
      type: Number,
      default: 400,
    },
    actDialog: {
      type: Object,
      default: function _default() {
        return {};
      },
    },
    firstBtnText: {
      type: String,
      default: "取消预约",
    },
    secondBtnText: {
      type: String,
      default: "确定",
    },
  },
  methods: {
    // 取消预约按钮
    firstBtn(item) {
      this.actDialog.open = false;
      switch (item.businessType) {
        case "0":
          this.cancelAppointment(item);
          break;
        case "5":
          this.toCancel(item);
          break;
        default:
          break;
      }
      this.$emit("firstBtn");
    },
    // 确定按钮
    secondBtn() {
      this.actDialog.open = false;
      this.$emit("secondBtn");
    },
    // 取消预约取号接口调用
    cancelAppointment(item) {
      let params = {
        title: "温馨提示",
        content: "确定取消此次预约",
        sureText: "确定",
        cancelText: "取消",
      };

      AlipayJSBridge_tips("2", params, () => {
        let param = {
          reserveId: item.reserveId,
        };
        this.$remote("booking/cancelAppointment", param, {
          showToast: false,
        }).then(
          (res) => {
            AlipayJSBridge_call("pushWindow", {
              url: "booking-call-cancel-result.html",
              data: res,
            });
          },
          (error) => {
            AlipayJSBridge_call("pushWindow", {
              url: "booking-call-cancel-result.html",
              data: error,
            });
          }
        );
      });
    },
    //大额预约取消预约接口调用
    toCancel(item) {
      let params = {
        title: "温馨提示",
        content: "确定取消此次预约？",
        sureText: "确定",
        cancelText: "取消",
      };
      AlipayJSBridge_tips("2", params, () => {
        let params = {
          registerNo: item.reserveId,
          pointNo: item.orgCode,
        };
        this.$remote("booking/deleteLargeBooking", params, {
          showToast: false,
        }).then(
          (res) => {
            AlipayJSBridge_call("pushWindow", {
              url: "large-appointment-res.html",
              data: {
                ...res,
                mark: "cancel",
              },
            });
          },
          (error) => {
            AlipayJSBridge_call("pushWindow", {
              url: "large-appointment-res.html",
              data: {
                ...error,
                mark: "cancel",
              },
            });
          }
        );
      });
    },
    transStatus(item) {
      if (item.businessType == "0") {
        return "取号";
      } else if (item.businessType == "1") {
        return "个人开户";
      } else if (item.businessType == "2") {
        return "跨行转账";
      } else if (item.businessType == "3") {
        return "外省农信存款";
      } else if (item.businessType == "4") {
        return "外省农信取款";
      } else {
        return "大额取现业务";
      }
    },
  },
};
</script>
<style lang="less">
.dialog {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .md-swiper {
    .md-swiper-indicators {
      height: 4px;
      background: #FFE3E3;
      border-radius: 2px;
      bottom: 23px;

      .md-swiper-indicator {
        width: 23px;
        height: 4px;
        margin: 0;
      }

      .md-swiper-indicator-active {
        background: #F55348;
        border-radius: 2px;
      }
    }
  }

  .md-swiper-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card {
    width: 345px;
    height: 287px;
    padding-top: 16px;
    background: #FFFFFF;
    border-radius: 14px;

    .card-header {
      font-size: 18px;
      font-weight: 600;
      color: #1E1E1E;
      line-height: 25px;
      text-align: center;
    }

    .card-content {
      height: 200px;
      padding: 20px 15px 0 15px;
      position: relative;
    }

    .map {
      position: absolute;
      right: 23px;
      top: 20px;
      text-align: center;
    }

    .map-desc {
      font-size: 10px;
      font-weight: 400;
      color: #999999;
      line-height: 14px;
    }

    .card1-title {
      font-size: font-caption-normal;
      font-weight: font-weight-semibold;
      color: #1E1E1E;
      line-height: 22px;
      width: 200px;
      text-align: left;
    }

    .card1-row {
      margin-top: v-gap-md;
      display: flex;
      align-items: center;
    }

    .card1-row-type {
      margin-top: v-gap-md;
      display: flex;
    }

    .card1-row-icon {
      width: 20px;
      height: 20px;
      margin-right: 2px;
    }

    .card1-row-key, .card1-row-value {
      font-size: 14px;
      font-weight: 400;
      color: #666666;
      line-height: 20px;
    }

    .w219 {
      width: 219px;
      text-align: left;
    }

    .card1-row-desc {
      font-size: font-minor-normal;
      font-weight: font-weight-normal;
      color: #999999;
      line-height: 14px;
      margin-left: 93px;
    }

    .card2-row {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      .card2-row-key, .card2-row-value {
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        line-height: 20px;
      }
    }

    .card-btn {
      display: flex;
      border-top-width: 1px;
      border-top-color: #EAEAEA;
      border-top-style: solid;
      display: flex;
      height: 45px;
      flex-direction: row;
      align-items: center;

      .btn_first {
        flex: 1;
      }

      .line {
        height: 21px;
        width: 2px;
        background-color: #dddddd;
      }

      .btn_second {
        flex: 1;
      }

      .btn_text {
        font-size: 16px;
        font-weight: 400;
        line-height: 45px;
        text-align: center;
      }
    }
  }
}
</style>

