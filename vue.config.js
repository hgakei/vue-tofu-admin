const webpack = require('webpack')

module.exports = {
  // 这里是配置上线读取当前目录，默认是根路径，如 /js, /css 等，具体根据项目来
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        'Quill': 'quill/dist/quill.js'
      })
    ]
  }
}
