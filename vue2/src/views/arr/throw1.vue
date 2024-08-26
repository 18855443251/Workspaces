<template>
  <div>
    <div v-for="(item, index) in newList" :key="index">{{ item.Bankname }}</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      newList: [
        { Bankname: "张三", age: 55 },
        { Bankname: "李四", age: 14 },
        { Bankname: "王五", age: 14 },
      ],
    };
  },
  created() {
    // this.test2();
    // this.test3();
    this.test2();
    // this.test5();
    // let a=this.test6()
    // console.log(a)
  },
  methods: {
    test2() {
      try {
        this.newList.forEach((item) => {
          if (item.Bankname == "李四") {
            throw new Error("终止循环");
          } else {
            console.log(item, "当前项"); //会打印一次
          }
        });
      } catch (e) {
        if (e.message == "终止循环") {
          console.log("结束了");
        }
      }
    },
    test3() {
      var tel = "12345866520";
      var pwd = "13456";
      try {
        if (!tel.match(/^1[3456789]\d{9}$/g)) {
          throw new TypeError("手机号码错误"); //会终止循环
        }
        if (pwd.length < 6) {
          throw new TypeError("请输入6-32位的密码"); //。终止循环
        }
        console.log("haha,我已经将数据发送出去了"); //不会打印
      } catch (error) {
        //当try代码块报错，catch会执行
        console.log(error.name, "错误名称"); //TypeError
        console.log(error.message, "错误信息"); //错误信息
      } finally {
        console.log("都会执行");
        // 一些善后代码
      }
    },
    test4() {
      try {
        try {
          throw 1;
        } catch (e) {
          throw e; // 捕获了错误 但又重新抛出
        }
      } catch (e) {
        console.log(e); // 输出1
      }
    },
    test5() {
      try {
        try {
          throw 1; // 位置①
        } catch (err) {
          throw 2; // 位置②
        } finally {
          throw 3; // 位置③
        }
      } catch (err) {
        console.log(err); // 输出3
      }
    },
    test6() {
      try {
        throw 1; // 抛出错误
      } catch (e) {
        throw 2; // 捕获了错误 抛出了一个新错误
      } finally {
        return 3; // 返回了一个值,使用throw会抛出错误
      }
    },
  },
};
</script>

<style scoped></style>
