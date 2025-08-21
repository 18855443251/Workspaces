<template>
  <div class="activity">
    <div class="activity_content">
      <div class="title">活动计划填报</div>
      <a-tabs
        type="card"
        v-model="activeKey"
        @change="handleChange"
        :default-active-key="defaultActiveKey"
      >
        <a-tab-pane
          v-for="(items, indexs) in tabList"
          :key="indexs"
          :tab="items.name"
        >
          <activity-plan-input
            key="0"
            v-if="indexs === 0"
            :editData="editData"
            @reset-edit="handleResetEdit"
            :parent-staff-account="staffAccount"
          ></activity-plan-input>
          <activity-plan-query
            key="1"
            v-else-if="indexs === 1"
            @edit-activity="handleEditActivity"
            :parent-staff-account="staffAccount"
          ></activity-plan-query>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import { decrypt, getActiveDetail } from "@/api/activity";
import activityPlanInput from "./components/activityPlanInput.vue";
import activityPlanQuery from "./components/activityPlanQuery.vue";
export default {
  name: "activity",
  components: {
    activityPlanInput,
    activityPlanQuery,
  },
  data() {
    return {
      activeKey: 0, // 默认显示查询页
      defaultActiveKey: 0,
      editData: null,
      staffAccount: "",
      tabList: [
        { key: 0, name: "活动计划填写" },
        { key: 1, name: "活动计划查询" },
      ],
    };
  },

  async created() {
    await this.getCode();
  },
  methods: {
    // tab切换--存款
    handleChange(val) {
      this.activeKey = val;
    },
    // 处理编辑事件
    async handleEditActivity(record) {
      this.loading = true;
      const params = {
        activeId: record,
      };
      try {
        const detail = await getActiveDetail(params);
        console.log(detail);
        this.editData = detail; // 已经解析的普通对象
        this.activeKey = 0;
      } finally {
        this.loading = false;
      }
    },
    // 重置编辑数据
    handleResetEdit() {
      this.editData = null;
      this.activeKey = 1; // 切换回查询页
    },
    getCode() {
      try {
        const url = window.location.href;
        const queryStart = url.indexOf("?");

        if (queryStart === -1) {
          console.warn("URL中未找到参数");
          this.showLoginError("登录信息缺失，请重新登录");
          return;
        }

        const encrypParam = url.slice(queryStart + 1);
        if (!encrypParam) {
          this.showLoginError("授权参数无效");
          return;
        }

        decrypt({ code: encrypParam })
          .then((response) => {
            if (!response?.user?.staffAccount) {
              throw new Error("未获取到用户账号信息");
            }
            this.staffAccount = response.user.staffId;
            this.$emit("staff-account-update", this.staffId);
          })
          .catch((error) => {
            console.error("解密失败:", error);
            this.showLoginError("登录验证失败，请重新登录");
          });
      } catch (error) {
        console.error("解析URL出错:", error);
        this.showLoginError("系统错误，请稍后重试");
      }
    },
    showLoginError(message) {
      this.$message.error(message);
    },
  },
};
</script>

<style scoped lang="less">
.activity {
  background: #f5f5f5;
  height: 100%;
  padding: 20px;
  .activity_content {
    padding: 20px;
    background: #ffffff;
  }
  .title {
    color: #333333;
    text-align: center;
    font-size: 26px;
    font-weight: 700;
  }
}
</style>
