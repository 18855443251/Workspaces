<template>
  <div>
    <tab :tabList="tabList" v-model="curTabMsg.curTab"></tab>
    <div v-for="(item, index) in starList" :key="index">
      <img :src="item.src" :key="index" :class="index > 0 ? 'mrl14' : ''" />
    </div>
  </div>
</template>
<script>
import tab from "@/components/tab";
export default {
  components: {
    tab,
  },
  name: "home",
  data() {
    return {
      curTabMsg: {
        curTab: 0, //0代表tab的借记账户，1代表tab的电子账户，2代表tab的公务卡
        acctList: [],
      },
      tabList: [
        {
          type: true,
          text: "借记账户",
        },
        {
          type: false,
          text: "电子账户",
        },
        {
          type: false,
          text: "公务卡",
        },
      ],
      debitAccountList: [
        [
          {
            Alias: "",
            Seq: "37002",
            DeptSeq: "510101",
            CifSeq: "0",
            "Department.seq": "",
            "Department.phone": "",
            "Department.email": "",
            "Department.cityCode": "",
            "Department.extLevel": "",
            "Department.deptClass": "",
            "Department.zipCode": "",
            "Department.parentSeq": "",
            "Department.provinceCode": "",
            "Department.subOrgList": "",
            "Department.address": "",
            "Department.name": "营口银行营业部",
            "Department.id": "",
            "Department.state": "",
            "Department.type": "",
            "Department.level": "",
            BankAcSubType: "",
            Checked: "",
            LoanFlag: "",
            RelatedAcNo: "",
            AcctAgreement: "",
            BankPrdSetId: "",
            CoreCifNo: "",
            AssoCifLevel: "",
            CreateTime: "",
            CreateTimestamp: "",
            ExchNo: "",
            AssoCifAcFlag: "false",
            OpenDate: "",
            CloseDate: "",
            CityCode: "2280",
            "Properties.Seq": "37002",
            "Properties.CrossBankTransfer": "1",
            "Properties.BankInnerTransfer": "1",
            "Properties.No": "6231770000006565686",
            State: "N",
            CRFlag: "C",
            "Currency.crflag": "钞",
            Code: "CNY",
            "Currency.code": "人民币",
            AccountNo: "6231770000006565686",
            BankAcType: "PDBC",
            BankAcTypeName: "借记卡",
            AcName: "滕腾",
            AccountChannels: "",
            CreditLimit: "",
            CurrBal: "",
            Balance: "519.38",
            AvailBal: "519.38",
            AcctOtb: "",
            P2BCNo: "",
            Acustg: "",
            acctst: "",
            Name: "滕腾",
            MasterFlag: "1",
            showType: 1,
            AcState: "正常",
          },
        ],
      ], //借记卡账户列表

      starList: [
        {
          src: require("@/assets/img/u29518.png"),
        },
        {
          src: require("@/assets/img/u29518.png"),
        },
        {
          src: require("@/assets/img/u29518.png"),
        },
        {
          src: require("@/assets/img/u29518.png"),
        },
        {
          src: require("@/assets/img/u29518.png"),
        },
      ],
      ClientRisk: 3,
    };
  },
  created() {
    this.showStar();
  },
  methods: {
    showStar() {
      this.starList = this.starList.map((item, index) => {
        if (index + 1 <= this.ClientRisk) {
          item.src = require("@/assets/img/u29512.png");
        } else {
          item.src = require("@/assets/img/u29518.png");
        }
        return item;
      });
    },
  },
  watch: {
    "curTabMsg.curTab": function (newVal) {
      let acctList = [];
      switch (newVal) {
        case 0:
          acctList = this.debitAccountList;
          break;
        case 1:
          acctList = this.debitAccountList;
          break;
        case 2:
          acctList = this.debitAccountList;
          break;
        default:
          acctList = this.debitAccountList;
          break;
      }
      this.$set(this.curTabMsg, "acctList", acctList);
    },
  },
};
</script>

<style scoped>
.mrl14 {
  margin-left: 14px;
}
</style>
