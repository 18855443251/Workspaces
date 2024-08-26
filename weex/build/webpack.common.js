const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const vueLoaderConfig = require('./vue-loader.config.js')

var baseConfig = {
  entry: {
    index: path.resolve('src', 'entry.js'),
    // error: path.resolve('src', 'entry-error.js'),
  },
  output: {
    path: path.resolve('./', 'dist'),
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /node_modules(?!(\/|\\).*(weex).*)/,
      use: {
        loader: 'babel-loader',
      },
    }, ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{
          from: path.resolve('./', 'src', 'imgs'),
          to: './imgs',
        },
        {
          from: path.resolve('./', 'src', 'json'),
          to: './json',
        },
      ],
    }),
    new webpack.ProgressPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
}

var webConfig = merge(baseConfig, {
  output: {
    filename: '[name].web.js',
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig,
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, 'postcss.config.js'),
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin({
      banner: '// NOTE: for vue2.0 and platform:web only.\n',
      raw: true,
      exclude: 'Vue',
    }),
  ],
})

var nativeConfig = merge(baseConfig, {
  output: {
    filename: '[name].weex.js',
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'weex-loader',
    }, ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin({
      banner: '// { "framework": "Vue" } \n',
      raw: true,
      exclude: 'Vue',
    }),
  ],
})

module.exports = [webConfig, nativeConfig]