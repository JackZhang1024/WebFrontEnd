var http = require('http');
var url = require('url');
var cookie = require('../middlewares/cookie');
var session = require('../middlewares/session');
var query = require('../middlewares/query');
var post_body = require('../middlewares/post-body');


var server = http.createServer(function(req, res) {
    // 解析表单 get 请求体
    // 解析表单 post 请求体
    // 解析cookie 
    // 处理 Session
    // 使用模板引擎

    // var urlObj = url.parse(req.url, true);
    // req.query = urlObj.query;

    query(req);
    // 解析请求地址中的 post参数
    // req.body = {
    //     foo: 'bar'
    // }

    post_body(req, res);


    // 解析cookie 
    // req.cookie = {
    //     isLogin: true
    // }
    cookie(req, res);

    // req.session = {

    // }
    session(req, res);

    // 配置模板引擎
    res.render = function() {

    }

    // 从请求到响应之间的一系列方法 如 query, post_body, cookie, session
    if (req.url === 'xxxx'){
        // 处理
        // query, body, cookise, session 已经有了这些属性 
    } else if (req.url === '') {

    }
    // 上面的过程都是为了在后面具体业务操作处理 
    // 处理业务

});

server.listen(3000, function() {
    console.log('app is running on 3000');
});


