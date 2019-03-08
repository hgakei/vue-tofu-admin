<template>
  <div class="tofu-tag tofu-border-bottom">
    <div class="tag-item act">系统首页 <i class="iconfont iconicon_roundclose_fill"></i></div>
  </div>
</template>

<script>
export default {
  name: 'tofu-tag'
}
</script>

<style lang="scss" scoped>
@import '~@/scss/var.scss';

.tofu-tag {
  padding: 4px 4px;
  display: flex;
  align-items: center;
  .tag-item {
    height: 24px;
    line-height: 24px;
    margin-right: 4px;
    border: 1px solid $clr-border;
    padding: 0 10px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 4px;
    .iconfont {
      display: none;
    }
    &.act {
      color: #fff;
      background-color: $clr-theme-4;
      border-color: $clr-theme-4;
      .iconfont {
        display: inline;
        margin-left: 4px;
      }
    }
  }
}
</style>
