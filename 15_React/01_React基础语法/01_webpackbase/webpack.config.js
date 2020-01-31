const path = require('path');
// 导入在内存中自动生成的index页面的插件
const HtmlWebPackPlugin = require('html-webpack-plugin');

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件
  filename: 'index.html'  // 生成的内存中首页的名称
})

// 向外暴露一个打包的配置对象， 因为webpack 是基于Node构建的，
// 所以 webpack 支持所有的Node API 和 语法
// webpack默认只能打包处理 .js后缀名类型的文件，像.png .vue 无法主动处理 ，所以要配置第三方的loader
module.exports = {
  // mode:'production' // development production 
  mode: 'development',  // development production 
  // 在webpack 4.x 有一个很大的特性，就是 约定大于配置，默认的打包入口路径是src->index.js
  plugins: [
    htmlPlugin
  ],
  module: { // 所有第三方模块的配置规则
    rules: [ // 第三方匹配规则  千万别忘记添加 exclude 排出项
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  resolve:{
    // 表示这几个文件的后缀名 可以不写
     extensions:['.js','.jsx','.json'],
     alias:{
        '@': path.join(__dirname, './src')  // 这样@符号就表示src这一层路径
     }  
  }
}

// 行不行 ？ 目前不行 
// 这是 ES6 向外导出模块的API 与对应的 是 import ** from ** 
// export default{}

