var express = require('express');
var User = require('./models/user');
var md5 = require('blueimp-md5');

var router = express.Router();

router.get('/', function(req, res) {
    console.log('渲染首页 index.html');
    console.log(req.session.user);
    res.render('index.html', {
        user: req.session.user
    });
});

// 登录 渲染登录页面
router.get('/login', function(req, res) {
    console.log('渲染登录 login.html');
    res.render('login.html');
});


// 登录 处理登录页面逻辑
router.post('/login', function(req, res) {
    // 接收请求数据
    // 处理登录逻辑
    // 发送响应请求
    console.log(req.body);
    // { email: '11203353@qq.com', password: '123456' }
    var body = req.body;
    User.findOne({
        email: body.email,
        password: md5(md5(body.password))
    }, function(err, user) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: err.message
            });
        }
        if (!user) {
            return res.status(200).json({
                err_code: 1,
                message: 'email or password is invalid'
            });
        }
        // 用户存在 登录成功 记录登录转态 通过session 记录状态 跳转到首页
        req.session.user = user;
        res.status(200).json({ err_code: 0, message: 'ok' });
    });

});

// 退出登录
router.get('/logout', function(req, res) {
    // 清除登录转态
    // 重定向到登录页面 服务端重定向
    req.session.user = null;
    // 重定向到登录页面
    res.redirect('/login');

});

// 注册 渲染注册页面
router.get('/register', function(req, res) {
    console.log('渲染注册 register.html');
    res.render('register.html');
});

// 处理注册渲染页面
// router.post('/register', function(req, res) {
//     console.log('渲染注册 register.html');
//     //res.render('register.html');
//     // console.log(req.body);
//     // { email: '1120335@qq.com', nickname: 'jack', password: '111' }
//     // 1. 获取表单提供的数据
//     var body = req.body;
//     // 或条件查询  查找邮箱或者昵称都可以
//     User.findOne({
//         $or: [
//             { email: body.email },
//             { nickname: body.nickname }
//         ]
//     }, function(err, data) {
//         if (err) {
//             console.log(err);
//             return res.status(500).json({
//                 err_code: 500,
//                 message: '服务端错误'
//             });
//         }
//         if (data) {
//             console.log(data);
//             // 如果邮箱已存在
//             // 判断昵称 
//             return res.status(200).json({
//                 err_code: 1,
//                 message: '邮箱或者昵称已存在'
//             });
//         }
//         // res.status(200).send(JSON.stringify({
//         //     success:true, foo: 'bar'
//         // }));
//         // Express 提供了一个响应方法： json
//         // 该方法接收一个对象作为参数，它会自动帮你把对象转为字符串再发给浏览器
//         // 插入数据
//         // 对密码进行重复加密
//         body.password = md5(md5(body.password));
//         new User(body).save(function(err, data) {
//             if (err) {
//                 return res.status(500).json({
//                     err_code: 500,
//                     message: '服务端错误'
//                 });
//             }
//             res.status(200).json({
//                 err_code: 0,
//                 message: 'Ok'
//             });
//         });
//     });
//     // 2. 操作数据库
//     // 该用户是否已存在
//     // 如果已存在 不允许注册
//     // 如果不存在 注册新建用户

//     // 3. 发送响应
// });

router.post('/register', async function(req, res) {
    console.log('渲染注册 register.html');
    // res.render('register.html');
    // console.log(req.body);
    // { email: '1120335@qq.com', nickname: 'jack', password: '111' }
    // 1. 获取表单提供的数据
    // 2. 操作数据库
    // 该用户是否已存在
    // 如果已存在 不允许注册
    // 如果不存在 注册新建用户
    // 3. 发送响应
    var body = req.body;
    // 下面的代码是平行的 不会出现嵌套的结果
    try {
        // 或条件查询  查找邮箱或者昵称都可以
        if (await User.findOne({ email: body.email })) {
            return res.status(200).json({
                err_code: 1,
                message: '邮箱已存在'
            });
        }
        if (await User.findOne({ nickname: body.nickname })) {
            return res.status(200).json({
                err_code: 2,
                message: '昵称已存在'
            });
        }
        // 对密码进行重复加密
        body.password = md5(md5(body.password));
        var user = new User(body);
        // await new User(body).save();
        await user.save();
        console.log('register success');
        // 注册成功 使用session 记录用户的登录转态
        // req.session.isLogin = true;
        req.session.user = user;
        res.status(200).json({
            err_code: 0,
            message: '注册成功'
        });
    } catch (err) {
        res.status(200).json({
            err_code: 500,
            message: err.message
        });
    }
});





module.exports = router;