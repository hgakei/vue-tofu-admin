export default {
  data () {
    return {
      chartHeight: 400
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.make()
    })
  }
}
