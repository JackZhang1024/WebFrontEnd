// 这个配置文件，其实就是一个文件，通过Node 中的模块操作，向外暴露了一个配置对象
const path = require('path');
// 在内存中生成 HTML页面的插件

module.exports = {

     // 入口 表示要使用webpack 打包那个文件
     entry: path.join(__dirname, './src/main.js'), // 入口，表示要打包哪个文件
     output:{
         // 输出文件相关的配置
         path: path.join(__dirname, './dist'), // 指定 打包好的文件 输出到那个目录
         filename:'bundle.js'// 这是指定 输出文件的名称
     },
     devServer: {
         // 这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
         // --open --port 3300 --contentBase src --hot
         contentBase: "src", // 指定托管的根目录
         open: true, // 自动打开浏览器
         hot: true, // 启动热更新 
         port: 3300 // 端口号3300
     },
     mode:'development'
}

// 当我们在 控制台，直接输入 webpack 命令执行的时候，webpack 做了一下几步：
// 1. 首先 webpack 发现 我们并没有通过命令的形式 给指定入口和出口
// 2. webpack 就会去 项目的 根目录中 查找一个叫 'webpack.config.js' 的配置文件
// 3. 当找到配置文件后，webpack 会去解析执行配置文件，找到要导入和导出的文件
