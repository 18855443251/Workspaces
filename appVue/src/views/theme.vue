<template>
  <div class="theme-switcher">
    <!-- 标题 -->
    <my-title title="换肤" :footer="false"> </my-title>
    <select v-model="selectedTheme" @change="changeTheme">
      <option v-for="theme in themes" :key="theme.name" :value="theme.name">
        {{ theme.label }}
      </option>
    </select>
  </div>
</template>

<script>
import themeManager from "@/utils/theme.js";

export default {
  name: "ThemeSwitcher",
  data() {
    return {
      selectedTheme: "default",
      themes: [],
    };
  },
  mounted() {
    this.themes = themeManager.getThemes();
    this.selectedTheme = localStorage.getItem("app-theme") || "default";
  },
  methods: {
    changeTheme(value) {
      console.log(this.selectedTheme, "间距");
      themeManager.setTheme(this.selectedTheme);
    },
  },
};
</script>

<style scoped>
.theme-switcher {
  padding: 10px;
}

.theme-switcher select {
  margin-top: 100px;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid var(--color-text-d);
  background-color: var(--color-background);
  color: var(--color-text);
}
</style>