<template>
  <div class="box">
    <image class="loan_bg" :src="addJNImgBaseUrl('bank/loan_bg.png')" />
    <div class="one_color" v-for="(item, index) in oneColorList" :key="index">
      <text
        v-if="item.name"
        class="fs26"
        :style="index==0?{ 'color': item.color, width: '114px',color:'#ffffff',textAlign:'center',fontSize:'20px',marginRight:'16px' }:{'color': item.color}"
      >{{item.name}}</text>
      <text class="fs26">{{item.text}}</text>
    </div>
  </div>
</template>
<script>
export default {
  name: "changeText",
  props: ["sourceText"],
  data() {
    return {
      oneColorList: [
        {
          color: "",
          str: "",
          name: "",
        },
      ],
      textChange: "",
    };
  },
  watch: {
    sourceText: {
      immediate: true,
      handler() {
        this.textChange = this.sourceText;
        this.parseTemplate(this.textChange);
      },
    },
  },
  mounted() {},
  methods: {
    parseTemplate(textChange) {
      if (this.textChange && this.textChange.indexOf("<") != "-1") {
        this.textChange = this.textChange.replace(/\s/g, "");
        //表示存在
        var array = this.textChange.split("</span>");
        let resultList;
        resultList = array.map((item, index) => {
          let text;
          if (index + 1 < array.length) {
            text = array[index + 1].substring(0, array[index + 1].indexOf("<"));
          }
          return {
            // name 加个空格，美化排版
            name: (
              item.substring(item.indexOf(">") + 1, item.length) + " "
            ).replace(/[\[\]]/g, ""),
            color: item.substring(item.indexOf(":") + 1, item.indexOf(">") - 2),
            text: text,
          };
        });
        // this.oneColorList = this.getPointStr(resultList);
        this.oneColorList = this.splitText(resultList);
        // console.log(this.oneColorList);
      }
    },
    // 每行长度超过24使用...替换
    // getPointStr(resultList) {
    //   console.log(resultList, "-----------");
    //   let substr = "";
    //   let copy = "";
    //   for (let item of resultList) {
    //     let index = resultList.indexOf(item);
    //     if (substr.length + item.name.length >= 24) {
    //       copy = substr;
    //       substr = substr + item.name;
    //       item.name = item.name.substring(0, 24 - copy.length) + "...";
    //       item.text = "";
    //       resultList = resultList.slice(0, index + 1);
    //       return resultList;
    //     }

    //     substr = substr + item.name;
    //     if (substr.length + item.text.length >= 24) {
    //       copy = substr;
    //       substr = substr + item.text;
    //       item.text = item.text.substring(0, 24 - copy.length) + "...";
    //       resultList = resultList.slice(0, index + 1);
    //       return resultList;
    //     }
    //     substr = substr + item.text;
    //   }

    //   return resultList;
    // },
    // getPointStr(resultList) {
    //   // name为一个标签，其他每个字拆成一个标签
    //   let substr = "";
    //   let copy = "";
    //   for (let item of resultList) {
    //     let index = resultList.indexOf(item);
    //     substr = substr + item.name;
    //     substr = substr + item.text;
    //   }

    //   return resultList;
    // },

    // name为一个标签，其他每个字拆成一个标签
    splitText(sourceList) {
      let resultList = [];
      sourceList.forEach((item) => {
        // console.log(item.text);
        if (item.name && item.color) {
          resultList.push({ name: item.name, color: item.color });
          if (item.text && item.text) {
            resultList.push(
              // { name: item.name, color: item.color },
              ...item.text.split("").map((item) => {
                return {
                  text: item,
                };
              })
            ); // 判断有text，将文字拆分并添加到数组中
          }
        } else if (!item.color && item.name) {
          resultList.push(
            // { name: item.name, color: item.color },
            ...item.name.split("").map((item) => {
              return {
                text: item,
              };
            })
          );
        } else {
          resultList.push(item);
        }
      });
      return resultList;
    },
  },
};
</script>
<style scoped>
.box {
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
.one_color {
  flex-direction: row;
  align-items: center;
  height: 46px;
}
.fs20 {
  font-size: 20px;
  line-height: 46px;
  height: 46px;
}
.fs26 {
  font-size: 28px;
  line-height: 46px;
  height: 46px;
}
.loan_bg {
  height: 28px;
  width: 114px;
  top: 8px;
  position: absolute;
}
</style>
