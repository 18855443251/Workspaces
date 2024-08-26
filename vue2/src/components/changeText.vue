<template>
  <div class="box">
    <div class="one_color" v-for="(item, index) in oneColorList" :key="index">
      <text class="fs26" :style="{ 'color': item.color }">{{item.name}}</text>
      <text class="fs26">{{item.text}}</text>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubmitBtn",
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
    // "title": "<span style=\"color: #999999 ;\">[业务量]</span>昨日业务量 <span style=\"color:
    //  #178fff;\">0</span> 笔，新增客户 <span style=\"color: #178fff;\">0</span> 户，流失客户 <span style=\"color: #178fff;\">0</span> 户。",
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
            name: item.substring(item.indexOf(">") + 1, item.length) + " ",
            color: item.substring(item.indexOf(":") + 1, item.indexOf(">") - 2),
            text: text,
          };
        });
        this.oneColorList = JSON.stringify(this.getPointStr(resultList));
        console.log(this.oneColorList + "那你");
      }
    },
    getPointStr(resultList) {
      let substr = "";
      let copy = "";
      for (let item of resultList) {
        let index = resultList.indexOf(item);
        if (substr.length + item.name.length >= 24) {
          copy = substr;
          substr = substr + item.name;
          console.log("- - ", substr.length - 24);
          item.name = item.name.substring(0, 24 - copy.length) + "...";
          item.text = "";
          resultList = resultList.slice(0, index + 1);
          return resultList;
        }

        substr = substr + item.name;
        if (substr.length + item.text.length >= 24) {
          copy = substr;
          substr = substr + item.text;
          console.log("0 - ", substr.length);
          item.text = item.text.substring(0, 24 - copy.length) + "...";
          console.log("01 - ", item.text);
          resultList = resultList.slice(0, index + 1);
          return resultList;
        }
        substr = substr + item.text;
      }

      return resultList;
    },
  },
};
</script>
<style scoped>
.box {
  flex-direction: row;
  align-items: center;
  height: 60px;
}
.one_color {
  flex-direction: row;
  align-items: center;
  height: 60px;
}
.fs26 {
  font-size: 28px;
}
</style>
