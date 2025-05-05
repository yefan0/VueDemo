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
      },
      {
        path: '/user/list',
        name: 'UserList',
        component: () => import('../views/user/UserList.vue'),
        meta: { title: '用户列表' }
      },
      {
        path: '/user/role',
        name: 'RoleManage',
        component: () => import('../views/user/RoleManage.vue'),
        meta: { title: '角色管理' }
      },
      {
        path: '/user/permission',
        name: 'PermissionManage',
        component: () => import('../views/user/PermissionManage.vue'),
        meta: { title: '权限管理' }
      },
      {
        path: '/goods/list',
        name: 'GoodsList',
        component: () => import('../views/goods/GoodsList.vue'),
        meta: { title: '商品列表' }
      },
      {
        path: '/goods/category',
        name: 'GoodsCategory',
        component: () => import('../views/goods/GoodsCategory.vue'),
        meta: { title: '商品分类' }
      },
      {
        path: '/goods/brand',
        name: 'BrandManage',
        component: () => import('../views/goods/BrandManage.vue'),
        meta: { title: '品牌管理' }
      },
      {
        path: '/order/list',
        name: 'OrderList',
        component: () => import('../views/order/OrderList.vue'),
        meta: { title: '订单列表' }
      },
      {
        path: '/order/after-sale',
        name: 'AfterSale',
        component: () => import('../views/order/AfterSale.vue'),
        meta: { title: '售后管理' }
      },
      {
        path: '/stat/overview',
        name: 'StatOverview',
        component: () => import('../views/stat/StatOverview.vue'),
        meta: { title: '数据概览' }
      },
      {
        path: '/stat/sale',
        name: 'StatSale',
        component: () => import('../views/stat/StatSale.vue'),
        meta: { title: '销售报表' }
      },
      {
        path: '/system/base',
        name: 'SystemBase',
        component: () => import('../views/system/SystemBase.vue'),
        meta: { title: '基础设置' }
      },
      {
        path: '/system/log',
        name: 'SystemLog',
        component: () => import('../views/system/SystemLog.vue'),
        meta: { title: '日志管理' }
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