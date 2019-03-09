<template>
  <div>
    <div id='mountNode4'></div>
  </div>
</template>

<script>
import chartMixin from './chartMixin'

export default {
  mixins: [chartMixin],
  methods: {
    make () {
      var data = [
        {
          item: '事例一',
          count: 40,
          percent: 0.4
        },
        {
          item: '事例二',
          count: 21,
          percent: 0.21
        },
        {
          item: '事例三',
          count: 17,
          percent: 0.17
        },
        {
          item: '事例四',
          count: 13,
          percent: 0.13
        },
        {
          item: '事例五',
          count: 9,
          percent: 0.09
        }
      ]
      /* eslint-disable */
      var chart = new G2.Chart({
        container: 'mountNode4',
        forceFit: true,
        height: this.chartHeight,
        animate: false
      })
      /* eslint-enable */
      chart.source(data, {
        percent: {
          formatter: function formatter (val) {
            val = val * 100 + '%'
            return val
          }
        }
      })
      chart.coord('theta', {
        radius: 0.75,
        innerRadius: 0.6
      })
      chart.tooltip({
        showTitle: false,
        itemTpl:
          `<li><span style='background-color:{color}' class='g2-tooltip-marker'></span>{name}: {value}</li>`
      })
      // 辅助文本
      chart.guide().html({
        position: ['50%', '50%'],
        html:
          `<div style='color:#8c8c8cfont-size: 14pxtext-align: centerwidth: 10em'>主机<br><span style='color:#8c8c8cfont-size:20px'>200</span>台</div>`,
        alignX: 'middle',
        alignY: 'middle'
      })
      var interval = chart
        .intervalStack()
        .position('percent')
        .color('item')
        .label('percent', {
          formatter: function formatter (val, item) {
            return item.item + ': ' + val
          }
        })
        .tooltip('item*percent', function (item, percent) {
          percent = percent * 100 + '%'
          return {
            name: item,
            value: percent
          }
        })
        .style({
          lineWidth: 1,
          stroke: '#fff'
        })
      chart.render()
      interval.setSelected(data[0])
    }
  }
}
</script>
