<template>
  <el-container class="layout-container">
    <!-- 头部 -->
    <el-header height="60px">
      <div class="header-left">
        <h2>Vue3 Admin</h2>
      </div>
      <div class="header-right">
        <el-dropdown>
          <span class="el-dropdown-link">
            管理员
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <!-- <el-button class="theme-toggle-btn" :icon="isDark ? Sunny : Moon" circle @click="toggleTheme" style="margin-left: 16px;" /> -->
      </div>
    </el-header>

    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-menu
          default-active="1"
          class="el-menu-vertical"
          :router="true"
        >
          <el-menu-item index="/">
            <el-icon><home-filled /></el-icon>
            <span>首页</span>
          </el-menu-item>

          <el-sub-menu index="user">
            <template #title>
              <el-icon><User /></el-icon>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/user/list">用户列表</el-menu-item>
            <el-menu-item index="/user/role">角色管理</el-menu-item>
            <el-menu-item index="/user/permission">权限管理</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="goods">
            <template #title>
              <el-icon><ShoppingCart /></el-icon>
              <span>商品管理</span>
            </template>
            <el-menu-item index="/goods/list">商品列表</el-menu-item>
            <el-menu-item index="/goods/category">商品分类</el-menu-item>
            <el-menu-item index="/goods/brand">品牌管理</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="order">
            <template #title>
              <el-icon><Document /></el-icon>
              <span>订单管理</span>
            </template>
            <el-menu-item index="/order/list">订单列表</el-menu-item>
            <el-menu-item index="/order/after-sale">售后管理</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="stat">
            <template #title>
              <el-icon><View /></el-icon>
              <span>数据统计</span>
            </template>
            <el-menu-item index="/stat/overview">数据概览</el-menu-item>
            <el-menu-item index="/stat/sale">销售报表</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="system">
            <template #title>
              <el-icon><Setting /></el-icon>
              <span>系统设置</span>
            </template>
            <el-menu-item index="/system/base">基础设置</el-menu-item>
            <el-menu-item index="/system/log">日志管理</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <el-icon><document /></el-icon>
              <span>示例页面</span>
            </template>
            <el-menu-item index="/example/table">表格页面</el-menu-item>
            <el-menu-item index="/example/form">表单页面</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <!-- 主要内容区 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ArrowDown, HomeFilled, Document, Moon, Sunny, User, ShoppingCart, View, Setting } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark-theme')
  } else {
    document.documentElement.classList.remove('dark-theme')
  }
}
</script>

<style scoped>
.layout-container {
  height: 100vh;
}

.el-header {
  background-color: #fff;
  border-bottom: 1px solid #dcdfe6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.el-aside {
  background-color: #304156;
}

.el-menu {
  border-right: none;
}

.el-menu-vertical {
  height: calc(100vh - 60px);
}

.header-right {
  color: #333;
}

.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.theme-toggle-btn {
  vertical-align: middle;
}
</style>

<style>
.dark-theme {
  --el-bg-color: #181818;
  --el-text-color-primary: #e0e0e0;
  --el-header-bg-color: #23272e;
  --el-aside-bg-color: #23272e;
  --el-card-bg-color: #23272e;
  background: #181818 !important;
  color: #e0e0e0 !important;
}
.dark-theme body {
  background: #181818 !important;
  color: #e0e0e0 !important;
}
.dark-theme .el-header {
  background-color: var(--el-header-bg-color) !important;
  color: var(--el-text-color-primary) !important;
}
.dark-theme .el-aside {
  background-color: var(--el-aside-bg-color) !important;
}
.dark-theme .el-card {
  background-color: var(--el-card-bg-color) !important;
  color: var(--el-text-color-primary) !important;
}
</style>
