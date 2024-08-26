/*
 * @Author: 洪丽云
 * @Date: 2021-09-30 14:24:55
 * @LastEditTime: 2022-01-28 16:32:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dtapp-weex\src\utils\mixins\other.js
 */
export default {
  /**
   * @param {string} str 输入数据
   * @param {number} length 需要截取的长度
   * @param {boolean} isSpace --中间是否需要空格
   */
  // 文字超出部分用省略号显示
  ellipsis(
    str,
    length = 16,
    { isSpace } = {
      isSpace: false,
    }
  ) {
    if (
      !str ||
      str == "null" ||
      str == "undefined" ||
      str == "--" ||
      str == "- -"
    ) {
      return "-" + (isSpace ? " " : "") + "-";
    }
    var leng = length; //默认16
    if (str.length <= leng) {
      return str;
    } else {
      return str.substr(0, leng) + "...";
    }
  },
  /**
   * @param {string} str 输入数据
   * @param {boolean} isSpace --中间是否需要空格
   */
  // 如果数据为空或者null，返回带--形式
  transNull(
    str,
    { isSpace } = {
      isSpace: false,
    }
  ) {
    if (
      !str ||
      str == "null" ||
      str == "undefined" ||
      str == "--" ||
      str == "- -" ||
      str == "null%" ||
      str == "undefined%"
    ) {
      return "-" + (isSpace ? " " : "") + "-";
    } else {
      return str;
    }
  },
  /**
   * @param {object}obj 输入数据
   * @param {boolean} isSpace --中间是否需要空格
   */
  // 遍历对象，当对象里面的属性值为空时置为--形式
  transNullBetter(
    obj,
    { isSpace } = {
      isSpace: false,
    }
  ) {
    let res = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        if (
          !element ||
          element == "null" ||
          element == "undefined" ||
          element == "--" ||
          element == "- -" ||
          element == "null%" ||
          element == "undefined%"
        ) {
          res[key] = "-" + (isSpace ? " " : "") + "-";
        } else {
          res[key] = obj[key];
        }
      }
    }
    return res;
  },
  $imageFileUrl(url) {
    // let location = window.location.origin
    //  后台返回 /newBank/a3-ifinance-static/appOperationFilePath/手机银行4_20230602095524.docx
    //  http://10.254.172.95//i-static/newBank/a3-ifinance-static/appOperationFilePath/手机银行4_20230602095524.docx 
    let location = "http://10.254.172.95/";
    if (url && url.substring(0, 8) == "/newBank") {
      console.log(url,'dd')
      return location + "/" + "i-static" + url;
    } else if (
      (url && url.substring(0, 7) == "http://") ||
      url.substring(0, 8) == "https://" ||
      url.substring(0, 4) == "blob"
    ) {
      console.log(url,'ss')

      return url;

    } else {
      console.log(location + "/" + url,'sds')
      return location + "/" + url;
    }
  },
};
