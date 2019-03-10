<template>
  <div>
    <status-bar></status-bar>
    <div class="tofu-split"></div>
    <div class="charts-wrap">
      <el-row justify="space-between" type="flex" style="flex-wrap: wrap;" :gutter="20">
        <el-col :span="12">
          <planned-speed class="chart-item tofu-border tofu-shadow tofu-border-radius--8"></planned-speed>
        </el-col>
        <el-col :span="12">
          <chart-1 class="chart-item tofu-border tofu-shadow tofu-border-radius--8"></chart-1>
        </el-col>
        <el-col :span="12">
          <chart-2 class="chart-item tofu-border tofu-shadow tofu-border-radius--8"></chart-2>
        </el-col>
        <el-col :span="12">
          <chart-3 class="chart-item tofu-border tofu-shadow tofu-border-radius--8"></chart-3>
        </el-col>
        <el-col :span="12">
          <chart-4 class="chart-item tofu-border tofu-shadow tofu-border-radius--8"></chart-4>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import statusBar from './common/status-bar'

export default {
  components: {
    statusBar,
    chart1: resolve => require(['./common/chart1'], resolve),
    chart2: resolve => require(['./common/chart2'], resolve),
    chart3: resolve => require(['./common/chart3'], resolve),
    chart4: resolve => require(['./common/chart4'], resolve),
    plannedSpeed: resolve => require(['./common/planned-speed'], resolve)
  }
  // ...
}
</script>

<style lang="scss" scoped>
.chart-item {
  height: 400px;
  margin-bottom: 20px;
}
</style>
