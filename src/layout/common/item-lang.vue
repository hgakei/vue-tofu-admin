<template>
  <el-dropdown @command="Set_lang">
    <i class="iconfont iconyuyan1"></i>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh" :disabled="lang === 'zh'">中文</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="lang === 'en'">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  computed: {
    lang () {
      return this.$store.getters.Lang
    }
  },
  methods: {
    Set_lang (lang) {
      this.$i18n.locale = lang
      this.$store.commit('SET_LANG', lang)
      this.$message.success(this.$t('message.setLangSuccess'))
    }
  }
}
</script>
