const fullConversion = false // 完全转换（明显增大文件体积） 可以把 Promise、WeakMap、Array.from、Object.assign、includes等转换成对应的es5方法

let transformArr = [
  '@babel/plugin-transform-runtime',
  {
    corejs: 3,
  },
]
let presets = ['@babel/preset-env']

let plugins = [
  [
    'component',
    {
      libraryName: 'weex-ui',
      libDir: 'packages',
      style: false,
    },
  ],
]

if (fullConversion) plugins.push(transformArr)

module.exports = {
  presets,
  plugins,
}