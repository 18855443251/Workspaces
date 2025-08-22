<template>
  <div>
    <transition :name="transitionName">
      <a-config-provider :locale="$zhCN">
        <keep-alive :include="[]">
          <router-view class="router-view"></router-view>
        </keep-alive>
      </a-config-provider>
    </transition>
    <my-loading
      :show="$store.state.user.isShowLoading"
      :loadingIcon="$store.state.user.loadingIcon"
    ></my-loading>
    <watermark v-if="$store.state.user.staffAccount"></watermark>
  </div>
</template>
<script>
import myLoading from "@/components/my-loading";
import Watermark from "@/components/Watermark";
export default {
  name: "app",
  components: { myLoading, Watermark },
  data() {
    return {
      transitionName: "slide-left",
      isRefresh: true,
    };
  },
  watch: {
    $route(to) {
      if (to.path == "/") {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
    },
  },

  methods: {
    reload() {
      this.isRefresh = false;
      this.$nextTick(() => {
        this.isRefresh = true;
      });
    },
  },
  created() {},
};
</script>
<style scoped>
.router-view {
  padding-top: 120px;
  min-height: 100vh;
  background: rgba(237, 246, 255, 1);
}
.child-view {
  font-size: 14px;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 99999;
}
</style>
