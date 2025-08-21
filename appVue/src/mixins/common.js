export default {
  // 改变颜色
  formatColor(value) {
    let color = "#0A1534";
    let digital = value;
    if (value) {
      // 获取数字部分
      digital = parseFloat(value);
      // 是一个数字
      if (!isNaN(digital)) {
        // 判断数字的正负
        if (digital < 0) {
          color = "#57BD3F"; // 负值显示绿色
        } else if (digital > 0 || value.includes("+")) {
          color = "#EE4063"; // 正值或包含正号显示红色
        } else {
          color = "#0A1534";
        }
      }
    }
    return color;
  },
};
