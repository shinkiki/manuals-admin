<template>
  <div class="page-card">
    <el-card shadow="hover" class="panel-card">
      <template #header>
        <div class="card-header">
          <h2>메뉴 현황</h2>
          <el-button size="small" @click="menuStore.fetchMenus">새로고침</el-button>
        </div>
      </template>
      <el-skeleton v-if="menuStore.loading" rows="3" animated />
      <el-empty v-else-if="menuStore.error" :description="menuStore.error" />
      <el-table v-else :data="menuStore.menus" stripe>
        <el-table-column prop="menuNm" label="메뉴명" />
        <el-table-column prop="path" label="Path" />
        <el-table-column prop="useYn" label="사용" width="80" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMenuStore } from '../stores/menuStore'

const menuStore = useMenuStore()

onMounted(() => {
  menuStore.fetchMenus()
})
</script>

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

.panel-card {
  border-radius: 16px;
}
</style>

