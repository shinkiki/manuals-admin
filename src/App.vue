<script setup lang="ts">
import { computed, ref, type Component } from 'vue'
import {
  Menu,
  UserFilled,
  User,
  Lock,
  Connection,
  Calendar,
  FolderOpened,
  CollectionTag,
  Document,
  Plus
} from '@element-plus/icons-vue'

import MenuContentPanel from './components/MenuContentPanel.vue'
import type { AdminMenu } from './types/admin'

const menuItems: AdminMenu[] = [
  {
    key: 'menu-management',
    label: '메뉴 관리',
    description: '서비스 메뉴 구조와 노출 정책을 관리합니다.',
    icon: Menu as Component,
    primaryAction: '메뉴 생성',
    secondaryAction: '노출 순서 편집',
    highlights: [
      { label: '전체 메뉴', value: '128개' },
      { label: '노출 중', value: '96개', tag: '75%' },
      { label: '승인 대기', value: '4건', type: 'warning' }
    ],
    tasks: [
      {
        title: '신규 메뉴 등록',
        description: '신규 기능 출시 일정에 맞춰 메뉴를 추가하세요.',
        actionLabel: '메뉴 생성',
        type: 'primary',
        tag: '마감 D-2',
        tagType: 'danger'
      },
      {
        title: '메뉴 권한 동기화',
        description: '역할별 접근 권한을 최신 상태로 맞추세요.',
        actionLabel: '권한 매핑',
        type: 'success'
      },
      {
        title: '노출 정책 점검',
        description: '시간대별 노출 정책 및 배포 계획을 확인합니다.',
        actionLabel: '정책 확인'
      }
    ],
    guides: [
      {
        title: '메뉴 변경 체크리스트',
        items: [
          'QA 환경에서 변경 사항 검증 완료',
          '배포 공지 및 공지센터 업데이트',
          '접근 권한 영향도 리뷰'
        ]
      }
    ],
    footnote: '메뉴 구조 변경 시 QA 배포 일정과 릴리스 노트를 함께 업데이트하세요.'
  },
  {
    key: 'user-management',
    label: '사용자 관리',
    description: '사용자 계정과 활동 상태를 모니터링합니다.',
    icon: UserFilled as Component,
    primaryAction: '사용자 초대',
    secondaryAction: '휴면 계정 처리',
    highlights: [
      { label: '전체 사용자', value: '2,430명' },
      { label: '금일 신규', value: '35명', type: 'success', tag: '+4.8%' },
      { label: '휴면 예정', value: '18명', type: 'warning' }
    ],
    tasks: [
      {
        title: '신규 사용자 온보딩',
        description: '팀 초대 메일과 권한 세트를 분배합니다.',
        actionLabel: '초대 보내기',
        type: 'primary'
      },
      {
        title: '휴면 계정 일괄 처리',
        description: '90일 이상 미접속 계정을 정리하세요.',
        actionLabel: '휴면 전환',
        type: 'warning'
      },
      {
        title: '접속 이력 감사',
        description: '최근 7일간 이상 접속 패턴을 확인합니다.',
        actionLabel: '로그 분석'
      }
    ],
    guides: [
      {
        title: '휴면 정책 플로우',
        items: [
          '30일 전 알림 메일 발송',
          '관리자 승인 시 휴면 해제',
          '휴면 전환 후 데이터 마스킹 적용'
        ]
      }
    ]
  },
  {
    key: 'group-management',
    label: '그룹 관리',
    description: '업무 그룹을 구성하고 역할을 배정합니다.',
    icon: User as Component,
    primaryAction: '그룹 생성',
    secondaryAction: '조직도 가져오기',
    highlights: [
      { label: '활성 그룹', value: '62개' },
      { label: '최근 수정', value: '4건', type: 'info' },
      { label: '승인 필요', value: '2건', type: 'warning' }
    ],
    tasks: [
      {
        title: '신규 프로젝트 그룹',
        description: '프로젝트별 협업 멤버를 지정하세요.',
        actionLabel: '그룹 만들기',
        type: 'primary'
      },
      {
        title: '조직도 연동',
        description: 'HR 시스템 조직도를 주기적으로 동기화합니다.',
        actionLabel: '동기화 실행',
        type: 'success'
      },
      {
        title: '권한 템플릿 업데이트',
        description: '그룹별 템플릿을 최신 스펙으로 갱신합니다.',
        actionLabel: '템플릿 수정'
      }
    ],
    guides: [
      {
        title: '그룹 운영 모범 사례',
        items: [
          '업무 끝난 그룹은 30일 이내 아카이브',
          '그룹 권한 검토는 월 1회 필수',
          '프로젝트 종료 시 자료 백업 수행'
        ]
      }
    ]
  },
  {
    key: 'role-management',
    label: '권한 관리',
    description: '역할 기반 권한과 접근 정책을 유지합니다.',
    icon: Lock as Component,
    primaryAction: '권한 세트 생성',
    secondaryAction: '정책 비교 보고서',
    highlights: [
      { label: '권한 세트', value: '24개' },
      { label: '권한 요청', value: '7건', type: 'warning' },
      { label: '감사 이슈', value: '0건', type: 'success', tag: '양호' }
    ],
    tasks: [
      {
        title: '신규 권한 설계',
        description: 'API 권한 범위를 기준으로 역할을 설계하세요.',
        actionLabel: '세트 만들기',
        type: 'primary'
      },
      {
        title: '권한 요청 처리',
        description: '승인 대기 중인 요청을 검토 후 처리합니다.',
        actionLabel: '요청 승인',
        type: 'success'
      },
      {
        title: '감사 로그 다운로드',
        description: '월간 감사 로그를 내보내어 보관합니다.',
        actionLabel: '로그 내보내기'
      }
    ],
    footnote: '권한 세트 변경 시 사전 검토 프로세스를 준수해주세요.'
  },
  {
    key: 'api-management',
    label: 'API 관리',
    description: '내부 API 키와 스로틀 정책을 관리합니다.',
    icon: Connection as Component,
    primaryAction: 'API 키 발급',
    secondaryAction: '사용량 모니터링',
    highlights: [
      { label: '발급된 키', value: '148개' },
      { label: '금일 호출', value: '1.2M', type: 'success', tag: '+3.1%' },
      { label: '오류율', value: '0.32%', type: 'danger', tag: '주의' }
    ],
    tasks: [
      {
        title: '신규 키 발급',
        description: '파트너 시스템에 제공할 키를 발급합니다.',
        actionLabel: 'API 키 생성',
        type: 'primary'

      },
      {
        title: '사용량 임계치 조정',
        description: '일 100만 호출 이상 고객의 스로틀 정책을 조정합니다.',
        actionLabel: '정책 수정',
        type: 'warning'
      },
      {
        title: '오류 로그 확인',
        description: '5xx 응답이 급증한 엔드포인트를 확인합니다.',
        actionLabel: '로그 보기'
      }
    ],
    guides: [
      {
        title: 'API 운영 수칙',
        items: [
          '키 발급 시 만료일을 반드시 지정',
          '파트너별 호출 한도 분리 관리',
          '오류율 1% 이상 시 장애 방송 공유'
        ]
      }
    ],
    footnote: 'API 스펙 변경 시 개발자 포털 공지를 선행하세요.'
  },
  {
    key: 'event-management',
    label: '이벤트 관리',
    description: '이벤트 스케줄과 운영 현황을 추적합니다.',
    icon: Calendar as Component,
    primaryAction: '이벤트 생성',
    secondaryAction: '캘린더 다운로드',
    highlights: [
      { label: '진행 중', value: '5건', type: 'success' },
      { label: '대기', value: '3건', type: 'info' },
      { label: '종료 예정', value: '2건', type: 'warning' }
    ],
    tasks: [
      {
        title: '새로운 이벤트 기획',
        description: '마케팅 요청에 따라 세부 정책을 입력합니다.',
        actionLabel: '이벤트 작성',
        type: 'primary'
      },
      {
        title: '성과 지표 업데이트',
        description: '주요 KPI를 정리해 경영진 리포트를 만듭니다.',
        actionLabel: '성과 등록',
        type: 'success'
      },
      {
        title: '예산 현황 확인',
        description: '예산 대비 실집행 내역을 검토합니다.',
        actionLabel: '예산표 보기'
      }
    ],
    guides: [
      {
        title: '이벤트 운영 체크',
        items: [
          '사전 QA 체크리스트 완료',
          'CS 대응 매뉴얼 공유',
          '종료 후 리포트 48시간 이내 작성'
        ]
      }
    ]
  },
  {
    key: 'file-management',
    label: '파일 관리',
    description: '콘텐츠 파일과 버전 히스토리를 관리합니다.',
    icon: FolderOpened as Component,
    primaryAction: '파일 업로드',
    secondaryAction: '보존 정책 설정',
    highlights: [
      { label: '저장 용량', value: '68%', type: 'warning', tag: '임계 80%' },
      { label: '금일 업로드', value: '142건', type: 'success' },
      { label: '만료 예정', value: '12건', type: 'danger' }
    ],
    tasks: [
      {
        title: '새 자산 업로드',
        description: '배포 예정 콘텐츠 파일을 업로드합니다.',
        actionLabel: '파일 등록',
        type: 'primary'
      },
      {
        title: '만료 파일 정리',
        description: '만료 예정 파일을 묶음으로 아카이브하세요.',
        actionLabel: '일괄 아카이브',
        type: 'warning'
      },
      {
        title: '버전 비교',
        description: '최신 버전과 히스토리를 비교 확인합니다.',
        actionLabel: '버전 보기'
      }
    ],
    guides: [
      {
        title: '파일 보존 정책',
        items: [
          '프로덕션 파일은 3년 보존',
          '대용량 파일은 CDN 캐시 적용',
          '민감 정보 포함 파일 암호화 업로드'
        ]
      }
    ]
  },
  {
    key: 'code-management',
    label: '공통코드 관리',
    description: '시스템 전반에 사용되는 공통 코드를 정의합니다.',
    icon: CollectionTag as Component,
    primaryAction: '코드 추가',
    secondaryAction: '변경 이력 열람',
    highlights: [
      { label: '코드 그룹', value: '48개' },
      { label: '수정 대기', value: '6건', type: 'warning' },
      { label: '동기화 누락', value: '0건', type: 'success', tag: '정상' }
    ],
    tasks: [
      {
        title: '신규 코드 등록',
        description: '서비스 정책 변경에 따른 코드를 추가합니다.',
        actionLabel: '코드 생성',
        type: 'primary'
      },
      {
        title: '시스템 동기화',
        description: 'API / DB / 캐시 서버에 공통코드를 반영합니다.',
        actionLabel: '동기화 실행',
        type: 'success'
      },
      {
        title: '검증 및 배포',
        description: '코드 변경에 대한 QA 후 배포합니다.',
        actionLabel: '배포 요청'
      }
    ],
    guides: [
      {
        title: '코드 변경 프로세스',
        items: [
          '요청서에 영향도 분석 필수 첨부',
          'QA 완료 후 운영 승인 획득',
          '배포 후 모니터링 24시간 진행'
        ]
      }
    ]
  }
]

const firstMenu = menuItems[0]

if (!firstMenu) {
  throw new Error('백오피스 메뉴 구성이 비어 있습니다.')
}

const activeKey = ref<AdminMenu['key']>(firstMenu.key)
const activeMenu = computed<AdminMenu>(() => {
  const found = menuItems.find((item) => item.key === activeKey.value)
  return found ?? firstMenu
})

const handleMenuSelect = (key: string) => {
  activeKey.value = key
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
          :default-active="activeKey"
          class="sidebar__menu"
          :collapse-transition="false"
          @select="handleMenuSelect"
        >
          <el-menu-item v-for="item in menuItems" :key="item.key" :index="item.key">
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
            <el-breadcrumb-item>{{ activeMenu.label }}</el-breadcrumb-item>
          </el-breadcrumb>
          <h1>{{ activeMenu.label }}</h1>
          <p>{{ activeMenu.description }}</p>
        </div>
        <el-space direction="horizontal" alignment="flex-end">
          <el-button
            v-if="activeMenu.secondaryAction"
            :icon="Document"
            size="large"
            plain
          >
            {{ activeMenu.secondaryAction }}
          </el-button>
          <el-button type="primary" :icon="Plus" size="large">
            {{ activeMenu.primaryAction ?? '새로 만들기' }}
          </el-button>
        </el-space>
      </el-header>

      <el-main class="main">
        <MenuContentPanel :menu="activeMenu" />
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

.sidebar :deep(.el-menu-item) {
  height: 44px;
  border-radius: 8px;
  margin-bottom: 6px;
  color: rgba(255, 255, 255, 0.85);
  transition: all 0.2s ease;
}

.sidebar :deep(.el-menu-item.is-active) {
  background-color: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  font-weight: 600;
}

.sidebar :deep(.el-menu-item:hover) {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.sidebar :deep(.el-menu-item .el-icon) {
  color: rgba(255, 255, 255, 0.75);
}

.sidebar :deep(.el-menu-item.is-active .el-icon) {
  color: #ffffff;
}

.sidebar :deep(.el-menu-item:hover .el-icon) {
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
