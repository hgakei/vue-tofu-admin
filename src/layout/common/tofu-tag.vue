<template>
  <div class="tofu-tag tofu-shadow--bottom" v-show="tagsList.length>0">
    <div
      @click.stop="$router.push({name:item.name})"
      class="tag-item tofu-border"
      :class="{
        'act': isActive(item.name),
        'tofu-clr-theme--bg': isActive(item.name),
        'tofu-clr-theme--border': isActive(item.name)
      }
      "
      v-for="(item,index) in tagsList"
      :key="index"
    >
      {{generateLang(item.title)}}
      <i class="iconfont iconicon_roundclose_fill" @click.stop="Del_tag(index)" title="关闭"></i>
    </div>
  </div>
</template>

<script>
import bus from '@/utils/bus.js'
import { generateLang } from '@/utils/i18n'

export default {
  name: 'tofu-tag',
  data () {
    return {
      tagsList: []
    }
  },
  watch: {
    $route (newValue) {
      this.Set_tags(newValue)
    }
  },
  methods: {
    generateLang,
    isActive (name) {
      return name === this.$route.name
    },
    // 关闭单个标签
    Del_tag (index) {
      this.tagsList.splice(index, 1)
      const nextItem = this.tagsList[this.tagsList.length - 1]
      nextItem && this.$router.push(nextItem.path)
    },
    Set_tags (route) {
      const isExist = this.tagsList.some(item => {
        return item.path === route.fullPath
      })
      if (!isExist) {
        if (this.tagsList.length >= 8) {
          this.tagsList.shift()
        }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.name
        })
      }
      bus.$emit('tags', this.tagsList)
    }
  },
  created () {
    this.Set_tags(this.$route)
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/var.scss';

.tofu-tag {
  padding: 4px 4px;
  display: flex;
  align-items: center;
  .tag-item {
    height: 24px;
    line-height: 24px;
    margin-right: 4px;
    padding: 0 10px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 4px;
    user-select: none;
    .iconfont {
      display: none;
    }
    &.act {
      color: #fff;
      padding-right: 5px;
      .iconfont {
        display: inline;
        margin-left: 4px;
        &:hover {
          color: $clr-theme-8;
        }
      }
    }
  }
}
</style>
