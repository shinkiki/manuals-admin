import { defineStore } from 'pinia'
import {
  Menu,
  UserFilled,
  User,
  Lock,
  Connection,
  Calendar,
  FolderOpened,
  CollectionTag
} from '@element-plus/icons-vue'
import type { AdminMenu } from '../types/admin'

interface NavigationState {
  menuItems: AdminMenu[]
  activeKey: string
}

const navMenus: AdminMenu[] = [
  {
    key: 'menu-management',
    routeName: 'menus',
    path: '/',
    label: '메뉴 관리',
    description: '서비스 메뉴 구조와 노출 정책을 관리합니다.',
    icon: Menu,
    primaryAction: '메뉴 생성',
    secondaryAction: '노출 순서 편집'
  },
  {
    key: 'user-management',
    routeName: 'users',
    path: '/users',
    label: '사용자 관리',
    description: '사용자 계정과 활동 상태를 모니터링합니다.',
    icon: UserFilled,
    primaryAction: '사용자 초대',
    secondaryAction: '휴면 계정 처리'
  },
  {
    key: 'group-management',
    routeName: 'groups',
    path: '/groups',
    label: '그룹 관리',
    description: '업무 그룹을 구성하고 역할을 배정합니다.',
    icon: User,
    primaryAction: '그룹 생성',
    secondaryAction: '조직도 가져오기'
  },
  {
    key: 'role-management',
    routeName: 'authority',
    path: '/authority',
    label: '권한 관리',
    description: '역할 기반 권한과 접근 정책을 유지합니다.',
    icon: Lock,
    primaryAction: '권한 세트 생성',
    secondaryAction: '정책 비교 보고서'
  },
  {
    key: 'api-management',
    routeName: 'apis',
    path: '/apis',
    label: 'API 관리',
    description: '내부 API 키와 스로틀 정책을 관리합니다.',
    icon: Connection,
    primaryAction: 'API 키 발급',
    secondaryAction: '사용량 모니터링'
  },
  {
    key: 'event-management',
    routeName: 'events',
    path: '/events',
    label: '이벤트 관리',
    description: '이벤트 스케줄과 운영 현황을 추적합니다.',
    icon: Calendar,
    primaryAction: '이벤트 생성',
    secondaryAction: '캘린더 다운로드'
  },
  {
    key: 'file-management',
    routeName: 'files',
    path: '/files',
    label: '파일 관리',
    description: '콘텐츠 파일과 버전 히스토리를 관리합니다.',
    icon: FolderOpened,
    primaryAction: '파일 업로드',
    secondaryAction: '보존 정책 설정'
  },
  {
    key: 'code-management',
    routeName: 'codes',
    path: '/codes',
    label: '공통코드 관리',
    description: '시스템 전반에 사용되는 공통 코드를 정의합니다.',
    icon: CollectionTag,
    primaryAction: '코드 추가',
    secondaryAction: '변경 이력 열람'
  }
]

export const useNavigationStore = defineStore('navigation', {
  state: (): NavigationState => ({
    menuItems: navMenus,
    activeKey: navMenus[0]?.routeName ?? ''
  }),
  getters: {
    activeMenu(state): AdminMenu | undefined {
      return state.menuItems.find((menu) => menu.routeName === state.activeKey)
    }
  },
  actions: {
    setActiveKey(routeName: string) {
      this.activeKey = routeName
    }
  }
})

