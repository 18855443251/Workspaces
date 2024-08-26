<!--
 * @Author: your name
 * @Date: 2021-05-24 10:47:23
 * @LastEditTime: 2021-07-08 11:03:51
 * @LastEditors: Please set LastEditors
 * @Description: 防抖节流
 * @FilePath: \root\mgBank\src\views\workbench\summaryPage\searchPage.vue
-->
<template>
  <div class="search" @touchstart="moveStart">
    <div class="tit_area"></div>
    <!-- 搜索框 -->
    <div class="searchTit">
      <div class="searchBox" @touchstart="focusClick">
        <img class="img" src="@/assets/img/search.png" alt />
        <input type="text" class="input" v-model="iptVal" ref="searchInput" @input="inpClick" />
      </div>
      <div class="searchtext" @click="goBuss">取消</div>
    </div>
    <!-- ----搜索部分显示---- -->
    <div class="searchCon">
      <div
        class="searchSlip"
        v-for="(item,i) in pkBankList"
        :key="i"
        @click="choiceClick(item)"
      >{{item.brsmna}}</div>
    </div>
  </div>
</template>

<script>
import debounce from "@/utils/debounce.js";
import { Dialog, Toast } from "mand-mobile";
export default {
  components: { Toast },
  data() {
    return {
      iptVal: "", //输入框的值
      pkBankList: [], //搜索List
      pkNoData: this.$store.state.userInfo.manageOrgNo
        ? this.$store.state.userInfo.manageOrgNo
        : this.$store.state.userInfo.orgCode,
      // sevenDay:[],
      // pkBankList:[
      //   {
      //     brchna:'常州支行',
      //     brchno:'01101',
      //   },
      //   {
      //     brchna:'速州支行',
      //     brchno:'01108',
      //   },
      //   {
      //     brchna:'林州支行',
      //     brchno:'01181',
      //   },
      // ]
    };
  },
  mounted() {
    // this.$nextTick(() => {
    this.$refs.searchInput.focus();
    // });
    this.inpClick = debounce(this.inpClick, 1000, 1);
    // this.getDate(new Date())
  },
  methods: {
    // 取消按钮
    goBuss() {
      this.$router.back();
    },
    // 输入
    inpClick() {
      var sType = this.$route.params.sType;
      let param = {
        orgName: this.iptVal,
        serialType: this.$route.params.choiceOrgTypeIndex, // 1 ，管理行，总行营业部  2一级支行网点营业部  3高柜微银行   4标准微银行
        rangeType: sType == "A" ? "1" : "0", //0 全行 1 辖内
        orgList: this.$route.params.orgList,
      };
      let branchCode = this.$route.params.branchCode1; //本行选择机构号
      if (this.iptVal) {
        this.$axios.post("managerQueryCompareBranch.do", param).then((res) => {
          if (branchCode == "01001") {
            res.dataList = res.dataList.filter((item, Index) => {
              return (
                item.brchno != "01079" &&
                item.brchno != "01313" &&
                item.brchno != "01045"
              );
            });
          }
          var noBranch =
            branchCode != "01001" &&
            branchCode != "01079" &&
            branchCode != "01313" &&
            branchCode != "01045";
          if (res.dataList.length) {
            this.pkBankList = res.dataList;
          } else {
            Toast.info("该支行暂不可PK,请搜索同序列支行");
          }
        });
      } else {
        this.pkBankList = [];
      }
    },
    // 选中
    choiceClick(val) {
      this.pkNoData = val.brchno;
      console.log(val.brchna, "支行你们"); //支行名
      console.log(val.brchno, "机构号"); //支行机构号
      // this.jump("summaryPage",{pkName:val.brchna,pkNo:val.brchno}); //跳转页面
      this.$store.state.rankSearch = {
        pkName: val.brsmna,
        pkNo: val.brchno,
      };
      console.log(this.$store.state.rankSearch);
      this.$router.back();
    },
    // 全篇失焦 ios上滑Bug
    moveStart(e) {
      console.log(e);
      if (e) {
        this.$refs.searchInput.blur();
      }
    },
    // 全篇失焦out 点击聚焦
    focusClick(e) {
      console.log(e);

      if (e) {
        this.$refs.searchInput.focus();
      }
    },
    // // 获取七天内的日期
    // getDate(date){
    //   var base=new Date(date).getTime()
    //   var oneDay=24*3600*1000;
    //   var date=[];
    //   var data=[Math.random()*300]
    //   var time=new Date(base);
    //   date.push([time.getFullYear(),this.addZero(time.getMonth()+1),this.addZero(time.getDate())].join('-'))
    //   for(var i=1;i<7;i++){
    //     var now=new Date(base-=oneDay);
    //     date.push([now.getFullYear(),this.addZero(now.getMonth()+1),this.addZero(now.getDate())].join('-'))
    //     data.push(Math.round((Math.random()-0.5)*20+data[i-1]));
    //   }
    //   // this.sevenDay.push(...date);
    //   this.sevenDay=date.reverse();
    //   console.log( this.sevenDay);
    //   return this.sevenDay
    // },
    // // 补零
    // addZero(val){
    //   if(val>10){
    //     return val
    //   }else{
    //     return '0'+val
    //   }
    // },
  },
};
</script>

<style scoped>
/* .search{
  position: relative;
  background-color: rgb(245, 238, 141);
  min-height: 300px;
  border: 1px solid #000;
} */
.tit_area {
  position: fixed;
  top: 0px;
  width: 750px;
  height: 160px;
  background-color: #fff;
}
.searchTit {
  position: fixed;
  top: 160px;
  left: 0;
  right: 0;
  width: 100%;
  height: 88px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  background-color: #fff;
}
.searchBox {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.img {
  position: absolute;
  left: 32px;
  width: 40px;
  height: 40px;
}
input {
  width: 590px;
  height: 64px;
  background-color: #f3f3f3;
  border-radius: 32px;
  text-indent: 80px;
  font-size: 32px;
  color: #333;
}
.searchCon {
  margin-top: 88px;
}
.searchSlip {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 64px;
  font-size: 28px;
  color: #333;
}
</style>