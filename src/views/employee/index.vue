<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      height="250"
    >
      <el-table-column
        prop="ename"
        fixed
        label="姓名"
        width="120"
      />
      <el-table-column
        prop="position"
        label="岗位"
        width="200"
      />
      <el-table-column
        prop="esex"
        label="员工性别"
        width="150"
      />
      <el-table-column
        prop="ephone"
        label="员工电话"
        width="150"
      />
      <el-table-column
        prop="createTime"
        label="创建时间"
        width="150"
      />
      <el-table-column
        prop="updateTime"
        label="更新时间"
        width="150"
      />
      <el-table-column
        prop="isDeleted"
        label="状态"
        width="150"
      />
    </el-table>
    <el-pagination
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { Employees } from '@/api/Employees'

export default {
  name: 'Employee',
  data() {
    return {
      tableData: [
        {
          'ename': null, // 员工姓名
          'position': null, // 岗位
          'esex': null, // 员工性别
          'ephone': null, // 员工电话
          'updateTime': null, // 更新时间
          'createTime': null, // 创建时间
          'isDeleted': null // 是否删除
        }
      ],
      currentPage: 1, // 当前要前往页数
      pageSize: 10, // 每页条数
      total: 10, // 总条数
      pageSizes: [10, 30, 50, 100]
    }
  },
  created() {
    Employees.list().then(res => {
      const data = res.data
      this.total = data.counts
      this.pageSize = data.pageSize
      this.currentPage = data.page
      this.tableData = data.items
      this.$message.success('获取员工列表成功')
    }).catch(err => {
      this.$message.error(err)
    })
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped>

</style>
