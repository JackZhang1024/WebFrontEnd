registry.npmjs.org

淘宝镜像

全局安装 nrm 
npm i nrm -g

nrm ls
zfz:~ zhangfengzhou$ nrm ls

* npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/

nrm use npm 使用原始镜像
nrm use taobao 使用淘宝镜像

nrm 只是单纯的提供了几个常用的下载的URL地址 并能够让我们在这几个地址之间，
很方便的进行切换，但是， 我们每次安装包的时候，使用的装包工具，都是 npm

Webpack

网页中常见的资源
+JS 
  .js .jsx .coffee .ts(TypeScript 中间语言 需要编译才能变成ts 类似于C#语言)
   
+CSS
   .css .less .sass .scss   
+Images
   .png .jpg .gif .bmp .svg 
+字体文件（Fonts）
   .svg .ttf .eot .woff .woff2
+模板文件
   .ejs .jade  .vue(这是在webpack中定义组件的方式，推荐这么用)
   
资源多了 问题是怎样的？
1. 网页加载速度吗
2. 要处理错综复杂的依赖关系

1. 合并，压缩，精灵图，图片的base64编码
2. 可以使用之前学习的requireJS, 也可以使用webpack可以解决各个包之间的复杂依赖

什么是webpack?
webpack 是前端的一个项目构建工具，它是基于Node.js 开发出来的一个前端工具

1. 使用gulp 是基于task的
2. webpack 是基于真个项目构建的

webpack.js.org

1. 全局安装
npm i webpack -g

// 使用 webpack-dev-server 这个工具 来实现自动打包编译的功能
// 1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 2. 安装完毕后，这个工具的用法，和 webpack 命令的用法，完全一样
// 3. 由于，我们是在项目中，本地安装的webpack-dev-server 所以，无法把他作为
// 脚本命令，在 powershell 终端中直接运行（只有那些安装到全局 -g的工具，才能在 终端中正常执行）
// 4. 注意：webpack-dev-server 这个工具，如果想要正常执行，要求，在本地项目中，必须安装 webpack
// 5. webpack-dev-server 帮我们打包生成的bundle.js 文件并没有存放到实际的物理磁盘上 而是托管到
// 电脑内存上，所以，我们在项目根目录中，根本找不到 这个打包好的bundle.js
// 6. 我们可以认为 webpack-dev-server 把打包好的 文件，以一种虚拟的形式，托管到项目的根目录中，
// 虽然看不到，但是 可以认为 和 dist src node_modules 平级，有一个看不见的文件，叫做 bundlde.js

相关命令的安装
zfz:~ zhangfengzhou$ webpack --v
-bash: /Users/zhangfengzhou/.nvm/versions/node/v8.10.0/bin/webpack: No such file or directory
zfz:~ zhangfengzhou$ npm install -g webpack
/Users/zhangfengzhou/.nvm/versions/node/v8.10.0/bin/webpack -> /Users/zhangfengzhou/.nvm/versions/node/v8.10.0/lib/node_modules/webpack/bin/webpack.js

> fsevents@1.2.11 install /Users/zhangfengzhou/.nvm/versions/node/v8.10.0/lib/node_modules/webpack/node_modules/fsevents
> node-gyp rebuild

  SOLINK_MODULE(target) Release/.node
  CXX(target) Release/obj.target/fse/fsevents.o
  SOLINK_MODULE(target) Release/fse.node
+ webpack@4.41.5
added 393 packages in 34.614s
zfz:~ zhangfengzhou$ webpack --v
One CLI for webpack must be installed. These are recommended choices, delivered as separate packages:
 - webpack-cli (https://github.com/webpack/webpack-cli)
   The original webpack full-featured CLI.
We will use "npm" to install the CLI via "npm install -D".
Do you want to install 'webpack-cli' (yes/no): n
You need to install 'webpack-cli' to use webpack via CLI.
You can also install the CLI manually.
zfz:~ zhangfengzhou$ npm install --save-dev webpack-cli -g
/Users/zhangfengzhou/.nvm/versions/node/v8.10.0/bin/webpack-cli -> /Users/zhangfengzhou/.nvm/versions/node/v8.10.0/lib/node_modules/webpack-cli/bin/cli.js
npm WARN webpack-cli@3.3.10 requires a peer of webpack@4.x.x but none is installed. You must install peer dependencies yourself.

+ webpack-cli@3.3.10
added 204 packages in 24.645s
zfz:~ zhangfengzhou$ webpack-cli --v
3.3.10
zfz:~ zhangfengzhou$ webpack --v
4.41.5
zfz:~ zhangfengzhou$ npm install webpack-dev-server -g
/Users/zhangfengzhou/.nvm/versions/node/v8.10.0/bin/webpack-dev-server -> /Users/zhangfengzhou/.nvm/versions/node/v8.10.0/lib/node_modules/webpack-dev-server/bin/webpack-dev-server.js
npm WARN webpack-dev-server@3.10.1 requires a peer of webpack@^4.0.0 || ^5.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN webpack-dev-middleware@3.7.2 requires a peer of webpack@^4.0.0 but none is installed. You must install peer dependencies yourself.

+ webpack-dev-server@3.10.1
updated 1 package in 37.974s
zfz:~ zhangfengzhou$ 


总结就是 
1. npm install -g webpack 
1.1 在安装完之后 会弹出下面的提示： 我们选择 no
We will use "npm" to install the CLI via "npm install -D".
Do you want to install 'webpack-cli' (yes/no): n
You need to install 'webpack-cli' to use webpack via CLI.
You can also install the CLI manually.
1.2 在选择no之后，我们执行下面的命令 安装 webpack-cli
zfz:~ zhangfengzhou$ npm install --save-dev webpack-cli -g
1.3 npm install webpack-dev-server -g

npm install webpack-dev-server -g
