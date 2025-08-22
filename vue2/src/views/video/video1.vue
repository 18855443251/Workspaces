<template>
  <div>
    <!-- 视频播放容器 -->
    <div class="video-player" @click="togglePlay">
      <video
        ref="videoPlayer"
        src="./test.mp4"
        :key="productObj.prodVideoUrl"
        :poster="productObj.prodVideoImgUrl"
        @play="onPlay"
        @pause="onPause"
        @timeupdate="onTimeUpdate"
        @loadedmetadata="onLoadedMetadata"
      ></video>
      <div class="play-button" v-if="!isPlaying">
        <div @click.stop="togglePlay">图片</div>
      </div>
    </div>
    <!-- 进度条 -->
    <div class="controls">
      <input
        type="range"
        v-model="currentTime"
        :max="duration"
        :style="{ '--progress': progressPercentage + '%' }"
        step="any"
        @input="seek"
      />
      <!-- 时间 -->
      <div class="time">
        {{ formattedCurrentTime }} / {{ formattedDuration }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      productObj: {},
      isPlaying: false, //播放状态 true为正在播放
      currentTime: 0, //当前播放时间从0开始
      duration: 0, //音频总时长
      progressPercentage: 0, // 新增进度百分比属性
    };
  },
  created() {},
  computed: {
    // 视频播放当前时间
    formattedCurrentTime() {
      return this.formatTime(this.currentTime);
    },
    // 视频总时长
    formattedDuration() {
      return this.formatTime(this.duration);
    },
  },
  methods: {
    // 切换播放按钮
    togglePlay(event) {
      if (this.isPlaying) {
        this.$refs.videoPlayer.pause();
      } else {
        this.$refs.videoPlayer.play();
      }
      this.isPlaying = !this.isPlaying;
    },
    // 播放
    onPlay() {
      this.isPlaying = true;
    },
    // 暂停
    onPause() {
      this.isPlaying = false;
    },
    // 进度条更新
    onTimeUpdate() {
      this.progressPercentage = (this.currentTime / this.duration) * 100; // 计算进度百分比
      this.currentTime = this.$refs.videoPlayer.currentTime;
    },
    // 获取视频时长
    onLoadedMetadata() {
      this.duration = this.$refs.videoPlayer.duration;
    },
    // 获取当前播放时间
    seek() {
      this.$refs.videoPlayer.currentTime = this.currentTime;
    },
    // 格式化时间
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds}`;
    },
  },
};
</script>

<style scoped>
.video-player {
  width: 100%;
  height: 7.5rem;
  position: relative;
  margin-top: 0.8rem;
  overflow: hidden; /* 隐藏超出部分 */
}
video {
  width: 100%; /* 视频宽度充满容器 */
  height: 100%; /* 视频高度充满容器 */
  object-fit: cover; /* 保持视频比例，覆盖整个容器 */
}
.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1.25rem;
  height: 1.25rem;
  z-index: 1;
}
.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 0 0.32rem;
}
input[type="range"] {
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  height: 5px;
  position: relative;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  background: #ccc;
  border-radius: 5px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  background: #fff;
  cursor: pointer;
  border-radius: 50%;
  margin-top: -5px;
}

input[type="range"]::before {
  content: "";
  position: absolute;
  height: 5px;
  background: #fff;
  border-radius: 5px;
  width: var(--progress); /* 使用 CSS 变量 */
}
.time {
  width: fit-content;
  margin-left: 0.1rem;
}
</style>
