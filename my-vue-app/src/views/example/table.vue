<template>
  <div class="page-container">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>表格示例</span>
          <el-button type="primary" @click="handleAdd">添加</el-button>
        </div>
      </template>
      
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="address" label="地址" />
        <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  {
    date: '2024-03-15',
    name: '张三',
    address: '北京市朝阳区xxx街道',
  },
  {
    date: '2024-03-14',
    name: '李四',
    address: '上海市浦东新区xxx路',
  },
  {
    date: '2024-03-13',
    name: '王五',
    address: '广州市天河区xxx号',
  },
])

const handleAdd = () => {
  ElMessage.success('点击了添加按钮')
}

const handleEdit = (row) => {
  ElMessage.success(`编辑行：${row.name}`)
}

const handleDelete = (row) => {
  ElMessage.success(`删除行：${row.name}`)
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
