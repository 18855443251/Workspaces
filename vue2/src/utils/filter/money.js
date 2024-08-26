export default {
  //使用说明:仅限整数位13位，小数位2位
  amountCapital(value) {
    if (!value) return "";
    value = value.toString();
    let strOutput = "";
    let strUnit = "万仟佰拾亿仟佰拾万仟佰拾元角分";
    value += "00";
    let intPos = value.indexOf(".");
    if (intPos >= 0) {
      value = value.substring(0, intPos) + value.substr(intPos + 1, 2);
    }
    strUnit = strUnit.substr(strUnit.length - value.length);
    for (var i = 0; i < value.length; i++) {
      strOutput +=
        "零壹贰叁肆伍陆柒捌玖".substr(value.substr(i, 1), 1) +
        strUnit.substr(i, 1);
    }
    return strOutput
      .replace(/^零角零分$/, "")
      .replace(/零角零分$/, "整")
      .replace(/^零元零角/, "")
      .replace(/零[仟佰拾]/g, "零")
      .replace(/零{2,}/g, "零")
      .replace(/零([亿|万])/g, "$1")
      .replace(/零+元/, "元")
      .replace(/亿零{0,3}万/, "亿")
      .replace(/^元/, "零元")
      .replace(/零角/, "零")
      .replace(/零元/, "")
      .replace(/零分$/, "");
  },
  // 使用说明：仅限整数位34位，小数位两位
  changeMoneyToChinese(value) {
    if (!value) return "";
    // 将金额转为字符串形式
    value = value.toString();
    // 以多个0开头都替换为0
    value = value.replace(/^(0{1,})/, "0");
    // 人民币大写金额形式
    let strOutput = "";
    // 数字位所对应的汉字总共34位
    let strUnit =
      "仟佰拾穰仟佰拾杼仟佰拾垓仟佰拾京仟佰拾兆仟佰拾亿仟佰拾万仟佰拾元角分";
    // 无论是整数位和小数位，金额后面都自动补两个0
    value += "00";
    // 找到小数点所在的位置
    let intPos = value.indexOf(".");
    // 大于或者等于0，代表有小数点
    if (intPos >= 0) {
      value = value.substring(0, intPos) + value.substr(intPos + 1, 2);
    }
    // 分割汉字
    strUnit = strUnit.substr(strUnit.length - value.length);
    if (value.length > 34) {
      return "超过34位，解析失败！";
    }
    for (let i = 0; i < value.length; i++) {
      strOutput +=
        "零壹贰叁肆伍陆柒捌玖".substr(value.substr(i, 1), 1) +
        strUnit.substr(i, 1);
    }
    console.log(strOutput);
    return strOutput
      .replace(/^零角零分$/, "")
      .replace(/零角零分$/, "整")
      .replace(/^零元零角/, "")
      .replace(/零[仟佰拾]/g, "零")
      .replace(/零{2,}/g, "零")
      .replace(/零([亿|万])/g, "$1")
      .replace(/零+元/, "元")
      .replace(/亿零{0,3}万/, "亿")
      .replace(/^元/, "零元")
      .replace(/零角/, "零")
      .replace(/零分$/, "");
  },
  //金额格式化 4->4.00   4.1->4.10  4.169->4.16   1304.0->1,304.00   130634.096->130,634.09
  moneyFilter(money) {
    if (!money) return money;
    if (money && money != null) {
      //分割左边
      var left = money.split(".")[0];
      //分割右边
      var right = money.split(".")[1];
      right = right
        ? right.length >= 2
          ? "." + right.substr(0, 2)
          : "." + right + "0"
        : ".00";
      var temp = left
        .split("")
        .reverse()
        .join("")
        .match(/(\d{1,3})/g);
      var str1 =
        (Number(money) < 0 ? "-" : "") +
        temp.join(",").split("").reverse().join("") +
        right;
      return str1;
    } else {
      return money;
    }
  },
  // 只想取小数位，不想四舍五入，余额显示到小数后两位 1259656.0689->1259656.06
  // ~~的作用是去掉小数部分 1259656.0689->1259656.06  1259656.0689*100=125965606.89  ~~125965606.89=125965606  125965606/100=1259656.06
  showLastTwo(str) {
    if (str) {
      return ~~(Number(str) * 100) / 100;
    }
  },
  //向整数金额添加逗号分隔符 12596568622255466->12,596,568,622,255,466
  //使用说明：只能是整数
  addComma(str) {
    if (str) {
      var intPartFormat = str.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"); //将整数部分逢三一断
      return intPartFormat;
    } else {
      return "";
    }
  },
  changeAmountUnit(value) {
    if (value >= 1000 && value < 10000) {
      return "千";
    } else if (value >= 10000 && value < 100000) {
      return "万";
    } else if (value >= 100000 && value < 1000000) {
      return "十万";
    } else if (value >= 1000000 && value < 10000000) {
      return "百万";
    } else if (value >= 10000000 && value < 100000000) {
      return "千万";
    } else if (value >= 100000000 && value < 1000000000) {
      return "亿";
    } else if (value >= 1000000000 && value < 10000000000) {
      return "十亿";
    } else if (value >= 10000000000 && value < 100000000000) {
      return "百亿";
    } else if (value >= 100000000000 && value < 1000000000000) {
      return "千亿";
    } else if (value >= 1000000000000 && value < 10000000000000) {
      return "万亿";
    }
  },
  // 四舍五入保留整数 输入201.4658->201,  201.5658->202，219.5658->220
  baoliu(input, dot) {
    input = input + "";
    if (!/^\d+(\.\d+)?$/.test(input)) {
      return input;
    }
    dot = +(dot || 0);
    let arr = (+input).toFixed(dot).split(".");
    let number = arr[0] || "0";
    let float = arr[1];
    number = number
      .split("")
      .reverse()
      .join("")
      .replace(/(\d{3})/g, "$1,")
      .split("")
      .reverse()
      .join("")
      .replace(/^,/, "");
    return dot ? `${number}.${float.slice(0, dot)}` : `${number}`;
  },
  // 202->贰零贰
  capitalizate(num) {
    let list = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
    let str = "";
    for (var i = 0; i < num.length; i++) {
      str += list[num[i]];
    }
    return str;
  },
  // 格式化金额并保留两位小数最大整数位是21位，两位小数
  // 使用说明:仅限整数位必须是21位
  NumFormat(str) {
    // 获取整数部分
    var intPart = Number(str).toFixed(0);
    //   获取小数部分，没有四舍五入
    var decimals = str.substr(str.indexOf("."), 3);
    var intPartFormat = intPart.toString().replace(/(?=(\B)(\d{3})+$)/g, ","); // 将整数部分逢三一断
    return intPartFormat + decimals;
  },
};
