<template>
  <div>
    <tofu-content>引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。</tofu-content>
    <el-button icon="el-icon-question" type="primary" @click.stop="startGuide">{{ $t('page.guide.startGuide') }}</el-button>
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'

export default {
  name: 'guide',
  methods: {
    startGuide () {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  },
  created () {
    this.driver = null
  },
  mounted () {
    this.driver = new Driver({
      opacity: 0.7,
      padding: 4,
      closeBtnText: '关闭',
      nextBtnText: '下一个',
      prevBtnText: '上一个',
      doneBtnText: '完成',
      allowClose: false
    })
  }
}
</script>

<style lang="scss">
@import "~@/scss/var.scss";

.driver-position-relative {
  background-color: #fff;
}
// target 框
div#driver-highlighted-element-stage {
  background-color: transparent !important;
  border: 4px solid #fff;
  box-sizing: border-box;
  z-index: 100004 !important;
}
// 按钮
div#driver-popover-item .driver-popover-footer button {
  background-color: $clr-theme-1;
  border-color: $clr-theme-1;
  padding: 6px 10px;
  color: $clr-theme-6;
  text-shadow: none;
  font-size: 12px;
  &:hover {
    background-color: $clr-theme-6;
    color: #fff;
  }
}
</style>
