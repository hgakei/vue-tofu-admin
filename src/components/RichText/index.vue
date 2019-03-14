<template>
  <div class="ql-snow">
    <div class="ql-editor" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: 'tofu-rich-text',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.snow.css';
</style>
