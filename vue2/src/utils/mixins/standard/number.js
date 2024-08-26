/*
 * @Author:洪丽云
 * @Date: 2022-01-21 15:04:33
 * @LastEditTime: 2022-07-07 16:26:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bank\src\utils\mixins\standard\number.js
 */
export default {
  /**
   * @param {string} digit 输入数据
   * @param {boolean} isArray true返回拆分整数小数的数组
   * @param {boolean} isSpace --中间是否需要空格
   */
  // 判断数字是否无效,不能单独使用
  isInvalid(
    digit,
    { isSpace, isArray } = {
      isSpace: false,
      isArray: false,
    }
  ) {
    // 传入数组形式
    if (isArray) {
      // 金额不是数字包含--,undefined, null,boolean,不包含%逗号元
      if (
        !digit ||
        digit == "--" ||
        digit == "- -" ||
        digit == "undefined%" ||
        digit == "null%" ||
        digit.indexOf("%") == 0 ||
        digit.indexOf("元") == 0 ||
        digit.indexOf("户") == 0 ||
        (isNaN(Number(digit)) &&
          digit.indexOf("%") == -1 &&
          digit.indexOf("元") == -1 &&
          digit.indexOf("户") == -1)
      ) {
        return ["-" + (isSpace ? " " : "") + "-", ""];
      }
    } else {
      // 金额不是数字包含--,undefined, null,boolean
      if (
        !digit ||
        digit == "--" ||
        digit == "- -" ||
        digit == "undefined%" ||
        digit == "null%" ||
        digit.indexOf("%") == 0 ||
        digit.indexOf("元") == 0 ||
        digit.indexOf("户") == 0 ||
        (isNaN(Number(digit)) &&
          digit.indexOf("%") == -1 &&
          digit.indexOf("元") == -1 &&
          digit.indexOf("户") == -1)
      ) {
        return "-" + (isSpace ? " " : "") + "-";
      }
    }
    return false;
  },

  /**
   * @param {*} str 输入数据
   * @param {boolean} isInteger true取整
   * @param {boolean} isKeepDecimal true 整数千分位小数不变
   * @param {boolean} isArray true返回拆分整数小数的数组
   * @param {boolean} isRounding true 小数四舍五入
   * @param {boolean} isSpace --中间是否需要空格
   */
  // 传入负号，正号，百分号,元都会被保留,默认保留两位小数,千分位，默认截取不四舍五入
  // 凡是处理数字的直接用numberFormat方法
  numberFormat(
    str,
    { isInteger, isArray, isRounding, isKeepDecimal, isSpace } = {
      isInteger: false,
      isKeepDecimal: false,
      isArray: false,
      isRounding: false,
      isSpace: false,
    }
  ) {
    // 去除空格和逗号  !" "==false   !""==true,这里已经把数据转为字符串
    let digit = (str + "").replace(/\s/g, "").replace(/,/g, "");
    // 判断输入的数据是否有效
    let isInvalidResult = this.isInvalid(
      digit,
      ({ isSpace, isArray } = {
        isSpace: isSpace,
        isArray: isArray,
      })
    );
    if (isInvalidResult) {
      return isInvalidResult;
    }
    // 存当前返回的结果
    let result = str + "";
    // 保留单位%,元，户
    let unit = this.getUnit(digit);
    // 保留正负号
    let symbol = this.getSymbol(digit);
    //移除%,元，户，正负号
    let pureDigit = this.removeUnit(this.removeSymbol(digit));
    // 只取整
    if (isInteger) {
      // .5->0.5
      pureDigit = Number(pureDigit);
      // 四舍五入
      if (isRounding) {
        pureDigit = Math.round(pureDigit);
      }
      result = this.keepInteger(pureDigit, symbol, unit);
    } else {
      // 整数千分位
      if (isKeepDecimal) {
        // 小数不变
        result = this.thousandt(pureDigit, isArray, symbol, unit);
      } else {
        // .5->0.5
        pureDigit = Number(pureDigit);
        // 保留到两位小数
        // 四舍五入Math.round(+5)=5 Math.round会把正号去掉
        if (isRounding) {
          // 0.285*100=28.499999999999996
          // pureDigit = Math.round(this.accMul(pureDigit, 100)) / 100 + "";
          pureDigit = Math.round((pureDigit * 100).toFixed(2)) / 100;
        }
        result = this.keepTwoDecimal(pureDigit, isArray, symbol, unit);
      }
    }
    return result;
  },
  /**
   * @param {*} num 输入数据
   * @param {string} symbol 符号正负号
   * @param {string} unit 单位%和元
   */
  // 取整，不能单独使用
  keepInteger(num, symbol, unit) {
    // 存当前返回的结果
    let result = num + "";
    // 左边数字处理
    let tempLeft = this.integerThousandt(result);
    result = symbol + tempLeft + unit;
    return result;
  },
  /**
   * @param {*} num 输入数据
   * @param {boolean} isArray 数组形式
   * @param {string} symbol 符号正负号
   * @param {string} unit 单位%和元
   */
  // 保留到小数点，不能单独使用
  keepTwoDecimal(num, isArray, symbol, unit) {
    // 存当前返回的结果
    let result = num + "";
    // 左边数字处理
    let tempLeft = this.integerThousandt(result);
    // 右边数字处理
    let right = result.split(".")[1];
    //分割右边// 1225.565->.56,保留到小数包含.
    right = right
      ? right.length >= 2
        ? "." + right.substr(0, 2)
        : "." + right + "0"
      : ".00";
    result = this.dealArray(isArray, symbol, tempLeft, right, unit);
    return result;
  },
  /**
   * @param {*} num 输入数据
   * @param {boolean} isArray 数组形式
   * @param {string} symbol 符号正负号
   * @param {string} unit 单位%和元
   */
  // 整数千分位，小数不变，不能单独使用
  thousandt(num, isArray, symbol, unit) {
    // 存当前返回的结果
    let result = num + "";
    // 左边数字处理
    let tempLeft = this.integerThousandt(result);
    //分割右边// 1225.565->.56,保留到小数包含.
    let right = result.split(".")[1];
    right = right ? "." + right : "";
    result = this.dealArray(isArray, symbol, tempLeft, right, unit);
    return result;
  },
  /**
   * @param {*} num 输入数据
   */
  // 整数千分位，不能单独使用
  integerThousandt(num) {
    // 存当前返回的结果
    let result = num + "";
    //分割左边  .77->0
    let left = result.split(".")[0];
    // 左边使用千分位分割
    left = left
      .split("")
      .reverse()
      .join("")
      .match(/(\d{1,3})/g);
    // 这里会把负号，正号去掉
    result = left.join(",").split("").reverse().join("");
    return result;
  },
  /**
   * @param {boolean} isArray 数组形式
   * @param {boolean} symbol 符号正负号
   * @param {boolean} tempLeft 左边数字
   * @param {boolean} right 右边数字包含小数点
   * @param {boolean} unit 单位%和元
   */
  // 处理数组，不能单独使用
  dealArray(isArray, symbol, tempLeft, right, unit) {
    // 存当前返回的结果
    let result;
    // 整数
    let integer = symbol + tempLeft;
    // 小数
    let decimal = right + unit;
    // 数组形式
    if (isArray) {
      result = [integer, decimal];
    } else {
      result = integer + decimal;
    }
    return result;
  },
  /**
   * @param {*} num 输入数据
   */
  // 保留正负号，只有输入的数据是数字且带有正负号，正负号才会被保留，其他返回空，不能单独使用
  //(-123,566.089% => -)    (+123,566.089户=> +)  (-0元=>-)    (+65=> +)  (null=>"")
  getSymbol(num) {
    //符号初始化为空
    let result = "";
    // 转为字符串
    let digit = num + "";
    // 如果输入数据带逗号先把逗号去掉
    if (digit.indexOf(",") != -1) {
      digit = digit.replace(/,/g, "");
    }
    //如果输入数据带单位先把单位去掉，单位包含%,元，户
    digit = this.removeUnit(digit);
    if (digit.indexOf("-") == 0 && Number(digit) <= 0) {
      // 如果输入数据是负数或者带-号的0
      result = "-";
    } else if (digit.indexOf("+") == 0 && Number(digit) >= 0) {
      // 如果输入数据是带+号的正数或者带+号的0
      result = "+";
    }
    return result;
  },
  /**
   * @param {*} num 输入数据
   * @param {boolean} isSpace --中间是否需要空格
   */
  // 移除正负号，只有输入的数据是数字且带有正负号，正负号才会被移除，其他返回自身，不能单独使用需要配合numberFormat方法使用
  //(-123,566.089% => 123,566.089%)    (+123,566.089户=> 123,566.089户)  (-0元=>0元)    (+65=> 65) (null=>null)
  removeSymbol(num) {
    //转为字符串
    let result = num + "";
    // 转为字符串
    let digit = num + "";
    // 如果输入数据带逗号先把逗号去掉
    if (digit.indexOf(",") != -1) {
      digit = digit.replace(/,/g, "");
    }
    //如果输入数据带单位先把单位去掉，单位包含%,元，户
    digit = this.removeUnit(digit);
    if (digit.indexOf("-") == 0 && Number(digit) <= 0) {
      // 如果输入数据是负数或者带-号的0
      result = result.replace("-", "");
    } else if (digit.indexOf("+") == 0 && Number(digit) >= 0) {
      // 如果输入数据是带+号的正数或者带+号的0
      result = result.replace("+", "");
    }
    return result;
  },
  /**
   * @param {*} num 输入数据
   */
  // 保留单位，只有输入的数据带有%、户、元，%、户、元才会被保留，其他返回空，不能单独使用
  //(-123,566.089% => %)    (+123,566.089户=> 户)  (-0元=>元)    (+65=> "")   (null=>"")
  getUnit(num) {
    //单位初始化为空
    let result = "";
    // 转为字符串
    let digit = num + "";
    // 单位
    let unit = ["%", "元", "户"];
    for (let item of unit) {
      if (digit.indexOf(item) != -1 && digit.indexOf(item) != 0) {
        result = item;
      }
    }
    return result;
  },
  /**
   * @param {*} num 输入数据
   */
  // 移除单位，只有输入的数据带有%、户、元，%、户、元才会被移除，其他返回自身，不能单独使用需要配合numberFormat方法使用
  //(-123,566.089% => -123,566.089)    (+123,566.089户=>+123,566.089)  (-0元=>-0)    (+65=> +65)   (null=>null)
  removeUnit(num) {
    //转为字符串
    let result = num + "";
    // 转为字符串
    let digit = num + "";
    let unit = ["%", "元", "户"];
    for (let item of unit) {
      if (digit.indexOf(item) != -1 && digit.indexOf(item) != 0) {
        result = digit.replace(item, "");
      }
    }
    return result;
  },
  /**
   * @param {*} num 输入数据
   */
  // 添加正号,中台返回的正负号被保留，不能单独使用需要配合numberFormat方法使用
  addSymbol(
    num,
    { zeroAdd } = {
      zeroAdd: false,
    }
  ) {
    //转为字符串
    let result = num + "";
    // 转为字符串
    let digit = num + "";
    // 如果输入数据带逗号先把逗号去掉
    if (digit.indexOf(",") != -1) {
      digit = digit.replace(/,/g, "");
    }
    //如果输入数据带单位先把单位去掉，单位包含%,元，户
    digit = this.removeUnit(digit);
    // 大于0的数字添加正号
    if (digit.indexOf("+") == -1 && Number(digit) > 0) {
      result = "+" + num;
    }
    // 等于0的数字添加正号
    if (
      zeroAdd &&
      Number(digit) === 0 &&
      digit.indexOf("+") == -1 &&
      digit.indexOf("-") == -1
    ) {
      result = "+" + num;
    }
    return result;
  },
  // 用于处理金额计算精度丢失的问题
  computMoney(arrList) {
    var moneySum = 0;
    for (let i = 0; i < arrList.length; i++) {
      var Amount = Number(arrList[i].Amount);
      // 处理计算金额精度丢失的问题
      Amount = this.formatFloat(Amount, 10);
      moneySum += Amount;
      moneySum = this.formatFloat(moneySum, 10);
    }
    return moneySum;
  },
  formatFloat(moneySum, digit) {
    var m = Math.pow(10, digit);
    return Math.round(moneySum * m) / m;
  },
  //精确 两数相减993.40-875.60
  computMoney1(a, b, c) {
    switch (c) {
      case "-":
        var a1 = this.formatFloat(Number(a), 10);
        var b1 = this.formatFloat(Number(b), 10);
        var moneySum = a1 - b1;
        moneySum = this.formatFloat(moneySum, 10);
        return moneySum;
      case "+":
        var a1 = this.formatFloat(Number(a), 10);
        var b1 = this.formatFloat(Number(b), 10);
        var moneySum = a1 + b1;
        moneySum = this.formatFloat(moneySum, 10);
        return moneySum;
      case "*":
        var a1 = this.formatFloat(Number(a), 10);
        var b1 = this.formatFloat(Number(b), 10);
        var moneySum = a1 * b1;
        moneySum = this.formatFloat(moneySum, 10);
        return moneySum;
      case "/":
        var a1 = this.formatFloat(Number(a), 10);
        var b1 = this.formatFloat(Number(b), 10);
        var moneySum = a1 / b1;
        moneySum = this.formatFloat(moneySum, 10);
        return moneySum;
      default:
        break;
    }
  },
};
