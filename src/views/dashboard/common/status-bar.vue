<template>
  <div class="status-bar">
    <el-row justify="space-between" type="flex" :gutter="20">
      <el-col :span="6">
        <div class="el-col-inner tofu-border-radius--8 tofu-border tofu-shadow">
          <div class="lt tofu-clr-blue--bg">
            <i class="iconfont iconcangku_zhongzhuanchuzhan tofu-clr-white"></i>
          </div>
          <div class="rt">
            <p class="number tofu-clr-blue">999</p>
            <p class="text">用户访问量</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="el-col-inner tofu-border-radius--8 tofu-border tofu-shadow">
          <div class="lt tofu-clr-org--bg">
            <i class="iconfont iconkefu tofu-clr-white"></i>
          </div>
          <div class="rt">
            <p class="number tofu-clr-org">999</p>
            <p class="text">系统消息</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="el-col-inner tofu-border-radius--8 tofu-border tofu-shadow">
          <div class="lt tofu-clr-red--bg">
            <i class="iconfont iconjinggao tofu-clr-white"></i>
          </div>
          <div class="rt">
            <p class="number tofu-clr-red">999</p>
            <p class="text">到期通知</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="el-col-inner tofu-border-radius--8 tofu-border tofu-shadow">
          <div class="lt tofu-clr-green--bg">
            <i class="iconfont iconshouji tofu-clr-white"></i>
          </div>
          <div class="rt">
            <p class="number tofu-clr-green">999</p>
            <p class="text">来自手机</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  // ...
}
</script>

<style lang="scss" scoped>
.status-bar {
  .el-col-inner {
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    .lt {
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      .iconfont {
        font-size: 80px;
      }
    }
    .rt {
      flex: 1;
      text-align: center;
      height: max-content;
      .number {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 14px;
      }
    }
  }
}
</style>
