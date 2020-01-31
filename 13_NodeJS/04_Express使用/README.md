修改完代码 自动重启

我们这里使用第三方命令行工具 nodemon 来帮我解决频繁修改代码重启服务器问题

nodemon 是一个基于Node.js 开发的一个第三方命令行工具 我们使用的时候需要独立安装

npm install --global nodemon


安装完毕之后， 使用：

# node app.js 
# 使用nodemon
直接使用命令 nodemon app.js

只要是通过nodemon app.js 启动的服务 则会它监视你的文件变化 当文件发生变化的时候，自动帮你重启


在express中配置使用 art-template模板引擎

安装

npm install --save art-template

npm install --save express-art-template

配置

app.engine('art', require('express-art-template'));


app.get('', function(req, res){
	res.render('index.html', {title: 'hello world'}); 
});

如果希望修改默认的 views视图渲染存储目录，可以：
app.set('views', render函数默认的路径)


在Express找那个没有内置获取表单POST请求体的API 我们需要借助第三方 body-parser

配置

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// 通过req.body 来获取数据


在Express中获取表单GET请求参数
Express 内置了一个API 可以直接通过req.query 来获取数据




