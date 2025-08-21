<template>
  <div class="activity_plan_input">
    <a-form-model :model="formModel" :rules="formRules" ref="formModel">
      <section class="form-section">
        <a-row :gutter="16">
          <a-col :span="8">
            <a-form-model-item label="分公司" prop="fgs">
              <a-select
                v-model="formModel.fgs"
                placeholder="请选择分公司"
                allowClear
                show-search
                :filter-option="filterOption"
                @change="handleFgsSelect"
              >
                <a-select-option
                  v-for="item in fgsList"
                  :key="item.value"
                  :value="item.value"
                >
                  {{ item.label }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item label="参与支局" prop="cyzj">
              <a-select
                v-model="formModel.cyzj"
                placeholder="请选择参与支局"
                allowClear
                show-search
                mode="multiple"
                :filter-option="filterOption"
                @change="handleCyzjSelect"
                :maxTagCount="2"
                :maxTagTextLength="6"
              >
                <a-select-option
                  v-for="item in cyzjList"
                  :key="item.value"
                  :value="item.value"
                >
                  {{ item.label }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item label="活动名称" prop="hdmc">
              <a-input
                size="large"
                autocomplete="off"
                placeholder="X年X月X日XX分公司XX小区/村XX活动"
                v-model="formModel.hdmc"
              />
            </a-form-model-item>
          </a-col>
        </a-row>
      </section>

      <section class="form-section">
        <a-row :gutter="16">
          <a-col :span="8">
            <a-form-model-item label="活动主题" prop="hdzt">
              <a-select
                v-model="formModel.hdzt"
                placeholder="请选择活动主题"
                allowClear
                show-search
                :filter-option="filterOption"
                @change="handleHdztSelect"
              >
                <a-select-option
                  v-for="item in hdztList"
                  :key="item.value"
                  :value="item.value"
                >
                  {{ item.label }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item label="开始时间">
              <a-date-picker
                style="width: 280px"
                v-model="formModel.actRetrievalTime"
                placeholder="请选择开始时间"
                format="YYYY-MM-DD"
                inputReadOnly
                :allowClear="false"
                :disabledDate="disabledStartDate"
                :defaultValue="defaultStartDate"
                :getCalendarContainer="getCalendarContainer"
                @change="handleStartDateChange"
              />
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item label="结束时间">
              <a-date-picker
                style="width: 280px"
                v-model="formModel.endRetrievalTime"
                placeholder="请选择结束时间"
                format="YYYY-MM-DD"
                inputReadOnly
                :allowClear="false"
                :disabledDate="disabledEndDate"
                :getCalendarContainer="getCalendarContainer"
              />
            </a-form-model-item>
          </a-col>
        </a-row>
      </section>

      <section class="form-section">
        <a-row :gutter="16">
          <a-col :span="8">
            <a-form-model-item label="区域类型" prop="qylx">
              <a-select
                v-model="formModel.qylx"
                placeholder="请选择区域类型"
                allowClear
                show-search
                :filter-option="filterOption"
                @change="handleAreaChange"
              >
                <a-select-option
                  v-for="item in areaList"
                  :key="item.value"
                  :value="item.value"
                >
                  {{ item.name }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>

          <a-col :span="8">
            <a-form-model-item label="活动地点" prop="hddd">
              <a-select
                v-model="formModel.hddd"
                mode="multiple"
                show-search
                :filter-option="false"
                @search="handleLocationSearch"
                @popupScroll="handleLocationScroll"
                :maxTagCount="2"
                :maxTagTextLength="6"
              >
                <a-select-option
                  v-for="(item, index) in displayedLocations"
                  :key="index"
                  :value="item"
                >
                  {{ item.address }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item label="活动形式" prop="hdxs">
              <a-select
                v-model="formModel.hdxs"
                placeholder="请选择活动形式"
                allowClear
                show-search
                :filter-option="filterOption"
              >
                <a-select-option
                  v-for="item in activityFormList"
                  :key="item.value"
                  :value="item.value"
                >
                  {{ item.label }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
        </a-row>
      </section>

      <section class="form-section">
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-model-item label="参与人员" prop="cyry">
              <a-upload
                :before-upload="beforeUpload"
                accept=".xlsx,.xls,.csv"
                :showUploadList="false"
                :file-list="fileList"
                :customRequest="handleImport"
                @change="handleUploadChange"
              >
                <a-button type="primary" :loading="importLoading">
                  <!-- 添加加载状态 -->
                  <a-icon type="upload" /> 点击上传参与人员模版表
                </a-button>
                <span class="file-status">
                  <span v-if="!fileList.length">未选择文件</span>
                  <span v-else class="file-selected">
                    <a-icon type="paper-clip" /> 已选择: {{ fileList[0].name }}
                    <a-icon
                      v-if="importSuccess"
                      type="check-circle"
                      style="color: #52c41a; margin-left: 5px"
                      title="导入成功"
                    />
                  </span>
                </span>
              </a-upload>
              <a-button
                type="default"
                @click="downloadTemplate"
                :loading="downloadLoading"
              >
                <a-icon type="download" /> 下载模板
              </a-button>
              <!-- 新增成功列表展示区域 -->
              <div
                v-if="importSuccess && importedStaffList.length > 0"
                class="success-list"
              >
                <div class="success-header">
                  <a-icon type="check-circle" style="color: #52c41a" />
                  <span>成功导入 {{ importedStaffList.length }} 条记录</span>
                  <a-button
                    type="link"
                    size="small"
                    @click="toggleShowDetails"
                    style="margin-left: 10px"
                  >
                    {{ showDetails ? "隐藏详情" : "查看详情" }}
                  </a-button>
                </div>

                <a-table
                  v-if="showDetails"
                  :columns="staffColumns"
                  :dataSource="importedStaffList"
                  size="small"
                  bordered
                  :pagination="{ pageSize: 5 }"
                  class="staff-table"
                />
              </div>
              <div v-if="importError" class="error-message">
                <a-icon type="close-circle" style="color: #f5222d" />
                {{ importError }}
                <a-button
                  v-if="hasErrorFile"
                  type="link"
                  size="small"
                  @click="downloadErrorFile"
                  style="margin-left: 8px"
                >
                  <a-icon type="download" /> 下载错误文件
                </a-button>
              </div>
            </a-form-model-item>
          </a-col>
        </a-row>
      </section>

      <section class="form-section">
        <a-row :gutter="16">
          <a-col :span="8">
            <a-form-model-item label="触客模版" prop="ckmb">
              <a-select
                v-model="formModel.ckmb"
                placeholder="请选择触客模版"
                allowClear
                show-search
                :filter-option="filterOption"
                @change="handleCkmbChange"
              >
                <a-select-option
                  v-for="item in touchTemplateList"
                  :key="item.url"
                  :value="item.value"
                >
                  {{ item.label }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item label="晒单模版" prop="sdmb">
              <a-select
                v-model="formModel.sdmb"
                placeholder="请选择晒单模版"
                allowClear
                show-search
                :filter-option="filterOption"
              >
                <a-select-option
                  v-for="item in shareTemplateList"
                  :key="item.value"
                  :value="item.value"
                >
                  {{ item.label }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
        </a-row>
      </section>

      <section class="form-section">
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-model-item label="备注" prop="remarkContent">
              <a-textarea
                v-model="formModel.remarkContent"
                placeholder="请输入备注内容"
                :auto-size="{ minRows: 4, maxRows: 8 }"
                :maxLength="1000"
                @change="handleContentChange"
              />
              <div
                class="character-counter"
                :class="{ 'limit-exceeded': isRemarkLimitExceeded }"
              >
                {{ formModel.remarkContent.length }}/1000
              </div>
            </a-form-model-item>
          </a-col>
        </a-row>
      </section>

      <section class="form-section">
        <a-row :gutter="16">
          <a-col :span="8">
            <a-form-model-item label="责任人" prop="responsiblePerson">
              <a-input
                size="large"
                autocomplete="off"
                placeholder="请输入责任人"
                v-model="formModel.responsiblePerson"
              />
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item label="电话号码" prop="phoneNumber">
              <a-input
                size="large"
                autocomplete="off"
                placeholder="请输入电话号码"
                v-model="formModel.phoneNumber"
              />
            </a-form-model-item>
          </a-col>
        </a-row>
      </section>

      <a-button
        type="primary"
        @click="handleSubmit"
        :loading="submitLoading"
        class="submit-btn"
      >
        提交活动计划
      </a-button>
    </a-form-model>
  </div>
</template>

<script>
import dayjs from "dayjs";
import {
  getCompanyInfo,
  queryAttrSpec,
  queryAttrSpecForm,
  queryAttrSpecTouch,
  queryAttrSpecShare,
  queryAddress,
  importInfo,
  updateActive,
} from "@/api/activity";

export default {
  name: "ActivityPlanInput",
  props: {
    editData: {
      type: Object,
      default: null,
    },
    parentStaffAccount: {
      type: String, // 类型校验
      required: true, // 必传校验
      default: "", // 默认值
    },
  },
  data() {
    return {
      formModel: {
        activityId: null,
        fgs: undefined,
        cyzj: [],
        hdmc: "",
        hdzt: undefined,
        actRetrievalTime: null,
        endRetrievalTime: null,
        qylx: undefined,
        hddd: [],
        hdxs: undefined,
        ckmb: undefined,
        sdmb: undefined,
        ckmbUrl: "",
        remarkContent: "",
        responsiblePerson: "",
        phoneNumber: "",
        currentErrorFile: null,
        locationList: [],
        staffImportList: [],
        branchList: [],
      },
      formRules: {
        fgs: [{ required: true, message: "请选择分公司", trigger: "change" }],
        cyzj: [
          { required: true, message: "请选择参与支局", trigger: "change" },
        ],
        hdmc: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        hdzt: [
          { required: true, message: "请选择活动主题", trigger: "change" },
        ],
        qylx: [
          { required: true, message: "请选择区域类型", trigger: "change" },
        ],
        hddd: [
          { required: true, message: "请选择活动地点", trigger: "change" },
        ],
        hdxs: [
          { required: true, message: "请选择活动形式", trigger: "change" },
        ],
        responsiblePerson: [
          { required: true, message: "请输入责任人", trigger: "blur" },
        ],
        sdmb: [{ required: true, message: "请输晒单模版", trigger: "blur" }],
        ckmb: [{ required: true, message: "请输入触客模版", trigger: "blur" }],
        phoneNumber: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: "请输入正确的手机号码",
            trigger: "blur",
          },
        ],
      },
      fileList: [],
      importLoading: false,
      importSuccess: false,
      downloadLoading: false,
      importError: null,
      submitLoading: false,
      hasErrorFile: false,
      importedStaffList: [], // 导入成功的员工列表
      showDetails: false, // 是否显示详情
      exporting: false, // 导出加载状态
      staffColumns: [
        // 成功列表表格列配置
        {
          title: "工号",
          dataIndex: "staffCode",
          key: "staffCode",
          width: 100,
        },
        {
          title: "姓名",
          dataIndex: "name",
          key: "name",
          width: 100,
        },
        {
          title: "电话",
          dataIndex: "phone",
          key: "phone",
          width: 100,
        },
        {
          title: "分组",
          dataIndex: "groupName",
          key: "groupName",
          width: 100,
        },
      ],

      companyTree: [],
      fgsList: [],
      cyzjList: [],
      activityFormList: [],
      hdztList: [],
      touchTemplateList: [],
      shareTemplateList: [],
      locationList: [],
      displayedLocations: [], // 显示的数据
      locationPageSize: 50,
      locationCurrentPage: 1,
      locationSearchText: "",
      areaList: [
        { value: 5000, name: "小区" },
        { value: 5001, name: "自然村" },
        { value: 5002, name: "非清单街区" },
        { value: 5003, name: "城中村" },
      ],
      // 默认今日作为开始时间
      defaultStartDate: "",
    };
  },
  mounted() {
    console.log("父组件传递的值:", this.parentStaffAccount);
  },
  watch: {
    editData: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.fillFormData(newVal);
        }
      },
    },
  },
  computed: {
    isRemarkLimitExceeded() {
      return this.formModel.remarkContent.length >= 1000;
    },
  },
  async created() {
    await this.initializeData();
  },
  methods: {
    async initializeData() {
      try {
        await Promise.all([
          this.loadCompanyInfo(),
          this.loadActivityThemes(),
          this.loadActivityForms(),
          this.loadShareTemplates(),
        ]);
      } catch (error) {
        console.error("Initialization error:", error);
        this.$message.error("初始化数据失败");
      }
    },

    async loadCompanyInfo() {
      const data = await getCompanyInfo();
      this.companyTree = data;
      this.fgsList = data.map((item) => ({
        value: item.companyId,
        label: item.companyName,
      }));
    },

    async loadActivityThemes() {
      const data = await queryAttrSpec();
      this.hdztList = data.attrValueList.map((item) => ({
        value: item.attrValue,
        label: item.attrValueName,
      }));
    },

    async loadActivityForms() {
      const data = await queryAttrSpecForm();
      this.activityFormList = data.attrValueList.map((item) => ({
        value: item.attrValue,
        label: item.attrValueName,
      }));
    },

    async loadTouchTemplates(params) {
      const data = await queryAttrSpecTouch(params);
      console.log(data);
      this.touchTemplateList = data.attrValueList.map((item) => ({
        value: item.attrValue,
        label: item.attrValueName,
        url: item.attrValueDesc,
      }));
    },

    async loadShareTemplates() {
      const data = await queryAttrSpecShare();
      this.shareTemplateList = data.attrValueList.map((item) => ({
        value: item.attrValue,
        label: item.attrValueName,
      }));
    },

    handleFgsSelect(value) {
      this.formModel.cyzj = undefined;
      this.cyzjList = [];

      if (!value) return;

      const selectedCompany = this.companyTree.find(
        (item) => item.companyId === value
      );
      if (selectedCompany?.children) {
        this.cyzjList = selectedCompany.children.map((item) => ({
          value: item.companyId,
          label: item.companyName,
        }));
      }
    },

    handleHdztSelect(value) {
      console.log("活动主题", value);
      const params = {
        attrJavaCode: "touchTemplate",
        attrId: value,
      };
      this.loadTouchTemplates(params);
    },

    handleCyzjSelect(value) {
      const selectedZJ = this.cyzjList.find((item) => item.value === value);
      if (selectedZJ) {
        console.log("当前选择的支局:", {
          id: value,
          name: selectedZJ.label,
        });
      }
    },

    async handleAreaChange(value) {
      if (!value) return;
      try {
        const response = await queryAddress({
          commonRegionId: this.formModel.fgs,
          areaType: value,
        });
        this.locationList = response;
        console.log(this.locationList);
        this.loadInitialLocations();
      } catch (error) {
        console.error("Failed to load locations:", error);
      }
    },

    handleCkmbChange(value) {
      console.log(this.touchTemplateList);
      this.formModel.ckmbUrl = this.touchTemplateList.filter(
        (item) => item.value === value
      )[0].url;
    },

    // 自定义上传处理
    async handleImport(options) {
      const { file } = options;
      this.importLoading = true;
      this.importSuccess = false;
      this.importError = null;
      this.hasErrorFile = false;
      this.importedStaffList = []; // 清空之前的列表

      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("activityId", this.formModel.activityId);

        const res = await importInfo(formData);

        if (res.code === "200") {
          this.importError = false;
          this.importSuccess = true;
          this.importedStaffList = res.object.staffExcelImportDTOList || [];
          this.$message.success(
            `参与人员导入成功，共 ${this.importedStaffList.length} 条记录`
          );
        } else {
          if (res.object?.errorFile) {
            this.currentErrorFile = res.object.errorFile;
            this.hasErrorFile = true;
            this.downloadErrorFileImpl(res.object.errorFile, file.name);
          }
          throw new Error(res.message || "导入失败");
        }
      } catch (error) {
        console.error("导入失败:", error);
        this.importError = error.message;
        this.$message.error(`导入失败: ${error.message}`);
      } finally {
        this.importLoading = false;
      }
    },

    // 新增方法：切换详情显示
    toggleShowDetails() {
      this.showDetails = !this.showDetails;
    },

    downloadTemplate() {
      const link = document.createElement("a");
      link.href = "/templates/participant-template.xlsx";
      link.download = "参与人员模板.xlsx"; // 设置下载文件名
      link.click();
    },

    // 分离出来的实际下载实现方法
    downloadErrorFileImpl(base64Data, originalFileName) {
      try {
        // 从base64字符串中提取MIME类型和数据部分
        const matches = base64Data.match(/^data:(.+);base64,(.+)$/);
        if (!matches || matches.length !== 3) {
          throw new Error("无效的文件数据格式");
        }

        const mimeType = matches[1];
        const data = matches[2];
        const binaryString = atob(data);
        const bytes = new Uint8Array(binaryString.length);

        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }

        // 创建Blob对象
        const blob = new Blob([bytes], { type: mimeType });

        // 生成下载链接
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;

        // 设置下载文件名
        const errorFileName = `错误_${originalFileName || "导入错误文件.xlsx"}`;
        link.download = errorFileName;

        // 触发下载
        document.body.appendChild(link);
        link.click();

        // 清理
        setTimeout(() => {
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }, 100);

        this.$message.warning("已下载错误文件，请查看具体错误内容");
      } catch (error) {
        console.error("下载错误文件失败:", error);
        this.$message.error("下载错误文件失败: " + error.message);
      }
    },

    // 供按钮调用的方法
    downloadErrorFile() {
      if (this.currentErrorFile && this.fileList.length > 0) {
        this.downloadErrorFileImpl(
          this.currentErrorFile,
          this.fileList[0].name
        );
      }
    },
    // 文件选择处理
    beforeUpload(file) {
      const isExcel =
        file.type.includes("excel") || file.type.includes("spreadsheet");
      const isCsv = file.type === "text/csv";
      const isLt10M = file.size / 1024 / 1024 < 10;

      if (!isExcel && !isCsv) {
        this.$message.error("只能上传 Excel 或 CSV 文件!");
        return false;
      }

      if (!isLt10M) {
        this.$message.error("文件大小不能超过10MB!");
        return false;
      }

      return true;
    },

    handleUploadChange(info) {
      if (info.file.status === "removed") {
        this.fileList = [];
        this.importSuccess = false;
      } else {
        this.fileList = [info.file];
      }
    },

    handleContentChange() {
      if (this.formModel.remarkContent.length > 1000) {
        this.formModel.remarkContent = this.formModel.remarkContent.substring(
          0,
          1000
        );
      }
    },

    // 禁用开始时间（只能选今天及之后）
    disabledStartDate(current) {
      return current && current < dayjs().startOf("day");
    },

    // 禁用结束时间（不能早于开始时间）
    disabledEndDate(current) {
      if (!this.formModel.actRetrievalTime) {
        // 如果开始时间未选，则不限制结束时间
        return false;
      }
      return (
        current &&
        current < dayjs(this.formModel.actRetrievalTime).startOf("day")
      );
    },

    // 开始时间变化时校验结束时间
    handleStartDateChange(date) {
      if (date && this.formModel.endRetrievalTime) {
        // 如果已有结束时间且早于新开始时间，则清空结束时间
        if (dayjs(this.formModel.endRetrievalTime) < dayjs(date)) {
          this.formModel.endRetrievalTime = null;
          this.$message.warning(
            "结束时间已重置，请重新选择不小于开始时间的日期"
          );
        }
      }
    },

    getCalendarContainer(triggerNode) {
      return triggerNode.parentNode;
    },

    async handleSubmit() {
      try {
        const valid = await this.$refs.formModel.validate();
        if (!valid) return;
        this.submitLoading = true;
        const payload = {
          commonRegionId: this.formModel.fgs,
          activityName: this.formModel.hdmc,
          activityTheme: this.formModel.hdzt,
          startDate: this.formModel.actRetrievalTime?.format("YYYY-MM-DD"),
          endDate: this.formModel.endRetrievalTime?.format("YYYY-MM-DD"),
          activityForm: this.formModel.hdxs,
          areaType: this.formModel.qylx,
          touchTemplate: this.formModel.ckmb,
          touchTemplateUrl: this.formModel.ckmbUrl,
          shareTemplate: this.formModel.sdmb,
          remarks: this.formModel.remarkContent,
          responsiblePerson: this.formModel.responsiblePerson,
          contactPhone: this.formModel.phoneNumber,
          creatorStaff: this.parentStaffAccount,
          // 确保branchList是对象数组
          branchList: (this.formModel.cyzj || []).map((item) => ({
            srcExchCode: item.value || item, // 兼容两种数据结构
            statusCd: "1000",
            id: null,
            activityId: null,
            createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss.SSS"),
            updatedAt: dayjs().format("YYYY-MM-DD HH:mm:ss.SSS"),
          })),

          // 确保locationList是对象数组
          locationList: (this.formModel.hddd || []).map((item) => ({
            locationName: item.address,
            address: item.address,
            longitude: item.longitude,
            latitude: item.latitude,
            statusCd: "1000",
            locationId: null,
            activityId: null,
            externalId: null,
            createdDate: dayjs().format("YYYY-MM-DD HH:mm:ss.SSS"),
            updatedAt: dayjs().format("YYYY-MM-DD HH:mm:ss.SSS"),
          })),

          // 参与人员列表
          staffImportList: (this.importedStaffList || []).map((staff) => ({
            staffCode: staff.staffCode,
            name: staff.name,
            phone: staff.phone,
            groupName: staff.groupName || "",
          })),
        };

        console.log("Submitting form data:", payload);

        // 调用更新活动接口
        const response = await updateActive(payload);

        // 根据接口返回处理结果
        if (response.code === "200" || response.success) {
          this.$message.success("活动计划提交成功");
          this.$refs.formModel.resetFields();
          this.fileList = [];
        } else {
          this.$message.error(response.message || "提交失败，请稍后重试");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        this.$message.error(
          error.response?.data?.message || "提交失败，请检查表单"
        );
      } finally {
        this.submitLoading = false;
      }
    },

    // Utility methods
    filterOption(input, option) {
      return option.componentOptions.children[0].text
        .toLowerCase()
        .includes(input.toLowerCase());
    },
    // 初始化加载
    loadInitialLocations() {
      this.displayedLocations = this.locationList.slice(
        0,
        this.locationPageSize
      );
    },

    // 滚动加载更多
    handleLocationScroll(e) {
      const { target } = e;
      if (target.scrollTop + target.clientHeight >= target.scrollHeight - 20) {
        this.loadMoreLocations();
      }
    },

    // 加载更多数据
    loadMoreLocations() {
      const start = this.locationCurrentPage * this.locationPageSize;
      const end = start + this.locationPageSize;
      const moreData = this.locationList.slice(start, end);

      if (moreData.length > 0) {
        this.displayedLocations = [...this.displayedLocations, ...moreData];
        this.locationCurrentPage++;
      }
    },

    // 搜索过滤
    handleLocationSearch(value) {
      this.locationSearchText = value;
      this.locationCurrentPage = 1;

      if (!value) {
        this.loadInitialLocations();
        return;
      }

      const filtered = this.locationList.filter((item) =>
        item.address.includes(value)
      );
      this.displayedLocations = filtered.slice(0, this.locationPageSize);
    },
    /**
     * 填充表单数据（核心方法）
     */
    async fillFormData(data) {
      // 1. 填充基础字段
      this.formModel = {
        ...this.formModel,
        activityId: data.activityId,
        fgs: data.commonRegionId,
        hdmc: data.activityName,
        hdzt: data.activityTheme,
        qylx: data.areaType,
        hdxs: data.activityForm,
        ckmb: data.touchTemplate,
        sdmb: data.shareTemplate,
        remarkContent: data.remarks || "",
        responsiblePerson: data.responsiblePerson || "",
        phoneNumber: data.contactPhone || "",
        actRetrievalTime: data.startDate ? dayjs(data.startDate) : null,
        endRetrievalTime: data.endDate ? dayjs(data.endDate) : null,
      };

      await Promise.all([
        this.loadCompanyInfo(),
        this.loadActivityThemes(), // 活动主题列表
        this.loadActivityForms(), // 活动形式列表
        this.loadTouchTemplates({
          // 触客模版列表
          attrJavaCode: "touchTemplate",
          attrId: data.activityTheme, // 根据活动主题筛选
        }),
        this.loadShareTemplates(), // 晒单模版列表
      ]);

      // 确保下拉选项包含当前值（编辑模式可能包含不在默认选项的值）
      this.ensureOptionExists("hdztList", data.activityTheme, "活动主题");
      this.ensureOptionExists(
        "activityFormList",
        data.activityForm,
        "活动形式"
      );
      this.ensureOptionExists(
        "touchTemplateList",
        data.touchTemplate,
        "触客模版"
      );
      this.ensureOptionExists(
        "shareTemplateList",
        data.shareTemplate,
        "晒单模版"
      );
      this.ensureOptionExists("areaList", data.areaType, "区域类型");

      // 2. 处理分公司-支局级联
      await this.handleCompanyData(data);

      // 3. 处理活动地点
      this.handleLocationData(data);

      // 4. 处理参与人员
      this.handleStaffData(data);

      // 5. 标记编辑模式
      this.isEditMode = true;
      this.currentActivityId = data.activityId;
    },

    /**
     * 处理分公司和支局数据
     */
    async handleCompanyData(data) {
      // 加载分公司列表（如果尚未加载）
      if (this.fgsList.length === 0) {
        await this.loadCompanyInfo();
      }

      // 设置当前选中的分公司对应的支局列表
      if (data.commonRegionId) {
        const selectedCompany = this.companyTree.find(
          (item) => item.companyId === data.commonRegionId
        );
        this.cyzjList =
          selectedCompany?.children?.map((item) => ({
            value: item.companyId,
            label: item.companyName,
          })) || [];
      }

      // 映射支局选中值
      this.formModel.cyzj =
        data.branchList?.map((branch) => branch.srcExchCode) || [];
    },

    /**
     * 处理活动地点数据
     */
    handleLocationData(data) {
      this.locationList = data.locationList || [];
      this.displayedLocations = this.locationList.slice(
        0,
        this.locationPageSize
      );

      // 映射地点选中值（需确保数据结构匹配）
      this.formModel.hddd =
        data.locationList?.map((loc) => ({
          address: loc.address,
          longitude: loc.longitude,
          latitude: loc.latitude,
        })) || [];
    },

    /**
     * 处理参与人员数据
     */
    handleStaffData(data) {
      this.importedStaffList =
        data.staffImportList?.map((staff) => ({
          staffCode: staff.staffCode,
          name: staff.name,
          phone: staff.phone,
          groupName: staff.groupName || "",
        })) || [];

      // 如果有导入文件，显示成功状态
      if (this.importedStaffList.length > 0) {
        this.importSuccess = true;
        this.fileList = [
          {
            name: "已导入人员数据.xlsx",
            status: "done",
          },
        ];
      }
    },

    handleCancel() {
      // 取消编辑时通知父组件
      this.$emit("reset-edit");
    },
    ensureOptionExists(listName, value, label) {
      if (value && !this[listName].some((item) => item.value === value)) {
        this[listName].push({
          value: value,
          label: `${label}`,
        });
      }
    },

    // 新增：加载区域类型列表
    // async loadAreaTypes() {
    //   this.areaList = [
    //     { value: 5000, name: "小区" },
    //     { value: 5001, name: "自然村" },
    //     { value: 5002, name: "非清单街区" },
    //     { value: 5003, name: "城中村" },
    //   ];
    // },
  },
};
</script>

<style scoped lang="less">
.activity_plan_input {
  max-width: 1200px;
  padding: 24px;

  .form-section {
    margin-bottom: 10px; /* 增加section之间的垂直间距 */
    padding: 10px; /* 增加内部padding */
    background: #fff; /* 添加白色背景 */
    border-radius: 8px; /* 添加圆角 */

    /* 移除原来的底部边框 */
    &:last-child {
      margin-bottom: 0;
    }
  }

  /* 调整表单行的间距 */
  .ant-row {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  /* 调整表单项目的间距 */
  .ant-form-item {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .file-status {
    margin-left: 10px;

    .file-selected {
      color: #1890ff;
      display: inline-flex;
      align-items: center;
    }
  }

  .error-message {
    color: #f5222d;
    margin-top: 8px;
    display: flex;
    align-items: center;

    i {
      margin-right: 5px;
    }

    .ant-btn-link {
      padding: 0;
      height: auto;
    }
  }

  .success-list {
    margin-top: 16px;
    padding: 12px;
    background-color: #f6ffed;
    border: 1px solid #b7eb8f;
    border-radius: 4px;

    .success-header {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      > span {
        margin-left: 8px;
        font-weight: 500;
      }
    }

    .staff-table {
      margin-top: 12px;

      /deep/ .ant-table-small .ant-table-thead > tr > th {
        background-color: #e6f7ff;
      }
    }
  }

  .ant-upload {
    display: flex;
    align-items: center;
  }

  .character-counter {
    text-align: right;
    color: #888;

    &.limit-exceeded {
      color: #f5222d;
    }
  }

  .submit-btn {
    width: 200px;
    height: 50px;
    font-size: 16px;
    display: block;
    margin: 40px auto 0; /* 增加提交按钮上方的间距 */
  }
}
</style>
