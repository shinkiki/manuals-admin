import type { Component } from 'vue'

export type MenuTone = 'primary' | 'success' | 'warning' | 'danger' | 'info'

export interface MenuHighlight {
  label: string
  value: string
  tag?: string
  type?: MenuTone
}

export interface MenuTask {
  title: string
  description: string
  actionLabel: string
  type?: MenuTone
  tag?: string
  tagType?: MenuTone
}

export interface MenuGuide {
  title: string
  items: string[]
}

export interface AdminMenu {
  key: string
  label: string
  description: string
  icon: Component
  primaryAction?: string
  secondaryAction?: string
  highlights: MenuHighlight[]
  tasks: MenuTask[]
  guides?: MenuGuide[]
  footnote?: string
}
