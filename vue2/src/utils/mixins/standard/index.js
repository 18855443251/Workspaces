/*
 * @Author:洪丽云
 * @Date: 2022-01-21 15:04:33
 * @LastEditTime: 2022-01-28 16:32:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bank\src\utils\mixins\standard\index.js
 */
import number from "./number.js"; //公共数字类方法
import other from "./other.js"; //公共其他方法
import date from "./date.js"; //公共日期类方法
export default {
    ...number,
    ...other,
    ...date,
}
