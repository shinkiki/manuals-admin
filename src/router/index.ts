import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const DashboardPage = () => import('../pages/DashboardPage.vue')
const UsersPage = () => import('../pages/UsersPage.vue')
const GroupsPage = () => import('../pages/GroupsPage.vue')
const AuthorityPage = () => import('../pages/AuthorityPage.vue')
const ApisPage = () => import('../pages/ApisPage.vue')
const EventsPage = () => import('../pages/EventsPage.vue')
const FilesPage = () => import('../pages/FilesPage.vue')
const CodesPage = () => import('../pages/CodesPage.vue')

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'menus', component: DashboardPage },
  { path: '/users', name: 'users', component: UsersPage },
  { path: '/groups', name: 'groups', component: GroupsPage },
  { path: '/authority', name: 'authority', component: AuthorityPage },
  { path: '/apis', name: 'apis', component: ApisPage },
  { path: '/events', name: 'events', component: EventsPage },
  { path: '/files', name: 'files', component: FilesPage },
  { path: '/codes', name: 'codes', component: CodesPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
