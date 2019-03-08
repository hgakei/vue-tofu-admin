<template>
  <div class="tofu-sidebar-wrap">
    <el-menu
      class="tofu-sidebar"
      :default-active="onRoutes"
      :collapse="collapse"
      unique-opened
      router
    >
      <template v-for="item in menus">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i class="iconfont" :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i class="iconfont" :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '@/utils/bus.js'

export default {
  name: 'tofu-sidebar',
  data () {
    return {
      collapse: false,
      menus: [
        {
          icon: 'iconicon_work_fill',
          index: 'dashboard',
          title: '系统首页'
        },
        {
          icon: 'iconicon_memo',
          index: 'driver',
          title: '引导页'
        },
        {
          icon: 'iconword',
          index: 'article',
          title: '文章功能',
          subs: [
            {
              index: 'article-list',
              title: '文章列表'
            },
            {
              index: 'article-create',
              title: '创建文章'
            }
          ]
        },
        {
          icon: 'iconexcel',
          index: 'excel',
          title: 'Excel 功能',
          subs: [
            {
              index: 'excel-export',
              title: 'Excel 导出'
            },
            {
              index: 'excel-import',
              title: 'Excel 导入'
            }
          ]
        },
        {
          icon: 'iconpdf',
          index: 'pdf',
          title: 'PDF 功能'
        },
        {
          icon: 'iconsvgmoban12',
          index: 'permission',
          title: '权限功能',
          subs: [
            {
              index: 'permission-create',
              title: '设置权限'
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
    // ...
  },
  mounted () {
    bus.$on('toggle-sidebar', collapse => {
      this.collapse = collapse
    })
  }
}
</script>

<style lang="scss">
@import "~@/scss/var.scss";

.tofu-sidebar-wrap {
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  & > ul {
    height: 100%;
  }
  .tofu-sidebar {
    .iconfont {
      margin-right: 6px;
    }
    &:not(.el-menu--collapse) {
      width: 220px;
    }
  }
}
</style>
