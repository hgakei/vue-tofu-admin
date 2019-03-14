<template>
  <div class="tofu-sidebar-wrap tofu-clr-white--bg">
    <el-menu
      class="tofu-sidebar"
      :default-active="onRoutes"
      :collapse="collapse"
      unique-opened
      router
    >
      <el-menu-item class="el-menu-sign">
        <a href="https://github.com/hgakei/vue-tofu-admin" target="_blank" style="display: block;" class="tofu-clr-black">
          <div class="sign-logo">
            <img src="../../assets/logo.jpg" alt="logo" class="tofu-img">
          </div>
          <span slot="title" class="sign-name">vue-tofu-admin</span>
        </a>
      </el-menu-item>
      <template v-for="item in menus">
        <template v-if="item.children">
          <el-submenu :index="item.path" :key="item.path" :show-timeout="Timeout" :hide-timeout="Timeout">
            <template slot="title">
              <i class="iconfont" :class="item.meta.icon"></i>
              <span slot="title">{{ generateLang(item.meta.title) }}</span>
            </template>
            <template v-for="subItem in item.children">
              <el-submenu v-if="subItem.children" :index="subItem.path" :key="subItem.path" :show-timeout="Timeout" :hide-timeout="Timeout">
                <template slot="title">{{ generateLang(subItem.meta.title) }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.children"
                  :key="i"
                  :index="threeItem.path"
                >{{ generateLang(threeItem.meta.title) }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.path" :key="subItem.path">{{ generateLang(subItem.meta.title) }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.path" :key="item.path">
            <i class="iconfont" :class="item.meta.icon"></i>
            <span slot="title">{{ generateLang(item.meta.title) }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { generateLang } from '@/utils/i18n'
import MainRouter from '@/router/MainRouter'

export default {
  name: 'tofu-sidebar',
  props: ['collapse'],
  data () {
    return {
      Timeout: 150,
      menus: []
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path
    }
  },
  methods: {
    generateLang,
    make_menu () {
      MainRouter.children.map((ring1, i1) => {
        if (ring1.meta.menu) {
          ring1.children && (ring1.children = this.is_menu(ring1.children))
          this.menus.push(ring1)
        }
      })
    },
    is_menu (children) {
      let arr = []
      children.map(item => {
        item.meta.menu && arr.push(item)
      })
      return arr
    }
  },
  created () {
    this.make_menu()
  }
}
</script>

<style lang="scss">
@import "~@/scss/var.scss";

.tofu-sidebar-wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: scroll;
  z-index: 1;
  &::-webkit-scrollbar {
    width: 0;
  }
  .tofu-sidebar {
    height: 100%;
    // 展开状态
    &:not(.el-menu--collapse) {
      width: 220px;
      .iconfont {
        margin-right: 6px;
      }
    }
    // 收缩状态
    &.el-menu--collapse {
      .el-menu-item {
        text-align: center;
      }
      .el-submenu{
        text-align: center;
        &.is-active{
          .iconfont {
            color: $clr-theme-6;
          }
        }
      }
    }
  }
}
// 导航菜单顶部logo
.tofu-sidebar {
  // 通用样式
  .el-menu-sign {
    .sign-logo {
      display: inline-block;
      width: 50px;
      height: 50px;
    }
    .sign-name {
      font-size: 16px;
      font-weight: bold;
    }
  }
  // 展开状态
  &:not(.el-menu--collapse) {
    .el-menu-sign {
      padding-left: 10px !important;
      .sign-logo {
        margin-right: 6px;
      }
    }
  }
  // 收缩状态
  &.el-menu--collapse {
    .el-menu-sign {
      padding: 0 !important;
      .el-tooltip {
        padding: 0 !important;
      }
    }
  }
}
</style>
