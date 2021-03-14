const { resolve } = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 模式：开发  生产
  mode: 'development', // production
  // source-map
  devtool: 'source-map',
  // 优化，禁止压缩 最小化
  optimization: {
    minimize: false,
  },
  // 入口文件  多文件入口
  entry: {
    index: resolve(__dirname, './src/js/index.js'),
    detail: resolve(__dirname, './src/js/detail.js'),
    collections: resolve(__dirname, './src/js/collections.js'),
  },
  // 输出/打包设置
  output: {
    // 路径
    path: resolve(__dirname, './dist'),
    // 打包后的文件名
    filename: 'js/[name].js',
  },
  // 模块设置
  module: {
    // 模块匹配规则
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: resolve(__dirname, 'node_modules'),
        query: {
          presets: ['latest'],
        },
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [autoprefixer('last 5 versions')];
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          // 将css-loader生成的代码放入到html的head部分里面
          'style-loader',
          // css-loader 分析项目中各个文件之间的css嵌套引用 生成一段css代码
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [autoprefixer('last 5 versions')];
              },
            },
          },
          // npm install postcss postcss-loader
          // postcss-loader 放此处 主要是加上兼容性前缀
          // 可以单独创建一个postcss.config.js文件 攥写配置
          // module.exports:{
          // plugins:[require ('autoprefixer')]
          // }
          // 同时 上述的 代码也需要参考package.json中browsers list中的配置， 例如
          // "browserslist":["> 1%",'last 2 versions']
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|woff|eot|svg|ttf)$/i,
        // 当图片文件超过1024字节后 就是用file-loader一样的事情
        // 否则把图片转化为base64编码（图片小的情况） 这样减少了一次图片的http请求 （在图片过大的情况下，js文件就会过大页面加载事件很长，此时应该使用单独的图片）
        loaders: 'url-loader?limit=1024&name=img/[name]-[hash:16].[ext]',
      },
    ],
  },
  // 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, './src/index.html'),
      title: '今日新闻',
      chunks: ['index'],
      chunksSortMode: 'manual',
      excludeChunks: ['node_modules'],
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'detail.html',
      template: resolve(__dirname, './src/detail.html'),
      title: '新闻详情',
      chunks: ['detail'],
      chunksSortMode: 'manual',
      excludeChunks: ['node_modules'],
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'collections.html',
      template: resolve(__dirname, './src/collections.html'),
      title: '我的新闻',
      chunks: ['collections'],
      chunksSortMode: 'manual',
      excludeChunks: ['node_modules'],
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
  // 开发服务器的配置
  devServer: {
    watchOptions: {
      ignored: /node_modules/,
    },
    open: true,
    host: 'localhost',
    port: 3000,
  },
};
