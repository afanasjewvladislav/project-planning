const proxy = require('./config/proxytable');

module.exports = {
  devServer: {
    proxy,
  },

  publicPath: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,

  pluginOptions: {
    'resolve-alias': {
      alias: {
        src: '',
        components: ''
      }
    }
  }
}