<template>
  <div class="dashboard-container">
    <div class="ranking-wrapper">
      <div 
        class="ranking-content" 
        ref="rankingContent"
        :class="{ 'scrolling': shouldScroll }"
      >
        <div
          v-for="(item, index) in displayData"
          :key="index"
          class="ranking-item"
        >
          <div class="ranking-item-content">
            <div :class="getRankClass(item.trueIndex)" class="rank-column">
              {{ item.trueIndex + 1 }}
            </div>

            <div class="name-column">
              <div class="name-wrapper">
                <div class="name-text">{{ item.name }}</div>
                <div class="progress-bar">
                  <div
                    class="progress-fill"
                    :style="getProgressStyle(item.value, item.trueIndex)"
                  ></div>
                </div>
              </div>
            </div>

            <div class="value-column">
              <div class="value-text">{{ item.value }}</div>
            </div>
          </div>
        </div>
        
        <!-- 如果需要滚动，添加重复内容以实现无缝循环 -->
        <template v-if="shouldScroll">
          <div
            v-for="(item, index) in displayData"
            :key="`duplicate-${index}`"
            class="ranking-item"
          >
            <div class="ranking-item-content">
              <div :class="getRankClass(item.trueIndex)" class="rank-column">
                {{ item.trueIndex + 1 }}
              </div>

              <div class="name-column">
                <div class="name-wrapper">
                  <div class="name-text">{{ item.name }}</div>
                  <div class="progress-bar">
                    <div
                      class="progress-fill"
                      :style="getProgressStyle(item.value, item.trueIndex)"
                    ></div>
                  </div>
                </div>
              </div>

              <div class="value-column">
                <div class="value-text">{{ item.value }}</div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProblemStatistics",
  components: {},
  data() {
    return {
      rankData: [
        { name: "第三方合作伙伴", value: 14 },
        { name: "海南分公司本部", value: 9 },
        // { name: "乐东分公司", value: 0 },
        // { name: "海口分公司", value: 7 },
        // { name: "三亚分公司", value: 5 },
        // { name: "儋州分公司", value: 3 },
      ],
      displayData: [],
      animationFrame: null,
      translateY: 0,
      itemHeight: 40,
      containerHeight: 245 - 32, // 245px total height - 32px padding
      shouldScroll: false,
    };
  },
  mounted() {
    this.initDisplayData();
    this.checkIfScrollNeeded();
    if (this.shouldScroll) {
      this.startAnimation();
    }
  },
  beforeDestroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  },
  methods: {
    initDisplayData() {
      const data = [];
      this.rankData.forEach((item, index) => {
        data.push({
          ...item,
          trueIndex: index,
        });
      });
      this.displayData = data;
    },

    checkIfScrollNeeded() {
      // 计算内容总高度
      const contentHeight = this.displayData.length * this.itemHeight;
      // 如果内容高度超过容器高度，则需要滚动
      this.shouldScroll = contentHeight > this.containerHeight;
      console.log(`Content height: ${contentHeight}, Container height: ${this.containerHeight}, Should scroll: ${this.shouldScroll}`);
    },

    startAnimation() {
      const step = () => {
        this.translateY -= 1; // 每帧移动1像素

        // 当移动距离达到内容高度时，重置位置以实现无缝循环
        if (Math.abs(this.translateY) >= this.displayData.length * this.itemHeight) {
          this.translateY = 0;
        }

        if (this.$refs.rankingContent) {
          this.$refs.rankingContent.style.transform = `translateY(${this.translateY}px)`;
        }

        this.animationFrame = requestAnimationFrame(step);
      };

      this.animationFrame = requestAnimationFrame(step);
    },

    getRankClass(index) {
      if (index === 0) {
        return "rank-first";
      } else if (index === 1) {
        return "rank-second";
      } else if (index === 2) {
        return "rank-third";
      } else {
        return "rank-normal";
      }
    },

    getProgressStyle(value, index) {
      const maxValue = Math.max(...this.rankData.map((item) => item.value), 1);
      const percentage = (value / maxValue) * 100;

      let backgroundColor = "#1890ff";
      if (index === 0) {
        backgroundColor = "#FFD700";
      } else if (index === 1) {
        backgroundColor = "#C0C0C0";
      } else if (index === 2) {
        backgroundColor = "#CD7F32";
      }

      return {
        width: `${percentage}%`,
        backgroundColor: backgroundColor,
        height: "6px",
        borderRadius: "3px",
      };
    },
  },
};
</script>

<style lang="less" scoped>
.dashboard-container {
  width: 357px;
  height: 245px;
  overflow: hidden;
  position: relative;
  background: #0b1230;
  border-radius: 14px;
  padding: 16px 12px;
}

.ranking-wrapper {
  height: 100%;
  overflow: hidden;
  position: relative;
  border-top: 1px solid #1e3a8a55;
  border-bottom: 1px solid #1e3a8a55;
}

.ranking-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  will-change: transform;
  
  // 当不需要滚动时，内容垂直居中
  &:not(.scrolling) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.ranking-item {
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #1e3a8a55;
  
  // 最后一项不显示边框
  &:last-child {
    border-bottom: none;
  }
}

.ranking-item-content {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 4px;
}

.rank-column {
  min-width: 66px;
  font-weight: 700;
  letter-spacing: 0.2px;
}

.name-column {
  flex: 1;
  padding: 0 10px;
}

.value-column {
  min-width: 30px;
  text-align: right;
  font-weight: 700;
  color: #dbeafe;
}

.name-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.name-text {
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color:red;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background-color: rgba(78, 161, 255, 0.2);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 3px;
}

.value-text {
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.rank-first {
  width: 22px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  background-color: #ffd700;
  color: #000;
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
}

.rank-second {
  width: 22px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  background-color: #c0c0c0;
  color: #000;
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
}

.rank-third {
  width: 22px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  background-color: #cd7f32;
  color: #fff;
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
}

.rank-normal {
  width: 22px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  background-color: #1890ff;
  color: #fff;
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
}
</style>