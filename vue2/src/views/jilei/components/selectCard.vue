<!-- 银行卡组件 -->
<template>
  <md-selector
    class="card-selector"
    v-model="selectShow1"
    :default-value="normalCard.acNo"
    :data="cardList"
    :mask-closable="false"
    min-height="320px"
    :title="title"
    large-radius
    @choose="handleSelectorChoose"
    @cancel="cancel"
  >
    <template slot="header">
      <div class="card-to-all" @click="handleSelectorChoose('')">全部账户</div>
    </template>
  </md-selector>
</template>

<script>
import { Selector } from "mand-mobile";
export default {
  name: "selectCard",
  components: {
    [Selector.name]: Selector,
  },
  props: {
    backUrl: {
      type: String,
      default: () => {
        return "";
      },
    },
    successUrl: {
      type: String,
      default: () => {
        return "";
      },
    },
    title: {
      type: String,
      default: () => {
        return "请选择银行卡";
      },
    },
    isAccountPage: {
      type: Boolean,
      default: false,
    },
    selectShow: {
      type: Boolean,
      default: false,
    },
    addFlag: {
      type: Boolean,
      default: true,
    },
    addFlagTitle: {
      type: String,
      default: () => {
        return "添加新卡";
      },
    },
    allFlag: {
      type: Boolean,
      default: false,
    },
    cardList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    isAmount: {
      type: Boolean,
      default: true,
    },
    signingFlag: {
      type: Boolean,
      default: false,
    },
    currentTab: {
      type: Number,
      default: 1,
    },
    isShowAcSubType: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    selectShow1: {
      get: function () {
        return this.selectShow;
      },
      set: function (value) {
        console.log(value);
      },
    },
  },
  data() {
    return {
      normalCard: {},
    };
  },
  methods: {
    handleSelectorChoose(item) {
      this.$emit("choose", item);
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>


