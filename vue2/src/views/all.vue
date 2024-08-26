<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-03 14:01:34
 * @LastEditors: Please set LastEditors
 * @Description: $set赋值
 * @FilePath: \vueDemo\src\views\all.vue
-->
<template>
  <div>
    <div @click="test" class="test">测试</div>
    <div @click="test1">声明方式</div>
    <div @click="test2">重置状态里面的数据</div>
    <div @click="test3">塞字段</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      financeDetail: "list",
      currentQryMsg: "1",
      selectList: {
        isShow: false, //是否显示popup
        type: "", //1为账号列表，2为日期列表，3为类型列表
      },
      dataList: [
        {
          name: "张三",
        },
        {
          name: "李四",
        },
      ],
      TransCode: "2",
    };
  },
  created() {
   
  },
  methods: {
    test() {
      var index = 0;
      this.dataList.forEach((element, value) => {
        if (index != value) {
          this.$set(this.dataList[value], "checked", false);
        } else {
          this.$set(this.dataList[value], "checked", true);
        }
      });
      console.log(JSON.stringify(this.dataList));
      var obj = { name: "李四" };
      this.way(obj);
    },
    test1() {
      let stage,
        fromPage = this.financeDetail;
      fromPage == "myFinance"
        ? (stage = "myFinanceList")
        : fromPage == "list"
        ? (stage = "list")
        : fromPage == "weex"
        ? (stage = "detail")
        : (stage = "list");
      console.log(stage);
      this.$set(this.selectList, "type", 3);
      console.log(JSON.stringify(this.selectList));
    },

    test2() {
      this.$store.state.controlBackMsg = {
        isControl: false,
      };
      this.backControl();
    },
    test3() {
      alert(JSON.stringify(this.$store.state));
      this.dataList.forEach((item, index) => {
        this.$set(item, "isShow", false);
        if (this.TransCode == "1") {
          this.$set(item, "ProductCodeMark", "1");
        } else {
          this.$set(item, "ProductCodeMark", "2");
        }
      });
      console.log(JSON.stringify(this.dataList));
    },
    way(object) {
      var params = {
        ...object,
        ...this.selectList,
      };
      console.log(params);
    },
  },
};
</script>

<style scoped>
.test {
  width: 100%;
  height: 250px;
  background: red;
}
</style>
