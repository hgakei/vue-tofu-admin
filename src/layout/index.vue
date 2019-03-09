<template>
  <el-container>
    <el-aside width="auto">
      <tofu-sidebar :collapse="collapse"></tofu-sidebar>
    </el-aside>
    <el-container class="main-container" :class="{'collapse':collapse}">
      <el-header height="50px">
        <tofu-header></tofu-header>
      </el-header>
      <tofu-tag></tofu-tag>
      <el-main>
        <keep-alive :include="tagsList">
          <router-view/>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import tofuHeader from './common/tofu-header'
import tofuSidebar from './common/tofu-sidebar'
import tofuTag from './common/tofu-tag'
import bus from '@/utils/bus.js'

export default {
  name: 'layout',
  data () {
    return {
      collapse: false,
      tagsList: []
    }
  },
  components: {
    tofuHeader,
    tofuSidebar,
    tofuTag
  },
  methods: {
    Get_breadcrumbList () {
      const breadcrumbList = []
      this.$route.matched.map(item => {
        breadcrumbList.push({
          label: item.meta.title,
          path: item.path || ''
        })
      })
      bus.Set_breadcrumbList(breadcrumbList)
    }
  },
  watch: {
    '$route' () {
      this.Get_breadcrumbList()
    }
  },
  created () {
    this.Get_breadcrumbList()
  },
  mounted () {
    bus.$on('toggle-sidebar', collapse => {
      this.collapse = collapse
    })
    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on('tags', msg => {
      let arr = []
      for (let i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name)
      }
      this.tagsList = arr
    })
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  min-height: 100%;
  transition: margin-left .3s;
  margin-left: 220px;
  position: relative;
}
.collapse {
  margin-left: 65px !important;
}
</style>
