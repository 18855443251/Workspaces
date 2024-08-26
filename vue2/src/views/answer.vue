<template>
  <div>
    <div>
      <div v-for="(item, key) in questionList" :key="key">
        <div :key="key" v-if="key == showQuestionMark">
          <div class="question-title">{{ item.Question }}、{{ item.Subject }}</div>
          <div
            class="question-select brd-botm"
            v-for="(optionItem, index) in item.answerList"
            :key="index"
          >
            <span
              :class="[optionItem.checked == true ? 'color-blue' : '']"
            >{{ optionItem.RiskOption }}. {{ optionItem.Subject }}</span>
            <div class="flex2" @click="checkQuestion(optionItem, key, item)">
              <img v-if="optionItem.checked" src="@/assets/img/agree.png" />
              <img v-if="!optionItem.checked" src="@/assets/img/notAgree.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="question-bottom">
        <div class="question-bottom-left">
          <span v-if="showQuestionMark != 0" @click="goLastQuestion()">上一题</span>
        </div>
        <div class="question-bottom-center">{{ showQuestionMark + 1 }}/{{ questionList.length }}</div>
        <div class="question-bottom-left" @click="answerNext(showQuestionMark)">
          <span v-if="showQuestionMark != questionList.length - 1">下一题</span>
        </div>
      </div>
    </div>
    <div class="btn-div">
      <button class="btn mgl40" v-if="showQuestionMark == questionList.length - 1">提交</button>
    </div>
  </div>
</template>

<script>
import questionList from "@/json/ProfolioRiskPaperQry.js";

export default {
  name: "home",
  data() {
    return {
      questionList: [],
      answerLastList: [],

      showQuestionMark: 0, //第几题
    };
  },
  created() {
    this.changeQuestionList();
  },
  methods: {
    changeQuestionList() {
      if (questionList.length > 0) {
        for (let i = 0; i < questionList.length; i++) {
          if (questionList[i].RiskOption == "0") {
            this.questionList.push(questionList[i]);
          }
        }
        //  console.log(JSON.stringify(this.questionList))
        //组装问题答案
        for (let i = 0; i < this.questionList.length; i++) {
          let answerList = [];
          for (let j = 0; j < questionList.length; j++) {
            if (
              this.questionList[i].Question == questionList[j].Question &&
              questionList[j].RiskOption != "0"
            ) {
              questionList[j].checked = false;
              answerList.push(questionList[j]);
            }
          }
          this.$set(this.questionList[i], "answerList", answerList);
        }
        console.log(JSON.stringify(this.questionList));
      }
    },
    // 点击上一题，回到上一题
    goLastQuestion() {
      this.showQuestionMark--;
    },
    //处理到最后一题时的按钮点击逻辑
    answerNext(key) {
      //点击下一题时，判断该题有没有选择，若有则记录该题答案，没有则提示用户选择答案
      let answerList = this.answerLastList;
      let questionOptions = this.questionList[key].answerList; //当前选择问题列表
      questionOptions.forEach((item, index) => {
        if (item.checked == true) {
          answerList[key] = item.RiskOption;
        }
      });
      //判断问题有没有选中答案，若选中则进行下一题，若未选中，则弹框提示需选中
      if (!answerList[key]) {
        this.Alert("请选择该题答案");
        return;
      }
      if (this.showQuestionMark == this.questionList.length - 1) {
        return;
      }
      this.showQuestionMark = key + 1;
    },
    //处理每道题选中时的逻辑
    checkQuestion(optionItem, index, optionsList) {
      optionItem.checked = true;
      optionsList.answerList.forEach((item, index) => {
        if (item != optionItem) {
          item.checked = false;
        }
      });
      this.$set(this.questionList, index, optionsList);
      this.answerNext(this.showQuestionMark);
    },
  },
};
</script>

<style scoped>
.question-title {
  color: #cfa762;
}
.question-bottom {
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ececec;
}
.color-blue {
  color: #5488fb;
}
.flex2 {
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.question-bottom-left span {
  font-size: 28px;
  color: #cfa762;
}

.question-bottom-center {
  font-size: 22px;
  color: #999999;
}
</style>
