<template>
  <div>
    <tofu-content>文章功能的核心是富文本编辑器，编辑器分为富文本和Markdown两种类型</tofu-content>
    <tofu-editor :content.sync="content"></tofu-editor>
    <div class="tofu-padding--top-20">
      <el-button icon="el-icon-view" type="primary" @click.stop="preview" size="medium">文章预览</el-button>
    </div>
    <tofu-dialog
      :visible.sync="visible"
      title='文章预览'
      width='700px'
      @befor-close="visible=false"
      @befor-confirm="visible=false"
    >
      <tofu-rich-text :content="content"/>
    </tofu-dialog>
  </div>
</template>

<script>
import tofuEditor from '@/components/Editor'

export default {
  name: 'editor',
  data () {
    return {
      visible: false,
      content: '<h1 class="ql-align-center">宇宙的尽头</h1><p><br></p><p><br></p><p class="ql-align-center"><img src="https://cdn.uydan.com/e/5wmVq6N8/product_image/013e055c7b4e54a801203d2284fae1.jpg@2o.jpg" width="726"></p><h1 class="ql-align-center"><br></h1><h1 class="ql-align-center"><strong>.</strong></h1><h1 class="ql-align-center"><strong>.</strong></h1><h1 class="ql-align-center"><strong>.</strong></h1><p class="ql-align-center"><br></p>'
    }
  },
  components: {
    tofuEditor
  },
  methods: {
    preview () {
      this.visible = true
    }
  }
}
</script>
