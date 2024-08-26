<!--
 * @Author: 洪丽云
 * @Date: 2021-02-07 15:29:18
 * @LastEditTime: 2022-01-17 16:03:47
 * @LastEditors: Please set LastEditors
 * @Description: 公共方法和过滤器的使用
 * @FilePath: \weex\src\views\example.vue
-->
<template>
  <div style="padding-top: 0px">
    <div class="view">
      <div style="margin-top: 20px">
        <div class="f48">省略号</div>
        <div>{{ ellipsis(name, 3) }}</div>
        <div>
          省略号：数据为空有空格{{ ellipsis(data, "", { isSpace: true }) }}
        </div>
        <div>省略号：数据为空没有空格{{ ellipsis(data) }}</div>
      </div>
      <div style="margin-top: 20px">
        <div class="f48">整数千分位，保留两位小数</div>
        <div>数字：保留两位小数,没有四舍五入{{ numberFormat(money) }}</div>
        <div>
          数字：保留两位小数,有四舍五入{{
            numberFormat(money, { isRounding: true })
          }}
        </div>
        <div>
          <span>数字：保留两位小数,没有四舍五入，数组形式</span>
          <span class="f36">{{
            numberFormat(money, { isArray: true })[0]
          }}</span>
          <span class="f24">{{
            numberFormat(money, { isArray: true })[1]
          }}</span>
        </div>
        <div>
          <span>数字：保留两位小数,有四舍五入,数组形式</span>
          <span class="f36">{{
            numberFormat(money, { isArray: true, isRounding: true })[0]
          }}</span>
          <span class="f24">{{
            numberFormat(money, { isArray: true, isRounding: true })[1]
          }}</span>
        </div>
        <div class="f48">数字：整数千分位，小数不变</div>
        <div>
          数字：小数不变,没有四舍五入：{{
            numberFormat(money, { isKeepDecimal: true })
          }}
        </div>
        <div>
          <span>数字：小数不变,没有四舍五入,数组形式</span>
          <span class="f36">{{
            numberFormat(money, { isArray: true, isKeepDecimal: true })[0]
          }}</span>
          <span class="f24">{{
            numberFormat(money, { isArray: true, isKeepDecimal: true })[1]
          }}</span>
        </div>
        <div class="f48">整数千分位，保留整数</div>
        <div>
          数字：保留整数,没有四舍五入{{
            numberFormat(money, { isInteger: true })
          }}
        </div>
        <div>
          数字：保留整数,有四舍五入{{
            numberFormat(money, { isInteger: true, isRounding: true })
          }}
        </div>
        <div>
          <span>数字:数据为空带空格,数组形式</span>
          <span>{{
            numberFormat(data, { isArray: true, isSpace: true })[0]
          }}</span>
          <span>{{
            numberFormat(data, { isArray: true, isSpace: true })[1]
          }}</span>
        </div>
        <div>
          <span>数字:数据为空不带空格，数组形式</span>
          <span>{{ numberFormat(data, { isArray: true })[0] }}</span>
          <span>{{ numberFormat(data, { isArray: true })[1] }}</span>
        </div>
        <div>数字:数据为空，不带空格{{ numberFormat(data) }}</div>
      </div>
      <div style="margin-top: 20px">
        <div class="f48">去除正号和负号</div>
        <div>去除负号:-15550.5592->{{ removeSymbol(numberF) }}</div>
        <div>去除正号:+15550.5592->{{ removeSymbol(numberZ) }}</div>
        <div>
          去除正负号：数据为空没有空格{{ removeSymbol(numberFormat(data)) }}
        </div>
        <div>
          去除正负号：数据为空有空格{{
            removeSymbol(numberFormat(data, { isSpace: true }), {
              isSpace: true,
            })
          }}
        </div>
      </div>
      <div style="margin-top: 20px">
        <div class="f48">去除单位</div>
        <div>15550.5592%->{{ removeUnit(numberR) }}</div>
        <div>15550.5592元->{{ removeUnit(numberY) }}</div>
      </div>
      <div style="margin-top: 20px">
        <div class="f48">添加正号</div>
        <div>4577.796%->{{ addSymbol(numberFormat(number)) }}</div>
      </div>
      <div style="margin-top: 20px">
        <div class="f48">日期过滤</div>
        <div>
          yyyy/MM/dd HH:mm:ss形式：{{ dateFormat(date, "yyyy/MM/dd HH:mm:ss") }}
        </div>
        <div>
          yyyy-MM-dd HH:mm:ss形式：{{ dateFormat(date, "yyyy-MM-dd HH:mm:ss") }}
        </div>
        <div>
          yyyy年MM月dd日 HH:mm:ss形式：{{
            dateFormat(date, "yyyy年MM月dd日 HH时mm分ss秒")
          }}
        </div>
        <div>MM/dd HH:mm:ss形式：{{ dateFormat(date, "MM/dd HH:mm:ss") }}</div>
        <div>MM-dd HH:mm:ss形式：{{ dateFormat(date, "MM-dd HH:mm:ss") }}</div>
        <div>
          MM月dd日 HH时mm分ss秒：{{ dateFormat(date, "MM月dd日 HH时mm分ss秒") }}
        </div>
        <div>MM/dd HH:mm形式：{{ dateFormat(date, "MM/dd HH:mm") }}</div>
        <div>MM-dd HH:mm形式：{{ dateFormat(date, "MM-dd HH:mm") }}</div>
        <div>
          MM月dd日 HH时mm分：{{ dateFormat(date, "MM月dd日 HH时mm分") }}
        </div>
        <div>yyyy/MM/dd形式：{{ dateFormat(date, "yyyy/MM/dd") }}</div>
        <div>yyyy-MM-dd形式：{{ dateFormat(date, "yyyy-MM-dd") }}</div>
        <div>yyyy.MM.dd形式：{{ dateFormat(date, "yyyy.MM.dd") }}</div>
        <div>yyyy年MM月dd日形式：{{ dateFormat(date, "yyyy年MM月dd日") }}</div>
        <div>yy/MM/dd形式：{{ dateFormat(date, "yy/MM/dd") }}</div>
        <div>yy-MM-dd形式：{{ dateFormat(date, "yy-MM-dd") }}</div>
        <div>yy.MM.dd形式：{{ dateFormat(date, "yy.MM.dd") }}</div>
        <div>yy年MM月dd日形式：{{ dateFormat(date, "yy年MM月dd日") }}</div>
        <div>yyyy/MM形式：{{ dateFormat(date, "yyyy/MM") }}</div>
        <div>yyyy-MM形式：{{ dateFormat(date, "yyyy-MM") }}</div>
        <div>yyyy.MM形式：{{ dateFormat(date, "yyyy.MM") }}</div>
        <div>yyyy年MM月形式：{{ dateFormat(date, "yyyy年MM月") }}</div>
        <div>MM/dd形式：{{ dateFormat(date, "MM/dd") }}</div>
        <div>MM-dd形式：{{ dateFormat(date, "MM-dd") }}</div>
        <div>MM.dd形式：{{ dateFormat(date, "MM.dd") }}</div>
        <div>MM月dd日形式：{{ dateFormat(date, "MM月dd日") }}</div>
        <div>yyyy形式：{{ dateFormat(date, "yyyy") }}</div>
        <div>MM形式：{{ dateFormat(date, "MM") }}</div>
        <div>dd形式：{{ dateFormat(date, "dd") }}</div>
        <div>HH:mm:ss形式：{{ dateFormat(date, "HH:mm:ss") }}</div>
        <div>HH:mm形式：{{ dateFormat(date, "HH:mm") }}</div>
        <div>mm:ss形式：{{ dateFormat(date, "mm:ss") }}</div>
        <div>HH形式：{{ dateFormat(date, "HH") }}</div>
        <div>mm形式：{{ dateFormat(date, "mm") }}</div>
        <div>ss形式：{{ dateFormat(date, "ss") }}</div>
        <div>
          日期:数据为空有空格{{ dateFormat(data, "", { isSpace: true }) }}
        </div>
        <div>日期:数据为空没有空格{{ dateFormat(data) }}</div>
      </div>
      <div style="margin-top: 20px">
        <div class="f48">数据格式异常过滤</div>
        <div>数据为空有空格{{ transNull(data, { isSpace: true }) }}</div>
        <div>数据为空没有空格{{ transNull(data) }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      name: "吉娜爱丽丝",
      money: "5485688.54866",
      number: "4577.796%",
      numberF: "-5105.5885", //负号
      numberZ: "+5105.5885", //正号
      numberR: "15550.5592%",
      numberY: "15550.5592元",
      date: "2021-06-3 6:5:25.5", //日期
      // date: "20210603", //日期
      data: "", //空数据
      nowDate: "", //今天日期
    };
  },
  created() {
    // 获取今天日期
    this.nowDate = this.getNowDate();
    // 获取当前时间 20231109104540000
    console.log(this.getNowTime());
    console.log(this.dateFormat(this.nowDate, "MM/dd"));
    //1.相差天数; 2.相差小时数; 3.相差分钟数; 4.相差秒数
    var ilength = this.date_getdiffer_date(
      "2023-03-23 00:00:01",
      "2023-03-24 00:00:00",
      1
    ); //结果是0    比较时分秒
    var ilength1 = this.us_differ_day(
      "2023-03-23 00:00:01",
      "2023-03-24 00:00:00"
    ); //结果是1              不比较时分秒
    console.log(ilength);
    console.log(ilength1);
    console.log(this.getMonthFirstDay());
    console.log(this.getforwardMonthFirstDay())
  },
  methods: {},
};
</script>
<style scoped>
.f48 {
  font-size: 48px;
}
.f36 {
  font-size: 36px;
}
.f24 {
  font-size: 24px;
}
</style>
