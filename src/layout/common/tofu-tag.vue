<template>
  <div class="tofu-tag tofu-shadow--bottom" v-show="TagList.length>0">
    <div
      @click.stop="$router.push({name:item.name})"
      class="tag-item tofu-border"
      :class="{
        'act': isActive(item.name),
        'tofu-clr-theme--bg': isActive(item.name),
        'tofu-clr-theme--border': isActive(item.name)
      }
      "
      v-for="(item,index) in TagList"
      :key="index"
    >
      {{generateLang(item.title)}}
      <i class="iconfont iconicon_roundclose_fill" @click.stop="Del_tag(index)" title="关闭"></i>
    </div>
  </div>
</template>

<script>
import { generateLang } from '@/utils/i18n'
import { mapGetters } from 'vuex'

export default {
  name: 'tofu-tag',
  computed: {
    ...mapGetters([
      'TagList'
    ])
  },
  methods: {
    generateLang,
    isActive (name) {
      return name === this.$route.name
    },
    Del_tag (index) {
      this.TagList.splice(index, 1)
      const nextItem = this.TagList[this.TagList.length - 1]
      nextItem && this.$router.push(nextItem.path)
    }
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
