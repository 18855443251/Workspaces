<template>
  <div class="operation_log">
    <a-form :form="form" layout="inline" class="search_form">
      <a-row :gutter="10">
        <a-col :span="5">
          <a-form-item label="用户名称">
            <a-input
              v-model="form.partyName"
              placeholder="请输入用户名称"
              allowClear
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="时间范围">
            <a-date-picker
              v-model="form.startDate"
              placeholder="开始时间"
              format="YYYY-MM-DD"
              inputReadOnly
              :disabledDate="disabledStart"
              :allowClear="false"
              :getCalendarContainer="
                (triggerNode) => {
                  return triggerNode.parentNode;
                }
              "
              style="width: 120px"
            ></a-date-picker>
            <span style="margin-left: 10px; margin-right: 10px">至</span>
            <a-date-picker
              v-model="form.endDate"
              placeholder="结束时间"
              format="YYYY-MM-DD"
              inputReadOnly
              :disabledDate="disabledEnd"
              :allowClear="false"
              :getCalendarContainer="
                (triggerNode) => {
                  return triggerNode.parentNode;
                }
              "
              style="width: 120px"
            ></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="海南市县">
            <a-select
              v-model="form.branchId"
              placeholder="请选择海南市县"
              allowClear
              show-search
              :filter-option="filterOption"
              style="width: 200px"
            >
              <a-select-option
                v-for="item in branchList"
                :key="item.branchId"
                :value="item.branchId"
                >{{ item.branchName }}</a-select-option
              >
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="5">
          <a-form-item label="模块名称">
            <a-input
              v-model="form.moduleType"
              placeholder="请输入模块名称"
              allowClear
            />
          </a-form-item>
        </a-col>
        <a-col :span="5">
          <a-form-item label="操作类型">
            <a-select
              v-model="form.operationType"
              placeholder="请选择操作类型"
              allowClear
              show-search
              :filter-option="filterOption"
              style="width: 200px"
            >
              <a-select-option
                v-for="item in operationTypeList"
                :key="item.operationType"
                :value="item.operationType"
                >{{ item.operationTypeName }}</a-select-option
              >
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="4">
          <a-form-item>
            <a-button type="primary" @click="handleQuery"> 查询 </a-button>
            <a-button @click="handleReset"> 重置 </a-button>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-table
      :columns="columns"
      :dataSource="tableList"
      bordered
      :pagination="false"
      :loading="loading"
    >
      <template slot="operationType" slot-scope="text, record">
        <span>详情</span>
      </template>
    </a-table>
    <my-page
      v-if="total > 0"
      :total="total"
      :current-page.sync="currentPage"
      @change="handleCurPageChange"
      :showSizeChanger="false"
    ></my-page>
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
  name: "operationLog",
  components: { myPage },
  data() {
    return {
      form: {
        partyName: "", //用户名称
        // partyId: "", //用户ID
        startDate: "", //开始
        endDate: "", //结束时间
        moduleType: "", //模块名称
        branchId: undefined, //海南市县
        operationType: undefined, //操作类型
      },
      tableList: [
        {
          operationTime: "2025-05-05 05:05:05",
          partyName: "张是",
          branchId: "55555",
          stPostName: "事实上",
          moduleType: "台阶单独",
          subModule: "顶顶顶",
        },
        {
          operationTime: "2025-05-05 05:05:05",
          partyName: "张是",
          branchId: "55555",
          stPostName: "事实上",
          moduleType: "台阶单独",
          subModule: "顶顶顶",
        },
        {
          operationTime: "2025-05-05 05:05:05",
          partyName: "张是",
          branchId: "55555",
          stPostName: "事实上",
          moduleType: "台阶单独",
          subModule: "顶顶顶",
        },
        {
          operationTime: "2025-05-05 05:05:05",
          partyName: "张是",
          branchId: "55555",
          stPostName: "事实上",
          moduleType: "台阶单独",
          subModule: "顶顶顶",
        },
        {
          operationTime: "2025-05-05 05:05:05",
          partyName: "张是",
          branchId: "55555",
          stPostName: "事实上",
          moduleType: "台阶单独",
          subModule: "顶顶顶",
        },
        {
          operationTime: "2025-05-05 05:05:05",
          partyName: "张是",
          branchId: "55555",
          stPostName: "事实上",
          moduleType: "台阶单独",
          subModule: "顶顶顶",
        },
        {
          operationTime: "2025-05-05 05:05:05",
          partyName: "张是",
          branchId: "55555",
          stPostName: "事实上",
          moduleType: "台阶单独",
          subModule: "顶顶顶",
        },
        {
          operationTime: "2025-05-05 05:05:05",
          partyName: "张是",
          branchId: "55555",
          stPostName: "事实上",
          moduleType: "台阶单独",
          subModule: "顶顶顶",
        },
      ], //表格数据
      currentPage: 1,
      total: 0,
      operationTypeList: [], //操作类型
      branchList: [], //市县列表
      loading: false,
    };
  },
  computed: {
    columns() {
      const columns = [
        {
          title: "时间",
          dataIndex: "operationTime",
          key: "operationTime",
          align: "center",
          customRender: (text) => {
            return text ? text : "--";
          },
        },
        {
          title: "用户名称(ID)",
          dataIndex: "partyName",
          key: "partyName",
          align: "center",
        },
        {
          title: "海南市县",
          dataIndex: "branchId",
          key: "branchId",
          align: "center",
          customRender: (text) => {
            if (text) {
              if (this.branchList.length > 0) {
                let obj =
                  this.branchList.find((item) => item.branchId === text) || {};
                if (obj.branchName) {
                  return obj.branchName;
                } else {
                  return "--";
                }
              } else {
                return "--";
              }
            } else {
              return "--";
            }
          },
        },
        {
          title: "岗位",
          dataIndex: "stPostName",
          key: "stPostName",
          align: "center",
          customRender: (text) => {
            return text ? text : "--";
          },
        },
        {
          title: "模块",
          dataIndex: "moduleType",
          key: "moduleType",
          align: "center",
          customRender: (text) => {
            return text ? text : "--";
          },
        },
        {
          title: "指标",
          dataIndex: "subModule",
          key: "subModule",
          align: "center",
          customRender: (text) => {
            return text ? text : "--";
          },
        },
        {
          title: "操作类型",
          dataIndex: "operationType",
          key: "operationType",
          align: "center",
          scopedSlots: { customRender: "operationType" },
        },
      ];
      return columns;
    },
  },
  created() {
    // // 查询列表
    // this.queryLogInfoList();
    // // 市县列表查询
    // this.queryBranchList();
    // // 操作类型列表查询
    // this.queryOperationTypeList();
  },
  methods: {
    // 查询列表
    queryLogInfoList() {
      this.loading = true;
      let params = {
        // partyId: this.form.partyId,
        partyName: this.form.partyName,
        branchId: this.form.branchId,
        moduleType: this.form.moduleType,
        operationType: this.form.operationType,
        pageSize: 10,
        page: this.currentPage,
      };
      if (this.form.startDate) {
        params.oprTimeFrom = dayjs(this.form.startDate).format("YYYYMMDD");
      }
      if (this.form.endDate) {
        params.oprTimeTo = dayjs(this.form.endDate).format("YYYYMMDD");
      }
      queryLogInfoList(params).then((res) => {
        this.loading = false;
        this.tableList = res.list;
        this.total = res.total;
      });
    },
    // 市县列表查询
    queryBranchList() {
      queryBranchList({}).then((res) => {
        this.branchList = res;
      });
    },
    // 操作类型列表查询
    queryOperationTypeList() {
      queryOperationTypeList({}).then((res) => {
        this.operationTypeList = [
          { operationType: "", operationTypeName: "全部" },
          ...res,
        ];
      });
    },
    // 下拉框搜索过滤
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    // 开始时间
    disabledStart(current) {
      return current > dayjs().endOf("day");
    },
    // 结束时间
    disabledEnd(current) {
      return (
        current < dayjs(this.form.startDate) || current > dayjs().endOf("day")
      );
    },
    handleCurPageChange() {
      this.queryLogInfoList();
    },
    // 查询
    handleQuery() {
      this.currentPage = 1;
      this.total = 0;
      this.queryLogInfoList();
    },
    // 重置
    handleReset() {
      this.form = {
        partyName: "", //用户名称
        // partyId: "", //用户ID
        startDate: "", //开始
        endDate: "", //结束时间
        moduleType: "", //模块名称
        branchId: undefined, //海南市县
        operationType: undefined, //操作类型
      };
      this.total = 0;
      this.currentPage = 1;
      this.queryLogInfoList();
    },
  },
};
</script>

<style lang="less" scoped>
.operation_log {
  padding: 20px;
}
.search_form {
  margin-bottom: 20px;
}
.ant-btn {
  margin-right: 20px;
}
</style>
