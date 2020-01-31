React Facebook

清楚两个概念
library(库)： 小而巧，优点就是船小好调头 可以很方便的从一个库切换到另外一个库，但是代码几乎
不会改变
FrameWork(框架)：大而全的是框架，框架提供了一整套的解决方案，所以，如果在项目中，想切换到
其他框架，是比较困难的

前端三大主流框架

三大框架一大抄

Angular.js: （印度人用的比较多）出来比较早的前端框架，学习曲线比较陡峭，
NG1学起来比较麻烦，NG2-NG5开始，进行了一些列
的改革，也提供了组件化开发概念，从NG2开始，也支持使用TS（TypeScript）进行编程
Vue.js：最火的（关注的人比较多）一门前端框架，它是中国人开发的， 对我们来说，文档要好一些
React.js：最流行（用的人比较多）的一门框架，因为他的设计很优秀

Angular 估计以后翻不了身 要凉凉了

React和Vue的对比
组件化方面
1. 什么是模块化：是从代码的角度分析的 把一些可复用的代码，抽离为单个的模块 便于项目的维护和开发
2. 什么是组件化：是从UI界面角度分析的  把一些可服用的UI元素，抽离为单独的组件
3. 组件化的好处：随着项目规模的增大，手里的组件越来越多 很方便就能把现有的组件拼接为一个完整的页面
4. Vue是如何实现组件化的 通过 .vue 文件 来创建对应的组件
  template 结构
  script   行为
  style    样式

5. React如何实现组件化：大家注意，React中组件化的概念，但是，没有想vue这样的组件模板文件，React
中，一切都是以JS来表现的，因此要学习React, JS要合格，ES6和ES7（async 和 await）要会

开发团队方面

React 是由Facebook前端官方团队
Vue: 第一版，主要是由作者 尤雨溪 

社区方面

移动App开发体验方面
Vue, 结合Weex这门技术，提供了迁移到移动端App开发的体验
React ,结合ReactNative 也提供了无缝迁移到移动App的开发体验

为什么学习React
1. 组件化开发
2. 开发团队实例强悍，不害怕断更
3. 社区强大，

Diff算法
1. tree Diff
2. Component Diff
3. Element Diff

创建基本的webpack4.x项目 cli 就是脚手架  
1. 运行 npm init -y 快速初始化项目
2. 在项目根目录中创建src源代码目录和dist目录
3. 在src 目录下创建 index.html
4. 使用cnpm 安装 webpack  运行 cnpm i webpack webpack-cli -D
5. 注意：webpack 4.x 提供了约定大于配置的概念 目的是为了尽量减少 配置文件的体积
   默认约定：
   打包入口是 src > index.js
   打包输入文件是： dist> main.js
   4.x 中新增了 mode选项(此选项为必选项) 可选的值为：development和 production

6. npm i webpack-dev-server -D
7. 在package.json文件的scripts节点中添加 "dev":"webpack-dev-server" 
8. npm run dev      
9. npm i html-webpack-plugin -D 

babel配置 后面再讲

在项目中使用 react

npm i react react-dom -S

JSX语法
执行下面的命令
npm i babel-core babel-loader babel-plugin-transform-runtime -D 
npm i babel-preset-env babel-preset-stage-0 babel-preset-react -D










