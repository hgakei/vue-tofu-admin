<template>
  <el-container>
    <el-aside width="auto">
      <tofu-sidebar></tofu-sidebar>
    </el-aside>
    <el-container>
      <el-header height="50px">
        <tofu-header></tofu-header>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import tofuHeader from './common/header'
import tofuSidebar from './common/sidebar'
import bus from '@/utils/bus.js'

export default {
  name: 'layout',
  components: {
    tofuHeader,
    tofuSidebar
  },
  methods: {
    Get_breadcrumbList () {
      const breadcrumbList = []
      this.$route.matched.map(item => {
        breadcrumbList.push({
          label: item.meta.title,
          name: item.name || ''
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
  }
}
</script>
