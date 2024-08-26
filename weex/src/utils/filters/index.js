module.exports = {
  // 仅保留逗号5201245->5,201,245
  // 特殊处理笔数，户数 ，张数
  formatNum(str) {
    //为空,null
    if (!str || str == "null") {
      return ""
      // 不为空时
    } else {
      // 为--时
      if (str == '--') {
        return '--'
        // 有数据
      } else {
        str = str + "";
        // 如果有逗号先去掉逗号
        if (str.indexOf(",") != -1) {
          str.replace(/,/g, "");
        }
        //分割左边
        var left = str.split(".")[0];
        var temp = left
          .split("")
          .reverse()
          .join("")
          .match(/(\d{1,3})/g);
        var str =
          (Number(str) < 0 ? "-" : "") +
          temp
          .join(",")
          .split("")
          .reverse()
          .join("")
        return str;
      }
    }
  },
  // 金额过滤器1235685.059->1,235,685.05
  moneyFilter(money) {
    // 金额为空,为null时
    if (!money || money == "null") {
      return "";
      // 金额不为空
    } else {
      // 金额为--时
      if (money == '--') {
        return '--';
        // 金额有值时
      } else {
        // 如果金额是数字
        money = money + "";
        // 金额有逗号时
        if (money.indexOf(",") != -1) {
          money.replace(/,/g, "");
        }
        //分割左边
        var left = money.split(".")[0];
        //分割右边
        var right = money.split(".")[1];
        right = right ?
          right.length >= 2 ?
          "." + right.substr(0, 2) :
          "." + right + "0" :
          ".00";
        var temp = left
          .split("")
          .reverse()
          .join("")
          .match(/(\d{1,3})/g);
        var str1 =
          (Number(money) < 0 ? "-" : "") +
          temp
          .join(",")
          .split("")
          .reverse()
          .join("") +
          right;
        return str1;
      }
    }

  },

  // 格式化日期20120512-2012-05-12
  formatDate(input) {
    if (!input) return "";
    input = input.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3");
    return input;
  },
  formatMonth(str) {
    if (!str) {
      return "";
    } else {
      var a = str.substring(5, 7) + "-";
      var b = str.substring(8, 10)
      return a + b;
    }
  },
  // 过滤日期2013/11/05->11月05日
  dealTime(str) {
    if (!str) {
      return "";
    } else {
      var a = str.substring(5, 7) + "月";
      var b = str.substring(8, 10) + "日"
      return a + b;
    }
  },

  changePosition(msg) {
    switch (msg) {
      case "0900402101":
        return "高级管理者";
        break;
      case "0900402102":
        return "中层管理者";
        break;
      case "0900402103":
        return "一般员工";
        break;
      case "0900402104":
        return "董事长";
        break;
      case "0900402105":
        return "监事长";
        break;
      case "0900402106":
        return "行长";
        break;
      case "0900402107":
        return "副董事长";
        break;
      case "0900402108":
        return "副行长";
        break;
      case "0900402109":
        return "纪委书记";
        break;
      case "0900402110":
        return "工会主席";
        break;
      case "0900402111":
        return "董事会秘书";
        break;
      case "0900402112":
        return "首席风险官";
        break;
      case "0900402113":
        return "纪委副书记";
        break;
      case "0900402114":
        return "工会副主席";
        break;
      case "0900402115":
        return "总行部门总经理";
        break;
      case "0900402116":
        return "总行营业部总经理";
        break;
      case "0900402117":
        return "异地管理行行长";
        break;
      case "0900402118":
        return "村镇银行行长";
        break;
      case "0900402119":
        return "总行部门副总经理";
        break;
      case "0900402120":
        return "总行营业部副总经理";
        break;
      case "0900402121":
        return "异地管理行副行长";
        break;
      case "0900402122":
        return "一级二类行长";
        break;
      case "0900402123":
        return "村镇银行副行长";
        break;
      case "0900402124":
        return "一级二类副行长";
        break;
      case "0900402125":
        return "二级一类行长";
        break;
      case "0900402126":
        return "高级主管";
        break;
      case "0900402127":
        return "二级二类行长";
        break;
      case "0900402128":
        return "主管";
        break;
      case "0900402129":
        return "综合办公室主任";
        break;
      case "0900402130":
        return "二级三类行长";
        break;
      case "0900402131":
        return "办事员";
        break;
      case "0900402132":
        return "运营监管员";
        break;
      case "0900402133":
        return "客户经理";
        break;
      case "0900402134":
        return "大堂经理";
        break;
      case "0900402135":
        return "风险经理";
        break;
      case "0900402136":
        return "贷后经理";
        break;
      case "0900402137":
        return "运营经理";
        break;
      case "0900402138":
        return "理财经理";
        break;
      case "0900402139":
        return "柜员";
        break;
      case "0900402140":
        return "工勤人员";
        break;
      case "0900402141":
        return "试用期员工";
        break;
      case "0900402142":
        return "见习员工";
        break;
      case "0900402143":
        return "安全保卫";
        break;
      case "0900402174":
        return "一级一类内控副行长";
        break;
      case "0900402175":
        return "一级一类营销副行长";
        break;
      case "0900402185":
        return "村镇银行内控副行长";
        break;
      case "0900402186":
        return "村镇银行营销副行长";
        break;
      case "0900402187":
        return "一级二类内控副行长";
        break;
      case "0900402188":
        return "一级二类营销副行长";
        break;
      case "0900402189":
        return "营业部营销副总经理";
        break;
      case "0900402190":
        return "营业部内控副总经理";
        break;
      case "0900402242":
        return "VIP柜员";
        break;
      case "0900402243":
        return "主出纳";
        break;
      case "0900402244":
        return "授权员";
        break;
      case "0900402245":
        return "综合员";
        break;
      case "0900402246":
        return "票据柜员";
        break;
      case "0900402247":
        return "库管员（停用）";
        break;
      case "0900402248":
        return "清算柜员";
        break;
      case "0900402249":
        return "用信审查";
        break;
      case "0900402250":
        return "前台柜员";
        break;
      case "0900402251":
        return "外汇柜员";
        break;
      case "0900402252":
        return "值守岗（尾箱库）";
        break;
      case "0900402253":
        return "提解员";
        break;
      case "0900402261":
        return "基层管理者";
        break;
      case "0900402265":
        return "金库人员类";
        break;
      case "0900402269":
        return "二级一类副行长（主持工作）";
        break;
      case "0900402270":
        return "二级二类副行长（主持工作）";
        break;
      case "0900402271":
        return "二级三类副行长（主持工作）";
        break;
      case "0900402272":
        return "调研员";
        break;
      case "0900402278":
        return "交流挂职";
        break;
      case "0900402344":
        return "信贷内勤";
        break;
      case "0900402345":
        return "金库人员";
        break;
      case "0900402346":
        return "首席级";
        break;
      case "0900402349":
        return "加钞人员";
        break;
      case "0900402350":
        return "专职营销人员";
        break;
      case "0900402357":
        return "库管员";
        break;
      case "0900402358":
        return "运营分部";
        break;
      case "0900402359":
        return "信贷分部";
        break;
      case "0900402360":
        return "综合办公室";
        break;
      case "0900402373":
        return "营业部主任";
        break;
      case "0900402376":
        return "公司客户经理";
        break;
      case "0900402377":
        return "零售客户经理";
        break;
      case "0900402388":
        return "一级支行行长";
        break;
      case "0900402389":
        return "二级支行行长";
        break;
      case "0900402390":
        return "三级支行行长";
        break;
      case "0900402391":
        return "管理行行长";
        break;
      case "0900402392":
        return "管理行副行长";
        break;
      case "0900402393":
        return "部门副总级";
        break;
      case "0900402438":
        return "分行行长";
        break;
      case "0900402439":
        return "分行副行长";
        break;
      case "0900402483":
        return "派遣制岗位";
        break;
      case "0900402493":
        return "首席信息官";
        break;
      case "0900402522":
        return "辅助人员";
        break;
      case "0900402532":
        return "部门总经理待遇";
        break;
      case "0900402533":
        return "异地一级支行行长";
        break;
      case "0900402534":
        return "异地一级支行副行长";
        break;
      case "0900412119":
        return "总行部门副总经理（主持工作）";
        break;
      case "0900412120":
        return "营业部副总经理（主持工作）";
        break;
      case "0900412121":
        return "一级一类副行长（主持工作）";
        break;
      case "0900412123":
        return "村镇银行副行长（主持工作）";
        break;
      case "0900412124":
        return "一级二类副行长（主持工作）";
        break;
      default:
        break;
    }
  },
  status(str) {
    if (str == "70021001") {
      return "在岗"
    } else if (str == "70021002") {
      return "下岗清收"
    } else if (str == "70021003") {
      return "长病假"
    } else if (str == "70021004") {
      return "内退"
    } else if (str == "70021005") {
      return "退休"
    } else if (str == "70021006") {
      return "调出"
    } else if (str == "70021007") {
      return "辞职"
    } else if (str == "70021008") {
      return "劝退"
    } else if (str == "70021009") {
      return "退职"
    } else if (str == "70021010") {
      return "解除"
    } else if (str == "70021011") {
      return "死亡"
    } else if (str == "70021012") {
      return "其他"
    } else if (str == "7002402190") {
      return "派遣"
    } else if (str == "7002402192") {
      return "退职返聘"
    } else if (str == "7002402193") {
      return "退职未返聘"
    } else if (str == "7002402348") {
      return "退居二线"
    } else {
      return "退职"
    }
  },
  //加密手机号18855443961->188 **** 3961
  encryptPhoneNo(input) {
    if (input !== undefined) {
      input = input.substring(0, 3) + "****" + input.substr(input.length - 4);
    }
    return input;
  },
}