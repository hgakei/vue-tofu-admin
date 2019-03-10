<template>
  <div>
    <div class="chart-head">开发进度</div>
    <div class="chart-container">
      <div class="progress-item">
        <p class="item-title">G2 图表</p>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="90" color="#bae7ff"></el-progress>
      </div>
      <div class="progress-item">
        <p class="item-title">全局功能（国际化，全屏，动态面包屑，动态标签，）</p>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="(5/8)*100" color="#91d5ff"></el-progress>
      </div>
      <div class="progress-item">
        <p class="item-title">编辑器</p>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="(0/2)*100" color="#69c0ff"></el-progress>
      </div>
      <div class="progress-item">
        <p class="item-title">Excel</p>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="(0/2)*100" color="#40a9ff"></el-progress>
      </div>
      <div class="progress-item">
        <p class="item-title">表格</p>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="(0/2)*100" color="#1890ff"></el-progress>
      </div>
      <div class="progress-item">
        <p class="item-title">其它</p>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="(0/6)*100" color="#096dd9"></el-progress>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chart-head {
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  font-size: 16px;
  font-weight: bold;
}
.chart-container {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  .progress-item {
    width: 100%;
    height: max-content;
    margin-bottom: 18px;
    .item-title {
      margin-bottom: 4px;
    }
  }
}
</style>
