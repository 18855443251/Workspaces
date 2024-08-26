<!--
 * @Author: your name
 * @Date: 2021-08-12 15:06:34
 * @LastEditTime: 2022-08-04 10:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\VxMobile.vue
-->
<template>
  <div class="claneCache_view"></div>
</template>
<script>
// import { test, getnewNenuList } from "@/common/js/compressImg.js";
// import { test } from "@/common/js/name.js";
export default {
  name: "claneCache",
  components: {},
  data() {
    return {
      testA: [
        {
          name: "张三1",
          createTime: "2023-01-02",
        },
        {
          name: "张三2",
          createTime: "2023-01-06",
        },
        {
          name: "张三3",
          createTime: "2023-02-06",
        },
        {
          name: "张三4",
          createTime: "2023-02-06",
        },
        {
          name: "张三5",
          createTime: "2023-02-08",
        },
        {
          name: "张三6",
          createTime: "2024-01-08",
        },
      ],
      newArr: [],
    };
  },
  created() {
    // console.log(test());
    // console.log(this.test("h"));
    // console.log(getnewNenuList("ii"));
    let newArr1 = [];
    for (var i = 0; i < this.testA.length; i++) {
      if (this.newArr.indexOf(this.testA[i].createTime.substring(0, 7)) == -1) {
        this.newArr.push(this.testA[i].createTime.substring(0, 7));
        newArr1.push({
          createTime: this.testA[i].createTime.substring(0, 7),
          subList: [],
        });
      }
    }
    for (let item of newArr1) {
      console.log("看看");
      for (let element of this.testA) {
        if (item.createTime == element.createTime.substring(0, 7)) {
          item.subList.push(element);
        }
      }
    }
    console.log(newArr1);
  },
  methods: {},
};
</script>
<style scoped>
.test {
  background: red;
}
.qrCode_icon {
  width: 50px;
  height: 50px;
}
</style>