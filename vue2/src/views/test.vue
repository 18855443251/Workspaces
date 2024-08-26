<template>
  <div>
    <div class="marquee_wrap" ref="marquee_wrap"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minDate: new Date(),
      maxDate: new Date(),
    };
  },
  mounted() {
    if (new Date().getTime() >= new Date().setHours("09", "00", "00")) {
      this.dateData("2");
    } else {
      this.dateData("1");
    }
  },
  methods: {
    dateData(val) {
      this.minDate = new Date(this.getBetweenDate(val, "D"));
      this.maxDate = new Date(this.getBetweenDate("3", "D"));
    },
    getBetweenDate(num, unit) {
      const data = {
        Y: 365,
        M: 31,
        W: 7,
        D: 1,
        y: 365,
        m: 31,
        w: 7,
        d: 1,
      };
      const newDate =
        new Date().getTime() + num * data[unit] * 24 * 3600 * 1000;
      console.log(newDate, "测试");
      return this.getFormatDate(newDate);
    },
    /**
     * 获取当前时间的年月日
     * @param date 原始时间
     * @param autoAddZero 拼接字符
     * @param type
     * @returns {String}
     */
    getFormatDate(time = +new Date(), type = "-") {
      let current = new Date(time + 8 * 3600 * 1000);
      let [date] = current.toJSON().split("T");
      return type === "-" ? date : date.replace(/-/g, type);
    },
  },
};
</script>

<style scoped>
.marquee_wrap {
  overflow: hidden;
  background-color: yellow;
}
p {
  word-break: keep-all;
  white-space: nowrap;
  font-size: 30px;
}
.scroll {
  display: flex;
}
</style>
      timer: null,
      text: "",
      maxWidth: 0,
      showIndex: 0,
      scrollList: [
        {
          value: "黑云压城城欲摧，甲光向日金鳞开",
        },
        {
          value: "角声满天秋色里，塞上燕脂凝夜紫",
        },
        {
          value: "报君黄金台上意，提携玉龙为君死",
        },
      ],
    };
  },
  mounted() {
    this.showIndex = 0;
    let timer = setTimeout(() => {
      this.init();
      this.getWidth().then(() => {
        this.move();
      });
      clearTimeout(timer);
    }, 1000);
  },
  methods: {
    getWidth() {
      return new Promise((resolve) => {
        //获取文字宽度，用来判断滚动是否结束
        console.log(this.showIndex, this.scrollList[this.showIndex].value);
        this.text = this.scrollList[this.showIndex].value;
        let width = this.$refs["scroll_font"].clientWidth;
        resolve(width);
      });
    },
    init() {
      //获取滚动区域的宽度，初始化让文字显示在盒子最右侧，滚动结束返回至最右侧
      let maxWidth = this.$refs["marquee_wrap"].clientWidth;
      let scroll = this.$refs["scroll"];
      scroll.style.transform = "translateX(" + maxWidth + "px";
    },
    move() {
      let maxWidth = this.$refs["marquee_wrap"].clientWidth;
      this.getWidth().then((width) => {
        let scroll = this.$refs["scroll"];
        let distance = maxWidth;
        this.timer = setInterval(() => {
          distance -= 1;
          if (-distance >= width) {
            distance = maxWidth;
            if (
              this.showIndex < this.scrollList.length &&
              this.showIndex != this.scrollList.length - 1
            ) {
              //   每次换滚动内容应该清空计时器，不然会越来月卡
              this.showIndex++;
            }else if(this.showIndex == this.scrollList.length - 1){
             this.showIndex = 0
            }
           clearInterval(this.timer);
              //   每次换滚动内容应该清空计时器，不然会越来月卡
              this.move();
          }
          scroll.style.transform = "translateX(" + distance + "px";
        }, 20);
      });
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
.marquee_wrap {
  width: 500px;
  overflow: hidden;
  position: relative;
  background-color: yellow;
}
.marquee {
  margin-right: 0.16rem;
}
.scroll_font {
  /* margin-left: 250px; */
}
p {
  word-break: keep-all;
  white-space: nowrap;
  font-size: 0.28rem;
}
.scroll {
  display: flex;
}
.getWidth {
  word-break: keep-all;
  white-space: nowrap;
  position: absolute;
  opacity: 0;
  top: 0;
}
</style>