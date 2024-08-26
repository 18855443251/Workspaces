import { Dialog, Toast } from "mand-mobile";
import $store from "@/store";
export default {
  myToast(value) {
    Toast.info(value);
  },
  Confirm(
    params = {
      icon: "",
      title: "",
      content: "",
      cancelText: "取消",
      onConfirm: "确定",
    },
    cb
  ) {
    let props = {
      onConfirm: () => {
        if (cb && typeof cb === "function") {
          cb();
        }
      },
      onShow: () => {
        console.log("展示");
      },
      onHide: () => {
        console.log("隐藏");
      },
    };

    if (typeof params === "string") {
      props.title = "";
      props.content = params;
      props.confirmText = "查看";
      Dialog.confirm(props);
    } else if (typeof params === "object") {
      Object.assign(props, params);
      Dialog.confirm(props);
    } else {
      throw new Error("参数需为 [string] 或 [object]");
    }
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
};
