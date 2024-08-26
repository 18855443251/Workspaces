<!--
 * @Author: your name
 * @Date: 2021-08-12 15:06:34
 * @LastEditTime: 2022-08-04 10:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\VxMobile.vue
-->
<template>
  <div class="claneCache_view">
    <div v-for="(item, index) in test" :key="index" class="box">
      <h3>{{ item.date }}</h3>
      <div v-for="(sub, key) in item.res" :key="key" class="test">
        <span>{{ sub.client }}</span>
        <span>{{ sub.date }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import navBar from "@/components/navBar";
export default {
  name: "claneCache",
  components: { navBar },
  data() {
    return {
      arr: [
        {
          tid: "163",
          date: "2020-04-04",
          client: "M人民中路分店",
          status: "已接收",
          state: "0",
          address: "广东省广州市人民中路304-314号",
          remark: "",
          tag_class: "",
          start_time: "21:42",
          end_time: "00:00",
          tag: "灭蟑螂",
          staff: "测试账号",
          mould: "0",
          state_class: "get",
        },
        {
          tid: "164",
          date: "2020-04-04",
          client: "M昌岗中路分店",
          status: "已接收",
          state: "0",
          address: "广州市海珠区昌岗中路130号首层及二层商铺",
          remark: "",
          tag_class: "",
          start_time: "21:43",
          end_time: "00:00",
          tag: "灭飞虫",
          staff: "测试账号",
          mould: "0",
          state_class: "get",
        },
        {
          tid: "165",
          date: "2020-04-04",
          client: "M中信广场分店",
          status: "已接收",
          state: "0",
          address: "广州市天河北路233号中信广场中首层及二层",
          remark: "",
          tag_class: "",
          start_time: "21:43",
          end_time: "00:00",
          tag: "灭飞虫",
          staff: "测试账号",
          mould: "0",
          state_class: "get",
        },
        {
          tid: "166",
          date: "2020-04-04",
          client: "M小北路分店",
          status: "已接收",
          state: "0",
          address: "广州市小北路193-215号广州鹏源大厦首层",
          remark: "",
          tag_class: "",
          start_time: "21:43",
          end_time: "00:00",
          tag: "灭飞虫",
          staff: "测试账号",
          mould: "0",
          state_class: "get",
        },
        {
          tid: "167",
          date: "2020-04-05",
          client: "M中泰广场分店",
          status: "已接收",
          state: "0",
          address: "广州市天河区林和西路161号中泰广场首层及夹层",
          remark: "",
          tag_class: "",
          start_time: "10:10",
          end_time: "00:00",
          tag: "除四害",
          staff: "测试账号",
          mould: "0",
          state_class: "get",
        },
        {
          tid: "162",
          date: "2020-04-04",
          client: "72街白马",
          status: "已接收",
          state: "0",
          address: "广州市白云区火车站白马商场",
          remark: "无事献殷勤",
          tag_class: "warm",
          start_time: "09:28",
          end_time: "00:00",
          tag: "灭蟑螂",
          staff: "测试账号",
          mould: "0",
          state_class: "get",
        },
        {
          tid: "156",
          date: "2020-04-01",
          client: "测试",
          status: "已上传",
          state: "5",
          address: "",
          remark: "",
          tag_class: "warm",
          start_time: "00:54",
          end_time: "00:00",
          tag: "灭蟑螂",
          staff: "测试账号",
          mould: "0",
          state_class: "done_",
        },
        {
          tid: "159",
          date: "2020-04-01",
          client: "M中信广场分店",
          status: "已上传",
          state: "5",
          address: "广州市天河北路233号中信广场中首层及二层",
          remark: "",
          tag_class: "warm",
          start_time: "15:58",
          end_time: "00:00",
          tag: "灭老鼠",
          staff: "测试账号",
          mould: "0",
          state_class: "done_",
        },
        {
          tid: "160",
          date: "2020-04-02",
          client: "测试",
          status: "已接收",
          state: "0",
          address: "",
          remark: "",
          tag_class: "warm",
          start_time: "14:01",
          end_time: "00:00",
          tag: "灭蟑螂",
          staff: "测试账号",
          mould: "0",
          state_class: "get",
        },
      ],
    };
  },
  created() {
    this.test = this.dataResort(this.arr);
    console.log(this.test, "哈哈");
  },
  methods: {
    dataResort(arr) {
      var newArr = [];
      arr.forEach(function (oldData, i) {
        var index = -1;
        var createTime = oldData.date.substring(0, 10);
        var alreadyExists = newArr.some(function (newData, j) {
          if (oldData.date.substring(0, 10) === newData.date.substring(0, 10)) {
            index = j;
            return true;
          }
        });
        if (!alreadyExists) {
          var res = [];
          res.push(oldData);
          newArr.push({
            date: oldData.date,
            res: res,
          });
        } else {
          newArr[index].res.push(oldData);
        }
      });
      return newArr;
    },
  },
};
</script>
<style scoped>
.box{
    margin-top: 20px;
}
</style>