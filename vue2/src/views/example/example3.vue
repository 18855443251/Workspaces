<template>
  <div class="box">
    <div class="tab" ref="tab">
      <div v-for="(item, index) in tabs" :key="index">
        <div
          :class="{ active: active === index }"
          @click="switchTab(item, index)"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="cont" ref="cont">
      <div
        v-for="(item, index) in arrList"
        :key="index"
        :class="item.class"
        :ref="item.class"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="back-top" @click="backTop">回到顶部</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ["cont_1", "cont_2", "cont_3"],
      active: 0,
      arrList: [
        {
          name: "内容1",
          class: "cont_1",
        },
        {
          name: "内容2",
          class: "cont_2",
        },
        {
          name: "内容3",
          class: "cont_3",
        },
      ],
      cont1: null,
      cont2: null,
      cont3: null,
      isClickTab: false,
    };
  },

  methods: {
    backTop() {
      // 回到顶部
      this.$refs["cont_1"][0].scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    },
    switchTab(item, index) {
      console.log(item);
      this.$refs[item][0].scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    },
  },

  mounted() {
    const tabH = this.$refs["tab"].offsetHeight;
    // 添加scroll事件监听
    this.$refs["cont"].addEventListener("scroll", () => {
      this.arrList.forEach((item, index) => {
        if (
          this.$refs[item.class][0].getBoundingClientRect().top <=
          tabH + 88
        ) {
          if (index > 0) {
            this.active = index;
            return false;
          } else {
            this.active = 0;
          }
        }
      });
    });
  },
};
</script>

<style lang="less" scoped>
.box {
  font-size: 28px;
  overflow-x: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  .tab {
    height: 88px;
    background: #fff;
    line-height: 88px;
    color: #666;
    display: flex;
    justify-content: space-around;
    .active {
      font-size: 32px;
      color: #333;
      &::after {
        display: block;
        content: "";
        width: 36px;
        height: 6px;
        margin: auto;
        margin-top: -10px;
        background: rgba(255, 51, 0, 1);
        border-radius: 3px;
      }
    }
  }
  .cont {
    height: 300px;
    flex-grow: 1;
    overflow: auto;
    .cont_1 {
      height: 400px;
      background: pink;
    }
    .cont_2 {
      height: 800px;
      background: yellow;
    }
    .cont_3 {
      height: 100%;
      background: lightgreen;
    }
  }

  .back-top {
    width: 80px;
    height: 80px;

    border-radius: 50%;

    position: fixed;

    bottom: 120px;

    right: 32px;
  }
}
</style>