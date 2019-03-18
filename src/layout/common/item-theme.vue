<template>
  <tofu-tooltip effect="dark" :content="$t('tips.theme')" placement="bottom">
    <div class="tofu-flex--center">
      <el-color-picker v-model="theme" size="small"></el-color-picker>
    </div>
  </tofu-tooltip>
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
