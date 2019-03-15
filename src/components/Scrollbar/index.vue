<template>
  <el-scrollbar
    ref="el-scrollbar"
    wrap-class="tofu-scrollbar--wrap"
    view-class="tofu-scrollbar--view"
  >
    <slot></slot>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'tofu-scrollbar',
  props: {
    maxHeight: {
      type: String,
      default: '60vh'
    }
  },
  mounted () {
    this.$nextTick(() => {
      const ScrollbarEl = this.$refs['el-scrollbar'].$el
      const wrap = ScrollbarEl.querySelector('.tofu-scrollbar--wrap')
      wrap.style['max-height'] = this.maxHeight
    })
  }
}
</script>
