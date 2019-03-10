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
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index" :show-timeout="Timeout" :hide-timeout="Timeout">
            <template slot="title">
              <i class="iconfont" :class="item.icon"></i>
              <span slot="title">{{ generateLang(item.title) }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index" :show-timeout="Timeout" :hide-timeout="Timeout">
                <template slot="title">{{ generateLang(subItem.title) }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ generateLang(threeItem.title) }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ generateLang(subItem.title) }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i class="iconfont" :class="item.icon"></i>
            <span slot="title">{{ generateLang(item.title) }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { generateLang } from '@/utils/i18n'

export default {
  name: 'tofu-sidebar',
  props: ['collapse'],
  data () {
    return {
      Timeout: 150,
      menus: [
        {
          icon: 'iconicon_work_fill',
          index: 'dashboard',
          title: 'route.dashboard'
        },
        {
          icon: 'iconicon_memo',
          index: 'driver',
          title: 'route.driver'
        },
        {
          icon: 'iconword',
          index: 'article',
          title: 'route.article',
          subs: [
            {
              index: 'article-list',
              title: 'route.articleList'
            },
            {
              index: 'article-create',
              title: 'route.articleCreate'
            }
          ]
        },
        {
          icon: 'iconexcel',
          index: 'excel',
          title: 'route.excel',
          subs: [
            {
              index: 'excel-export',
              title: 'route.excelImport'
            },
            {
              index: 'excel-import',
              title: 'route.excelExport'
            }
          ]
        },
        {
          icon: 'iconpdf',
          index: 'pdf',
          title: 'route.pdf'
        },
        {
          icon: 'iconsvgmoban12',
          index: 'permission',
          title: 'route.permission',
          subs: [
            {
              index: 'permission-create',
              title: 'route.permissionCreate'
            }
          ]
        }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.name
    }
  },
  methods: {
    generateLang
    // ...
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
  &::-webkit-scrollbar {
    width: 0;
  }
  & > ul {
    height: 100%;
  }
  .tofu-sidebar {
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
