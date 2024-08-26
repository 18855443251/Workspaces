<!--
 * @Author: your name
 * @Date: 2021-08-12 15:06:34
 * @LastEditTime: 2022-08-04 10:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\VxMobile.vue
-->
<template>
  <div class="claneCache_view">
    <div>
      <div class="select-num">
        <p class="currentIndex_style">{{ currentIndex }}</p>
        <p>/{{ swiperArr.length }}</p>
      </div>
      <md-swiper
        ref="selectSwiper"
        :autoplay="0"
        :has-dots="false"
        :is-loop="false"
        :is-prevent="false"
        :dragable="false"
        :use-native-driver="false"
      >
        <md-swiper-item v-for="(item, index) in swiperArr" :key="index">
          <div class="content">
            <md-field :title="item.qTitle">
              <md-radio-list
                v-model="item.answer"
                :options="item.qArr"
                icon-position="right"
                @change="handleChange"
                icon-size="lg"
              />
            </md-field>
          </div>
        </md-swiper-item>
      </md-swiper>
    </div>
    <div class="prev-next-btn-wrap" :class="{ ju_con: currentIndex === 1 }">
      <div
        class="prev-btn"
        @click="handlePrevClick"
        v-show="currentIndex !== 1"
      >
        <div style="border: 1px solid #f55348; border-radius: 4px">上一题</div>
      </div>
      <div class="next-btn" @click="handleNextClick">
        <div v-show="currentIndex !== swiperArr.length">下一题</div>
        <div v-show="currentIndex === swiperArr.length">提交</div>
      </div>
    </div>
  </div>
</template>
<script>
import navBar from "@/components/navBar";
import { Swiper, SwiperItem, Field, RadioList } from "mand-mobile";
export default {
  name: "claneCache",
  components: {
    navBar,
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem,
    [Field.name]: Field,
    [RadioList.name]: RadioList,
  },
  data() {
    return {
      currentIndex: 1, // 当前游标指示器
      swiperHeight: 200,
      isGoNext: false, //是否可以去下一道题
      swiperArr: [
        // 选择项数组
        {
          qId: "1",
          qTitle: "您的年龄是？",
          answer: "",
          qArr: [
            { value: "1", text: "18-30岁" },
            { value: "2", text: "31-50岁" },
            { value: "3", text: "51-60岁" },
            { value: "4", text: "大于60岁" },
          ],
        },
        {
          qId: "2",
          qTitle: "您的家庭年收入为(折合人民币)？",
          answer: "",
          qArr: [
            { value: "1", text: "5万元以下" },
            { value: "2", text: "5-20万元" },
            { value: "3", text: "20-50万元" },
            { value: "4", text: "50-100万元" },
            { value: "5", text: "100万元以上" },
          ],
        },
        {
          qId: "3",
          qTitle:
            "在您的每年的家庭收入中，可用于金融投资(储蓄存款除外)的比例为？",
          answer: "",
          qArr: [
            { value: "1", text: "小于10％" },
            { value: "2", text: "10％至25％" },
            { value: "3", text: "25％至50％" },
            { value: "4", text: "大于50％" },
          ],
        },
        {
          qId: "4",
          qTitle: "以下哪项最能说明您的投资经验？",
          answer: "",
          qArr: [
            { value: "1", text: "除存款、国债外，我几乎不投资其他金融产品" },
            {
              value: "2",
              text: "大部分投资于存款、国债等，较少投资于股票、理财产品等风险产品",
            },
            {
              value: "3",
              text: "资产均衡地分布于存款、国债、银行理财产品、信托产品、股票、理财产品等",
            },
            {
              value: "4",
              text: "大部分投资于股票、理财产品、外汇等高风险产品，较少投资于存款、国债",
            },
          ],
        },
        {
          qId: "5",
          qTitle:
            "您有多少年投资股票、理财产品、外汇、金融衍生产品等风险投资产品的经验？",
          answer: "",
          qArr: [
            { value: "1", text: "没有" },
            { value: "2", text: "少于2年" },
            { value: "3", text: "2至5年" },
            { value: "4", text: "5至8年" },
            { value: "5", text: "8年以上" },
          ],
        },
        {
          qId: "6",
          qTitle: "以下那项描述最符合您的投资态度？",
          answer: "",
          qArr: [
            { value: "1", text: "厌恶风险，不希望本金损失，希望获得稳定回报" },
            {
              value: "2",
              text: "保守投资，不希望本金损失，愿意承担一定幅度的收益波动",
            },
            {
              value: "3",
              text: "寻求资金的较高收益和成长性，愿意为此承担有限本金损失",
            },
            { value: "4", text: "希望赚钱高回报，愿意为此承担较大本金损失" },
          ],
        },
        {
          qId: "7",
          qTitle: "以下情况，您会选择哪一种？",
          answer: "",
          qArr: [
            { value: "1", text: "有100％的机会赢取1000元现金" },
            { value: "2", text: "有50％的机会赢取5万元现金" },
            { value: "3", text: "有25％的机会赢取50万元现金" },
            { value: "4", text: "有10％的机会赢取100万元现金" },
          ],
        },
        {
          qId: "8",
          qTitle: "您计划的投资期是多久？",
          answer: "",
          qArr: [
            { value: "1", text: "1年以下" },
            { value: "2", text: "1-3年" },
            { value: "3", text: "3-5年" },
            { value: "4", text: "5年以上" },
          ],
        },
        {
          qId: "9",
          qTitle: "您的投资目的是？",
          answer: "",
          qArr: [
            { value: "1", text: "资产保值" },
            { value: "2", text: "资产稳健增长" },
            { value: "3", text: "资产迅速增长" },
          ],
        },
        {
          qId: "10",
          qTitle: "您的投资出现何种程度的波动时，您会呈现明显的焦虑？",
          answer: "",
          qArr: [
            { value: "1", text: "本金无损失，但收益未达到预期" },
            { value: "2", text: "出现轻微本金损失" },
            { value: "3", text: "本金10％以内的损失" },
            { value: "4", text: "本金20-50％的损失" },
            { value: "5", text: "本金50％以上的损失" },
          ],
        },
      ],
      answerData: [],
      formTpye: "",
    };
  },
  created() {},
  methods: {
    /**
     * 切换到上一个选项列表
     */
    handlePrevClick() {
      var fromIndex = this.$refs.selectSwiper.getIndex() + 1;
      if (fromIndex === 2) {
        return;
      }
      this.currentIndex = fromIndex - 1;
      this.$refs.selectSwiper.prev();
      this.isGoNext = true;
    },

    /**
     * 切换到下一个选项列表
     */
    handleNextClick() {
      let nextIndex = this.$refs.selectSwiper.getIndex() + 1;
      let nextQuestion = this.swiperArr[nextIndex];
      if (this.isGoNext) {
        var fromIndex = this.$refs.selectSwiper.getIndex() + 1;
        if (fromIndex === this.swiperArr.length && this.isGoNext) {
          return;
        }
        this.currentIndex = fromIndex + 1;
        this.$refs.selectSwiper.next();
        this.isGoNext = false;
      }
      if (nextQuestion.answer && nextQuestion.answer.length > 0) {
        this.isGoNext = true;
      }
    },

    /**
     * 监听选中事件
     * @param option	当前选中项的数据
     * @param index	当前选中项的索引
     */
    handleChange(option, index) {
      this.answerData = [];
      console.log(this.swiperArr);
      this.$nextTick(() => {
        this.swiperArr.forEach((item) => {
          if (Number(item.answer) > 0) {
            this.isGoNext = true;
          }
          this.answerData.push(item.answer);
        });
      });
    },
  },
};
</script>
<style scoped>
</style>