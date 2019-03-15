<template>
  <div class="tofu-editor">
    <quill-editor
      :options="newOption"
      v-model="editorContent"
      @change="editorChange"
    >
      <div id="toolbar" slot="toolbar">
        <!-- Add a bold button -->
        <button class="ql-bold" title="加粗">Bold</button>
        <button class="ql-italic" title="斜体">Italic</button>
        <button class="ql-underline" title="下划线">underline</button>
        <button class="ql-strike" title="删除线">strike</button>
        <button class="ql-blockquote" title="引用"></button>
        <!--Add list -->
        <button class="ql-list" value="ordered" title="有序列表"></button>
        <button class="ql-list" value="bullet" title="无序列表"></button>
        <!-- Add font size dropdown -->
        <select class="ql-header" title="段落格式">
          <option selected>段落</option>
          <option value="1">标题1</option>
          <option value="2">标题2</option>
          <option value="3">标题3</option>
          <option value="4">标题4</option>
          <option value="5">标题5</option>
          <option value="6">标题6</option>
        </select>
        <select class="ql-size" title="字体大小">
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px" selected>16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
          <option value="22px">22px</option>
          <option value="24px">24px</option>
        </select>
        <select class="ql-font" title="字体">
          <option value="SimSun" selected="selected"></option>
          <option value="SimHei"></option>
          <option value="Microsoft-YaHei"></option>
          <option value="KaiTi"></option>
          <option value="FangSong"></option>
          <option value="Arial"></option>
        </select>

        <select class="ql-color" value="color" title="字体颜色"></select>
        <select class="ql-background" value="background" title="背景颜色"></select>
        <select class="ql-align" value="align" title="对齐"></select>
        <button class="ql-clean" title="格式刷"></button>
        <button class="ql-image" title="图片"></button>
      </div>
    </quill-editor>
  </div>
</template>

<script>
import { quillEditor, Quill } from 'vue-quill-editor'
import ImageResize from 'quill-image-resize-module'
import { ImageExtend, QuillWatch } from 'quill-image-extend-module'
!Quill.imports['modules/imageResize'] && Quill.register('modules/imageResize', ImageResize) // Register only if not exists - 仅在不存在时注册
Quill.register('modules/ImageExtend', ImageExtend)
// 自定义模块
const Size = Quill.import('attributors/style/size')
const Font = Quill.import('formats/font')
Size.whitelist = ['12px', '14px', '16px', '18px', '20px', '22px', '24px']
Font.whitelist = ['SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong', 'Arial', 'Times-New-Roman', 'sans-serif'] // 将字体加入到白名单
Quill.register(Size, true)
Quill.register(Font, true)

let VM = null

export default {
  name: 'tofu-editor',
  components: {
    quillEditor
  },
  data () {
    return {
      editorContent: '',
      newOption: {
        placeholder: this.placeholder,
        history: {
          delay: 100,
          maxStack: 100,
          userOnly: false
        },
        modules: {
          toolbar: {
            container: '#toolbar',
            handlers: {
              image: function () {
                QuillWatch.emit(this.quill.id)
              }
            }
          },
          ImageExtend: {
            loading: true,
            name: 'file',
            action: this.action,
            change (xhr, formData) {
              if (!VM.action) {
                return
              }
              let file = ''
              formData.forEach(_file_ => {
                file = _file_
              })
              formData.has('file') && formData.delete('file')
              // 添加签名信息
              formData.append('OSSAccessKeyId', VM['ossdata'].accessid)
              formData.append('callback', VM['ossdata'].callback)
              formData.append('key', `${VM['ossdata'].dir}${file.name}`)
              formData.append('expire', VM['ossdata'].expire)
              formData.append('policy', VM['ossdata'].policy)
              formData.append('Signature', VM['ossdata'].signature)
              formData.append('host', VM['ossdata'].host)
              formData.append('file', file)
            },
            response: res => {
              let index = res.data.image_url.indexOf('?x-oss-process')
              return res.data.image_url.slice(0, index)
            }
          },
          imageResize: {
            modules: ['Resize', 'DisplaySize']
          }
        },
        strict: false // should be false for ignore unexpected update
      }
    }
  },
  props: {
    action: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    ossdata: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    editorChange ({ editor, html, text }) {
      this.$emit('update:content', html.replace('cursor: nwse-resize;', ''))
      // this.$emit('editorChange', html.replace('cursor: nwse-resize;', ''))
    }
  },
  created () {
    VM = this
  },
  mounted () {
    this.editorContent = this.content
  }
}
</script>

<style lang="scss">
// editor style
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.snow.css';
@import "./modules/quill.css";

.tofu-editor {
  padding-top: 14px;
}
.ql-container {
  .ql-editor {
    min-height: 150px;
  }
}
</style>
