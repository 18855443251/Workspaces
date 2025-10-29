/*
 * @Author: your name
 * @Date: 2021-02-07 15:29:08
 * @LastEditTime: 2022-06-17 14:35:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app空工程\bank\vue.config.js
 */
const postcssPluginPx2rem = require("postcss-plugin-px2rem");
const FileManagerPlugin = require("filemanager-webpack-plugin");

// 打包压缩成zip包
let filename = "bank";
// 初始化 filemanager-webpack-plugin 插件实例
let fileManagerPlugin = new FileManagerPlugin({
  onEnd: {
    delete: [
      // 首先需要删除项目根目录下的dist.zip
      `./dist/${filename}.zip`,
    ],
    archive: [
      // 然后我们选择dist文件夹将之打包成dist.zip并放在根目录
      {
        source: "./dist",
        destination: `./dist/${filename}.zip`,
      },
    ],
  },
});
module.exports = {
  publicPath: "./",
  outputDir: `./dist/${filename}`,
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  filenameHashing: false, // 生产静态资源是否包含hash
  devServer: {
    open: true, //自动打开浏览器
    // port:'8080',//端口默认8080 可以省略 http://localhost:8080/
    // host:'127.0.0.1',//http://127.0.0.1:8080/
    proxy: {
      "/api": {
        target: "http://135.127.33.33:31181", //
        ws: true, //是否代理websovket
        changeOrigin: true, //是否开启跨域
        pathRewrite: {
          "^/api": "", //代理的路径
        },
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcssPluginPx2rem({
            rootValue: 75, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 2, //设置要替换的最小像素值(3px会被转rem)
          }),
        ],
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "手机银行1";
      return args;
    });
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config["plugins"].push(fileManagerPlugin);
    }
  },
};
