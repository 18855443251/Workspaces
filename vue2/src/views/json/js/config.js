import Vue from "vue";
const VM = new Vue();
import $store from '@/store'
const userArr = [
  // 转账用途
  {
    text: "手机银行转账",
  },
  {
    text: "工资",
  },
  {
    text: "手工录入",
  },
];
const typeArr = [{
    value: "M",
    text: "最低还款",
  },
  {
    value: "F",
    text: "全额还款",
  },
];
const configArr = [{
    value: 0,
    label: "不启用"
  },
  {
    value: 1,
    label: "启用黑名单"
  },
  {
    value: 2,
    label: "启用白名单"
  },
];

function message(str) {
  if (str) {
    $store.commit('SET_NAME', str)
  }
  const fun = (res) => {
    console.log(res,'好尴尬')
  }
  message2('2021', fun)
  return str;
}

function message1(vm, store, obj) {
  if (obj) {
    Vue.prototype.$set(obj, 'sex', '男')
    vm.$set(obj, 'name', '李四')
    VM.$set(obj, 'love', '打球')
    store.commit('SET_NAME', obj.name)
  }
  return obj;
}

function message2(val, callback = () => {}) {
  if (typeof callback === 'function') {
    callback({
      year: val,
    })
  }
}
export {
  userArr,
  typeArr,
  configArr,
  message,
  message1,
  message2
};

Vue.prototype.$tableMapList = (val) => {
  if (val) {
    return val;
  } else {
    return "--";
  }
};