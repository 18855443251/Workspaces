export default {
  // 如果数据为空或者null，返回带--形式
  transNull(str) {
    if (!str || str == "null" || str == "undefined" || str == "-") {
      return "-";
    } else {
      return str
    }
  },
  // 超出16位出现省略号
  ellipsis(str, length = 16, {
    isSpace
  } = {
      isSpace: false
    }) {
    if (!str || str == "null" || str == "undefined" || str == "--" || str == "- -") {
      return "-" + (isSpace ? " " : "") + "-";
    }
    var leng = length; //默认16
    if (str.length <= leng) {
      return str
    } else {
      return str.substr(0, leng) + '...'
    }
  },
}