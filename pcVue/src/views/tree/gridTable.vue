<template>
  <a-modal
    title="选择关联网络"
    :visible="gridVisible"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    width="800px"
  >
    <div class="operation_log">
      <a-form layout="inline" class="search_form">
        <a-row :gutter="10">
          <a-col :span="10">
            <a-form-item label="关键字">
              <a-input
                v-model="gridUnitName"
                placeholder="请输入关键字"
                allowClear
                @keydown.enter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item>
              <a-button type="primary" @click="handleQuery"> 查询 </a-button>
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
        :scroll="{ y: 400 }"
        :rowSelection="rowSelection"
        :customRow="handleCustomRow"
        :rowKey="
          (record, index) => {
            return index;
          }
        "
      >
      </a-table>
      <my-page
        v-if="total > 0"
        :total="total"
        :current-page.sync="currentPage"
        @change="handleCurPageChange"
        :showSizeChanger="false"
      ></my-page>
    </div>
  </a-modal>
</template>

<script>
import dayjs from "dayjs";
import myPage from "@/components/myPage";
import { queryGridPageList } from "@/api/tree";
export default {
  name: "gridTable",
  components: { myPage },
  props: {
    nodeId: {
      typeof: String,
      default: "",
    },
    gridVisible: {
      typeof: Boolean,
      default: false,
    },
    gridObj: {
      typeof: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      ModalText: "Content of the modal",
      confirmLoading: false,
      gridUnitName: "", //关键字
      currentPage: 1,
      total: 0,
      tableList: [], //列表数据
      loading: false,
      selectedRowKeys: [], // 用于存储选中的行键
      selectedRow: {},
    };
  },
  computed: {
    rowSelection() {
      return {
        type: "radio",
        selectedRowKeys: this.selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
          this.selectedRowKeys = selectedRowKeys;
          this.selectedRow = selectedRows[0];
        },
      };
    },
    columns() {
      const columns = [
        // {
        //   title: "",
        //   dataIndex: "radio",
        //   key: "radio",
        //   width: 50,
        //   scopedSlots: { customRender: "radio" },
        // },
        {
          title: "网络单元标识",
          dataIndex: "gridUnitId",
          key: "gridUnitId",
          align: "center",
          width: "200px",
          customRender: (text) => {
            return text ? text : "--";
          },
        },
        {
          title: "网络单元编码",
          dataIndex: "gridUnitCode",
          key: "gridUnitCode",
          align: "center",
          width: "200px",
        },
        {
          title: "网络单元名称",
          dataIndex: "gridUnitName",
          key: "gridUnitName",
          align: "center",
          //   width: "300px",
        },
      ];
      return columns;
    },
  },
  created() {
    // 查询⽹格分⻚列表
    this.queryGridPageList();
    this.selectedRow = this.gridObj;
  },
  methods: {
    // 查询⽹格分⻚列表
    queryGridPageList() {
      this.loading = true;
      queryGridPageList({
        nodeId: this.nodeId,
        gridUnitName: this.gridUnitName,
        page: this.currentPage,
        pageSize: 10,
      }).then((res) => {
        this.loading = false;
        this.tableList = res.object && res.object.list;
        this.total = res.object && res.object.total;
      });
    },
    // 单选
    handleCustomRow(record) {
      return {
        on: {
          click: () => {
            this.selectedRowKeys = [record.gridUnitCode];
            this.selectedRow = record;
          },
        },
      };
    },
    // 点击分页
    handleCurPageChange() {
      this.queryGridPageList();
    },
    // 查询
    handleQuery() {
      this.currentPage = 1;
      this.total = 0;
      this.queryGridPageList();
    },
    // 保存
    handleOk(e) {
      this.$emit("handleOk", this.selectedRow);
    },
    handleCancel(e) {
      this.$emit("handleCancel");
    },
  },
};
</script>

<style lang="less" scoped>
.search_form {
  margin-bottom: 10px;
}
.ant-btn {
  margin-right: 20px;
}
.ant-table .ant-table-thead > tr > th,
.ant-table-tbody > tr > td {
  padding: 8px 16px;
}
</style>
