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
import { ArrowDown, HomeFilled, Document } from '@element-plus/icons-vue'
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
</style>
