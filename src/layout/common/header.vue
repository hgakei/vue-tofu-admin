<template>
  <div class="tofu-header ">
    <div class="lt">
      <!-- <transition-group name="el-zoom-in-top"> -->
        <!-- 展开时的logo -->
        <div class="tofu-sidebar-logo--open tofu-border-right tofu-border-bottom" v-if="!collapse" @click="no_toggle_sidebar()" key="open">
          <div class="inner">
            <div class="lt"><img src="../../assets/logo.jpg" alt="logo" class="tofu-img"></div>
            <div class="rt">vue-tofu-admin</div>
          </div>
        </div>
        <!-- 收缩时的logo -->
        <div class="tofu-sidebar-logo--close tofu-border-right tofu-border-bottom" v-if="collapse" @click="no_toggle_sidebar()" key="close">
          <div class="inner">
            <img src="../../assets/logo.jpg" alt="logo" class="tofu-img">
          </div>
        </div>
      <!-- </transition-group> -->
    </div>
    <div class="rt tofu-border-bottom"></div>
  </div>
</template>

<script>
import bus from '@/utils/bus.js'

export default {
  name: 'tofu-header',
  data () {
    return {
      collapse: false
    }
  },
  methods: {
    no_toggle_sidebar () {
      this.collapse = !this.collapse
      bus.$emit('toggle-sidebar', this.collapse)
    }
  }
}
</script>

<style lang="scss" scoped>
.tofu-header {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  .lt {
    min-width: 1px;
    .tofu-sidebar-logo {
      &--open, &--close {
        height: 100%;
        background-color: #fff;
        cursor: pointer;
        overflow: hidden;
      }
      &--open {
        width: 250px;
        .inner {
          width: 100%;
          height: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          .lt {
            flex-basis: 60px;
            height: 60px;
          }
          .rt {
            flex: 1;
            font-size: 18px;
            padding-left: 6px;
            font-weight: bold;
          }
        }
      }
      &--close {
        width: 64px;
        .inner {
          width: 100%;
          height: 100%;
          margin: 0 auto;
        }
      }
    }
  }
  .rt {
    flex: 1;
  }
}
</style>
