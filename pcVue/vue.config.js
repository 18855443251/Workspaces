const port = 8081 // dev port
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Timestamp = new Date().getTime()
const path = require('path') // 添加这一行
module.exports = {
  publicPath: '/',
  outputDir: 'pcVue',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    proxy: {
      // 登录
      [process.env.VUE_APP_BASE_LOGIN]: {
        target: process.env.VUE_APP_SERVER_PATH,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_LOGIN]: '/auth'
        }
      },
      // 基础
      [process.env.VUE_APP_BASE_API_URL]: {
        target: process.env.VUE_APP_SERVER_PATH,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API_URL]: '/api'
        }
      }
    },
  },
  chainWebpack: (config) => {
    // 清除默认的svg处理规则，排除icons目录
    config.module
      .rule('svg')
      .exclude.add(path.resolve('src/assets/icons'))
      .end()
    // 添加新的svg-sprite-loader规则来处理icons目录下的svg文件
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    config.plugin('html').tap((args) => {
      args[0].title = '测试管理系统'
      return args
    })
  },
  configureWebpack: {
    devtool: 'source-map',
    output: {
      // 输出打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `js/[name].${process.env.VUE_APP_VERSION}.${Timestamp}.js`,
      chunkFilename: `js/[name].${process.env.VUE_APP_VERSION}.${Timestamp}.js`,
    },
    plugins: [
      new MiniCssExtractPlugin({
        // 修改打包后css文件名
        filename: `css/[name].${process.env.VUE_APP_VERSION}.${Timestamp}.css`,
        chunkFilename: `css/[name].${process.env.VUE_APP_VERSION}.${Timestamp}.css`,
      }),
    ],
  }
}