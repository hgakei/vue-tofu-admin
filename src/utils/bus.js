import Vue from 'vue'

// 使用 Event Bus
const bus = new Vue({
  data () {
    return {
      breadcrumbList: [
        {
          label: '系统首页',
          name: 'dashboard'
        }
      ]
    }
  },
  methods: {
    Set_breadcrumbList (breadcrumbList) {
      this.breadcrumbList = breadcrumbList
    }
  }
})

export default bus
