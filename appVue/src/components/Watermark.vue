<template>
  <div class="watermark">
    <div class="watermark-content">
      <span
        >{{ $store.state.user.watermarkObj.staffName
        }}{{ $store.state.user.watermarkObj.staffAccount }}
      </span>
      <br />
      <span>{{ currentTime }} </span>
    </div>
    <div class="watermark-content down">
      <span
        >{{ $store.state.user.watermarkObj.staffName
        }}{{ $store.state.user.watermarkObj.staffAccount }}
      </span>
      <br />
      <span>{{ currentTime }} </span>
    </div>
  </div>
</template>


<script>
import dayjs from "dayjs";
import { getSessionContext } from "@/store/index.js";
export default {
  name: "Watermark",
  props: {}, // 接收外部传入的用户名
  data() {
    return {
      currentTime: this.getCurrentTime(),
      userInfo: {},
    };
  },
  methods: {
    getCurrentTime() {
      return dayjs().format("YYYY/MM/DD HH:mm:ss");
    },
    updateTime() {
      this.currentTime = this.getCurrentTime();
    },
  },
  mounted() {
    // this.userInfo = sessionStorage.getItem("userInfo");
    // console.log(this.userInfo, "用户信息");
    // if (this.userInfo) {
    //   this.partyName = JSON.parse(this.userInfo).staffName;
    //   this.partyAccount = JSON.parse(this.userInfo).staffAccount;
    // }
    this.interval = setInterval(this.updateTime, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.watermark {
  position: fixed;
  top: 50%;
  left: 40%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
}

.down {
  margin-top: 300px;
}

.watermark-content {
  transform: rotate(30deg);
  opacity: 0.3;
  font-size: 16px;
  color: #666;
  white-space: nowrap;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  animation: watermark-flicker 10s infinite;
  font-family: Arial, sans-serif;
  letter-spacing: 2px;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  padding: 8px 15px;
  border-radius: 4px;
}

@keyframes watermark-flicker {
  0% {
    opacity: 0.25;
  }

  50% {
    opacity: 0.35;
  }

  100% {
    opacity: 0.25;
  }
}

/* 添加多个水印副本增强效果 */
.watermark::before,
.watermark::after {
  content: attr(data-text);
  position: absolute;
  transform: rotate(-45deg);
  opacity: 0.15;
}

.watermark::before {
  top: 10px;
  left: 10px;
}

.watermark::after {
  top: -10px;
  left: -10px;
}
</style>