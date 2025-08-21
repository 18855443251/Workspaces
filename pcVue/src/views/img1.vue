<template>
  <div class="main-div">
    <img
      src="@/assets/images/1.png"
      alt="Base64 Image"
      @click="enlargeImage"
      style="cursor: pointer"
    />
    <div v-if="isOverlayActive" class="overlay" @click.self="closeOverlay">
      <div class="zoom-controls">
        <button @click.stop="zoomIn">+</button>
        <button @click.stop="zoomOut">-</button>
      </div>
      <img
        src="@/assets/images/1.png"
        alt="Enlarged Image"
        class="enlarged-image"
        :style="imageStyle"
        @click="closeOverlay"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "digitalEmployeeYujg",
  data() {
    return {
      imgUrl: "",
      isOverlayActive: false,
      enlargedImgSrc: "",
      zoomLevel: 1,
    };
  },

  mounted() {
    //this.getImgUrl();
  },
  computed: {
    imageStyle() {
      return {
        transform: `scale(${this.zoomLevel})`,
        transition: "transform 0.2s ease",
      };
    },
  },
  methods: {
    getImgUrl() {
      consultationApi.getImgUrl().then((res) => {
        if (res.data.code === 200) {
          this.imgUrl = res.data.data;
        }
      });
    },
    enlargeImage() {
      this.isOverlayActive = true;
      this.zoomLevel = 1;
    },
    closeOverlay() {
      this.isOverlayActive = false;
    },
    zoomIn() {
      this.zoomLevel += 0.1;
    },
    zoomOut() {
      if (this.zoomLevel > 0.5) {
        this.zoomLevel -= 0.1;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.main-div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 97%;
  height: auto;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  cursor: pointer;
}

.zoom-controls {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  z-index: 1000;
}

.zoom-controls button {
  background-color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.enlarged-image {
  max-width: 90%;
  max-height: 90%;
  border: 2px solid white;
}
</style>