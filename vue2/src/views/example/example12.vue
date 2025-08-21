<template>
  <div class="checkbox-demo">
    <h2>复选框示例</h2>

    <!-- 基础复选框 -->
    <div class="form-group">
      <label class="checkbox-label">
        <input type="checkbox" v-model="isChecked" class="checkbox-input" />
        <span class="checkbox-text"
          >启用功能 (当前状态: {{ isChecked ? "开启" : "关闭" }})</span
        >
      </label>
    </div>

    <!-- 多个复选框 -->
    <div class="form-group">
      <h3>兴趣爱好</h3>
      <div v-for="(hobby, index) in hobbies" :key="index" class="checkbox-item">
        <label class="checkbox-label">
          <input
            type="checkbox"
            :value="hobby.value"
            v-model="selectedHobbies"
            class="checkbox-input"
          />
          <span class="checkbox-text">{{ hobby.label }}</span>
        </label>
      </div>
      <p class="selected-info">
        已选择: {{ selectedHobbies.join(", ") || "无" }}
      </p>
    </div>

    <!-- 控制按钮 -->
    <div class="button-group">
      <button @click="toggleAll" class="btn">
        {{ selectedHobbies.length === hobbies.length ? "取消全选" : "全选" }}
      </button>
      <button @click="clearAll" class="btn btn-secondary">清空选择</button>
      <button @click="isChecked = !isChecked" class="btn btn-secondary">
        切换功能状态
      </button>
    </div>

    <!-- 调试信息 -->
    <div class="debug-info" v-if="showDebug">
      <h4>调试信息</h4>
      <pre>{{ debugInfo }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckboxDemo",
  data() {
    return {
      isChecked: true,
      selectedHobbies: [],
      hobbies: [
        { label: "阅读", value: "reading" },
        { label: "运动", value: "sports" },
        { label: "音乐", value: "music" },
        { label: "旅行", value: "travel" },
        { label: "电影", value: "movie" },
      ],
      showDebug: false, // 开发时可设为true查看调试信息
    };
  },
  computed: {
    debugInfo() {
      return JSON.stringify(
        {
          isChecked: this.isChecked,
          selectedHobbies: this.selectedHobbies,
          hobbiesCount: this.selectedHobbies.length,
        },
        null,
        2
      );
    },
  },
  watch: {
    isChecked(newVal) {
      console.log("功能状态变化:", newVal);
    },
    selectedHobbies: {
      handler(newVal) {
        console.log("选中爱好变化:", newVal);
      },
      deep: true,
    },
  },
  methods: {
    toggleAll() {
      if (this.selectedHobbies.length === this.hobbies.length) {
        this.selectedHobbies = [];
      } else {
        this.selectedHobbies = this.hobbies.map((hobby) => hobby.value);
      }
    },
    clearAll() {
      this.selectedHobbies = [];
    },
  },
};
</script>

<style scoped>
.checkbox-demo {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.form-group {
  margin-bottom: 24px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: #fafafa;
}

.form-group h3 {
  margin-top: 0;
  color: #333;
}

.checkbox-item {
  margin: 8px 0;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.checkbox-input {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  cursor: pointer;
  accent-color: #007bff;
}

.checkbox-text {
  font-size: 16px;
  color: #333;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 20px 0;
}

.btn {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.btn:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #545b62;
}

.selected-info {
  margin-top: 12px;
  padding: 8px;
  background-color: #e9ecef;
  border-radius: 4px;
  font-size: 14px;
}

.debug-info {
  margin-top: 20px;
  padding: 16px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
}

.debug-info h4 {
  margin-top: 0;
  color: #495057;
}

.debug-info pre {
  background-color: #fff;
  padding: 12px;
  border-radius: 4px;
  overflow: auto;
  font-size: 12px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .checkbox-demo {
    padding: 15px;
  }

  .button-group {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
input[type="checkbox"] {
  -webkit-appearance: checkbox;
  -moz-appearance: checkbox;
  appearance: checkbox;
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
</style>