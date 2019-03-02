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
              <i :class="item.icon"></i>
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
            <i :class="item.icon"></i>
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
          icon: 'el-icon-tickets',
          index: '1',
          title: '系统首页'
        },
        {
          icon: 'el-icon-tickets',
          index: '2',
          title: '文章系统',
          subs: [
            {
              index: 'form',
              title: '文章列表'
            },
            {
              index: 'editor',
              title: '发布文章'
            }
          ]
        },
        {
          icon: 'el-icon-service',
          index: '3',
          title: '服务专员',
          subs: [
            {
              index: '3-1',
              title: '文章列表'
            },
            {
              index: '3-2',
              title: '发布文章'
            }
          ]
        },
        {
          icon: 'el-icon-goods',
          index: '4',
          title: '积分商品',
          subs: [
            {
              index: '4-1',
              title: '商品列表'
            },
            {
              index: '4-2',
              title: '发布新品'
            }
          ]
        },
        {
          icon: 'el-icon-goods',
          index: '5',
          title: '汽车产品',
          subs: [
            {
              index: '5-1',
              title: '产品列表'
            },
            {
              index: '5-2',
              title: '发布新品'
            }
          ]
        },
        {
          icon: 'el-icon-edit-outline',
          index: '6',
          title: '用户预约',
          subs: [
            {
              index: '6-1',
              title: '维修预约'
            },
            {
              index: '6-2',
              title: '试驾预约'
            },
            {
              index: '6-3',
              title: '保养预约'
            }
          ]
        },
        {
          icon: 'el-icon-service',
          index: '7',
          title: '用户中心',
          subs: [
            {
              index: '7-1',
              title: '用户列表'
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
    &:not(.el-menu--collapse) {
      width: 250px;
    }
  }
}
</style>
