export const DEFAULT_LAYOUT = () => import('@/layout/default-layout.vue')
export const ParentView = () => import('@/layout/parent-view/index.vue')

export const WHITE_LIST = [
  { name: 'notFound', children: [] },
  { name: 'login', children: [] }
]

export const NOT_FOUND = {
  name: 'notFound'
}
