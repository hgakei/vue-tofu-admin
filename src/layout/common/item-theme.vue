<template>
  <el-tooltip effect="dark" :content="$t('tips.theme')" placement="bottom">
    <div class="tofu-flex--center">
      <el-color-picker v-model="theme" size="small"></el-color-picker>
    </div>
  </el-tooltip>
</template>

<script>
export default {
  data () {
    return {
      theme: '#13c2c2'
    }
  }
}
</script>
