export default {
  //格式化日期 20200101-> 2020-01-01
  //必须八位，有空格都不行
  formatDate(input) {
    if (!input) return "";
    input = input.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3");
    return input;
  },
  //格式化日期 20200101-> 2020-01-01
  dealTime(str) {
    if (str) {
      var a = str.substring(4, 6) + "月";
      var b = str.substring(6, 8) + "日";
      return a + b;
    }
  },
  // 201808091213->2018.08.09 12:13
  formatDate1(dateString) {
    if (!dateString) {
      return "";
    }
    let o = {
      Y: dateString.substring(0, 4),
      M: dateString.substring(4, 6),
      d: dateString.substring(6, 8),
      h: dateString.substring(8, 10),
      m: dateString.substring(10, 12),
    };
    let newDate = o.Y + "." + o.M + "." + o.d + " " + o.h + ":" + o.m;
    return newDate;
  },
  // 0->星期天
  dealweek(str) {
    if (str == "0") {
      return "星期天";
    } else if (str == "1") {
      return "星期一";
    } else if (str == "2") {
      return "星期二";
    } else if (str == "3") {
      return "星期三";
    } else if (str == "4") {
      return "星期四";
    } else if (str == "5") {
      return "星期五";
    } else if (str == "6") {
      return "星期六";
    }
  },
  // 今天电脑时间->2020-09-28
  FormattedCurDate(str) {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear(); //年
    var month = date.getMonth() + 1; //月
    var strDate = date.getDate(); //日
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var str = year + seperator1 + month + seperator1 + strDate;
    return str;
  },
  // 当前时间距离上次时间间隔
  dateStatus(val) {
    if (val && val != "null") {
      let nowDate = new Date().getTime();
      let beginDate = new Date(val.replace(/-/g, "/")).getTime();
      let count = nowDate - beginDate;
      let number = Math.floor(count / 3600000);
      if (count <= 60000) {
        return "刚刚";
      } else if (count > 60000 && count <= 120000) {
        return "1分钟前";
      } else if (count > 120000 && count <= 180000) {
        return "2分钟前";
      } else if (count > 180000 && count <= 240000) {
        return "3分钟前";
      } else if (count > 240000 && count <= 300000) {
        return "4分钟前";
      } else if (count > 300000 && count <= 360000) {
        return "5分钟前";
      } else if (count > 360000 && count <= 420000) {
        return "6分钟前";
      } else if (count > 420000 && count <= 480000) {
        return "7分钟前";
      } else if (count > 480000 && count <= 540000) {
        return "8分钟前";
      } else if (count > 540000 && count <= 600000) {
        return "9分钟前";
      } else if (count > 600000 && count <= 1200000) {
        return "10分钟前";
      } else if (count > 1200000 && count <= 1800000) {
        return "20分钟前";
      } else if (count > 1800000 && count <= 2400000) {
        return "半小时前";
      } else if (count > 2400000 && count <= 3000000) {
        return "40分钟前";
      } else if (count > 3000000 && count <= 3600000) {
        return "50分钟前";
      } else if (number > 1 && number <= 24) {
        return number + "小时前";
      } else if (number > 24 && number <= 48) {
        return "昨天";
      } else if (number > 48 && number <= 72) {
        return "2天前";
      } else {
        return (val || "").split(" ")[0].substr(2);
      }
    } else {
      return "--";
    }
  },
  // 返回一个月的开始时间和结束时间
  formatMonth(val) {
    const date = new Date(val);
    if (date.toString() === "Invalid Date") {
      return null;
    } else {
      const dateArr = [];
      const year = date.getFullYear();
      const month =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1);
      dateArr[0] = year + "-" + month + "-01";
      date.setMonth(date.getMonth() + 1);
      date.setDate(0);
      dateArr[1] = year + "-" + month + "-" + date.getDate();
      return dateArr;
    }
  },
};
