/*
 * @Author: your name
 * @Date: 2021-08-12 15:23:32
 * @LastEditTime: 2021-08-25 09:33:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\utils\filter\card.js
 */
export default {
  //保留卡号后四位56922533555->尾号3555
  card(input) {
    if (input !== undefined) {
      input = "尾号" + input.substr(-4);
    }
    return input;
  },
  // 保留卡号后四位第一种方式 56922533555->尾号3555
  tailNumBankCard(input) {
    if (input) {
      input = "尾号" + input.substr(-4);
    }
    return input;
  },
  // 保留卡号后四位第二种方式 56922533555->尾号3555
  dividelastfour(str) {
    if (str) {
      return str.substr(str.length - 4);
    }
  },
  //加密银行卡号第一种方式 592886861235862->5928 ****  **** 5862
  // 使用说明：包含数字、拼音等
  encryptBankCard(input) {
    if (input) {
      input = input.substring(0, 4) + " **** " + " **** " + input.substr(-4);
    }
    return input;
  },
  //加密银行卡号第二种方式 592886861235862->5928 ****  **** 5862
  // 使用说明：仅限全部是数字的卡号，不包含拼音
  showBanks(str) {
    var reg = /^(\d{4})\d+(\d{4})$/;
    if (str) {
      //中间用七个*分割
      return str.replace(reg, "$1 **** **** $2");
    }
  },
  //加密银行卡号 5928868612359653485->5928****3485
  capitalize(value) {
    var cardReg = /(^\d{19})$/;
    // 如果不是19位数字，返回请输入汇款卡号
    if (!cardReg.test(value)) {
      return "请输入汇款卡号";
    } else {
      let start = value.slice(0, 4); //前四位
      let end = value.slice(-4); //后四位
      return `${start}****${end}`;
    }
  },
  // 银行卡号每四位分割第一种方式 5928868612359653485->5928 8686 1235 9653 485
  divieBanks(str) {
    if (str) {
      return str.replace(/[\s]/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
    }
  },
  // 银行卡号每四位分割第二种方式 5928868612359653485->5928 8686 1235 9653 485
  formatBankCard(input) {
    if (!input) return "";
    input = input.replace(/\s/g, "").replace(/(.{4})/g, "$1 ");
    return input;
  },
  //  银行卡号带星号每四位分割
  AccountNoFormat(value, beginnum, endnum) {
    value = value.replace(/[\s]/g, "");
    if (beginnum && endnum) {
      value = value.slice(0, beginnum) + "********" + value.slice(endnum);
      value = value.replace(/(.{4})/g, "$1 ");
    } else {
      value = value.replace(/(.{4})/g, "$1 ");
    }
    return value;
  },
};
