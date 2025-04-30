<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>访问量</span>
            </div>
          </template>
          <div class="card-content">
            1,234
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>用户数</span>
            </div>
          </template>
          <div class="card-content">
            567
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
}
.card-content {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
</style>
