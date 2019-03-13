<template>
  <div>
    <el-button icon="el-icon-question" type="primary" @click.stop="startGuide">{{ $t('page.guide.startGuide') }}</el-button>
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'

export default {
  name: 'guide',
  methods: {
    startGuide () {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  },
  created () {
    this.driver = null
  },
  mounted () {
    this.driver = new Driver()
  }
}
</script>
