// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
        meta: { title: '首页' }
      },
      {
        path: '/example/table',
        name: 'Table',
        component: () => import('../views/example/table.vue'),
        meta: { title: '表格示例' }
      },
      {
        path: '/example/form',
        name: 'Form',
        component: () => import('../views/example/form.vue'),
        meta: { title: '表单示例' }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router