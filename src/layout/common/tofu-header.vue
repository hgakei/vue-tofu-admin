<template>
  <div class="tofu-header tofu-border--bottom">
    <div class="lt">
      <!-- 展开时的logo -->
      <!-- <div class="tofu-sidebar-logo--open " v-if="!collapse" @click="On_toggle_sidebar()" key="open">
        <div class="inner">
          <div class="lt"><img src="../../assets/logo.jpg" alt="logo" class="tofu-img"></div>
          <div class="rt">vue-tofu-admin</div>
        </div>
      </div> -->
      <!-- 收缩时的logo -->
      <div class="tofu-sidebar-logo--close " @click="On_toggle_sidebar()" key="close">
        <div class="inner">
          <img src="../../assets/logo.jpg" alt="logo" class="tofu-img">
        </div>
      </div>
    </div>
    <div class="ct">
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <!-- <transition-group name="breadcrumb" mode="in-out"> -->
          <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
        <!-- </transition-group> -->
      </el-breadcrumb>
    </div>
    <div class="rt">
      <div class="item">
        <el-tooltip effect="dark" :content="fullscreen?'取消全屏':'全屏'" placement="bottom">
          <i class="iconfont iconquanping" @click="On_handleFullScreen()"></i>
        </el-tooltip>
      </div>
      <div class="item">
        <el-tooltip effect="dark" content="语言" placement="bottom">
          <i class="iconfont iconyuyan1"></i>
        </el-tooltip>
      </div>
      <div class="item">
        <el-tooltip effect="dark" content="换肤" placement="bottom">
          <el-color-picker v-model="theme" size="small"></el-color-picker>
        </el-tooltip>
      </div>
      <div class="item">
        <el-dropdown style="vertical-align: top;">
          <div class="avatar-wrap">
            <div class="avatar">
              <img src="../../assets/avatar.png" alt="avatar" class="tofu-img">
            </div>
            <div class="user-name">Admin</div>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>账号管理</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '@/utils/bus.js'

export default {
  name: 'tofu-header',
  data () {
    return {
      collapse: false,
      fullscreen: false,
      theme: '#CBCBCB'
    }
  },
  computed: {
    breadcrumbList () {
      return bus.breadcrumbList
    }
  },
  methods: {
    On_toggle_sidebar () {
      this.collapse = !this.collapse
      bus.$emit('toggle-sidebar', this.collapse)
    },
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

<style lang="scss" scoped>
.tofu-header {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  & > .lt {
    min-width: 1px;
    padding: 0 10px;
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
  & > .ct {
    min-width: 1px;
    display: flex;
    align-items: center;
  }
  & > .rt {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
    .item {
      margin-left: 30px;
    }
    .iconfont {
      font-size: 22px;
      font-weight: bold;
      cursor: pointer;
      &.iconyuyan1 {
        font-size: 24px;
      }
    }
    .avatar-wrap {
      display: flex;
      align-items: center;
      .avatar {
        width: 40px;
        height: 40px;
      }
      .user-name {
        margin-left: 8px;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}
</style>
