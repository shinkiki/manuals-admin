<template>
  <div class="menu-content">
    <section v-if="menu.highlights.length" class="content-section">
      <div class="section-header">
        <h2>운영 현황</h2>
        <span>핵심 지표를 한눈에 확인하세요.</span>
      </div>
      <el-row :gutter="16">
        <el-col
          v-for="highlight in menu.highlights"
          :key="highlight.label"
          :xs="24"
          :sm="12"
          :md="8"
          :lg="6"
        >
          <el-card class="highlight-card" shadow="hover">
            <span class="highlight-label">{{ highlight.label }}</span>
            <strong class="highlight-value">{{ highlight.value }}</strong>
            <el-tag
              v-if="highlight.tag"
              size="small"
              effect="plain"
              :type="highlight.type ?? 'info'"
            >
              {{ highlight.tag }}
            </el-tag>
          </el-card>
        </el-col>
      </el-row>
    </section>

    <section class="content-section">
      <div class="section-header">
        <h2>우선 처리 작업</h2>
        <span>주요 업무를 빠르게 처리하세요.</span>
      </div>
      <el-row :gutter="16" class="tasks-grid">
        <el-col
          v-for="task in menu.tasks"
          :key="task.title"
          :xs="24"
          :md="12"
        >
          <el-card class="task-card" shadow="never">
            <div class="task-header">
              <span class="task-title">{{ task.title }}</span>
              <el-tag
                v-if="task.tag"
                size="small"
                effect="plain"
                :type="task.tagType ?? 'info'"
              >
                {{ task.tag }}
              </el-tag>
            </div>
            <p class="task-description">{{ task.description }}</p>
            <el-button :type="task.type ?? 'primary'" size="small">
              {{ task.actionLabel }}
            </el-button>
          </el-card>
        </el-col>
      </el-row>
    </section>

    <section v-if="menu.guides?.length" class="content-section">
      <div class="section-header">
        <h2>운영 가이드</h2>
        <span>팀 내부 기준과 프로세스를 확인하세요.</span>
      </div>
      <el-collapse>
        <el-collapse-item
          v-for="guide in menu.guides"
          :key="guide.title"
          :title="guide.title"
          :name="guide.title"
        >
          <ul class="guide-list">
            <li v-for="item in guide.items" :key="item">
              <el-icon>
                <CircleCheckFilled />
              </el-icon>
              <span>{{ item }}</span>
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </section>

    <el-alert
      v-if="menu.footnote"
      :title="menu.footnote"
      type="info"
      :closable="false"
      show-icon
      class="footnote"
    />
  </div>
</template>

<script setup lang="ts">
import { CircleCheckFilled } from '@element-plus/icons-vue'
import type { AdminMenu } from '../types/admin'

defineProps<{
  menu: AdminMenu
}>()
</script>

<style scoped>
.menu-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.content-section {
  background: #fff;
  border-radius: 16px;
  padding: 1.75rem;
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.06);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-header h2 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
}

.section-header span {
  color: #64748b;
  font-size: 0.9rem;
}

.highlight-card {
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 140px;
}

.highlight-label {
  color: #6b7280;
  font-size: 0.95rem;
}

.highlight-value {
  font-size: 1.6rem;
  color: #111827;
  letter-spacing: -0.02em;
}

.tasks-grid {
  width: 100%;
}

.task-card {
  border-radius: 14px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.task-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.task-title {
  font-weight: 600;
  color: #1f2937;
}

.task-description {
  margin: 0;
  color: #4b5563;
  line-height: 1.5;
}

.guide-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.guide-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: #334155;
}

.footnote {
  border-radius: 14px;
}

@media (max-width: 768px) {
  .content-section {
    padding: 1.25rem;
  }

  .task-card {
    min-height: auto;
  }
}
</style>
