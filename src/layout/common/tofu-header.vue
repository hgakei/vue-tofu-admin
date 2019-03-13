<template>
  <div class="tofu-header tofu-border--bottom">
    <div class="lt">
      <div class="tofu-sidebar-btn tofu-clr-theme--hov-bg" @click="_SET_COLLAPSE_()" key="close">
        <i class="iconfont iconzhankai1 tofu-clr-theme" :class="collapse?'':'tofu-rotate_-180'"></i>
      </div>
    </div>
    <div class="ct">
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <transition-group name="page-fade-outLeft" mode="in-out">
          <el-breadcrumb-item v-for="item in BreadcrumbList" :key="item.path" :to="{ path: item.path }">
            {{generateLang(item.label)}}
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </div>
    <div class="rt">
      <div class="item tofu-clr-theme--hov-bg">
        <item-fullscreen></item-fullscreen>
      </div>
      <div class="item tofu-clr-theme--hov-bg">
        <item-lang></item-lang>
      </div>
      <div class="item tofu-clr-theme--hov-bg">
        <el-tooltip effect="dark" :content="$t('tips.theme')" placement="bottom">
          <el-color-picker v-model="theme" size="small"></el-color-picker>
        </el-tooltip>
      </div>
      <div class="item tofu-clr-theme--hov-bg">
        <el-dropdown>
          <div class="avatar-wrap">
            <div class="avatar">
              <img src="../../assets/avatar.png" alt="avatar" class="tofu-img">
            </div>
            <div class="user-name">Admin</div>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>{{$t('dropdown.avatar.personalCenter')}}</el-dropdown-item>
            <el-dropdown-item>{{$t('dropdown.avatar.accountManagement')}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import ItemLang from './item-lang'
import itemFullscreen from './item-fullscreen'
import { generateLang } from '@/utils/i18n'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'tofu-header',
  data () {
    return {
      collapse: false,
      theme: '#13c2c2'
    }
  },
  computed: {
    ...mapGetters([
      'BreadcrumbList'
    ])
  },
  components: {
    ItemLang,
    itemFullscreen
  },
  methods: {
    generateLang,
    _SET_COLLAPSE_ () {
      this.collapse = !this.collapse
      this.SET_COLLAPSE(this.collapse)
    },
    ...mapMutations([
      'SET_COLLAPSE'
    ])
  }
}
</script>

<style lang="scss">
.tofu-header {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  & > .lt {
    min-width: 1px;
    padding:0 4px 0 1px;
    .tofu-sidebar-btn {
      width: 49px;
      height: 100%;
      cursor: pointer;
      overflow: hidden;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .iconfont {
        font-size: 20px;
        transition: all linear .3s;
      }
    }
  }
  & > .ct {
    min-width: 1px;
    display: flex;
    align-items: center;
  }
  & > .rt {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
    .item {
      height: 100%;
      padding: 0 10px;
      margin-left: 10px;
      display: flex;
      align-items: center;
    }
    .iconfont {
      font-size: 22px;
      font-weight: bold;
      cursor: pointer;
      &.iconyuyan1 {
        font-size: 24px;
      }
    }
    .avatar-wrap {
      display: flex;
      align-items: center;
      .avatar {
        width: 40px;
        height: 40px;
      }
      .user-name {
        margin-left: 8px;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}
</style>
