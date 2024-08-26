export default [
  {
    path: '/computed1',
    name: 'computed1',
    component: () => import('../views/computed/computed1.vue')
  },
  {
    path: '/computed2',
    name: 'computed2',
    component: () => import('../views/computed/computed2.vue')
  },
]