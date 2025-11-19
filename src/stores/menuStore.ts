import { defineStore } from 'pinia'
import http from '../utils/http'
import type { ApiResponse, MenuDto } from '../types/api'
import type { AdminMenu } from '../types/admin'

interface MenuState {
  menus: MenuDto[]
  loading: boolean
  error: string | null
}

export const useMenuStore = defineStore('menus', {
  state: (): MenuState => ({
    menus: [],
    loading: false,
    error: null
  }),
  getters: {
    adminMenu(): AdminMenu {
      return {
        key: 'menu-management',
        routeName: 'menus',
        path: '/',
        label: '메뉴 관리',
        description: '실제 API 지표 기반 대시보드',
        icon: {} as any,
        highlights: [
          { label: '등록된 메뉴', value: `${this.menus.length}개` },
          { label: '최신 업데이트', value: this.menus[0]?.mdfcnDt ?? '-' }
        ],
        tasks: []
      }
    }
  },
  actions: {
    async fetchMenus() {
      this.loading = true
      try {
        const { data } = await http.get<ApiResponse<MenuDto[]>>('/v1.0/menu')
        this.menus = data.data
      } catch (error: any) {
        this.error = error?.message ?? '메뉴 목록을 가져오지 못했습니다.'
      } finally {
        this.loading = false
      }
    }
  }
})
