import standard from "./standard";
import other from "./other";
import { Dialog, Toast } from "mand-mobile";

export default {
  data() {
    return {
      // 通过混入(mixin)的方式，可以将一些公共的属性或方法混入到所有组件中。
      imgSrc: "http://192.168.52.151:7770/",
      testSrc:"http://192.168.52.151:7770/"
    };
  },
  computed: {
    themeStyle() {
      return this.$store.getters.themeStyle;
    },
    theme() {
      return this.$store.state.theme;
    },
  },
  methods: {
    ...standard,
    ...other,
    //跳转场景
    launchStage(scene, callback) {
      context.launchStage(scene);
      stageCallback = callback;
      if (callback) {
        window.addEventListener("viewappear", this.getStageData);
      }
    },
    //产景消失后回调
    getStageData() {
      if (stageCallback && typeof stageCallback == "function") {
        window.removeEventListener("viewappear", this.getStageData);
        stageCallback();
      }
    },
    //跳转场景-replace
    replaceStage(scene) {
      context.replaceStage(scene);
    },
    jump(to, params2, flag) {
      console.log(this.$router);
      if (this.$router) {
        if (flag) {
          this.$router.replace({
            name: to.replace(/^\//, ""),
            params: params2,
          });
        } else {
          this.$router.push({
            name: to.replace(/^\//, ""),
            params: params2,
          });
        }
      }
    },
    imgdata(x) {
      if (x) {
        if (x == "PayeeBankName")
          return require("@/assets/img/bank-xingye.png");
      }
    },
    //吐司
    myToast(value) {
      Toast.info(value);
    },
    msgFilter(name) {
      return this.$store.state.messages[name] || name;
    },
    Alert(value, callback) {
      let props = {
        onConfirm: () => {
          callback && callback();
        },
      };
      if (typeof value === "string") {
        props.title = "";
        props.content = value;
        props.confirmText = "重新登录";
        Dialog.alert(props);
      } else if (typeof value === "object") {
        props.confirmText = "重新登录";
        Object.assign(props, value);
        Dialog.alert(props);
      } else {
        throw new Error("参数需为 [string] 或 [object]");
      }
    },
    getTimestamp(callback) {
      this.$axios.post("Timestamp.do", {}).then((data) => {
        // Timestamp1=1600247555698
        let Timestamp1 = data.Timestamp;
        callback && callback(Timestamp1);
      });
    },
    genToken(callback) {
      this.$axios.post("GenToken.do", {}).then((data) => {
        var _tokenName = data._tokenName;
        callback && callback(_tokenName);
      });
    },
    // 获取到状态里面的数据
    backControl() {
      let { state } = this.$store;
      state.controlBackMsg = {
        isControl: true,
      };
      console.log(JSON.stringify(state));
    },

    // 遍历对象，当对象里面的属性值为空时置为--形式
    transnullBetter(obj) {
      let res = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const element = obj[key];
          if (!element || element == "null") {
            res[key] = "--";
          } else {
            res[key] = obj[key];
          }
        }
      }
      return res;
    },
    // 判断是app登录还是浏览器登录
    getLoginInfo() {
      let ua = navigator.userAgent.toLowerCase();
      if (!ua.match(/isapp/i) == "isapp") {
        return {
          userId: "351236",
          orgCode: "01237",
        };
      }
      return {
        userId: JSON.parse(context.sessionGetString("loginInfo")).user.empid,
        orgCode: JSON.parse(context.sessionGetString("loginInfo")).user
          .deptcode,
      };
    },
    //判断机型
    isIOS() {
      const u = navigator.userAgent.toLowerCase();
      const isios = u.indexOf("iphone") > -1 || u.indexOf("os") > -1; //对机型进行校验判断
      if (isios) {
        return true;
      } else {
        return false;
      }
    },
    formTest(val) {
      if (val > 5) {
        return "李四";
      }
    },
    addJNImgBaseUrl(url) {
      return this.imgSrc + url;
    },
  },
};
