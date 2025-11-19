export interface ApiEntityDto {
  apiId: string
  methodType: string
  apiNm: string
  apiUrl: string
  apiDsctn?: string
}

export interface AuthorityDto {
  authrtId: string
  userGroupId: string
  trgtGroupType: 'MENU_GROUP' | 'API_GROUP'
  trgtGroupId: string
  rgtr?: string
  regDt?: string
}

export interface SystemEventDto {
  eventId: string
  eventKey: string
  name: string
  eventExpln?: string
  useYn?: 'Y' | 'N'
  dispatchType?: string
  registerType?: string
  runtimeListenerCount?: number
  dbListenerCount?: number
}

export interface FileCategoryDto {
  fileCategoryId: string
  categoryCode: string
  categoryName: string
  description?: string
  storageBasePath?: string
}

export interface ApiResponse<T> {
  code: number
  message: string
  data: T
}

export interface MenuDto {
  menuId: string
  menuNm: string
  url?: string
  parentMenuId?: string | null
  path?: string
  rteKey?: string
  sortSeq?: number
  useYn?: string
  icon?: string
  description?: string
  mdfcnDt?: string
}
