<template>
  <el-dialog
    :close-on-click-modal="false"
    :show-close="false"
    :title="title"
    :visible.sync="scope_visible"
    :width="width"
    @closed="closed"
  >
    <div class="slot-wrap" v-html="content" v-if="content"></div>
    <div class="slot-wrap" v-if="$slots.default">
      <slot></slot>
    </div>
    <div slot="footer" style="padding-top: 9px">
      <template v-if="$slots.footer">
        <slot name="footer"></slot>
      </template>
      <template v-else>
        <el-button :size="size" type="primary" @click="onConfirm()">确 定</el-button>
        <el-button :size="size" @click="onClose()">取 消</el-button>
      </template>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: `tofu-dialog`,
  data () {
    return {
      scope_visible: false
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '495px'
    },
    content: {
      type: String,
      default: ''
    },
    beforConfirm: {
      type: Function,
      default () {}
    },
    beforClose: {
      type: Function,
      default () {}
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  watch: {
    visible (n) {
      this.scope_visible = n
    }
  },
  methods: {
    onConfirm () {
      this.$emit('befor-confirm')
      this.beforConfirm(() => {
        this.scope_visible = false
      })
    },
    onClose () {
      this.$emit('befor-close')
      this.beforClose(() => {
        this.scope_visible = false
      })
    },
    closed () {
      this.$emit('update:visible', false)
      // 用组件的形式调用则不销毁组件
      if (this.$slots.default) {
        return
      }
      // 用api的形式调用则销毁组件
      setTimeout(() => {
        this.$destroy()
      }, 100)
    }
  },
  mounted () {
    this.scope_visible = this.visible
    this.$nextTick(() => {
      document.body.appendChild(this.$el)
    })
  },
  beforeDestroy () {
    this.$el.remove()
  }
}
</script>
