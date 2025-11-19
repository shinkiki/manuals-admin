<script setup lang="ts">
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Document, Plus } from '@element-plus/icons-vue'
import { useNavigationStore } from './stores/navigationStore'

const navigationStore = useNavigationStore()
const router = useRouter()
const route = useRoute()

watch(
  () => route.name,
  (newName) => {
    if (typeof newName === 'string') {
      navigationStore.setActiveKey(newName)
    }
  },
  { immediate: true }
)

const handleMenuSelect = (routeName: string) => {
  router.push({ name: routeName })
}
</script>

<template>
  <el-container class="app-shell">
    <el-aside width="260px" class="sidebar">
      <div class="sidebar__brand">
        <span class="sidebar__title">Manuals Admin</span>
        <el-tag size="small" effect="plain" type="success">LIVE</el-tag>
      </div>
      <el-scrollbar class="sidebar__scroll">
        <el-menu
          :default-active="navigationStore.activeKey"
          class="sidebar__menu"
          :collapse-transition="false"
          @select="handleMenuSelect"
        >
          <el-menu-item
            v-for="item in navigationStore.menuItems"
            :key="item.key"
            :index="item.routeName"
          >
            <el-icon><component :is="item.icon" /></el-icon>
            <span>{{ item.label }}</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
      <div class="sidebar__meta">
        <el-alert
          title="주간 배포: 11월 15일 예정"
          description="배포 전 검수 항목을 다시 확인하세요."
          type="info"
          show-icon
          :closable="false"
        />
      </div>
    </el-aside>

    <el-container>
      <el-header class="header">
        <div class="header__title-group">
          <el-breadcrumb separator="/" class="header__breadcrumb">
            <el-breadcrumb-item>운영 도구</el-breadcrumb-item>
            <el-breadcrumb-item>{{ navigationStore.activeMenu?.label }}</el-breadcrumb-item>
          </el-breadcrumb>
          <h1>{{ navigationStore.activeMenu?.label }}</h1>
          <p>{{ navigationStore.activeMenu?.description }}</p>
        </div>
        <el-space direction="horizontal" alignment="center">
          <el-button
            v-if="navigationStore.activeMenu?.secondaryAction"
            :icon="Document"
            size="large"
            plain
          >
            {{ navigationStore.activeMenu?.secondaryAction }}
          </el-button>
          <el-button type="primary" :icon="Plus" size="large">
            {{ navigationStore.activeMenu?.primaryAction ?? '새로 만들기' }}
          </el-button>
        </el-space>
      </el-header>

      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  background: var(--el-bg-color, #f5f7fa);
}

.sidebar {
  --sidebar-text-color: #e5e7eb;
  background: linear-gradient(180deg, #1f2937 0%, #111827 100%);
  color: var(--sidebar-text-color);
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.25rem;
  gap: 1rem;
}

.sidebar__brand {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding-bottom: 0.5rem;
}

.sidebar__title {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.sidebar__scroll {
  flex: 1;
}

.sidebar__menu {
  border-right: none;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.92);
}

::v-deep(.sidebar__menu .el-menu-item) {
  height: 44px;
  border-radius: 8px;
  margin-bottom: 6px;
  color: rgba(255, 255, 255, 0.85);
  transition: all 0.2s ease;
}

::v-deep(.sidebar__menu .el-menu-item.is-active) {
  background-color: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  font-weight: 600;
}

::v-deep(.sidebar__menu .el-menu-item:hover) {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

::v-deep(.sidebar__menu .el-menu-item .el-icon) {
  color: rgba(255, 255, 255, 0.75);
}

::v-deep(.sidebar__menu .el-menu-item.is-active .el-icon) {
  color: #ffffff;
}

::v-deep(.sidebar__menu .el-menu-item:hover .el-icon) {
  color: #ffffff;
}

.sidebar__meta {
  background: rgba(15, 23, 42, 0.6);
  padding: 1rem;
  border-radius: 12px;
}

.header {
  background: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--el-border-color-light);
  height: auto;
  min-height: 120px;
}

.header__title-group h1 {
  margin: 0.5rem 0 0.25rem;
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
}

.header__title-group p {
  margin: 0;
  color: #4b5563;
}

.header__breadcrumb {
  margin-bottom: 0.25rem;
}

.main {
  background: #f5f7fa;
  padding: 2rem;
}

@media (max-width: 1024px) {
  .app-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    border-radius: 0 0 24px 24px;
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
