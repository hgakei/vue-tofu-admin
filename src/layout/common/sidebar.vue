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
          index: '1',
          title: '系统首页'
        },
        {
          icon: 'iconicon_memo',
          index: 'driver',
          title: '引导页'
        },
        {
          icon: 'iconword',
          index: '2',
          title: '文章功能',
          subs: [
            {
              index: 'form',
              title: '文章列表'
            },
            {
              index: 'editor',
              title: '创建文章'
            }
          ]
        },
        {
          icon: 'iconexcel',
          index: '3',
          title: 'Excel 功能',
          subs: [
            {
              index: 'form',
              title: 'Excel 导出'
            },
            {
              index: 'editor',
              title: 'Excel 导入'
            }
          ]
        },
        {
          icon: 'iconpdf',
          index: '4',
          title: 'PDF 功能',
          subs: [
            {
              index: 'form',
              title: 'Excel 导出'
            },
            {
              index: 'editor',
              title: 'Excel 导入'
            }
          ]
        },
        {
          icon: 'iconsvgmoban12',
          index: '5',
          title: '权限功能',
          subs: [
            {
              index: 'form',
              title: '设置权限'
            }
          ]
        }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
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
