//客户端扩展模块
const context = weex.requireModule('context')
const deviceInfo = weex.requireModule('deviceInfo')
const modal = weex.requireModule('modal')
const stream = weex.requireModule('stream')
const appVersion = weex.requireModule("app-version");
export default {
  data() {
    return {
      // 是否已跳转场景
      launchFlag: false,
      // 是否已结束场景
      finishFlag: false
    }
  },
  computed: {
    // theme() {
    //   return this.$store.state.theme
    // },
    themeStyle() {
      return this.$store.getters.themeStyle
    }
  },
  methods: {
    // 获取全面屏高度
    getFullScreenHeight(callback) {
      deviceInfo.enableFullScreenHeight(function (e) {
        var a = e.fullScreenHeight;
        callback && callback(a)
      }, {});
    },
    //获取屏幕高度
    getHeight() {
      let height, width
      width = weex.config.env.deviceWidth
      height = weex.config.env.deviceHeight
      let screenHeight = (750 * height) / width
      return screenHeight
    },
    // 底部导航栏
    getTabbarHeight() {
      let tabbarHeightJson
      try {
        tabbarHeightJson = context.getTabbarHeight()
        let tabbarHeight = !tabbarHeightJson ? 100 : tabbarHeightJson.tab_bar_height;
        if (tabbarHeight > 160) {
          context.sessionSetString("BBBExist", 'true')
          return 140
        } else {
          return 100
        }
      } catch (error) {
        return 100
      }

    },
    // 路由跳转
    jump(to, params, flag) {
      if (this.$router) {
        if (flag) {
          this.$router.replace({
            name: to.replace(/^\//, ""),
            params: params,
          });
        } else {
          this.$router.push({
            name: to.replace(/^\//, ""),
            params: params,
          });
        }
      }
    },
    //返回上个路由
    goBack() {
      if (this.$route.path === this.$router.indexRouter) {
        if (this.$route.path == "/login") {
          if (this.$store.state.isShowBack) {
            this.$store.state.flag = "1";
            // 不重置在记住工号页面用物理返回键返回会退不出应用程序
            this.$store.state.isShowBack = false;
          } else if (this.$store.state.jumpFlag == "2") {
            this.$store.state.flag = "2";
            this.$store.state.jumpFlag = "";
          } else if (this.$store.state.jumpFlag == "3") {
            this.$store.state.flag = "3";
            this.$store.state.jumpFlag = "";
          } else if (this.$store.state.jumpFlag == "4") {
            this.$store.state.flag = "4";
            this.$store.state.jumpFlag = "";
          } else {
            // context.shutdown();
            appVersion.backToDesktop();
          }
        } else if (this.$route.path == "/myIndex") {
          appVersion.backToDesktop();
        } else {
          // 防止重复结束场景
          if (this.finishFlag) {
            return
          }
          context.finish();
          this.finishFlag = true
          setTimeout(() => {
            this.finishFlag = false
          }, 1000);
        }
      } else {
        this.$router.back();
      }
    },
    // 跳转场景
    launch(stageID) {
      // 防止多次点击多次退出
      if (this.launchFlag) {
        return
      }
      context.launchStage(stageID)
      this.launchFlag = true
      setTimeout(() => {
        this.launchFlag = false
      }, 1000);
    },
    // 文字超出部分用省略号显示
    ellipsis(str, length) {
      if (!str) {
        return '';
      }
      var leng = length || 16; //默认16
      if (str.length <= leng) {
        return str
      } else {
        return str.substr(0, leng) + '...'
      }
    },
    // 图片路径
    addJNImgBaseUrl(path) {
      return this.$store.state.JNimgBaseUrl + path;
    },
    alertMsg(message, callback) {
      modal.alert({
          message,
          okTitle: '确认',
        },
        () => {
          callback && callback()
        })
    },
    toast(message, duration = 1) {
      modal.toast({
        message: message,
        duration: duration,
      })
    },
    // 加载蒙层打开
    openOverlay(disableClick) {
      this.$store.state.disableClick = disableClick;
      this.$store.state.overLayShow = true;
    },
    // 加载蒙层关闭
    closeOverlay() {
      this.$store.state.disableClick = false;
      this.$store.state.overLayShow = false
    },
    //是否是iphoneX iphoneXS iphoneXSMax 11pro 11max
    isipx() {
      let [deviceList, deviceModel] = [
        ['iPhone10,3', 'iPhone10,6', 'iPhone11,8', 'iPhone11,2', 'iPhone11,4', 'iPhone11,6', 'iPhone12,1', 'iPhone12,3', 'iPhone12,5'],
        weex.config.env.deviceModel,
      ]
      return deviceList.indexOf(deviceModel) != '-1'
    },
    //showFlag为true时，不起遮罩，默认为false // 公共弹框
    Confirm(msg, secondBtnText = "知道了", response, firstBtnText = "取消") {
      this.$store.state.isShowAlert = true;
      this.$store.state.message = msg;
      this.$store.state.secondBtnText = secondBtnText; //第二个按钮
      this.$store.state.firstBtnText = firstBtnText; //第一个按钮
      if (secondBtnText == "查看") {
        this.$store.state.errorMsg = response; //错误信息
      } else if (secondBtnText == "知道了" || secondBtnText == "去登录") {
        this.$store.state.firstBtnText = "" //第二个按钮是知道了，第一个按钮为空
      }
    }, // postDo(url, formData, sucessCallback, failCallback,hideLayer) {
    postDo(url, formData, sucessCallback, failCallback, options = {
      disableClick: false,
      hideLayer: false,
      proxyPath: ''
    }) {
      if (typeof (failCallback) == "object") {
        options = failCallback;
      }
      if (!options.hideLayer) {
        this.openOverlay(options.disableClick);
      }
      let userId = formData.userId ? formData.userId : this.$store.state.userInfo.empid
      //公共请求头
      var head = {
        "Accept-Language": "zh-CN,zh;q=0.8",
        "Content-Type": "application/json;charset=utf-8",
        Accept: "text/xml,application/json",
        mchannelId: "520565656",
        userId: userId,
        cifName: userId,
        appkey: "app",
      };
      if (context.sessionGetString("token")) {
        head.orgNo = this.$store.state.userInfo.deptcode;
        head.token = context.sessionGetString("token");
      }
      stream.fetch({
          method: "POST",
          url: (options.proxyPath || `/processdd111/`) + url,
          type: "json",
          body: JSON.stringify(formData),
          headers: head,
          timeout: 120000,
        },
        (response) => {
          if (!options.hideLayer) {
            this.closeOverlay();
          }
          if (response.status == 200) {
            if (response.data.status == "00000000") {
              if (response.headers.token) {
                context.sessionSetString("token", response.headers.token);
                context.setToken(response.headers.token)
              } else if (response.headers.Token) {
                context.sessionSetString("token", response.headers.Token);
                context.setToken(response.headers.Token)
              }
              sucessCallback && sucessCallback(response.data);
            } else if (this.$store.state.userInfo.position && positionObJ[this.$store.state.userInfo.position].includes("行长")) {
              return;
            } else if (
              response.data.status == "dsb_connect_fail" ||
              response.data.status == "esb_connect_fail" ||
              response.data.status == "esb_status_fail"
            ) {
              this.Confirm("网络连接错误", "查看", response)
              if (failCallback) {
                failCallback(response.data);
              }
            } else if (response.data.status == "user_password_error") {
              this.Confirm(response.data.msg.split("|")[0], "忘记密码?")
            } else if (response.data.status == "402") {
              this.Confirm("登录超时，请重新登录", "去登录")
            } else if (response.data.status == 'no_authority') {
              this.Confirm(response.data.msg.split("|")[0], "去登录")
            } else {
              if (failCallback) {
                this.Confirm("系统繁忙，请稍后再试", "查看", response)
                failCallback(response.data);
              } else {
                if (response.data.msg.indexOf("com") != -1) {
                  this.Confirm("系统繁忙，请稍后再试", "查看", response)
                } else {
                  this.Confirm(response.data.msg.split("|")[0], "查看", response)
                }
              }
            }
            return;
          }
          if (response.status == -1 || response.status == 523) {
            this.$store.state.isError = true;
            return;
          }
          // this.Confirm("网络状态异常，请稍后再试", "查看", response)
        }
      );
    },
    // 取出存放在会话存储中的时间戳，返回值是string。
    getTimestamp(callback) {
      this.postDo('Timestamp.do', {}, (data) => {
        let Timestamp = data.Timestamp
        callback && callback(Timestamp)
      })
    },
    // 遍历对象，当对象里面的属性值为空时置为--形式
    transnullBetter(obj) {
      let res = {}
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const element = obj[key];
          if (!element || element == 'null') {
            res[key] = '--'
          } else {
            res[key] = obj[key]
          }
        }
      }
      return res
    },
    // 如果数据为空或者null，金额返回带--形式，否则使用三位一逗号分割，保留两位小数
    transnull(data) {
      if (!data || data == "null") {
        return "--"
      } else {
        data = data + "";
        var money = this.$options.filters.moneyFilter(data)
        return money
      }
    },
    // 户数张数都使用三位一逗号分割，没有保留两位小数
    dealNumber(str) {
      if (!str || str == "null") {
        return "--"
      } else {
        str = str + "";
        var strNum = this.$options.filters.formatNum(str)
        return strNum
      }
    },
    // 获取设备信息
    getEnvInfo() {
      var deviceInfimation = {
        // UniqueID: context.envGet("UniqueID"), ////取得设备唯一标识符
        // DeviceID: context.envGet("DeviceID"), //取得设备唯一标识符。
        // versionName: context.envGet("versionName"), //获取版本名 如 4.4.1
        // versionCode: context.envGet("versionCode"), //取得app版本号
        // OSType: context.envGet("OSType").toLowerCase(), //取得平台类型，返回ios或android。
        // DataDir: context.envGet("DataDir"), //取得Document路径
        // CacheDir: context.envGet("CacheDir"), //取得Cache路径。
        // TmpDir: context.envGet("TmpDir"), //取得Tmp路径。
        // BundleDir: context.envGet("BundleDir"), //取得Main Bundle路径。
        // FrameworkDir: context.envGet("FrameworkDir"), //取得Framework Bundle路径。
        // ApplicationID: context.envGet("ApplicationID"), //应用bundleId，应用唯一标识。
        OSType: weex.config.env.platform, //android
        weexVersion: weex.config.env.weexVersion,
        appName: weex.config.env.appName,
        appVersion: weex.config.env.appVersion,
        osName: weex.config.env.osName, //android
        osVersion: weex.config.env.osVersion, //10
        deviceModel: weex.config.env.deviceModel, //设备型号LRA-AL00
        deviceWidth: weex.config.env.deviceWidth,
        deviceHeight: weex.config.env.deviceHeight,
      };
      // context.sessionSetString(
      //   "deviceInfimation",
      //   JSON.stringify(deviceInfimation)
      // );
    }
  },
}