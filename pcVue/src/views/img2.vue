<template>
  <div class="main-div">
    <!-- Original Image with Tooltip -->
    <div class="image-wrapper" @click="enlargeImage">
      <img :src="imgUrl" alt="Base64 Image" style="cursor: pointer" />
      <span class="tooltip">点击放大</span>
    </div>

    <!-- Overlay and Enlarged Image -->
    <div v-if="isOverlayActive" class="overlay" @click.self="closeOverlay">
      <div class="zoom-controls">
        <button @click.stop="zoomIn">+</button>
        <button @click.stop="zoomOut">-</button>
      </div>
      <img
        :src="imgUrl"
        alt="Enlarged Image"
        class="enlarged-image"
        :style="imageStyle"
      />
    </div>
  </div>
</template>

<script>
import consultationApi from "@/api/consultation";
export default {
  name: "digitalEmployeeYujg",
  data() {
    return {
      imgUrl: "",
      isOverlayActive: false, // Track overlay visibility
      enlargedImgSrc: "", // Store the enlarged image source
      zoomLevel: 1, // Initial zoom level (1 = 100%)
    };
  },

  mounted() {
    this.getImgUrl();
  },
  computed: {
    imageStyle() {
      return {
        transform: `scale(${this.zoomLevel})`, // Apply zoom level as scale
        transition: "transform 0.2s ease", // Smooth transition for scaling
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
      this.isOverlayActive = true; // Show the overlay
      this.zoomLevel = 1; // Reset zoom level when opening
    },
    closeOverlay() {
      this.isOverlayActive = false; // Hide the overlay
    },
    zoomIn() {
      this.zoomLevel += 0.1; // Increase zoom level by 10%
    },
    zoomOut() {
      if (this.zoomLevel > 0.5) {
        // Prevent zooming out too much
        this.zoomLevel -= 0.1; // Decrease zoom level by 10%
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper {
  position: relative;
  display: inline-block;
  cursor: pointer;

  .tooltip {
    visibility: hidden;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 14px;
    position: absolute;
    bottom: 100%; /* Position above the image */
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
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
  background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent black */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Ensure it's on top */
  cursor: pointer; /* Indicate clickable */
}

.zoom-controls {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  z-index: 1000; /* Ensure it's above the image */
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
  max-width: 90%; /* Limit width to 90% of the viewport */
  max-height: 90%; /* Limit height to 90% of the viewport */
  border: 2px solid white; /* Optional: Add a border for better visibility */
}
</style>