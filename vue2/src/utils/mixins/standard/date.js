/*
 * @Author: 洪丽云
 * @Date: 2021-10-08 16:05:06
 * @LastEditTime: 2022-02-15 09:36:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dtapp-vue\src\utils\filter\date.js
 */
/**
 * @param {string} str 输入数据
 * @param {string} type 日期格式类型：如yy年MM月dd日   大写的MM代表月，小写mm代表分
 * @param {boolean} isSpace --中间是否需要空格
 */
// 日期方法,必须有年月日，时分秒可有可无，日期格式化处理统一用dateFormat方法
export default {
  dateFormat(
    str,
    type,
    { isSpace } = {
      isSpace: false,
    }
  ) {
    let result = new String(str + "");
    let reg = /^(\d{4})(\d{2})(\d{2})$/; //20210312 必须八位，空格可有可无
    let regH = /^(\d{4})(\-)(\d{1,2})(\-)(\d{1,2})$/; //2021-03-12，空格可有可无
    let regX = /^(\d{4})(\/)(\d{1,2})(\/)(\d{1,2})$/; //2021/03/12，空格可有可无
    let regTM =
      /^(\d{4})(\d{2})(\d{2})([\s]+)(\d{1,2})(\:)(\d{1,2})(\:)(\d{1,2})(\.?)(\d*)$/; //20210312 13:1:5.254 中间至少一位空格到秒
    let regHTM =
      /^(\d{4})(\-)(\d{1,2})(\-)(\d{1,2})([\s]+)(\d{1,2})(\:)(\d{1,2})(\:)(\d{1,2})(\.?)(\d*)$/; //2021-03-12 13:1:5.254  12:2:02.453 日期带横杠，中间至少一位空格到秒
    let regXTM =
      /^(\d{4})(\/)(\d{1,2})(\/)(\d{1,2})([\s]+)(\d{1,2})(\:)(\d{1,2})(\:)(\d{1,2})(\.?)(\d*)$/; //2021/03/12 13:1:5.254 日期带斜杠，中间至少一位空格到秒
    let regTF = /^(\d{4})(\d{2})(\d{2})([\s]+)(\d{1,2})(\:)(\d{1,2})$/; //20210312 13:1 中间至少一位空格到分
    let regHTF =
      /^(\d{4})(\-)(\d{1,2})(\-)(\d{1,2})([\s]+)(\d{1,2})(\:)(\d{1,2})$/; //2021-03-12 13:1 日期带横杠，中间至少一位空格到分
    let regXTF =
      /^(\d{4})(\/)(\d{1,2})(\/)(\d{1,2})([\s]+)(\d{1,2})(\:)(\d{1,2})$/; //2021/03/12 13:1 日期带斜杠，中间至少一位空格到分
    // 数据格式不正常
    if (
      !str ||
      str == "null" ||
      str == "undefined" ||
      str == "--" ||
      str == "- -"
    ) {
      return "-" + (isSpace ? " " : "") + "-";
    } else {
      let date = str.replace(/(^\s*)|(\s*$)/g, ""); //去掉前后空格
      if (
        reg.test(date) ||
        regTM.test(date) ||
        regTF.test(date) ||
        regH.test(date) ||
        regHTM.test(date) ||
        regHTF.test(date)
      ) {
        // (20210312 必须八位)  (20210312 13:1:5.254  带时间到秒) (20210312 13:1  带时间到分)  （2021-03-12 横杠不带时间） （2021-03-12 13:1:5.254 横杠带时间到秒）（2021-03-12 13:1 横杠带时间到分）
        result = this.dealDate(date, type, "-");
      } else if (regX.test(date) || regXTM.test(date) || regXTF.test(date)) {
        //（2021/03/12 斜杠不带时间） （2021/03/12 13:1:5.254 斜杠带时间到秒）（2021/03/12 13:1 斜杠带时间到分）
        result = this.dealDate(date, type, "/");
      } else {
        result.message = "输入日期格式不正确";
        console.log(result.message);
      }
    }
    return result;
  },
  /**
   * @param {string} date 日期数组
   * @param {boolean} type 日期格式类型：如yy年MM月dd日
   * @param {string} seperator  分割符，比如/
   *
   */
  // 不可单独使用
  dealDate(date, type, seperator) {
    let result = "";
    let dateLeft = ""; //日期左边
    let dateRight = ""; //日期右边
    let dateArr = []; //日期数组
    let timeArr = []; //时间数组
    let hour = "--", //时
      minute = "--", //分
      second = "--"; //秒
    let twoCharTimeSetObj = {
      month: "--", //月
      day: "--", //日
      hour: "--", //时
      minute: "--", //分
      secondL: "--", //秒
    };
    if (date.split(" ").length > 1) {
      // 输入日期格式带时间
      dateLeft = date.split(" ")[0]; //日期左边  2021-03-12 13:1:5.254->2021-03-12
      if (/^(\d{4})(\d{2})(\d{2})$/.test(dateLeft)) {
        dateLeft = dateLeft.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3"); //20210312 ->2021-03-12
      }
      dateRight = date.split(" ")[date.split(" ").length - 1]; //日期右边 2021-03-12 13:1:5.254->13:1:5.254
      dateArr = dateLeft.split(seperator); //["2021", "03", "12"]
      timeArr = dateRight.split(":"); //["13", "1", "5.254"]
      hour = timeArr[0]; // 时
      minute = timeArr[1]; // 分
      // 时间数组包含时分秒
      if (timeArr.length > 2) {
        if (timeArr[2].indexOf(".") != -1) {
          // ["13", "1", "5.254"] 时间数组第三项包含点
          second = timeArr[2].split(".")[0]; // 秒
        } else {
          // ["13", "1"，"5"] 时间数组第三项不包含点
          second = timeArr[2];
        }
      } else {
        // 时间数组包含时分，不包含秒
        second = "--"; // 秒
      }
    } else {
      // 输入日期格式不带时间
      if (/^(\d{4})(\d{2})(\d{2})$/.test(date)) {
        date = date.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3"); //20210312 ->2021-03-12
      }
      dateArr = date.split(seperator); //2021-03-12 ->["2021", "03", "12"]
    }
    let year = dateArr[0]; // 年份
    let month = dateArr[1]; // 月
    let day = dateArr[2]; // 日
    twoCharTimeSetObj = this.twoCharTimeSet(month, day, hour, minute, second); //月,日，时，分，秒十以内添加0,两位数对象
    if (type == "yy/MM/dd") {
      result =
        year.substr(2, 4) +
        "/" +
        twoCharTimeSetObj.month +
        "/" +
        twoCharTimeSetObj.day;
    } else if (type == "yy-MM-dd") {
      result =
        year.substr(2, 4) +
        "-" +
        twoCharTimeSetObj.month +
        "-" +
        twoCharTimeSetObj.day;
    } else if (type == "yy.MM.dd") {
      result =
        year.substr(2, 4) +
        "." +
        twoCharTimeSetObj.month +
        "." +
        twoCharTimeSetObj.day;
    } else if (type == "yy年MM月dd日") {
      result =
        year.substr(2, 4) +
        "年" +
        twoCharTimeSetObj.month +
        "月" +
        twoCharTimeSetObj.day +
        "日";
    } else {
      result = type
        .replace("yyyy", year)
        .replace("MM", twoCharTimeSetObj.month)
        .replace("dd", twoCharTimeSetObj.day)
        .replace("HH", twoCharTimeSetObj.hour)
        .replace("mm", twoCharTimeSetObj.minute)
        .replace("ss", twoCharTimeSetObj.second);
    }
    return result;
  },
  // 获取今天日期2021-10-13
  getNowDate() {
    let twoCharTimeSetObj = {
      month: "--", //月
      day: "--", //日
      hour: "--", //时
      minute: "--", //分
      secondL: "--", //秒
    };
    let hour = "--",
      minute = "--",
      second = "--";
    let newDate = new Date();
    let year = newDate.getFullYear(); //年
    let month = newDate.getMonth() + 1; //月
    let day = newDate.getDate(); //日
    twoCharTimeSetObj = this.twoCharTimeSet(month, day, hour, minute, second); //月,日，时，分，秒十以内添加0
    let result =
      year + "-" + twoCharTimeSetObj.month + "-" + twoCharTimeSetObj.day;
    return result;
  },
  // 获取当前时间 yyyyMMddHHmmssSSS
  // 20231109104540000
  getNowTime() {
    let twoCharTimeSetObj = {
      month: "--", //月
      day: "--", //日
      hour: "--", //时
      minute: "--", //分
      secondL: "--", //秒
    };
    let newDate = new Date();
    let year = newDate.getFullYear(); //年
    let month = newDate.getMonth() + 1; //月
    let day = newDate.getDate(); //日
    let hour = newDate.getHours(); //时
    let minute = newDate.getMinutes(); //分
    let second = newDate.getSeconds(); //秒
    twoCharTimeSetObj = this.twoCharTimeSet(month, day, hour, minute, second); //月,日，时，分，秒十以内添加0
    let millisecond = newDate.getMilliseconds(); //毫秒
    if (millisecond < 10) {
      millisecond = "00" + millisecond;
    } else if (millisecond < 100) {
      millisecond = "0" + millisecond;
    }
    let result =
      year +
      twoCharTimeSetObj.month +
      twoCharTimeSetObj.day +
      twoCharTimeSetObj.hour +
      twoCharTimeSetObj.minute +
      twoCharTimeSetObj.second +
      millisecond;
    return result;
  },
  // 月，日，时，分，秒如果小于10补0
  twoCharTimeSet(month, day, hour, minute, second) {
    // 月，十以内添加0
    if (
      !String(month).startsWith("0") &&
      Number(month) < 10 &&
      Number(month) > 0
    ) {
      month = "0" + month;
    }
    // 日，十以内添加0
    if (!String(day).startsWith("0") && Number(day) < 10 && Number(day) > 0) {
      day = "0" + day;
    }
    // 时，十以内添加0
    if (
      !String(hour).startsWith("0") &&
      Number(hour) < 10 &&
      Number(hour) > 0
    ) {
      hour = "0" + hour;
    }
    // 分，十以内添加0
    if (
      !String(minute).startsWith("0") &&
      Number(minute) < 10 &&
      Number(minute) > 0
    ) {
      minute = "0" + minute;
    }
    // 秒，十以内添加0
    if (
      !String(second).startsWith("0") &&
      Number(second) < 10 &&
      Number(second) > 0
    ) {
      second = "0" + second;
    }
    let result = {
      month: String(month), //月
      day: String(day), //日
      hour: String(hour), //时
      minute: String(minute), //分
      second: String(second), //秒
    };
    return result;
  },
  // this.formatDayChina([1, 2, 3])=>周一至周三
  formatDayChina(days) {
    const dayEnum = {
      1: "周一",
      2: "周二",
      3: "周三",
      4: "周四",
      5: "周五",
      6: "周六",
      7: "周日",
    };

    const start = [];
    const end = [];
    var reload = true;
    for (let index = 0; index < days.length; index++) {
      const element = days[index];
      const element1 = days[index + 1];
      if (reload) {
        start.push(element);
      }

      if (element1 - element === 1) {
        reload = false;
        continue;
      } else {
        reload = true;
        end.push(element);
      }
    }
    var resultMsg = [];
    for (let index1 = 0; index1 < start.length; index1++) {
      const startItem = start[index1];
      const endItem = end[index1];
      if (endItem - startItem === 0) {
        resultMsg.push(dayEnum[startItem]);
      } else if (endItem - startItem == 1) {
        resultMsg.push(dayEnum[startItem], dayEnum[endItem]);
      } else {
        resultMsg.push(dayEnum[startItem] + "至" + dayEnum[endItem]);
      }
    }
    return resultMsg.join("、");
  },
  // 时间跨度不超过三个月
  checkTime(begintime, endtime) {
    if (!endtime) {
      return true;
    }
    var time1 = new Date(begintime).getTime();
    var time2 = new Date(endtime).getTime();
    if (begintime == "") {
      alert("开始时间不能为空");
      return false;
    }
    if (endtime == "") {
      alert("结束时间不能为空");
      return false;
    }
    if (time1 > time2) {
      alert("开始时间不能大于结束时间");
      return false;
    }

    //判断时间跨度是否大于3个月
    var arr1 = begintime.split("-");
    var arr2 = endtime.split("-");
    arr1[1] = parseInt(arr1[1]);
    arr1[2] = parseInt(arr1[2]);
    arr2[1] = parseInt(arr2[1]);
    arr2[2] = parseInt(arr2[2]);
    var flag = true;
    if (arr1[0] == arr2[0]) {
      //同年
      if (arr2[1] - arr1[1] > 3) {
        //月间隔超过3个月
        flag = false;
      } else if (arr2[1] - arr1[1] == 3) {
        //月相隔3个月，比较日
        if (arr2[2] > arr1[2]) {
          //结束日期的日大于开始日期的日
          flag = false;
        }
      }
    } else {
      //不同年
      if (arr2[0] - arr1[0] > 1) {
        flag = false;
      } else if (arr2[0] - arr1[0] == 1) {
        if (arr1[1] < 10) {
          //开始年的月份小于10时，不需要跨年
          flag = false;
        } else if (arr1[1] + 3 - arr2[1] < 12) {
          //月相隔大于3个月
          flag = false;
        } else if (arr1[1] + 3 - arr2[1] == 12) {
          //月相隔3个月，比较日
          if (arr2[2] > arr1[2]) {
            //结束日期的日大于开始日期的日
            flag = false;
          }
        }
      }
    }
    if (!flag) {
      console.log("时间跨度不得超过3个月！");
      return false;
    }
    return true;
  },
  /**
   * //获取两个日期的相差日期数
   * @param {any} firstDate 开启时间 2022-03-23 00:03:00
   * @param {any} secondDate 结束时间 2023-03-23 00:04:00
   * @param {any} differ(differ 1.相差天数; 2.相差小时数; 3.相差分钟数; 4.相差秒数)
   */
  date_getdiffer_date(firstDate, secondDate, differ) {
    //1)将两个日期字符串转化为日期对象
    var startDate = new Date(firstDate.replace(/\-/g, "/"));
    var endDate = new Date(secondDate.replace(/\-/g, "/"));
    //2)计算两个日期相差的毫秒数
    var msecNum = endDate.getTime() - startDate.getTime();
    //3)计算两个日期相差的天数
    var dayNum = Math.floor(msecNum / this.date_getdiffer_scale(differ));
    //console.log(firstDate + "," + secondDate + "," + differ + "," + dayNum)
    return dayNum;
  },

  /**
   * //获取与毫秒数的转化比例
   * @param {any} value（1.相差天数; 2.相差小时数; 3.相差分钟数; 4.相差秒数）
   */
  date_getdiffer_scale(value) {
    var format;
    //获取转化比（天数跟毫秒数的比例）
    if (value == 1) {
      format = parseFloat(24 * 60 * 60 * 1000);
    }
    //获取转化比（小时数跟毫秒数的比例）
    else if (value == 2) {
      format = parseFloat(60 * 60 * 1000);
    }
    //获取转化比（分钟数跟毫秒数的比例）
    else if (value == 3) {
      format = parseFloat(60 * 1000);
    }
    //获取转化比（秒数跟毫秒数的比例）
    else if (value == 4) {
      format = parseFloat(1000);
    }
    return format;
  },
  //比较两个日期的天数差，（不比较时分秒）
  /**
   * 比较两个日期的天数差，不比较时分秒
   * @param {any} date1 时间1字符串
   * @param {any} date2 时间1字符串
   */
  us_differ_day(date1, date2) {
    //console.log("us_differ_day="+date1)
    var sdate = new Date(date1.replace(/\-/g, "/"));
    var edate = new Date(date2.replace(/\-/g, "/"));
    var sd = this.us_date_format(sdate, "yyyy-MM-dd");
    var ed = this.us_date_format(edate, "yyyy-MM-dd");
    sdate = new Date(sd);
    edate = new Date(ed);
    var datespan = edate - sdate;
    datespan = Math.abs(datespan);
    var idays = Math.floor(datespan / (24 * 3600 * 1000));
    return idays;
  },
  /**
   * @function
   * @name us_date_format
   * @param {string} _date - 时间  不是时间字符串需要new Date("2022-03-23 01:02:03")
   * @param {string} fmt - 格式化 yyyy-MM-dd hh:mm:ss
   * @desc 返回时间字符串
   */
  us_date_format(_date, fmt) {
    //console.log(_date);
    if (fmt == undefined) {
      fmt = "yyyy-MM-dd hh:mm:ss";
    }
    var o = {
      "M+": _date.getMonth() + 1, //月份
      "d+": _date.getDate(), //日
      "h+": _date.getHours(), //小时
      "m+": _date.getMinutes(), //分
      "s+": _date.getSeconds(), //秒
      "q+": Math.floor((_date.getMonth() + 3) / 3), //季度
      S: _date.getMilliseconds(), //毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (_date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    //console.log(fmt);
    return fmt;
  },
  // 获取当前月份的第一天-时间戳
  getMonthFirstDay() {
    let date = new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay.valueOf();
  },
  // 获取前一个月月份的第一天-时间戳
  getforwardMonthFirstDay() {
    let date = new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth() - 1);
    return firstDay.valueOf();
  },
  // 得到指定月最后一天 传进来按 12月算
  getCurrMonthLastDay(year, yue) {
    if (yue >= 12) {
      year = year + 1;
      yue = yue - 12;
    }
    return parseInt(new Date(year, yue, 0).getDate());
  },
  //得到指定月的上个月最后一天传进来按 12月算
  getPervMonthLastDay(year, yue) {
    return parseInt(new Date(year, yue - 1, 0).getDate());
  },
};
