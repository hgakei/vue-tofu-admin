<template>
  <el-container>
    <el-aside width="auto">
      <tofu-sidebar :collapse="Collapse"></tofu-sidebar>
    </el-aside>
    <el-container class="tofu-el-container" :class="{'collapse':Collapse}">
      <el-header height="50px">
        <tofu-header></tofu-header>
      </el-header>
      <tofu-tag></tofu-tag>
      <el-main class="tofu-el-main">
        <transition name="page-fade-outLeft" mode="out-in">
          <keep-alive :include="KeepAliveList">
            <router-view/>
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import tofuHeader from './common/tofu-header'
import tofuSidebar from './common/tofu-sidebar'
import tofuTag from './common/tofu-tag'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'layout',
  computed: {
    KeepAliveList () {
      let arr = []
      for (let i = 0, len = this.TagList.length; i < len; i++) {
        this.TagList[i].name && arr.push(this.TagList[i].name)
      }
      return arr
    },
    ...mapGetters([
      'Collapse',
      'TagList'
    ])
  },
  components: {
    tofuHeader,
    tofuSidebar,
    tofuTag
  },
  methods: {
    _SET_BREAD_CRUMB_LIST_ () {
      const breadcrumbList = []
      this.$route.matched.map(item => {
        breadcrumbList.push({
          label: item.meta.title,
          path: item.meta.hideMic ? '' : (item.path || '')
        })
      })
      this.SET_BREAD_CRUMB_LIST(breadcrumbList)
    },
    _SET_TAG_LIST_ (route) {
      const isExist = this.TagList.some(item => {
        return item.path === route.fullPath
      })
      if (!isExist) {
        if (this.TagList.length >= 8) {
          this.TagList.shift()
        }
        this.TagList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.name
        })
      }
    },
    ...mapMutations([
      'SET_BREAD_CRUMB_LIST'
    ])
  },
  watch: {
    '$route' (NewRoute) {
      this._SET_BREAD_CRUMB_LIST_()
      this._SET_TAG_LIST_(NewRoute)
    }
  },
  created () {
    this._SET_BREAD_CRUMB_LIST_()
    this._SET_TAG_LIST_(this.$route)
  }
}
</script>

<style lang="scss" scoped>
.tofu-el-container {
  min-height: 100%;
  transition: margin-left .3s;
  margin-left: 220px;
  position: relative;
  background-color: #fff;
  .tofu-el-main {
    min-height: calc(100vh - (50px + 32px));
    overflow: hidden;
  }
}
.collapse {
  margin-left: 65px !important;
}
</style>
