const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    /*
     * chunkFilename用来打包require.ensure方法中引入的模块,如果该方法中没有引入任何模块则不会生成任何chunk块文件
     * 比如在main.js文件中,require.ensure([],function(require){alert(11);}),这样不会打包块文件
     * 只有这样才会打包生成块文件require.ensure([],function(require){alert(11);require('./greeter')})
     * 或者这样require.ensure(['./greeter'],function(require){alert(11);})
     * chunk的hash值只有在require.ensure中引入的模块发生变化,hash值才会改变
     * 注意:对于不是在ensure方法中引入的模块,此属性不会生效,只能用CommonsChunkPlugin插件来提取
     * */
    // chunkFilename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 9090,
    contentBase: './src', // 本地服务器所加载的页面所在的目录
    inline: true, // 实时刷新
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
