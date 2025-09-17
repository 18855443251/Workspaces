<!-- Breadcrumb.vue -->
<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li 
        v-for="(item, index) in breadcrumbs" 
        :key="item.path"
        class="breadcrumb-item"
        :class="{ 'is-active': index === breadcrumbs.length - 1 }"
      >
        <router-link 
          v-if="index < breadcrumbs.length - 1" 
          :to="item.path"
          class="breadcrumb-link"
        >
          {{ item.label }}
        </router-link>
        <span v-else class="breadcrumb-current">{{ item.label }}</span>
        <span 
          v-if="index < breadcrumbs.length - 1" 
          class="breadcrumb-separator"
        >
          /
        </span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    routes: {
      type: Array,
      required: true
    }
  },
  computed: {
    breadcrumbs() {
      return this.routes.map((route, index) => ({
        label: route.label || route.name,
        path: route.path,
        isLast: index === this.routes.length - 1
      }));
    }
  }
};
</script>

<style scoped>
.breadcrumb {
  padding: 12px 0;
  font-size: 14px;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-link {
  color: #409eff;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-link:hover {
  color: #66b1ff;
  text-decoration: underline;
}

.breadcrumb-current {
  color: #606266;
  font-weight: 500;
}

.breadcrumb-separator {
  margin: 0 8px;
  color: #c0c4cc;
}
</style>