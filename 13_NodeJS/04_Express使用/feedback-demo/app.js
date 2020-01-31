var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/public/', express.static('./public/'));
// app.use('/public/', express.static('./public/'));
// 配置使用 art-template 模板引擎
// 第一个参数，表示 当渲染以 .art 结尾的文件的时候，使用 art-template模板引擎
// express-art-template 是专门用来在express 中把art-template 整合到 Express中

app.engine('html', require('express-art-template'));



// 如果想要修改默认的views目录， 则可以
// app.set('views', render函数的默认路径);

// express 为 response 相应对象提供了一个方法， render
// res.render('html模板名', {模板疏忽});
// 第一个参数不能写路径，默认会去项目中的 views目录查找该模板文件
// 也就是说 Express 有一个约定，开发人员八宿友的视图文件的到访 views目录中

// 配置bodyParser 中间件 专门用来解析POST请求体
app.use(bodyParser.urlencoded({extended:false}));
// parse application/json
app.use(bodyParser.json());

var comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
];

app.get('/', function (req, res) {
	// body...
	// res.send('/page');
	// res.render('404.html');
    res.render('index.html', { 
    	comments: comments
    });
});

app.get('/admin', function (req, res) {
	// body...
	// res.send('/page');
	res.render('admin/index.html', {title: '管理系统'});
});


app.get('/post', function (req, res) {
	// body...
	//res.send('/post');
	res.render('post.html');
});


// 当以POST请求 /post请求的时候，执行指定的处理函数
app.post('/post', function(req, res){
    //console.log('收到评论提交');
    //res.send('hello');
    
    // 获取表单POST 请求体数据
    // 处理
    // 发回响应
    // console.log(req.body);
    var comment = req.body;
    comment.dateTime = '2020-01-10 18:59:24';
    comments.unshift(comment);
    res.redirect('/');
});

app.get('/pinglun', function(req, res){
    var comment = req.query;
    comment.dateTime = '2020-01-10 18:59:24';
    comments.unshift(comment);
    // 重定向到首页
    // res.statusCode = 302;
    // res.setHeader('Location', '/');
    res.redirect('/');
});


// app.post('/pinglun', function(req, res){
    
// });

app.listen(3000);

