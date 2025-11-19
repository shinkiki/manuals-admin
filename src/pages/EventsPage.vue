<template>
  <div class="page-card">
    <el-card shadow="never">
      <template #header>
        <div class="card-header">
          <h2>이벤트 관리</h2>
          <el-button size="small" type="primary">새로고침</el-button>
        </div>
      </template>
      <el-empty description="API 연동 예정" />
    </el-card>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.page-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

