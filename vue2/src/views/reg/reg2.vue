<template>
  <div>
    <div class="marquee_wrap" ref="marquee_wrap">
      {{str}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    str:"",
    str1:"我爱北京/天安门 我爱1digital/download3北京\\=天安门",
    appPathMappingUrl:'http'
    };
  },
  mounted() {
  this.test()
      // let reg = /src=[\'\"]?([^\'\"]*)[\'\"]?/gi;
      //  this.str1 = this.str1.replace(
      //           reg,
      //           (text) => {
      //             let reStr = "";
      //             let arr = text.split("digital/download3");
      //             let subarr = arr[1].split("\\");
      //             reStr = `src="${this.appPathMappingUrl}${subarr[0]}`;
      //             return reStr;
      //           }
      //         );
  },
  methods: {
   test(){
    this.str="我//\'"
    let reg=/[^'/]/gi
    this.str=this.str.replace(reg,(text)=>{
      return '上'
    })
   }
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

};
</script>

<style scoped>

</style>