export default {
  cancelTokenArr: [], //取消请求token数组
  overLayShow: false, //遮罩
  history: [],
  isIosMoveBack: false,
  list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  userInfo: {
    orgCode: "01143",
    userId: "55012", //57281
    empid: "55012", //35123 55087 55012 56820:19006 56820
    deptcode: "01237", //01237 01142 01020
    empname: "超凡哥哥",
    orgno: "01201",
    deptname: "常州支行",
    centerNo: "21104",
  }, //登录信息
  deviceInfimation: {
    osName: "android", //android
    osVersion: "10", //10
    deviceModel: "LRA-AL00", //设备型号LRA-AL00
    appVersion: "1.0.0",
  }, //设备信息
  url_path: "", //上一个页面路径
  url: "", //当前页面路径
  JNimgBaseUrl: "@/assets/imgs",
  messages: {
    InterestCycle: {
      M: "每月",
      " Q": "每季",
    },
    saveDate: {
      239: "三十九个月",
      303: "三年",
      305: "五年",
    },
  },
  BankImg: "",
  controlBackMsg: {
    isControl: false,
    backFunc: function () {},
  },
  name: "张三",
  lockNum: 20,
  logoutNum: 30,
  nowMenuId: sessionStorage.getItem("nowMenuId")
    ? sessionStorage.getItem("nowMenuId")
    : "空", // 当前顶级菜单menuId,
  count: 1,
  age: "18",
  cityObj: { name: "海口" },
  dialogShow:false
};
