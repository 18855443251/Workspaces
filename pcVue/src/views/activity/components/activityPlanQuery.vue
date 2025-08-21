<template>
  <div class="activity_plan_query">
    <a-table
      :columns="columns"
      :dataSource="tableList"
      bordered
      :pagination="false"
      :loading="loading"
      rowKey="activityId"
    >
      <template slot="operation" slot-scope="text, record">
        <div class="operation">
          <a-button type="link" @click="edit(record)" size="small">
            编辑
          </a-button>
          <div class="line"></div>
          <a-button type="link" @click="deleteRow(record)" size="small" danger>
            删除
          </a-button>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script>
import { queryList, deleteActivity } from "@/api/activity";

export default {
  name: "activityPlanQuery",
  props: {
    parentStaffAccount: {
      type: String, // 类型校验
      required: true, // 必传校验
      default: "", // 默认值
    },
  },
  data() {
    return {
      loading: false,
      queryParam: {},
      creatorStaff: "",
      page: 1,
      pageSize: 10,
      tableList: [],
    };
  },
  computed: {
    columns() {
      return [
        {
          title: "活动名称",
          dataIndex: "activityName",
          key: "activityName",
          width: "100px",
          customRender: (text) => text || "--",
        },
        {
          title: "分公司",
          dataIndex: "filiale",
          key: "filiale",
          width: "100px",
          customRender: (text) => text || "--",
        },
        {
          title: "支局",
          dataIndex: "substation",
          key: "substation",
          width: "100px",
          customRender: (text) => text || "--",
        },
        {
          title: "活动主题",
          dataIndex: "activityTheme",
          key: "activityTheme",
          width: "100px",
          customRender: (text) => text || "--",
        },
        {
          title: "活动时间",
          dataIndex: "activityTime",
          key: "activityTime",
          width: "100px",
          customRender: (text) => text || "--",
        },
        {
          title: "责任人",
          dataIndex: "responsiblePerson",
          key: "responsiblePerson",
          width: "100px",
          customRender: (text) => text || "--",
        },
        {
          title: "状态",
          dataIndex: "status",
          key: "status",
          width: "100px",
          customRender: (text) => {
            const statusMap = {
              未生效: { color: "orange" },
              生效: { color: "green" },
              已失效: { color: "red" },
            };
            return (
              <span style={`color: ${statusMap[text]?.color || "#333"}`}>
                {text}
              </span>
            );
          },
        },
        {
          title: "操作",
          key: "operation",
          width: "150px",
          scopedSlots: { customRender: "operation" },
          // 根据状态控制是否显示操作按钮
          customRender: (text, record) => {
            if (record.status === "已失效") {
              return <span>不可操作</span>;
            }
            return (
              <div class="operation">
                <a-button
                  type="link"
                  onClick={() => this.edit(record)}
                  size="small"
                >
                  编辑
                </a-button>
                <div class="line"></div>
                <a-button
                  type="link"
                  onClick={() => this.deleteRow(record)}
                  size="small"
                  danger
                >
                  删除
                </a-button>
              </div>
            );
          },
        },
      ];
    },
  },
  mounted() {
    console.log("父组件传递的值:", this.parentStaffAccount);
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const params = {
          ...this.queryParam,
          page: this.page,
          pageSize: this.pageSize,
          creatorStaff: this.parentStaffAccount,
        };

        const response = await queryList(params);

        if (response?.list) {
          this.tableList = response.list || this.getMockData();
        } else {
          this.$message.error(response?.message || "获取数据失败");
          this.tableList = this.getMockData();
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        this.$message.error("请求数据时发生错误");
        this.tableList = this.getMockData();
      } finally {
        this.loading = false;
      }
    },

    getMockData() {
      return [{}];
    },

    edit(record) {
      console.log(record);
      this.$emit("edit-activity", record.activityId);
    },

    deleteRow(record) {
      this.$confirm({
        title: "确认删除",
        content: `确定要删除活动【${record.activityName}】吗？`,
        onOk: async () => {
          try {
            const params = {
              activeId: record.activityId,
            };
            await deleteActivity(params);
            this.$message.success("删除成功");
            this.fetchData();
          } catch (error) {
            this.$message.error("删除失败");
          }
        },
      });
    },
  },
};
</script>

<style scoped lang="less">
.activity_plan_query {
  padding: 16px;
  background: #fff;

  /deep/ .ant-table {
    .operation {
      display: flex;
      align-items: center;
      justify-content: center;

      .ant-btn-link {
        padding: 0 4px;
        height: auto;
      }

      .line {
        width: 1px;
        height: 14px;
        background-color: #d9d9d9;
        margin: 0 8px;
      }
    }

    .ant-table-row {
      .ant-table-cell {
        padding: 12px 8px;
      }
    }
  }
}
</style>
