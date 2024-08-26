const BILLION = 100000000;
function divieName(str) {
  if (str) {
    return "历史";
  } else {
    return this.transNull(str);
  }
}
function test(str) {
  return "公共";
}
function getRandomColor(flag = true) {
  if (flag) {
    // 3. 如果是true 则返回 #ffffff
    let str = "#";
    let arr = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    // 利用for循环随机抽6次 累加到 str里面
    for (let i = 1; i <= 6; i++) {
      // 每次要随机从数组里面抽取一个
      // random 是数组的索引号 是随机的
      let random = Math.floor(Math.random() * arr.length);
      // str = str + arr[random]
      str += arr[random];
    }
    return str;
  } else {
    // 4. 否则是 false 则返回 rgb(255,255,255)
    let r = Math.floor(Math.random() * 256); // 55
    let g = Math.floor(Math.random() * 256); // 89
    let b = Math.floor(Math.random() * 256); // 255
    return `rgb(${r},${g},${b})`;
  }
}
// 倒计时
function getCountTime() {
  // 1. 得到当前的时间戳
  const now = +new Date();
  // 2. 得到将来的时间戳
  const last = +new Date("2024-07-27 19:30:00");
  // console.log(now, last)
  // 3. 得到剩余的时间戳 count  记得转换为 秒数
  const count = (last - now) / 1000;
  // console.log(count)
  // 4. 转换为时分秒
  // h = parseInt(总秒数 / 60 / 60 % 24)   //   计算小时
  // m = parseInt(总秒数 / 60 % 60);     //   计算分数
  // s = parseInt(总秒数 % 60);
  // let d = parseInt(count / 60 / 60 / 24)               //   计算当前秒数
  let h = parseInt((count / 60 / 60) % 24);
  h = h < 10 ? "0" + h : h;
  let m = parseInt((count / 60) % 60);
  m = m < 10 ? "0" + m : m;
  let s = parseInt(count % 60);
  s = s < 10 ? "0" + s : s;
  console.log(h, m, s);
}
function downLoad(url, params) {
  params.responseType = "blob";
  return new Promise((resolve, reject) => {
    this.$axios
      .post("login.do", params || {})
      .then((res) => {
        if ("download" in document.createElement("a")) {
          // 支持a标签download属性的浏览器
          const url = window.URL.createObjectURL(res.data); // 为文件流构建下载链接
          const a = document.createElement("a");
          a.href = url;
          let fileName = window.decodeURI(
            res.fileName.substring(res.fileName.indexOf("=") + 1)
          );
          a.setAttribute("download", fileName);
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        } else {
          // window.navigator.msSaveBlob是一个用于在Internet Explorer浏览器中保存Blob对象的方法。它可以将Blob对象保存为本地文件。
          navigator.msSaveBlob(res.data, res.fileName);
        }
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export default {
  divieName,
  test,
  getCountTime,
};
