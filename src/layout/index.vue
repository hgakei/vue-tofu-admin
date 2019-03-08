<template>
  <el-container>
    <el-aside width="auto">
      <tofu-sidebar></tofu-sidebar>
    </el-aside>
    <el-container>
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
