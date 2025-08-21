<template>
  <div class="community_view">
    <div class="header">智慧沙盘视图</div>
    <div class="content">
      <div class="card" v-for="(item, index) in cardList" :key="index">
        <div class="card_header">
          <img src="@/assets/images/no_data.png" alt="no_data" />
          <span class="title">
            {{ item.title }}
          </span>
        </div>
        <div class="card_middle">
          <div class="num" :style="{ color: chageColor(item.status) }">
            {{ item.count }}
          </div>
          <div class="desc">
            {{ item.name }}
          </div>
        </div>
        <div class="card_footer">
          <div
            class="card_footer_box"
            v-for="(subItem, subIndex) in item.dataList"
            :key="subIndex"
          >
            <div class="num">
              {{ subItem.count }}
            </div>
            <div class="desc">
              {{ subItem.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import myPage from "@/components/myPage";
import {
  queryLogInfoList,
  queryBranchList,
  queryOperationTypeList,
} from "@/api/operationLog";
export default {
  name: "communityView",
  components: { myPage },
  data() {
    return {
      cardList: [
        {
          title: "活动计划填写",
          name: "小区总数",
          count: 110,
          status: "1",
          dataList: [
            {
              count: "555",
              desc: "住户数总数",
            },
            {
              count: "555",
              desc: "住户数总数",
            },
            {
              count: "555",
              desc: "住户数总数",
            },
            {
              count: "555",
              desc: "住户数总数",
            },
          ],
        },
        {
          title: "活动计划填写",
          name: "小区总数",
          count: 110,
          status: "2",
          dataList: [
            {
              count: "555",
              desc: "住户数总数",
            },
          ],
        },
        {
          title: "活动计划填写",
          name: "小区总数",
          count: 110,
          status: "3",
          dataList: [
            {
              count: "555",
              desc: "住户数总数",
            },
          ],
        },
        {
          title: "活动计划填写",
          name: "小区总数",
          count: 110,
          status: "4",
          dataList: [
            {
              count: "555",
              desc: "住户数总数",
            },
            {
              count: "555",
              desc: "住户数总数",
            },
            {
              count: "555",
              desc: "住户数总数",
            },
          ],
        },
      ],
    };
  },
  created() {},
  methods: {
    chageColor(val) {
      if (val == "1") {
        return "#409EFF";
      } else if (val == "2") {
        return "#67C23A";
      } else if (val == "3") {
        return "#E6A23C";
      } else {
        return "#333333";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.community_view {
  .header {
    background: #409eff;
    font-size: 25px;
    font-weight: 600;
    padding: 15px;
    text-align: center;
    color: #ffffff;
  }
  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 32px;

    .card {
      flex: 0 1 32%;
      margin-bottom: 30px;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      .card_header {
        display: flex;
        align-items: center;
        padding: 15px 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        img {
          width: 40px;
          height: 40px;
          border-radius: 8px;
        }
        .title {
          font-size: 16px;
          font-weight: 600;
          color: #303133;
        }
      }
      .card_middle {
        text-align: center;
        padding: 15px;
        .num {
          font-size: 36px;
          font-weight: 700;
          line-height: 1.2;
          // color: #409eff;
        }
        .desc {
          font-size: 14px;
          color: #909399;
          margin-top: 5px;
        }
      }
      .card_footer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 15px;
        padding: 15px 0;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        .card_footer_box {
          text-align: center;
          padding: 5px;
          flex: 0 1 48%;
          margin-bottom: 10px;
          .num {
            font-size: 18px;
            font-weight: 600;
            line-height: 1.2;
            color: #606266;
          }
          .desc {
            font-size: 11px;
            color: #909399;
            margin-top: 3px;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
