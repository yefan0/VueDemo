<template>
  <div class="home">
    <!-- 数据总览卡片 -->
    <el-row :gutter="20" class="overview-row">
      <el-col :span="6" v-for="item in overviewList" :key="item.title">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <el-icon :size="22"><component :is="item.icon" /></el-icon>
              <span style="margin-left: 8px">{{ item.title }}</span>
            </div>
          </template>
          <div class="card-content">{{ item.value }}</div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 数据趋势图表和快捷操作 -->
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="16">
        <el-card shadow="hover" style="height: 340px">
          <template #header>
            <div class="card-header">
              <span>访问趋势</span>
            </div>
          </template>
          <div ref="chartRef" style="width: 100%; height: 280px"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" style="height: 340px">
          <template #header>
            <div class="card-header">
              <span>快捷操作</span>
            </div>
          </template>
          <div class="quick-actions">
            <el-button type="primary" icon="Plus" plain>创建用户</el-button>
            <el-button type="success" icon="Document" plain>生成报表</el-button>
            <el-button type="warning" icon="Edit" plain>发布公告</el-button>
            <el-button type="info" icon="Setting" plain>系统设置</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 公告栏和操作日志 -->
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="12">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>公告栏</span>
            </div>
          </template>
          <el-timeline>
            <el-timeline-item v-for="(notice, idx) in notices" :key="idx" :timestamp="notice.date" :color="notice.color">
              {{ notice.content }}
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>操作日志</span>
            </div>
          </template>
          <el-timeline>
            <el-timeline-item v-for="(log, idx) in logs" :key="idx" :timestamp="log.time">
              {{ log.content }}
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { User, View, ShoppingCart, Money, Plus, Document, Edit, Setting } from '@element-plus/icons-vue'

const overviewList = [
  { title: '用户数', value: 10234, icon: User },
  { title: '访问量', value: 23456, icon: View },
  { title: '订单数', value: 1234, icon: ShoppingCart },
  { title: '销售额', value: '¥ 123,456', icon: Money },
]

const notices = [
  { date: '2024-06-01', content: '系统升级维护通知', color: '#409EFF' },
  { date: '2024-05-28', content: '新增数据报表功能', color: '#67C23A' },
  { date: '2024-05-20', content: '优化了登录体验', color: '#E6A23C' },
]

const logs = [
  { time: '09:30', content: '管理员登录系统' },
  { time: '09:35', content: '导出用户数据报表' },
  { time: '10:00', content: '发布公告：系统升级' },
  { time: '10:15', content: '修改用户信息' },
]

const chartRef = ref(null)

onMounted(() => {
  const chart = echarts.init(chartRef.value)
  chart.setOption({
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: { type: 'value' },
    series: [
      {
        name: '访问量',
        type: 'line',
        data: [1200, 2000, 1500, 800, 1700, 2300, 2100],
        smooth: true,
        areaStyle: {},
        lineStyle: { width: 3 },
        symbol: 'circle',
        symbolSize: 10,
      },
    ],
    grid: { left: 40, right: 20, top: 40, bottom: 30 },
  })
})
</script>

<style scoped>
.home {
  padding: 20px;
  background: #f5f6fa;
}
.card-header {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
}
.card-content {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
}
.overview-row {
  margin-bottom: 10px;
}
.quick-actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
}
</style>
