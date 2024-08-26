module.exports = {
  ident: 'postcss',
  plugins: [
    require('autoprefixer')(),
    require('postcss-plugin-px2rem')({
      rootValue: 75,
      minPixelValue: 1.01,
    }),
    require('postcss-plugin-weex')(),
  ],
}
