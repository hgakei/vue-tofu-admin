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

export default {
  name: 'layout',
  components: {
    tofuHeader,
    tofuSidebar
  }
}
</script>
