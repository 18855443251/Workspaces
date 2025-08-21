// 洪丽云 
export default {
  /**
 * @param {*} value 输入数据
 * @param {boolean} keepIntegerDown true取整没有四舍五入
 * @param {boolean} keepIntegerUp true 取整并四舍五入
 * @param {boolean} keepIntegerAndTwoDecimalDown true 整数不变，小数保留两位小数没有四舍五入
 * @param {boolean} keepIntegerAndTwoDecimalUp true 整数不变，小数保留两位小数并四舍五入
 * @param {boolean} keepTntegerThousand true 整数千分位，小数不变
 * @param {boolean} keepTntegerThousandAndTwoDecimalDown true 整数千分位，小数保留两位小数没有四舍五入
 * @param {boolean} keepTntegerThousandAndTwoDecimalUp true 整数千分位，小数保留两位小数并四舍五入
 * @param {boolean} keepUnit  true 保留单位
 */
  formatNumber(
    value,
    {
      keepIntegerDown,
      keepIntegerUp,
      keepIntegerAndTwoDecimalDown,
      keepIntegerAndTwoDecimalUp,
      keepTntegerThousand,
      keepTntegerThousandAndTwoDecimalDown,
      keepTntegerThousandAndTwoDecimalUp,
      keepUnit,
      keepSymbol
    } = {
        keepIntegerDown: false,
        keepIntegerUp: false,
        keepIntegerAndTwoDecimalDown: false,
        keepIntegerAndTwoDecimalUp: false,
        keepTntegerThousand: false,
        keepTntegerThousandAndTwoDecimalDown: false,
        keepTntegerThousandAndTwoDecimalUp: false,
        keepUnit: false,
        keepSymbol: false
      }
  ) {
    // 数字去除单位
    let digital = this.getNumber(value);
    // 获取正负号
    let symbol = this.getSymbol(value, keepSymbol);
    let unit = ""
    // 是否保留单位
    if (keepUnit) {
      unit = this.getUnit(value)
    }
    // 如果是一个数字
    if (!isNaN(digital)) {
      // 纯数字 不包含单位和正负号
      let pureDigital = this.removeSymbol(digital);
      // 取小数点左边
      let tempLeft = pureDigital.split(".")[0]
      // 取小数点右边
      let tempRight = pureDigital.split(".")[1] || '';
      // 小数点右边保留两位小数没有四舍五入
      let tempRightKeepTwoDecimalDown = tempRight
        ? tempRight.length >= 2
          ? "." + tempRight.substr(0, 2)
          : "." + tempRight + "0"
        : ".00"
      // 整数不变，小数保留两位小数并四舍五入 返回包含整数
      let tempRightKeepTwoDecimalUp = (Math.round(pureDigital * 100) / 100).toFixed(2)
      // 整数千分位，小数不变
      let integerThousand = (tempLeft.split("").reverse().join("").match(/(\d{1,3})/g)).join(",").split("").reverse().join("");
      if (keepIntegerDown) {
        // 取整没有四舍五入 -25.999=>-25 +28.199=>+28
        return symbol + tempLeft + unit;
      } else if (keepIntegerUp) {
        // 取整并四舍五入 -25.999=>-26 +28.199=>+28
        return symbol + Math.round(pureDigital) + unit;
      } else if (keepIntegerAndTwoDecimalDown) {
        // 整数不变，小数保留两位小数没有四舍五入 -25.999=>-25.99 +28.199=>+28.19
        return symbol + tempLeft + tempRightKeepTwoDecimalDown;
      } else if (keepIntegerAndTwoDecimalUp) {
        // -25.999=>-26.00 +28.199=>+28.20
        // 整数不变，小数保留两位小数并四舍五入
        return symbol + tempRightKeepTwoDecimalUp + unit;
      } else if (keepTntegerThousand) {
        // 整数千分位，小数不变 -2588.879=>-2,588.879 
        tempRight = tempRight ? ('.' + tempRight) : ''
        return symbol + integerThousand + tempRight + unit;
      } else if (keepTntegerThousandAndTwoDecimalDown) {
        // 整数千分位，小数保留两位小数没有四舍五入 -2588.879=>-2,588.87
        return symbol + integerThousand + tempRightKeepTwoDecimalDown + unit;
      } else if (keepTntegerThousandAndTwoDecimalUp) {
        // 整数千分位，小数保留两位小数并四舍五入 -2588.879=>-2,588.88
        tempRight = tempRightKeepTwoDecimalUp.split('.')[1] ? ("." + tempRightKeepTwoDecimalUp.split('.')[1]) : ''
        return symbol + integerThousand + tempRight + unit;
      } else {
        return value;
      }
    } else {
      return value;
    }
  },
  // 获取数字并去除单位 +55%=>+55 -55万套=>-55
  getNumber(value) {
    if (value) {
      // 将 value 转换为字符串
      const strValue = value.toString();
      // 使用正则表达式匹配数字部分（包括正负号和小数点后的零）
      const numberMatch = strValue.match(/^[\d.+-]+/);
      if (numberMatch) {
        // 确保小数点前有数字
        let number = numberMatch[0];
        if (
          number.startsWith(".") &&
          !number.startsWith("-.") &&
          !number.startsWith("+.")
        ) {
          number = "0" + number;
        }
        return number;
      }
    }
    return value;
  },
  // 数字获取单位  +55%=>% -55万套=>万套
  getUnit(value) {
    let unit = "";
    if (value) {
      // 获取文字部分
      const unitMatch = value.toString().match(/[^\d.+-]+/);
      // 匹配到单位
      if (unitMatch) {
        unit = unitMatch[0]; // 提取文字部分
      }
    }
    return unit;
  },
  // 获取符号 +55%=>+ -55万套=> -
  getSymbol(value,
    {
      keepSymbol
    } = {
        keepSymbol: false
      }) {
    if (value) {
      // 将 value 转换为字符串
      let strValue = value.toString();
      // 检查第一个字符是否为正号或负号
      if (keepSymbol) {
        // 获取数字部分
        let digital = parseFloat(strValue);
        // 是一个数字
        if (!isNaN(digital)) {
          // 判断数字的正负
          if (digital < 0) {
            return "-";
          } else if (digital > 0) {
            return "+";
          }
        }
      } else if (strValue[0] === "-" || strValue[0] === "+") {
        return strValue[0];
      }
    }
    return "";
  },
  // 移除符号  +55%=>55% -55万套=>55万套
  removeSymbol(value) {
    if (value) {
      // 将 value 转换为字符串
      const strValue = value.toString();
      // 检查第一个字符是否为正号或负号
      if (strValue[0] === "-" || strValue[0] === "+") {
        return strValue.slice(1);
      }
    }
    return value;
  },
  //计算两数相加减乘除
  computNumber(value1, value2, symbol) {
    let sum = 0
    if (!isNaN(value1) && !isNaN(value2)) {
      switch (symbol) {
        case "-":
          value1 = this.formatFloat(Number(value1), 10);
          value2 = this.formatFloat(Number(value2), 10);
          sum = value1 - value2;
          sum = this.formatFloat(sum, 10);
          return sum;
        case "+":
          value1 = this.formatFloat(Number(value1), 10);
          value2 = this.formatFloat(Number(value2), 10);
          sum = value1 + value2;
          sum = this.formatFloat(sum, 10);
          return sum;
        case "*":
          value1 = this.formatFloat(Number(value1), 10);
          value2 = this.formatFloat(Number(value2), 10);
          sum = value1 * value2;
          sum = this.formatFloat(sum, 10);
          return sum;
        case "/":
          value1 = this.formatFloat(Number(value1), 10);
          value2 = this.formatFloat(Number(value2), 10);
          sum = value1 / value2;
          sum = this.formatFloat(sum, 10);
          return sum;
        default:
          break;
      }
    } else {
      return "-"
    }
  },
  // 精度计算
  formatFloat(sum, digit) {
    var m = Math.pow(10, digit);
    return Math.round(sum * m) / m;
  },
};
