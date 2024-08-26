<template>
  <div>
    <nav-bar />
    <div class="container">
      <div class="title">
        <text class="title_text">输入验证码</text>
      </div>
      <div class="wenzi1">
        <text class="wenzi1_text">短信验证码已发送至</text>
        <text class="phone">{{mobilePhone|encryptPhoneNo}}</text>
      </div>
      <div class="wenzi2">
        <text class="wenzi2_text">的手机号码</text>
      </div>
      <div class="fangge" @click="getFocus">
        <input
          ref="verinput"
          type="number"
          @input="watchinput"
          v-model="tokenName"
          maxlength="6"
          style="width:1px;height:1px;opacity:0;"
        />
        <text class="box" v-for="(item, index) in valList" :key="index">{{item}}</text>
      </div>
      <div class="again">
        <text class="again_text1" v-if="times!=0">{{times}}秒后重新获取验证码</text>
        <text class="again_text2" v-else @click="getCodeAgain">重新获取验证码</text>
      </div>
      <alertDialog :isShow="isShow" :message="message" @clickSecondBtn="clickSecondBtn" />
    </div>
  </div>
</template>
<script>
import navBar from "@/components/navBar"; //头
const context = weex.requireModule("context");
import alertDialog from "@/components/alertDialog";
export default {
  data() {
    return {
      times: 60, //计时器
      mobilePhone: "", //手机号
      userId: "", //用户id
      message: "", //弹窗标题
      msg: "",
      tokenName: "", //验证码
      flag: "", //验证验证码成功与否标志true为成功false为失败
      isShow: false, //验证验证码弹框
      valList: ["", "", "", "", "", ""], //输入的验证码
      oldInput: "", //保存上次输入
      inputPosition: 0, //记录输入位置
    };
  },
  components: {
    navBar,
    alertDialog,
  },
  methods: {
    getFocus() {
      this.$refs.verinput.focus();
    },
    //监听输入内容并赋值到text视图
    watchinput(e) {
      // let temp = this.tokenName.split("");
      // console.log("我爱你呀",temp);
      //输入
      if (this.oldInput.length < this.tokenName.length) {
        let lastChar = this.tokenName.charAt(this.tokenName.length - 1);
        this.$set(this.valList, this.inputPosition, lastChar);
        this.inputPosition++;
      }
      // 删除
      if (this.oldInput.length > this.tokenName.length) {
        this.$set(this.valList, this.inputPosition - 1, "");
        if (this.inputPosition > 0) {
          this.inputPosition--;
        } else {
          this.inputPosition = 0;
        }
      }
      this.oldInput = this.tokenName;
      // for (let i = 0; i < this.valList.length; i++) {
      //   if (i<temp.length) {
      //     this.$set(this.valList,i,temp[i])
      //     // this.valList[i] = temp[i];
      //   }else{
      //     // this.valList[i] = '';
      //     this.$set(this.valList,i,'')
      //   }
      // }
      //最后一位不为空   触发交易
      if (this.valList[5] != "") {
        this.$refs.verinput.blur();
        let param = {
          userId: this.userId,
          _tokenName: this.tokenName,
        };
        this.postDo("verifySmsCode.do", param, (response) => {
          this.flag = response.flg;
          let loginInfo = response;
          if (this.flag == "true") {
            // if (response.firstFlag == "Y") {
            //   this.$store.state.loginParams = params;
            //   // this.$store.state.setPasswordFlag = "1";
            //   this.jump("/setPassword");
            //   // 清除密码
            //   return;
            // }
            // 存当前登录的用户id
            context.secureSetString("userName", this.userId);
            // 存当前登录的用户信息
            context.sessionSetString("loginInfo", JSON.stringify(loginInfo));
            // 存历史登录过的用户信息
            // context.secureSetString(
            //   "loginName",
            //   context.secureGetString("loginName") + "-" + this.userId
            // );
            this.launch("main.myIndex");
            setTimeout(() => {
              this.$router.go(-1);
            }, 50);
          } else {
            // 验证失败,重新来
            this.isShow = true;
            this.message = "验证码输入错误";
            // this.valList = ["", "", "", "", "", ""];
            //清空输入的验证码
            for (let i = 0; i < 6; i++) {
              this.$set(this.valList, i, "");
            }
            //清空input框
            this.tokenName = "";
            // 清空上一次输入
            this.oldInput = "";
            // 输入位置归零
            this.inputPosition = 0;
          }
        });
      }
    },
    //计时器方法
    getTime() {
      this.times = 60;
      this.timer = setInterval(() => {
        this.times = this.times - 1;
        if (this.times == 0 || this.times < 1) {
          clearInterval(this.timer);
        }
      }, 1000);
    },
    clickSecondBtn() {
      this.isShow = false;
    },
    //获取验证码
    getCode() {
      let param = {
        userId: this.userId,
        mobilePhone: this.mobilePhone,
      };
      this.postDo("getSmsCode.do", param, (response) => {
        this.msg = response.msg;
        if ("00000000" != this.msg) {
          this.isShow = true;
          this.message = "获取验证码失败,请稍后再试";
          this.times = 0;
          clearInterval(this.timer);
        }
      });
    },
    //重新获取验证码
    getCodeAgain() {
      this.getCode();
      this.times = 60;
      this.getTime();
    },
  },
  mounted() {
    // 获取上一个页面传递的参数userId、mobilePhone
    this.userId = this.$store.state.verify_params.userId;
    this.mobilePhone = this.$store.state.verify_params.phoneNum;
    this.getCode();
    this.getTime();
    this.$refs.verinput.focus();
  },
};
</script>
<style scoped>
.container {
  margin-top: 160px;
  flex: 1;
  background-color: rgb(255, 255, 255);
}
.title {
  width: 750px;
  height: 56px;
  margin-top: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.title_text {
  font-size: 56px;
  color: rgb(38, 38, 38);
}
.wenzi1 {
  width: 750px;
  height: 33px;
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.wenzi1_text {
  font-size: 30px;
  color: rgb(153, 153, 153);
}
.phone {
  color: rgb(38, 38, 38);
  font-size: 30px;
  margin-top: 2px;
}
.wenzi2 {
  width: 750px;
  height: 33px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.wenzi2_text {
  font-size: 30px;
  color: rgb(153, 153, 153);
}
.fangge {
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.box {
  width: 88px;
  height: 88px;
  margin-left: 10px;
  margin-right: 10px;
  border-width: 1px;
  border-color: rgb(221, 221, 221);
  line-height: 88px;
  text-align: center;
  font-size: 48px;
  color: rgb(38, 38, 38);
}
.again {
  width: 750px;
  height: 28px;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.again_text1 {
  font-size: 28px;
  color: rgb(153, 153, 153);
}
.again_text2 {
  font-size: 28px;
  color: #a67342;
}
.alert_container {
  position: absolute;
  top: -160px;
  left: 0px;
  width: 750px;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 1;
}
.alert1 {
  width: 542px;
  height: 232px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 500px;
  left: 104px;
  border-radius: 25px;
}
.alert2 {
  width: 542px;
  height: 232px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 500px;
  left: 104px;
  border-radius: 25px;
}
.alert_message {
  width: 542px;
  height: 144px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  color: rgb(0, 0, 0);
}
.alert_btn {
  width: 542px;
  height: 88px;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgb(221, 221, 221);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  color: rgb(0, 119, 230);
}
</style>