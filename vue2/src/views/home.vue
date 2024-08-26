<template>
  <div class="hello">
    <div @click="toLogin">发接口</div>
    <div @click="jumpTo('3')">路由跳转</div>
    <!-- <div @click="$router.push('/routerJump')">路由跳转</div> -->
    <div @click="jump('/json1')">模拟json获取数据</div>
    <div @click="jump('/json2')">模拟json获取数据</div>
    <div @click="jump('/bankList')">银行列表通过json第一种导入方式</div>
    <div @click="jump('/bankList1')">银行列表通过json第二种导入方式</div>
    <!-- 组件 -->
    <div @click="$router.push('/father')">父子组件</div>

    <!-- 数组方法-->
    <div @click="jump('/sort')">sort根据数组对象的某个属性值排序</div>
    <div @click="jump('/sort1')">数组数字排序</div>
    <div @click="jump('/hebingArr')">合并两个数组</div>
    <div @click="jump('/filter')">根据关键字搜索filter,返回新数组</div>
    <div @click="jump('/arrbianli')">数组遍历，由1到30</div>

    <!-- 字符串方法 -->
    <div @click="jump('/indexOf1')">
      indexOf如果要检索的字符串值没有出现，则该方法返回 -1。
    </div>
    <div @click="jump('/indexOf2')">
      indexOf如果要检索的字符串值没有出现，则该方法返回 -1。
    </div>
    <!-- 银行卡号过滤 -->
    <div @click="jump('/formatNum')">银行卡号展示格式</div>
    <!-- 日期过滤 -->
    <div @click="jump('/formatDate')">日期展示格式</div>
    <div @click="jump('/datemethod')">日期方法</div>
    <div @click="jump('/payroll')">da</div>

    <!-- 金额过滤 -->
    <div @click="jump('/formatMoney')">金额展示格式</div>
    <!-- 正则 -->
    <div @click="jump('/replace1')">正则replace</div>
    <div @click="jump('/match1')">正则match</div>

    <!-- 状态存储 -->
    <div @click="jump('/state1')">双重过滤状态管理里面的数据</div>
    <!-- 合并对象 -->
    <div @click="jump('/assign1')">assign1合并对象和数组</div>
    <!-- 三目运算 -->
    <div @click="jump('/calculation1')">三目运算</div>
    <div @click="jump('/pipeiImg')">匹配图片</div>
    <div @click="jump('/ref1')">ref使用</div>
    <div @click="jump('/useData1')">数据格式的取和用</div>
    <div @click="jump('/all')">测试</div>
    <div @click="jump('/star')">星星</div>
    <div @click="jump('/swiper1')">有左右箭头，1，2，3</div>
    <div @click="jump('/swiper2')">只有圆点鼠标移上去，图片停止滚动</div>
    <div @click="jump('/swiper3')">只有原点，鼠标移上去，停止</div>
    <div @click="jump('/timeout1')">定时器</div>
    <div @click="jump('/test180')">旋转180</div>
    <div @click="jump('/map1')">行内信息</div>
    <div @click="jumpLuyou">路由</div>
    <div @click="dongLuyou">动态路由</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      LoginMsg: {}, // 登录信息
    };
  },
  methods: {
    toLogin() {
      let params = {
        LoginId: "",
        Password: "",
        Timestamp: "",
        MachineCode: "", // 设备号
        MacAddr: "", // Mac地址
        DeviceName: "", // 设备类型
        LoginType: "T", // 登录
        _locale: "zh_CN",
      };
      this.$axios.post("login.do", params).then((data) => {
        this.LoginMsg = data;
        this.loginTwo();
      });
    },
    loginTwo() {
      let data = this.LoginMsg;
      // Y 未绑定  N 绑定设备
      // if (data.IsMachine == "Y") {
      //   this.Alert("为保障您使用手机银行的安全，请绑定手机设备");
      // } else {
      //   this.loginThree();
      // }
      this.loginThree();
    },
    loginThree() {
      this.Alert("登录成功", () => {
        this.jump("/axios1");
      });
    },
    jumpTo(type) {
      // this.$router.push(path);
      var params1 = {
        name: "张三",
        type: type,
      };
      // 第一种写法
      // this.$router.push({ path: "routerJump", query: params });
      // 第二种写法，用封装好的方法
      this.jump("/routerJump", params1);
    },
    jumpLuyou() {
      //  this.$router.push({
      //   name: "router1",
      //   params: { username: "张三" },
      // });
      // this.$router.push({
      //   name: "router1",
      //   params: { username: "张三" },
      //   query: {
      //     parentPath: this.$route.path,
      //   },
      // });
      this.$router.push({ path: "/router1", query: { username: "张三" } });
      // this.$router.push({ path: "/router1", hash: "#team" });
      // this.$router.push("/router1");
    },
    dongLuyou() {
     
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
