<template>
  <tofu-tooltip effect="dark" :content="fullscreen ? $t('tips.cancelFullScreen') : $t('tips.fullScreen')" placement="bottom">
    <div class="tofu-flex--center">
      <i class="iconfont iconquanping" @click="On_handleFullScreen()"></i>
    </div>
  </tofu-tooltip>
</template>

<script>
export default {
  data () {
    return {
      fullscreen: false
    }
  },
  methods: {
    // 全屏事件
    On_handleFullScreen () {
      let element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    }
  }
}
</script>
