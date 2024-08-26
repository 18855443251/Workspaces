<template>
  <md-popup
    ref="popup"
    class="inner-popup"
    v-model="isPickerShow"
    position="bottom"
    :mask-closable="maskClosable"
    @show="$_onPickerShow"
    @hide="$_onPickerHide"
    @maskClick="$_onPickerCancel"
    @beforeShow="refreshPicker"
    prevent-scroll
  >
    <md-popup-title-bar
      :title="title"
      :describe="describe"
      :ok-text="okText"
      :cancel-text="cancelText"
      @confirm="$_onPickerConfirm"
      @cancel="$_onPickerCancel"
    ></md-popup-title-bar>
    <div class="location-box">靠近</div>
  </md-popup>
</template>

<script>
import { Popup, PopupTitleBar } from "mand-mobile";
export default {
  name: "addressPickerPop",
  components: {
    [Popup.name]: Popup,
    [PopupTitleBar.name]: PopupTitleBar,
  },
  props: {
    // 监听值
    value: {
      type: Boolean,
      default: false,
    },
    // 1：只显示城市 -- 2：市-区
    level: {
      type: Number,
      default: 2,
    },
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
    // 是否显示全省地区
    showAllPrince: {
      type: Boolean,
      default: false,
    },
    // 是否显示全部地区
    showAllArea: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "请选择地区",
    },
    cityCode: {
      type: String,
      default: "",
    },
    describe: {
      type: String,
      default: "",
    },
    okText: {
      type: String,
      default: "确认",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    // 是否返回GPS的定位信息，否则默认返回左上角自主选择的城市信息
    GPSFlag: {
      type: Boolean,
      default: false,
    },
    feeFlag: {
      type: String,
      default: "0",
    },
    // 自定义城市title
    cityTitleCustom: {
      type: String,
      default: "定位/历史缴费",
    },
    // 历史城市列表 1-生活缴费历史城市(接口)，2-最近访问城市(缓存)
    cityListModel: {
      type: String,
      default: "1",
    },
  },
  data() {
    return {
      pickerData: [],
      isPickerShow: false,
      defaultIndex: [0, 0],
      GPSInfo: {
        city: "南昌市",
        cityName: "南昌市",
        cityCode: "360100",
      },
    };
  },
  watch: {
    value(val) {
      this.isPickerShow = val;
    },
    isPickerShow(val) {
      if (!val) {
        this.$emit("input", val);
      }
    },
  },
  computed: {
    picker: function picker() {
      return this.$refs["picker"];
    },
  },
  methods: {
    refreshPicker() {
      this.$refs.picker.refresh();
    },
    $_onPickerHide() {
      this.$emit("hide");
    },
    $_onPickerShow() {
      this.$emit("show");
    },
    $_onPickerCancel() {
      this.isPickerShow = false;
      this.$emit("cancel");
    },
    $_onPickerConfirm() {
      this.$emit("confirm", false);
    },
  },
  mounted() {},
};
</script>
